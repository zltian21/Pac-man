package edu.rice.comp504.model.movementstrategy;

import edu.rice.comp504.model.GameStore;
import edu.rice.comp504.model.GameWorld;
import edu.rice.comp504.model.movingobjects.AMovingObject;
import edu.rice.comp504.model.movingobjects.PacMan;

import java.awt.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Random;

public class GhostNormal implements IUpdateMovStrategy{

    /**
     * The Ghosts moves according to below constraints.
     * Ghost ---> 3 directions to choose → Takes the one which takes "towards" PacMan (based on PacMan’s position).
     * Ghost  ---> 2 directions to choose → Take the one from where it did not come.
     * Ghost ---> 1 direction to choose → No Choice. Do a 180.
     */
    private static final int blockHalf = 24;
    private static Random rand = new Random();
    private static IUpdateMovStrategy ONLY;
    private static int[] directions = {1, 0, -1, 0, 1};
    // 0 right;
    // 1 up;
    // 2 left;
    // 3 down;

    private static int[] candidates = {48, 0, -48, 0, 48};

    private GhostNormal() {
    }

    /**
     * Return the only Stategy.
     * @return IUpdateMoveStategy.
     */
    public static IUpdateMovStrategy makeStrategy() {
        if (ONLY == null) {
            ONLY = new GhostNormal();
        }
        return ONLY;
    }

    @Override
    public String getName() {
        return "ghost normal";
    }

    /**
     * Update the state of the GameStore.
     */
    @Override
    public void updateState(AMovingObject context, PacMan pacman,String uid) {
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
        // If Ghost is next to the exits on the sides
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
        int ghostLinearSpeed = Math.abs(ghostSpeed.x != 0 ? ghostSpeed.x : ghostSpeed.y);
        int previousDir = 0;
        // Get ghost's previous direction
        if (ghostSpeed.x == 0) {
            previousDir = ghostSpeed.y > 0 ? 3 : 1; // down - up
        } else {
            previousDir = ghostSpeed.x > 0 ? 0 : 2; // right - left
        }

        // Check if ghost on center of a block
        int ghostVer = ghostPos.y / blockHalf;
        int ghostHor = ghostPos.x / blockHalf;
        int ghostRemVer = ghostPos.y % (blockHalf * 2);
        int ghostRemHor = ghostPos.x % (blockHalf * 2);

        List<Integer> avaliableDir = new ArrayList<>();

        if (ghostRemVer != 24 || ghostRemHor != 24) { // move forward if not on center
            context.updatePosition();
        } else {
            // Get avaliable direction
            if (previousDir == 3 || previousDir == 1) {
                for (int i = 0; i < 3; i += 2) {
                    if (map[ghostVer * 24 + candidates[i + 1]][ghostHor * 24 + candidates[i]] != -1) {
                        avaliableDir.add(i);
                    }
                }
            } else {
                for (int i = 1; i < 4; i += 2) {
                    if (map[ghostVer * 24 + candidates[i + 1]][ghostHor * 24 + candidates[i]] != -1) {
                        avaliableDir.add(i);
                    }
                }
            }
            // Add the previous direction to available
            if (map[ghostVer * 24 + candidates[previousDir + 1]][ghostHor * 24 + candidates[previousDir]] != -1) {
                avaliableDir.add(previousDir);
            }

            // Get the next Direction
            int nextDir = 0;
            if (avaliableDir.size() == 0) { // No Choice, turn around.
                nextDir = (previousDir + 2) % 4;
            } else if (avaliableDir.size() == 1) { // Only one chocie
                nextDir = avaliableDir.get(0);
            } else { // multiple choices.
                // get optimal moving direction
                List<Integer> optimalDir = new ArrayList<>();
                int deltaX = ghostPos.x - pacManPos.x;
                int deltaY = ghostPos.y - pacManPos.y;
                if (deltaX != 0) {
                    optimalDir.add(deltaX < 0 ? 0 : 2);
                }
                if (deltaY != 0) {
                    optimalDir.add(deltaY < 0 ? 3 : 1);
                }
                // Remove optimal direction that is not available
                optimalDir.retainAll(avaliableDir);

                if (optimalDir.size() != 0) {
                    nextDir = optimalDir.get(rand.nextInt(optimalDir.size()));
                } else {
                    nextDir = avaliableDir.get(rand.nextInt(avaliableDir.size()));
                }
            }
            // Set new speed and update location
            Point nextSpeed = new Point(ghostLinearSpeed * directions[nextDir],
                    ghostLinearSpeed * directions[nextDir + 1]);
            context.setSpeed(nextSpeed);
            context.updatePosition();
        }
    }
}
