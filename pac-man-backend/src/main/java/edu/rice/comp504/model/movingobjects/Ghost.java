package edu.rice.comp504.model.movingobjects;

import edu.rice.comp504.model.movementstrategy.IUpdateMovStrategy;

import java.awt.*;

/**
 * Concrete class for Ghosts objects.
 */

public class Ghost extends AMovingObject{

    private String status;

    private IUpdateMovStrategy originMovementStrategy;

    /**
     * Ghost Constructor
     * @param type ghost type(color).
     * @param radius ghost radius.
     * @param position ghost position.
     * @param speed ghost speed.
     * @param movementStrategy ghost movement strategy.
     * @param status ghost status.
     */
    public Ghost(String type, int radius, Point position, Point speed, IUpdateMovStrategy movementStrategy,String status) {
        super(type, radius, position, speed, movementStrategy);
        this.status = status;
        this.setOriginMovementStrategy(movementStrategy);
    }

    /**
     * Update the ghost using the movement strategy.
     * @param pacMan Pacman.
     */
    public void update(PacMan pacMan,String uid) {
        movementStrategy.updateState(this, pacMan,uid);
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    /**
     * Set Ghost to its original status.
     */
    public void setOriginStatus() {
        this.setMovementStrategy(getOriginMovementStrategy());
        this.setStatus("normal");
    }

    public IUpdateMovStrategy getOriginMovementStrategy() {
        return originMovementStrategy;
    }

    public void setOriginMovementStrategy(IUpdateMovStrategy originMovementStrategy) {
        this.originMovementStrategy = originMovementStrategy;
    }
}
