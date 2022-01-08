interface Point {
  x: number;
  y: number;
}

interface Pacman {
  position: Point;
  speed: Point;
}

interface Fruit {
  position: Point;
  type: string;
}

interface Ghost {
  position: Point;
  type: 'red' | 'pink' | 'yellow' | 'blue';
  status: 'normal' | 'twoeye' | 'blink' | 'blue';
}

interface Dot {
  position: Point;
}

interface GameUpdateResponse {
  score: number;
  lives: number;
  difficulty: number; // level
  isGameOver: boolean;
  pacMan: Pacman; // { position: Point, speed: Point }
  fruit: Fruit; // { position: Point, type: String }
  normalDots: { position: Point }[];
  bigDots: { position: Point }[];
  ghosts: Ghost[]; // { position: Point, type: String }
  collectedFruits: boolean[]; // 1-cherry, 2-orange, 3-banana, 4-apple, 5-avocado
}

interface SetGameRequest {
  x: number;
  y: number;
  lives: number;
  speed: string;
}
