package edu.rice.comp504.model.interactableobjects;


import java.awt.*;

/**
 * Concrete class for Big Dot objects.
 */


public class BigDot extends AInteractableObject{

    /**
     * Constructor for Interactable Objects.
     *
     * @param position position of object.
     * @param type     type of object.
     * @param score     score associated with Object.
     */

    public BigDot(Point position, String type,int score) {
        super(position, type, score);
    }
}
