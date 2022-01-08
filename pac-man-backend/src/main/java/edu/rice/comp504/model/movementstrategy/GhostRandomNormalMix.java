package edu.rice.comp504.model.movementstrategy;

import edu.rice.comp504.model.movingobjects.AMovingObject;
import edu.rice.comp504.model.movingobjects.PacMan;

import java.util.Random;

public class GhostRandomNormalMix implements IUpdateMovStrategy {

    /**
     * The Ghosts moves according to below constraints.
     * Ghost ---> Changes behavior (Normal to Random) based on random variable
     */


    /**
     * The name of the strategy.
     *
     * @return strategy name
     */
    private static IUpdateMovStrategy ONLY;
    private IUpdateMovStrategy[] children;
    private static int randomRate = 30;
    private static Random rand = new Random();

    private GhostRandomNormalMix(IUpdateMovStrategy[] children) {
        this.children = children;
    }

    /**
     * make the only stategy.
     * @return IUpdateMovStrategy.
     */
    public static IUpdateMovStrategy makeStrategy() {
        if (ONLY == null) {
            IUpdateMovStrategy[] children = new IUpdateMovStrategy[2];
            children[0] = GhostNormal.makeStrategy();
            children[1] = GhostRandomStrategy.makeStrategy();
            ONLY = new GhostRandomNormalMix(children);
        }
        return ONLY;
    }

    @Override
    public String getName() {
        return "ghost mix";
    }

    /**
     * Update the state of the GameStore.
     */
    @Override
    public void updateState(AMovingObject context, PacMan pacman,String uid) {
        if (rand.nextInt(100) > randomRate) {
            children[0].updateState(context, pacman,uid);
        } else {
            children[1].updateState(context, pacman,uid);
        }
    }
}
