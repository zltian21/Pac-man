package edu.rice.comp504.model;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import edu.rice.comp504.model.interactableobjects.BigDot;
import edu.rice.comp504.model.interactableobjects.Fruit;
import edu.rice.comp504.model.interactableobjects.NormalDot;
import edu.rice.comp504.model.movementstrategy.*;
import edu.rice.comp504.model.movingobjects.Ghost;
import edu.rice.comp504.model.movingobjects.PacMan;

import java.awt.*;
import java.util.ArrayList;
import java.util.Random;

public class GameStore {

    int score = 0;
    int lives = 3;
    int livesCount;
    int difficulty;
    String ghostSpeed = "";
    Boolean isGameOver;
    String uid;
    private int invincibleTimeout = 0; // Activated when pac man eats a big dot
    private int invincibleTime = 120;
    private Boolean isInvincible = false; // Pac man can collide with ghosts
    int combo = 0; // How many ghosts collided in one big dot period
    public int[][] map;
    private static String[] fruitList = {"cherry", "orange", "banana", "apple", "avocado"};
    private static Random random = new Random();

    ArrayList<Point> fruitPosition = new ArrayList<Point>() {
        {
            add(new Point(9 * 24, 11 * 24));
            add(new Point(23 * 24, 3 * 24));
            add(new Point(23 * 24, 17 * 24));
            add(new Point(31 * 24, 11 * 24));
            add(new Point(15 * 24, 11 * 24));
        }
    };


    // Every object in the game <Should be stored as PropertyListeners?>
    private PacMan pacMan;
    Fruit fruit;
    int fruitCollected = 0;
    int fruitOnboard = 0;
    int fruitTimeTick = 0;
    ArrayList<NormalDot> normalDots = new ArrayList<NormalDot>();
    ArrayList<BigDot> bigDots = new ArrayList<BigDot>();
    private ArrayList<Ghost> ghosts = new ArrayList<Ghost>();
    Point pacManStart = new Point(552, 456);
    private static Point[] ghostStart = new Point[4];

    public static MovStrategyFac movStrategyFac = MovStrategyFac.make();

    /**
     * GameStore Constructor.
     * Create game start location.
     */
    public GameStore(String uid) {
        ghostStart[0] = new Point(552, 216);
        ghostStart[1] = new Point(552, 264);
        ghostStart[2] = new Point(552, 312);
        ghostStart[3] = new Point(600, 264);
        this.uid = uid;
    }

    /**
     * Reset the game.
     * @param pos Pac man position.
     * @param lives Pac man lives.
     * @param speed Ghosts speed.
     */
    public void setGame(Point pos, int lives, String speed) {

        this.pacManStart = new Point(pos.x, pos.y);
        this.lives = lives;
        this.ghostSpeed = speed;
        setInvincible(false);
        setInvincibleTimeout(0);
    }

    /**
     * Update the game.
     * @return A JsonObject to front end.
     */
    public JsonObject update() {

        // check if move on to next level
        if (normalDots.size() == 0 && bigDots.size() == 0) {
            this.difficulty += 1;
            if (this.invincibleTime >= 100) {
                this.invincibleTime -= 20;
            }
            if (this.ghostSpeed.equals("slow")) {
                this.ghostSpeed = "med";
            } else if (this.ghostSpeed.equals("med")) {
                this.ghostSpeed = "fast";
            }
            return this.init(this.difficulty, this.invincibleTime, this.fruitCollected, true);
        }

        // detect if the pacman touch a ghost
        double px = getPacMan().getPosition().getX();
        double py = getPacMan().getPosition().getY();

        // update fruit time tick
        if (fruitOnboard == 0 && fruitCollected < 5) {
            if (fruitTimeTick < 50) {
                fruitTimeTick += 1;
            } else {
                createFruit();
            }
        }

        // update pacman
        getPacMan().update(this.uid);

        if (map[getPacMan().getPosition().y][getPacMan().getPosition().x] == 1) {
            for (NormalDot d: normalDots) {
                if (d.getPosition().x == getPacMan().getPosition().x && d.getPosition().y == getPacMan().getPosition().y) {
                    score += d.getScore();
                    normalDots.remove(d);
                    map[getPacMan().getPosition().y][getPacMan().getPosition().x] = 0;
                    break;
                }
            }
        } else if (map[getPacMan().getPosition().y][getPacMan().getPosition().x] == 2) {
            for (BigDot d: bigDots) {
                if (d.getPosition().x == getPacMan().getPosition().x && d.getPosition().y == getPacMan().getPosition().y) {
                    score += d.getScore();
                    setInvincible(true);
                    setInvincibleTimeout(invincibleTime);
                    bigDots.remove(d);
                    map[getPacMan().getPosition().y][getPacMan().getPosition().x] = 0;
                    break;
                }
            }
        } else if (map[getPacMan().getPosition().y][getPacMan().getPosition().x] == 3) {
            score += fruit.getScore();
            fruitCollected += 1;
            fruitOnboard = 0;
            fruit = null;
            map[getPacMan().getPosition().y][getPacMan().getPosition().x] = 0;
        }



        for (int i = 0; i < getGhosts().size(); i++) {
            double gx = getGhosts().get(i).getPosition().getX();
            double gy = getGhosts().get(i).getPosition().getY();
            double dis = Math.pow(px - gx, 2) + Math.pow(py - gy, 2);
            double r = Math.pow((getPacMan().getRadius() + getGhosts().get(i).getRadius()), 2);
            if (this.getInvincible()) {
                if (!getGhosts().get(i).getStatus().equals("twoeye")) {
                    getGhosts().get(i).setMovementStrategy(movStrategyFac.make("ghost avoid"));

                }
            } else {
                getGhosts().get(i).setStatus("normal");
            }
            if (dis <= r) {
                // touch
                if (this.getInvincible()) {
                    getGhosts().get(i).setStatus("twoeye");
                    getGhosts().get(i).setMovementStrategy(TwoEyeStrategy.makeStrategy());
                    combo ++;
                    score = score + 200 * combo;
                } else {
                    for (int g = 0; g < getGhosts().size(); g++) {
                        getGhosts().get(g).setPosition(ghostStart[g]);
                    }
                    getPacMan().setPosition(pacManStart);
                    livesCount--;
                    if (livesCount <= 0) {
                        isGameOver = true;
                    }
                }
            }
        }

        // Update Ghost
        for (Ghost g: this.getGhosts()) {
            g.update(this.getPacMan(),this.getUid());
        }

        if (getInvincible()) {
            setInvincibleTimeout(getInvincibleTimeout() - 1);
        }
        if (getInvincibleTimeout() == 0) {
            setInvincible(false);
            combo = 0;
        }

        return gameObjResponse();
    }

    private void createFruit() {
        fruitTimeTick = 0;
        ArrayList<Point> validPos = new ArrayList<Point>();
        for (Point p: fruitPosition) {
            if (map[p.y][p.x] == 0) {
                validPos.add(new Point(p.x, p.y));
            }
        }
        if (validPos.size() == 0) {
            return;
        }
        Point p = validPos.get(random.nextInt(validPos.size()));
        fruit = new Fruit(p, fruitList[fruitCollected], 50);
        map[p.y][p.x] = 3;
        fruitOnboard = 1;
    }

    public void setDirection(int dir) {
        getPacMan().setNextDirection(dir);
    }

    /**
     * Initialize the game.
     * @return JsonObject to front end.
     */
    public JsonObject init(int difficulty, int invincibleTime, int fruitCollected, boolean isLevelUp) {
        normalDots.clear();
        bigDots.clear();
        getGhosts().clear();
        if (!isLevelUp) {
            livesCount = lives;
            score = 0;
        }
        this.difficulty = difficulty;
        this.invincibleTime = invincibleTime;
        this.fruitCollected = fruitCollected;
        fruitOnboard = 0;
        fruitTimeTick = 0;
        setInvincible(false);
        isGameOver = false;

        try {
            map = MapGenerator.createMap();
        } catch (Exception e) {
            e.printStackTrace();
        }

        // create dots object
        for (int row = 0; row < map.length; row++) {
            for (int col = 0; col < map[row].length; col++) {
                if (map[row][col] == 1) {
                    // create dots
                    NormalDot dot = new NormalDot(new Point(col, row), "normal_dot",10);
                    normalDots.add(dot);
                } else if (map[row][col] == 2) {
                    // create big_dots
                    BigDot bigDot = new BigDot(new Point(col, row), "big_dot",50);
                    bigDots.add(bigDot);
                }
            }
        }

        // create pacman object
        setPacMan(new PacMan("pacman", 12,  new Point(pacManStart.x, pacManStart.y), new Point(0, 0), movStrategyFac.make("pacmanNormal")));
//        System.out.println("DIFF" + difficulty);
        int speed = 4;
        if (ghostSpeed.equals("med")) {
            speed = 6;
        }
        if (ghostSpeed.equals("fast")) {
            speed = 8;
        }
        // create ghost
        int[][] ghostIniSpeed = {
            {0, -speed},
            {0, -speed},
            {0, speed},
            {speed, 0}
        };

        String[] color = {
            "red",
            "yellow",
            "blue",
            "pink"
        };

        IUpdateMovStrategy[] ghostStrategies = {
            movStrategyFac.make("ghost normal"),
            movStrategyFac.make("ghost random"),
            movStrategyFac.make("ghost mix"),
            movStrategyFac.make("ghost mix")
        };
        for (int i = 0; i < 4; i++) { // Ghost Speed
            this.getGhosts().add(new Ghost(
                    color[i],
                    14, // ghost radius 12 ? 14
                    new Point(ghostStart[i].x, ghostStart[i].y),
                    new Point(ghostIniSpeed[i][0], ghostIniSpeed[i][1]),
                    ghostStrategies[i],
                    "normal"
            ));
        }
        // return game object
        return gameObjResponse();

    }

    /**
     * Generate the game response.
     * @return JsonObject to frontend.
     */
    public JsonObject gameObjResponse() {
        //return Obj.
        JsonObject gameStoreObj = new JsonObject();

        //List of all the ghosts.
        JsonArray allGhosts = new JsonArray();

        //List of all the normalDots.
        JsonArray allNormalDots = new JsonArray();

        //List of all the bigDots.
        JsonArray allBigDots = new JsonArray();

        // List of all the collected fruit
        JsonArray collectedFruits = new JsonArray();

        //data object to return in response.
        JsonObject jo = new JsonObject();

        //Adding game parameters to the response.
        jo.addProperty("score", score);
        jo.addProperty("lives", livesCount);
        jo.addProperty("difficulty", difficulty);
        jo.addProperty("isGameOver", isGameOver);

        //Creating pacmam response object.
        JsonObject pacman = new JsonObject();
        JsonObject pacmanPosition = new JsonObject();
        pacmanPosition.addProperty("x", getPacMan().getPosition().x);
        pacmanPosition.addProperty("y", getPacMan().getPosition().y);
        JsonObject pacmanSpeed = new JsonObject();
        pacmanSpeed.addProperty("x", getPacMan().getSpeed().x);
        pacmanSpeed.addProperty("y", getPacMan().getSpeed().y);
        pacman.add("speed", pacmanSpeed);
        pacman.add("position", pacmanPosition);
        jo.add("pacMan", pacman);

        //Adding Fruit object.
        if (fruit != null) {
            JsonObject fruitInGame = new JsonObject();
            JsonObject fruitPosition = new JsonObject();
            fruitPosition.addProperty("x", fruit.getPosition().x);
            fruitPosition.addProperty("y", fruit.getPosition().y);
            fruitInGame.add("position", fruitPosition);
            fruitInGame.addProperty("type", fruit.getType());
            jo.add("fruit", fruitInGame);
        }

        // Creating fruit collected object
        int tmp = fruitCollected;
        for (int i = 0; i < 5; i++) {
            if (tmp > 0) {
                collectedFruits.add(true);
                tmp --;
            } else {
                collectedFruits.add(false);
            }
        }
        jo.add("collectedFruits", collectedFruits);

        //Creating Ghost response object.
        for (Ghost gh : getGhosts()) {
            JsonObject ghostPosition = new JsonObject();
            JsonObject ghostObj = new JsonObject();
            ghostPosition.addProperty("x",gh.getPosition().x);
            ghostPosition.addProperty("y",gh.getPosition().y);
            ghostObj.add("position",ghostPosition);
            ghostObj.addProperty("type",gh.getType());
            ghostObj.addProperty("status",gh.getStatus());
            allGhosts.add(ghostObj);
        }
        jo.add("ghosts", allGhosts);//{position : Point} [],type:String,status:String;

        for (NormalDot norm : normalDots) {
            JsonObject dotPosition = new JsonObject();
            JsonObject newDot = new JsonObject();
            dotPosition.addProperty("x",norm.getPosition().x);
            dotPosition.addProperty("y", norm.getPosition().y);
            newDot.add("position", dotPosition);
            allNormalDots.add(newDot);
        }
        jo.add("normalDots",allNormalDots); //{position : Point} [];

        for (BigDot bigDot : bigDots) {
            JsonObject dotPosition = new JsonObject();
            JsonObject newDot = new JsonObject();
            dotPosition.addProperty("x",bigDot.getPosition().x);
            dotPosition.addProperty("y", bigDot.getPosition().y);
            newDot.add("position", dotPosition);
            allBigDots.add(newDot);
        }
        jo.add("bigDots", allBigDots);//{position : Point} [];


        //adding data to gameStoreResponse obj.
        gameStoreObj.addProperty("errCode",0);
        gameStoreObj.add("data",jo);

        return gameStoreObj;

    }

    /**
     * get the variable isInvinvible.
     * @return isInvincible.
     */
    public boolean getIsInvincible() {
        return getInvincible();
    }

    /**
     * get the timeout left.
     * @return incincibleTimeOut.
     */
    public int getInvincibleTimeout() {
        return invincibleTimeout;
    }


    public String getUid() {
        return uid;
    }

    public int[][] getMap() {
        return map;
    }

    public void setMap(int[][] map) {
        this.map = map;
    }

    public ArrayList<Ghost> getGhosts() {
        return ghosts;
    }

    public void setGhosts(ArrayList<Ghost> ghosts) {
        this.ghosts = ghosts;
    }

    public PacMan getPacMan() {
        return pacMan;
    }

    public void setPacMan(PacMan pacMan) {
        this.pacMan = pacMan;
    }

    public void setInvincibleTimeout(int invincibleTimeout) {
        this.invincibleTimeout = invincibleTimeout;
    }

    public Boolean getInvincible() {
        return isInvincible;
    }

    public void setInvincible(Boolean invincible) {
        isInvincible = invincible;
    }

    public int getScore() {
        return this.score;
    }

    public void setFruitTimeTick(int t) {
        this.fruitTimeTick = t;
    }

    public ArrayList<BigDot> getBigDots() {
        return this.bigDots;
    }

    public ArrayList<NormalDot> getNormalDots() {
        return this.normalDots;
    }

    public int getDifficulty() {
        return this.difficulty;
    }
}
