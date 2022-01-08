package edu.rice.comp504.model.movementstrategy;

import edu.rice.comp504.model.movingobjects.AMovingObject;
import edu.rice.comp504.model.movingobjects.PacMan;

public interface IUpdateMovStrategy {

    /**
     * The name of the strategy.
     * @return strategy name
     */
    String getName();

    /**
     * Update the state of the GameStore.
     */
    void updateState(AMovingObject context, PacMan pacman,String uid);
}
