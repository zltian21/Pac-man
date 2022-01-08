package edu.rice.comp504.controller;

import edu.rice.comp504.model.GameStore;
import edu.rice.comp504.model.GameWorld;
import edu.rice.comp504.model.movingobjects.Ghost;
import edu.rice.comp504.model.movingobjects.PacMan;
import junit.framework.TestCase;
import org.junit.Test;

import java.awt.*;

/**************
 * IMPORTANT
 * If you need to run this unit test do the following:
 * 1. find the [map.txt] file in the project folder. (peer to [pac-man-backend] and [pac-man-frontend])
 * 2. place the [map.txt] file in the [pac-man-backend] folder. (peer to [src] and [target])
 * 3. then you can run the JUnit Test. (Put the map.txt file back if you want to run the Application)
 **************/
public class GameControllerTest extends TestCase {
    @Test
    public void testGhostNormal() {
        GameWorld gw = new GameWorld();
        gw.addGame("1");
        gw.setGame(new Point(216, 264), 3, "med", "1");
        gw.initGame("1");
        GameStore testStore = gw.getGame("1");
        Ghost testGhost = testStore.getGhosts().get(0);
        PacMan testPacman = testStore.getPacMan();

        assertEquals("Normal Strategy Name Test", "ghost normal", testStore.movStrategyFac.make("ghost normal").getName());

        testGhost.setPosition(new Point(72, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testStore.getGhosts().get(0).update(testStore.getPacMan(), "1");
        assertEquals("Ghost postion near exit test", new Point(64, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(24, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testStore.getGhosts().get(0).update(testStore.getPacMan(), "1");
        assertEquals("Ghost postion near exit test", new Point(984, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(936, 264));
        testGhost.setSpeed(new Point(8, 0));
        testStore.getGhosts().get(0).update(testStore.getPacMan(), "1");
        assertEquals("Ghost postion near exit test", new Point(944, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(984, 264));
        testGhost.setSpeed(new Point(8, 0));
        testStore.getGhosts().get(0).update(testStore.getPacMan(), "1");
        assertEquals("Ghost postion near exit test", new Point(24, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(64, 264));
        testGhost.setSpeed(new Point(8, 0));
        testStore.getGhosts().get(0).update(testStore.getPacMan(), "1");
        assertEquals("Ghost postion near exit test", new Point(72, 264), testGhost.getPosition());

        // Horizontal
        testGhost.setPosition(new Point(224, 264)); //216
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testStore.getPacMan(), "1");
        assertEquals("Ghost direction not on center", new Point(232, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(216, 264));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testStore.getPacMan(), "1");
        assertEquals("Ghost speed only forward", new Point(8, 0), testGhost.getSpeed());

        testGhost.setPosition(new Point(216, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testStore.getPacMan(), "1");
        assertEquals("Ghost speed dead end", new Point(8, 0), testGhost.getSpeed());

        testGhost.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(8, 0));
        testPacman.setPosition(new Point(456, 72));
        testGhost.update(testStore.getPacMan(), "1");
        assertEquals("Ghost speed multiple choices with optimal", new Point(8, 0), testGhost.getSpeed());

        testGhost.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(8, 0));
        testPacman.setPosition(new Point(72, 72));
        testGhost.update(testStore.getPacMan(), "1");
        assertTrue("Ghost speed multiple choices without optimal", (testGhost.getSpeed().equals(new Point(0, 8))) || (testGhost.getSpeed().equals(new Point(8, 0))));

        // Vertical
        testGhost.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(0, 8));
        testPacman.setPosition(new Point(264, 168));
        testGhost.update(testStore.getPacMan(), "1");
        assertEquals("Ghost speed multiple choices with optimal", new Point(0, 8), testGhost.getSpeed());
    }

    @Test
    public void testGhostRandom() {
        GameWorld gw = new GameWorld();
        gw.addGame("2");
        gw.setGame(new Point(216, 264), 3, "med", "2");
        gw.initGame("2");
        GameStore testStore = gw.getGame("2");
        Ghost testGhost = testStore.getGhosts().get(1);
        PacMan testPacman = testStore.getPacMan();

        assertEquals("Random Strategy Name Test", "ghost random", testStore.movStrategyFac.make("ghost random").getName());

        testGhost.setPosition(new Point(72, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost postion near exit test", new Point(64, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(24, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost postion near exit test", new Point(984, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(936, 264));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost postion near exit test", new Point(944, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(984, 264));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost postion near exit test", new Point(24, 264), testGhost.getPosition());

        testGhost.setPosition(new Point(64, 264));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost postion near exit test", new Point(72, 264), testGhost.getPosition());

        // Horizontal
        testGhost.setPosition(new Point(272, 72));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost position not on center", new Point(280, 72), testGhost.getPosition());

        testGhost.setPosition(new Point(120, 72));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost speed move forward", new Point(8, 0), testGhost.getSpeed());

        testGhost.setPosition(new Point(216, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "2");
        assertEquals("Ghost dead end speed", new Point(8, 0), testGhost.getSpeed());

        testGhost.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "2");
        assertTrue("Ghost multiple choices speed", testGhost.getSpeed().equals(new Point(8, 0)) || testGhost.getSpeed().equals(new Point(0, 8)));

        // Vertical
        testGhost.setPosition(new Point(264, 168));
        testGhost.setSpeed(new Point(0, 8));
        testGhost.update(testPacman, "2");
        assertTrue("Ghost multiple choices speed", testGhost.getSpeed().equals(new Point(8, 0)) || testGhost.getSpeed().equals(new Point(0, 8)));
    }

    @Test
    public void testGhostMix() {
        GameWorld gw = new GameWorld();
        gw.addGame("3");
        gw.setGame(new Point(216, 264), 3, "med", "3");
        gw.initGame("3");
        GameStore testStore = gw.getGame("3");
        Ghost testGhost = testStore.getGhosts().get(2);
        PacMan testPacman = testStore.getPacMan();
        assertEquals("Mix Strategy Name Test", "ghost mix", testStore.movStrategyFac.make("ghost mix").getName());

        for (int i = 0; i < 50; i++) {
            testGhost.update(testPacman, "3");
        }
    }

    @Test
    public void testGhostPacManEatsBigDot() {
        GameWorld gw = new GameWorld();
        gw.addGame("4");
        gw.setGame(new Point(216, 264), 3, "med", "4");
        gw.initGame("4");
        GameStore testStore = gw.getGame("4");
        Ghost testGhost = testStore.getGhosts().get(0);
        PacMan testPacman = testStore.getPacMan();
        assertEquals("Ghost Avoid Strategy Name Test", "ghost avoid", testStore.movStrategyFac.make("ghost avoid").getName());

        // Near Exit
        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(120);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(72, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost postion near exit test", new Point(64, 264), testGhost.getPosition());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(120);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(24, 264));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost postion near exit test", new Point(984, 264), testGhost.getPosition());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(120);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(936, 264));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost postion near exit test", new Point(944, 264), testGhost.getPosition());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(120);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(984, 264));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost postion near exit test", new Point(24, 264), testGhost.getPosition());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(120);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(64, 264));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost postion near exit test", new Point(56, 264), testGhost.getPosition());

        // Horizontal
        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(120);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(128, 72));
        testPacman.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost moves backward", new Point(-8, 0), testGhost.getSpeed());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(25);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(128, 72));
        testPacman.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost moves forward", new Point(-8, 0), testGhost.getSpeed());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(25);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(456, 168));
        testPacman.setPosition(new Point(456, 456));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost avoid pac man with wall", new Point(0, -8), testGhost.getSpeed());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(25);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(264, 72));
        testPacman.setPosition(new Point(72, 72));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "4");
        assertTrue("Ghost avoid pac man with wall", testGhost.getSpeed().equals(new Point(0, 8)));

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(25);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(216, 264));
        testPacman.setPosition(new Point(72, 72));
        testGhost.setSpeed(new Point(-8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost avoid pac man dead end", new Point(8, 0), testGhost.getSpeed());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(25);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(216, 264));
        testPacman.setPosition(new Point(72, 72));
        testGhost.setSpeed(new Point(8, 0));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost avoid pac man one choice", new Point(8, 0), testGhost.getSpeed());

        testStore.setInvincible(true);
        testStore.setInvincibleTimeout(25);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(72, 72));
        testPacman.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(0, -8));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost avoid pac man have to chase", new Point(8, 0), testGhost.getSpeed());
        // Vertical

        testStore.setInvincible(false);
        testStore.setInvincibleTimeout(0);
        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost avoid"));
        testGhost.setPosition(new Point(72, 72));
        testPacman.setPosition(new Point(264, 72));
        testGhost.setSpeed(new Point(0, -8));
        testGhost.update(testPacman, "4");
        assertEquals("Ghost avoid invincible ends", testGhost.getMovementStrategy(), testGhost.getOriginMovementStrategy());
    }

    @Test
    public void testGhostTwoEyes() {
        GameWorld gw = new GameWorld();
        gw.addGame("5");
        gw.setGame(new Point(216, 264), 3, "med", "5");
        gw.initGame("5");
        GameStore testStore = gw.getGame("5");
        Ghost testGhost = testStore.getGhosts().get(0);
        PacMan testPacman = testStore.getPacMan();
        assertEquals("Two Eye Strategy Name Test", "ghost twoeyes", testStore.movStrategyFac.make("ghost twoeyes").getName());

        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost twoeyes"));
        testGhost.setPosition(new Point(72, 72));
        testGhost.setSpeed(new Point(0, -8));
        testGhost.update(testPacman, "5");
        assertEquals("Ghost two eyes back to harbor", new Point(80, 80), testGhost.getPosition());

        testGhost.setMovementStrategy(testStore.movStrategyFac.make("ghost twoeyes"));
        testGhost.setPosition(new Point(552, 264));
        testGhost.setSpeed(new Point(0, -8));
        testGhost.update(testPacman, "5");
        assertEquals("Ghost two eyes in harbor", "normal", testGhost.getStatus());
    }

    @Test
    public void testPacman() {
        GameWorld gw = new GameWorld();
        gw.addGame("6");
        gw.setGame(new Point(72, 72), 3, "med", "6");
        gw.initGame("6");
        GameStore testStore = gw.getGame("6");
        int score = 0;

        assertEquals("Pacman moving strategy", "pacManNormal", testStore.getPacMan().getMovementStrategy().getName());

        gw.updateGame("6");
        assertEquals("Pacman eat bigDots", score + 50, testStore.getScore());
        score += 50;

        testStore.getPacMan().setPosition(new Point(96, 72));
        gw.updateGame("6");
        assertEquals("Pacman eat dots", score + 10, testStore.getScore());
        score += 10;

        testStore.getPacMan().setPosition(new Point(72, 72));
        gw.setDirectionForGame(1, "6");
        gw.updateGame("6");
        PacMan pacMan = testStore.getPacMan();
        assertEquals("Pacman normal move", new Point(72, 80), pacMan.getPosition());


        testStore.getPacMan().setPosition(new Point(72, 80));
        gw.setDirectionForGame(0, "6");
        gw.updateGame("6");
        assertEquals("Pacman moving up", new Point(72, 72), testStore.getPacMan().getPosition());

        testStore.getPacMan().setPosition(new Point(80, 72));
        gw.setDirectionForGame(2, "6");
        gw.updateGame("6");
        assertEquals("Pacman moving left", new Point(72, 72), testStore.getPacMan().getPosition());

        testStore.getPacMan().setPosition(new Point(72, 72));
        gw.setDirectionForGame(3, "6");
        gw.updateGame("6");
        assertEquals("Pacman moving right", new Point(80, 72), testStore.getPacMan().getPosition());

        testStore.getPacMan().setPosition(new Point(9 * 24, 11 * 24));
        testStore.getPacMan().setSpeed(new Point(0, 0));
        gw.updateGame("6");
        score += 10;
        testStore.getPacMan().setPosition(new Point(72, 72));
        testStore.setFruitTimeTick(50);
        gw.updateGame("6");
        testStore.getPacMan().setPosition(new Point(9 * 24, 11 * 24));
        gw.updateGame("6");
        assertEquals("Pacman eat fruit", score + 50, testStore.getScore());
        score += 50;

        testStore.getBigDots().clear();
        testStore.getNormalDots().clear();
        gw.updateGame("6");
        assertEquals("Level up", 2, testStore.getDifficulty());

        testStore.getPacMan().setPosition(new Point(72, 72));
        testStore.getPacMan().setSpeed(new Point(0, -8));
        gw.updateGame("6");
        assertEquals("Pacman hit wall when move up", new Point(72, 72), testStore.getPacMan().getPosition());

        testStore.getPacMan().setSpeed(new Point(-8, 0));
        gw.updateGame("6");
        assertEquals("Pacman hit wall when move left", new Point(72, 72), testStore.getPacMan().getPosition());

        testStore.getPacMan().setPosition(new Point(72, 120));
        testStore.getPacMan().setSpeed(new Point(8, 0));
        gw.updateGame("6");
        assertEquals("Pacman hit wall when move right", new Point(72, 120), testStore.getPacMan().getPosition());

        testStore.getPacMan().setPosition(new Point(120, 72));
        testStore.getPacMan().setSpeed(new Point(0, 8));
        gw.updateGame("6");
        assertEquals("Pacman hit wall when move down", new Point(120, 72), testStore.getPacMan().getPosition());

        testStore.getPacMan().setPosition(new Point(0, 264));
        testStore.getPacMan().setSpeed(new Point(-8, 0));
        gw.updateGame("6");
        assertEquals("Pacman move left pass through channel", new Point(1008, 264), testStore.getPacMan().getPosition());

        testStore.getPacMan().setSpeed(new Point(8, 0));
        gw.updateGame("6");
        assertEquals("Pacman move right pass through channel", new Point(0, 264), testStore.getPacMan().getPosition());
    }
}