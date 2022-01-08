package edu.rice.comp504.adapter;

import com.google.gson.JsonObject;
import edu.rice.comp504.model.GameStore;
import edu.rice.comp504.model.GameWorld;

import java.awt.*;


public class DispatchAdapter {

    //private GameStore gameStore = new GameStore();
    private GameWorld gameWorld = new GameWorld();

    /**
     * starting an instance of the game.
     */
    public void addGame(String uid) {
        gameWorld.addGame(uid);
    }

    /**
     * set pacman direction in the game.
     */
    public void setDirection(int dir,String uid) {

        gameWorld.setDirectionForGame(dir,uid);

    }

    /**
     * update the game.
     */
    public JsonObject updateGameStore(String uid) {
        return gameWorld.updateGame(uid);
    }

    /**
     * set up the game.
     */
    public void setGame(Point p, int lives, String speed,String uid) {
        gameWorld.setGame(p, lives, speed,uid);
    }

    /**
     * restart the game.
     */
    public void initGame(String uid) {
        gameWorld.initGame(uid);
    }
}
