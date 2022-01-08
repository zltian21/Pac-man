package edu.rice.comp504.model.movementstrategy;

public interface IMovStrategyFac {

    /**
     * Makes a strategy.
     *
     * @return A strategy
     */
    public IUpdateMovStrategy make(String type);
}
