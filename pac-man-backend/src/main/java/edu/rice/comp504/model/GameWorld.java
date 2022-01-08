package edu.rice.comp504.model;

import com.google.gson.JsonObject;
import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class GameWorld {

    public static List<GameStore> allGames = new ArrayList<>();

    public void addGame(String uid) {
        GameStore gs = new GameStore(uid);
        allGames.add(gs);
    }

    /**
     * starting an instance of the game.
     */
    public void setGame(Point p, int lives, String speed, String uid) {

        for (GameStore gs : allGames) {
            if (gs.getUid().equals(uid)) {
                gs.setGame(p,lives,speed);
                break;
            }
        }

    }

    /**
     * setting direction received from user in the game.
     */
    public void setDirectionForGame(int dir, String uid) {

        for (GameStore gs : allGames) {
            if (gs.uid.equals(uid)) {
                gs.setDirection(dir);
                break;
            }
        }

    }

    /**
     * updating particular instance of Game Store.
     */
    public JsonObject updateGame(String uid) {

        //System.out.println(uid);
        for (GameStore gs : allGames) {
            //System.out.println(gs.uid);
            if (gs.uid.equals(uid)) {
                return gs.update();
                //break;
            }
        }

        return null;
    }

    /**
     * resetting particular instance of Game.
     */
    public void initGame(String uid) {
        for (GameStore gs : allGames) {
            if (gs.uid.equals(uid)) {
                gs.init(1, 120, 0, false);
                break;
            }
        }
    }

    /**
     * getting particular instance of Game.
     */
    public GameStore getGame(String uid) {
        for (GameStore gs : allGames) {
            if (gs.uid.equals(uid)) {
                return gs;
            }
        }
        return null;
    }

    /**
     * return list of all games.
     */
    public static List<GameStore> getAllGames() {
        return allGames;
    }
}
