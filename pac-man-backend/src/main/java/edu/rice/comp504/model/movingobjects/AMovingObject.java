package edu.rice.comp504.model.movingobjects;

import edu.rice.comp504.model.movementstrategy.IUpdateMovStrategy;

import java.awt.*;

/**
 * Abstract class for Moving objects.
 * like Pac-man,Ghosts and TwoEyes.
 */

public abstract class AMovingObject {

    protected String type;
    protected Point position;
    protected Point speed; // Will only be in (x, 0) or (0, y)
    protected IUpdateMovStrategy movementStrategy;
    protected int radius;

    /**
     * Constructor for Moving Objects.
     */

    public AMovingObject(String type, int radius, Point position, Point speed, IUpdateMovStrategy movementStrategy) {
        this.type = type;
        this.radius = radius;
        this.position = position;
        this.speed = speed;
        this.movementStrategy = movementStrategy;
    }

    public void setPosition(Point p) {
        this.position = p;
    }

    public Point getPosition() {
        return this.position;
    }

    public void updatePosition() {
        Point newPos = new Point(this.position.x + this.speed.x, this.position.y + this.speed.y);
        this.setPosition(newPos);
    }

    public void updateReversePosition() {
        Point newPos = new Point(this.position.x - this.speed.x, this.position.y - this.speed.y);
        this.setPosition(newPos);
    }

    public void setSpeed(Point p) {
        this.speed = p;
    }

    public int getRadius() {
        return radius;
    }

    public Point getSpeed() {
        return this.speed;
    }


    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setRadius(int radius) {
        this.radius = radius;
    }

    public IUpdateMovStrategy getMovementStrategy() {
        return movementStrategy;
    }

    public void setMovementStrategy(IUpdateMovStrategy movementStrategy) {
        this.movementStrategy = movementStrategy;
    }

}
