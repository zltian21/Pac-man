package edu.rice.comp504.controller;

import com.google.gson.Gson;
import edu.rice.comp504.adapter.DispatchAdapter;
import edu.rice.comp504.model.GameStore;

import java.awt.*;

import static spark.Spark.*;

/**
 * The chat app controller communicates with all the clients on the web socket.
 */
public class GameController {

    /**
     * Pacman entry point.
     * @param args The command line arguments
     */
    public static void main(String[] args) {
        port(getHerokuAssignedPort());
        Gson gson = new Gson();
        DispatchAdapter dis = new DispatchAdapter();

        staticFiles.location("/public");
        init();

        /**
         * set pacman game extensible parameters.
         * start a game with specific UID.
         */
        post("/setUid", (request, response) -> {
            // use dummy data for now
            String uid  = request.queryMap("uid").value();
            //Point pos = new Point(request.queryMap("x").integerValue().intValue(),request.queryMap("y").integerValue().intValue())
            //int x = request.queryMap("x").integerValue().intValue();
            //String speed = request.queryMap("speed").value();
            dis.addGame(uid);
            return gson.toJson("");
        });

        /**
         * set pacman game extensible parameters.
         * Pacman location, number of lives and speed of Ghosts.
         */
        post("/setGame", (request, response) -> {
            // use dummy data for now

            //Point pos = new Point(request.queryMap("x").integerValue().intValue(),request.queryMap("y").integerValue().intValue())
            //System.out.println(request.body());
            int x = request.queryMap("x").integerValue().intValue();
            int y = request.queryMap("y").integerValue().intValue();
            int lives = request.queryMap("lives").integerValue().intValue();
            String speed = request.queryMap("speed").value();
            String uid  = request.queryMap("uid").value();
            dis.setGame(new Point(x, y), lives, speed,uid);
            //dis.setGame(new Point(x, y), lives, speed);
            return gson.toJson("");
        });


        /**
         * Update game state every 0.1 seconds.
         */
        post("/updateGameStore", (request, response) -> {
            String uid  = request.queryMap("uid").value();
            return gson.toJson(dis.updateGameStore(uid));
        });

        /**
         * get the arrow keys pressed by the user.
         */
        post("/changeDirection", (request, response) -> {
            int dir = request.queryMap("direction").integerValue().intValue();
            String uid  = request.queryMap("uid").value();
            dis.setDirection(dir,uid);
            return gson.toJson("");
        });

        /**
         * restart the game.
         */
        post("/init", (request, response) -> {
            String uid  = request.queryMap("uid").value();
            dis.initGame(uid);
            return gson.toJson("");
        });

    }


    /**
     * Get the heroku assigned port number.
     * @return The heroku assigned port number
     */
    private static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4566; // return default port if heroku-port isn't set.
    }
}
