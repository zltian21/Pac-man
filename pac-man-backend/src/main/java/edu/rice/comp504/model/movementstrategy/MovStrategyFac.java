package edu.rice.comp504.model.movementstrategy;

public class MovStrategyFac implements IMovStrategyFac{
    private static MovStrategyFac ONLY;

    private MovStrategyFac() {

    }

    /**
     * make the only stategy.
     * @return MoveStategy.
     */
    public static MovStrategyFac make() {
        if (ONLY == null) {
            ONLY = new MovStrategyFac();
        }
        return ONLY;
    }


    @Override
    public IUpdateMovStrategy make(String type) {
        switch (type) {
            case "pacmanNormal":
                return new PacManNormal();
            case "ghost normal":
                return GhostNormal.makeStrategy();
            case "ghost random":
                return GhostRandomStrategy.makeStrategy();
            case "ghost twoeyes":
                return TwoEyeStrategy.makeStrategy();
            case "ghost avoid":
                return GhostPacManEatsBigDot.makeStrategy();
            case "ghost mix":
                return GhostRandomNormalMix.makeStrategy();
            default:
                return GhostNormal.makeStrategy();
        }
    }
}
