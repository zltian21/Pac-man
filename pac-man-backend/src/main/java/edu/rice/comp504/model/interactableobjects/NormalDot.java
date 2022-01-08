package edu.rice.comp504.model.interactableobjects;

import java.awt.*;

/**
 * Concrete class for normal Dot objects.
 */


public class NormalDot extends AInteractableObject{

    /**
     * Constructor for Interactable Objects.
     *
     * @param position position of object.
     * @param type     type of object.
     * @param score     score associated with Object.
     */

    public NormalDot(Point position, String type, int score) {
        super(position, type, score);
    }
}
