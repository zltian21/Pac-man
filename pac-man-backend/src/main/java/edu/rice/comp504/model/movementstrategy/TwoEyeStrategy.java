package edu.rice.comp504.model.movementstrategy;

import edu.rice.comp504.model.GameStore;
import edu.rice.comp504.model.GameWorld;
import edu.rice.comp504.model.movingobjects.AMovingObject;
import edu.rice.comp504.model.movingobjects.Ghost;
import edu.rice.comp504.model.movingobjects.PacMan;

import java.awt.*;

public class TwoEyeStrategy implements IUpdateMovStrategy{

    /**
     * Ghost type changes to "TwoEyes".
     * TwoEyes fly straight back to the starting position.
     */

    private static IUpdateMovStrategy ONLY;
    private static Point harbor = new Point(552, 264);

    private TwoEyeStrategy() {
    }

    /**
     * Make the only Stategy.
     * @return IUpdateMovStrategy.
     */
    public static IUpdateMovStrategy makeStrategy() {
        if (ONLY == null) {
            ONLY = new TwoEyeStrategy();
        }
        return ONLY;
    }

    /**
     * Get Strategy name.
     * @return stategy name.
     */
    @Override
    public String getName() {
        return "ghost twoeyes";
    }

    /**
     * Update the ghost.
     * @param context Ghost.
     * @param pacman  Pac-man.
     */
    @Override
    public void updateState(AMovingObject context, PacMan pacman,String uid) {
        Point ghostPos = context.getPosition();
        Point ghostSpeed = context.getSpeed();
        GameStore gameStore = null;
        for (GameStore gs : GameWorld.getAllGames()) {
            if (gs.getUid().equals(uid)) {
                gameStore = gs;
                break;
            }
        }
        int ghostLinearSpeed = Math.abs(ghostSpeed.x != 0 ? ghostSpeed.x : ghostSpeed.y);

        if (ghostPos.equals(harbor)) { // If ghost is at the harbor
            ((Ghost)context).setStatus("normal");
            context.setMovementStrategy(GhostNormal.makeStrategy());
        } else { // ghost still on the way back to harbor
            // Distance betwen ghost and harbor
            int horiDist = ghostPos.x - harbor.x;
            int veriDist = ghostPos.y - harbor.y;

            // Ghost's next position and moving distance
            int nextX = 552;
            int nextY = 264;
            int moveDis = ghostLinearSpeed;

            // not on the same horizontal position
            if (horiDist != 0) {
                moveDis = Math.min(ghostLinearSpeed, Math.abs(horiDist));
                nextX = ghostPos.x + (horiDist < 0 ? moveDis : -moveDis);
            }

            // not on the same vertical position
            if (veriDist != 0) {
                moveDis = Math.min(ghostLinearSpeed, Math.abs(veriDist));
                nextY = ghostPos.y + (veriDist < 0 ? moveDis : -moveDis);
            }
            context.setPosition(new Point(nextX, nextY));
        }
    }
}
