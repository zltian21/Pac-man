package edu.rice.comp504.model;

import java.io.*;

public class MapGenerator {
    /**
     * Create game map.
     * @return a 2d array the represents the game map.
     * @throws Exception exception.
     */
    public static int[][] createMap() throws Exception {
        int[][] map = new int[529][1009];

        BufferedReader reader = new BufferedReader(new FileReader(new File("map.txt")));

        String line = reader.readLine();
        int row = 0;
        int size = 1009;

        while (line != null) {
            String[] vals = line.trim().split(" ");

            for (int col = 0; col < size; col++) {
                map[row][col] = Integer.parseInt(vals[col]);
            }
            line = reader.readLine();
            row++;
        }
        reader.close();
        return map;
    }
}
