package edu.rice.comp504.model.movementstrategy;

import edu.rice.comp504.model.GameStore;
import edu.rice.comp504.model.GameWorld;
import edu.rice.comp504.model.movingobjects.AMovingObject;
import edu.rice.comp504.model.movingobjects.PacMan;

import java.awt.*;

public class PacManNormal implements IUpdateMovStrategy{

    /**
     * The Pac-Man moves as per the direction of user.
     */

    /**
     * The name of the strategy.
     *
     * @return strategy name
     */
    @Override
    public String getName() {
        return "pacManNormal";
    }

    /**
     * Update the state of the GameStore.
     */
    @Override
    public void updateState(AMovingObject obj, PacMan pacman,String uid) {
        PacMan pacMan = (PacMan) obj;
        GameStore gameStore = null;
        for (GameStore gs : GameWorld.getAllGames()) {
            if (gs.getUid().equals(uid)) {
                gameStore = gs;
                //System.out.println("Game Store Assigned");
                break;
            }
        }
        int[][] map = gameStore.getMap();
        // detect direction change
        int x = pacMan.getPosition().x;
        int y = pacMan.getPosition().y;
        String dir = "";
        if (pacMan.getNextDirection() == 0 || pacMan.getNextDirection() == 1) {
            dir = "vertical";
        } else {
            dir = "horizontal";
        }
        if (pacMan.getNextDirection() != -1) {
            if ((dir.equals("vertical") && x % 24 == 0) || (dir.equals("horizontal") && y % 24 == 0)) {
                int vel = pacMan.getVelocity();
                if (pacMan.getNextDirection() == 0) {
                    if (map[y - 24 - vel + 1][x] != -1) {
                        pacMan.setSpeed(new Point(0, -1 * vel));
                        pacMan.setNextDirection(-1);
                    }
                } else if (pacMan.getNextDirection() == 1) {
                    if (map[y + 24 + vel - 1][x] != -1) {
                        pacMan.setSpeed(new Point(0, vel));
                        pacMan.setNextDirection(-1);
                    }
                } else if (pacMan.getNextDirection() == 2) {
                    if (map[y][(x - 24 - vel + 1) % 1008] != -1) {
                        pacMan.setSpeed(new Point(-1 * vel, 0));
                        pacMan.setNextDirection(-1);
                    }
                } else {
                    if (map[y][(x + 24 + vel - 1) % 1008] != -1) {
                        pacMan.setSpeed(new Point(vel, 0));
                        pacMan.setNextDirection(-1);
                    }
                }
            }
        }

        // detect wall
        x = pacMan.getPosition().x + pacMan.getSpeed().x;
        y = pacMan.getPosition().y + pacMan.getSpeed().y;
        if (pacMan.getSpeed().x == 0) {
            if (pacMan.getSpeed().y > 0) {
                if (map[y + 24][x] == -1) {
                    y = (y / 24) * 24;
                }
            } else {
                if (map[y - 24][x] == -1) {
                    y = (pacMan.getPosition().y / 24) * 24;
                }
            }
        } else {
            if (pacMan.getSpeed().x > 0) {
                if (map[y][(x + 24) % 1009] == -1) {
                    x = (x / 24) * 24;
                }
            } else {
                if (map[y][(x - 24 + 1009) % 1009] == -1) {
                    x = (pacMan.getPosition().x / 24) * 24;
                }
            }
        }

        if (x > 1008) {
            x = 0;
        } else if (x < 0) {
            x = 1008;
        }

        pacMan.setPosition(new Point(x, y));
    }
}
