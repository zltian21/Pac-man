package edu.rice.comp504.model.movingobjects;

import edu.rice.comp504.model.movementstrategy.IUpdateMovStrategy;

import java.awt.*;

/**
 * Concrete class for Pac-Man object.
 */

public class PacMan extends AMovingObject{
    // speed: 8
    /**
     * Constructor for Moving Objects.
     *
     * @param type  type of Object.
     * @param position position of Object.
     * @param speed    speed of Object.
     * @param movementStrategy  movement strategy of the Object.
     */

    // -1 no next dir / 0 up / 1 down / 2 left / 3 right
    private int nextDirection = -1;
    private static int velocity = 8;

    public PacMan(String type, int radius, Point position, Point speed, IUpdateMovStrategy movementStrategy) {
        super(type, radius, position, speed, movementStrategy);
    }

    /**
     * Update Pacman using the movement strategy.
     */
    public void update(String uid) {
        movementStrategy.updateState(this, this,uid);
    }

    public void setNextDirection(int dir) {
        nextDirection = dir;
    }

    public int getNextDirection() {
        return nextDirection;
    }

    public int getVelocity() {
        return velocity;
    }
}
