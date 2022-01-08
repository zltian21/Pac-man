package edu.rice.comp504.model.movementstrategy;

import edu.rice.comp504.model.GameStore;
import edu.rice.comp504.model.GameWorld;
import edu.rice.comp504.model.movingobjects.AMovingObject;
import edu.rice.comp504.model.movingobjects.PacMan;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class GhostRandomStrategy implements IUpdateMovStrategy{

    private static final int blockHalf = 24;
    private static Random rand = new Random();
    private static IUpdateMovStrategy ONLY;
    private static int[] directions = {1, 0, -1, 0, 1};
    private static int[] candidates = {48, 0, -48, 0, 48};
    // 0 right;
    // 1 up;
    // 2 left;
    // 3 down;

    private GhostRandomStrategy() {

    }

    /**
     * make the only stategy.
     * @return IUpdateMoveStrategy.
     */
    public static IUpdateMovStrategy makeStrategy() {
        if (ONLY == null) {
            ONLY = new GhostRandomStrategy();
        }
        return ONLY;
    }

    @Override
    public String getName() {
        return "ghost random";
    }

    @Override
    public void updateState(AMovingObject context, PacMan pacman,String uid) {
        Point ghostPos = context.getPosition();
        Point ghostSpeed = context.getSpeed();
        GameStore gameStore = null;
        for (GameStore gs : GameWorld.getAllGames()) {
            //System.out.println("Game Store assigned");
            if (gs.getUid().equals(uid)) {
                gameStore = gs;
                break;
            }
        }
        int[][] map = gameStore.getMap();
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
        if (ghostSpeed.x == 0) {
            previousDir = ghostSpeed.y > 0 ? 3 : 1; // down - up
        } else {
            previousDir = ghostSpeed.x > 0 ? 0 : 2; // right - left
        }

        // Check if ghost on center
        int ghostVer = ghostPos.y / blockHalf;
        int ghostHor = ghostPos.x / blockHalf;
        int ghostRemVer = ghostPos.y % (blockHalf * 2);
        int ghostRemHor = ghostPos.x % (blockHalf * 2);

        List<Integer> avaliableDir = new ArrayList<>();

        if (ghostRemVer != 24 || ghostRemHor != 24) {
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
            if (map[ghostVer * 24 + candidates[previousDir + 1]][ghostHor * 24 + candidates[previousDir]] != -1) {
                avaliableDir.add(previousDir);
            }

            int nextDir = 0;
            if (avaliableDir.size() == 0) {
                nextDir = (previousDir + 2) % 4;
            } else if (avaliableDir.size() == 1) {
                nextDir = avaliableDir.get(0);
            } else {
                nextDir = avaliableDir.get(rand.nextInt(avaliableDir.size()));
            }
            // Set new speed and update location
            Point nextSpeed = new Point(ghostLinearSpeed * directions[nextDir],
                    ghostLinearSpeed * directions[nextDir + 1]);
            context.setSpeed(nextSpeed);
            context.updatePosition();
        }
    }
}
