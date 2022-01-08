package edu.rice.comp504.model.movementstrategy;

import edu.rice.comp504.model.GameStore;
import edu.rice.comp504.model.GameWorld;
import edu.rice.comp504.model.movingobjects.AMovingObject;
import edu.rice.comp504.model.movingobjects.Ghost;
import edu.rice.comp504.model.movingobjects.PacMan;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class GhostPacManEatsBigDot implements IUpdateMovStrategy{

    private static final int blockHalf = 24;
    private static Random rand = new Random();
    private static IUpdateMovStrategy ONLY;
    private static int[] directions = {1, 0, -1, 0, 1};
    private static int[] candidates = {48, 0, -48, 0, 48};

    private GhostPacManEatsBigDot() {
    }

    /**
     * Make the only Stategy.
     * @return IUpdateMovStrategy.
     */
    public static IUpdateMovStrategy makeStrategy() {
        if (ONLY == null) {
            ONLY = new GhostPacManEatsBigDot();
        }
        return ONLY;
    }

    /**
     * Get the strategy name.
     * @return stategy name.
     */
    @Override
    public String getName() {
        return "ghost avoid";
    }

    /**
     * update the ghost staus.
     * @param context Ghost.
     * @param pacman Pac-man.
     */
    @Override
    public void updateState(AMovingObject context, PacMan pacman,String uid) {
        Ghost ghost = (Ghost) context;
        GameStore gameStore = null;
        for (GameStore gs : GameWorld.getAllGames()) {
            if (gs.getUid().equals(uid)) {
                gameStore = gs;
                break;
            }
        }
        int[][] map = gameStore.getMap();
        if (!gameStore.getIsInvincible()) {
            ghost.setOriginStatus();
        } else {
            if (gameStore.getInvincibleTimeout() > 30) {
                ghost.setStatus("blue");
            } else {
                ghost.setStatus("blink");
            }
            updatePosition(ghost, pacman, uid);
        }
    }

    /**
     * Update Ghost Position
     * @param context Ghost.
     * @param pacman Pac-Man.
     */
    private void updatePosition(Ghost context, PacMan pacman,String uid) {
        Point pacManPos = pacman.getPosition();
        Point ghostPos = context.getPosition();
        Point ghostSpeed = context.getSpeed();
        GameStore gameStore = null;
        for (GameStore gs : GameWorld.getAllGames()) {
            if (gs.getUid().equals(uid)) {
                gameStore = gs;
                break;
            }
        }
        int[][] map = gameStore.getMap();
        // Get Optimal Direction (For Ghost to chase Pac-man)
        List<Integer> optimalDir = new ArrayList<>();
        int deltaX = ghostPos.x - pacManPos.x;
        int deltaY = ghostPos.y - pacManPos.y;
        if (deltaX != 0) {
            optimalDir.add(deltaX < 0 ? 0 : 2);
        }
        if (deltaY != 0) {
            optimalDir.add(deltaY < 0 ? 3 : 1);
        }

        // Get Previous(Current) Direction
        int ghostLinearSpeed = Math.abs(ghostSpeed.x != 0 ? ghostSpeed.x : ghostSpeed.y);
        int previousDir = 0;
        if (ghostSpeed.x == 0) {
            previousDir = ghostSpeed.y > 0 ? 3 : 1; // down - up
        } else {
            previousDir = ghostSpeed.x > 0 ? 0 : 2; // right - left
        }

        // If Pac man just ate the big dot.
        if (gameStore.getInvincibleTimeout() == 120) {
            // Ghost is on the direction to chase pac man
            if (optimalDir.contains(previousDir)) {
                context.setSpeed(new Point(-ghostSpeed.x, -ghostSpeed.y));
            }
        }
        // If Ghost is close to the two exits on the sides
        if (ghostPos.y == 264) {
            if (ghostPos.x <= 72 && ghostSpeed.x < 0) {
                if (ghostPos.x > 24) {
                    context.updatePosition();
                    return;
                } else {
                    context.setPosition(new Point(984, 264));
                    return;
                }
            } else if (ghostPos.x >= 936 && ghostSpeed.x > 0) {
                if (ghostPos.x < 984) {
                    context.updatePosition();
                    return;
                } else {
                    context.setPosition(new Point(24, 264));
                    return;
                }
            } else if ((ghostPos.x < 72 && ghostSpeed.x > 0) ||
                    ghostPos.x > 936 && ghostSpeed.x < 0
            ) {
                context.updatePosition();
                return;
            }
        }

        int ghostVer = ghostPos.y / blockHalf;
        int ghostHor = ghostPos.x / blockHalf;
        int ghostRemVer = ghostPos.y % (blockHalf * 2);
        int ghostRemHor = ghostPos.x % (blockHalf * 2);
        List<Integer> avaliableDir = new ArrayList<>();

        // Check if ghost is on center of a block
        if (ghostRemVer != 24 || ghostRemHor != 24) {
            context.updatePosition();
        } else {
            // Get avaliable direction
            if (previousDir == 3 || previousDir == 1) { // down up
                for (int i = 0; i < 3; i += 2) {
                    if (map[ghostVer * 24 + candidates[i + 1]][ghostHor * 24 + candidates[i]] != -1) {
                        avaliableDir.add(i);
                    }
                }
            } else { // right left
                for (int i = 1; i < 4; i += 2) {
                    if (map[ghostVer * 24 + candidates[i + 1]][ghostHor * 24 + candidates[i]] != -1) {
                        avaliableDir.add(i);
                    }
                }
            }
            // Check the previous direction
            if (map[ghostVer * 24 + candidates[previousDir + 1]][ghostHor * 24 + candidates[previousDir]] != -1) {
                avaliableDir.add(previousDir);
            }

            // Decide the next moving direction
            int nextDir = 0;
            if (avaliableDir.size() == 0) { // No choice, Reverse
                nextDir = getReverseDir(previousDir);
            } else if (avaliableDir.size() == 1) { // Only one choice
                nextDir = avaliableDir.get(0);
            } else { // Multiple choice
                List<Integer> tmpAva = new ArrayList<>(avaliableDir);
                tmpAva.removeAll(optimalDir); // Remove all optimal direction
                if (tmpAva.size() != 0) {
                    nextDir = tmpAva.get(rand.nextInt(tmpAva.size()));
                } else {
                    nextDir = avaliableDir.get(rand.nextInt(avaliableDir.size()));
                }

            }
            // Update Position
            Point nextSpeed = new Point(ghostLinearSpeed * directions[nextDir],
                    ghostLinearSpeed * directions[nextDir + 1]);
            context.setSpeed(nextSpeed);
            context.updatePosition();
        }
    }

    /**
     * Get the reverse direction.
     * @param d current direction.
     * @return reversed direction.
     */
    public int getReverseDir(int d) {
        return (d + 2) % 4;
    }
}


