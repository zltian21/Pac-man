package edu.rice.comp504.model.interactableobjects;


import java.awt.*;

/**
 * Abstract Class for interactable objects.
 * like normal dots,Big dots and Fruits.
 */

public abstract class AInteractableObject {

    Point position;
    String type;
    int score;

    /**
     *Constructor for Interactable Objects.
     */
    public AInteractableObject(Point position, String type, int score) {
        this.position = position;
        this.type = type;
        this.score = score;
    }

    public Point getPosition() {
        return position;
    }

    public String getType() {
        return type;
    }

    public int getScore() {
        return score;
    }
}
