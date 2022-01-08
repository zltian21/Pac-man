package edu.rice.comp504.model.interactableobjects;

import java.awt.*;

/**
 * Concrete class for Fruit objects.
 */

public class Fruit extends AInteractableObject{

    /**
     * Constructor for Interactable Objects.
     *
     * @param position position of object.
     * @param type     type of object.
     * @param score     score associated with Object.
     */

    public Fruit(Point position, String type, int score) {
        super(position, type, score);
    }
}
