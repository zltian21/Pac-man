import { DIRECTIONS, UNIT } from './common';
import { request } from './request';

export default class Game {
  private lives: number = 3;
  private speed: string = 'med';
  private level: number = 1;
  private score: number = 360;
  private spawningPoint: Point | null = null;
  private collectedFruits: boolean[] = [];
  private gameTime: number = 0;

  private pacMan: (Pacman & { direction: DIRECTIONS }) | null = null;
  private ghosts: Ghost[] = [];
  private bigDots: Dot[] = [];
  private normalDots: Dot[] = [];
  private fruit: Fruit | null = null;

  private isStarted: boolean = false;
  private isGameOver: boolean = false;
  private isEditMode: boolean = false;

  constructor() {
    this.lives = +(localStorage.getItem('lives') || 3);
    this.level = 0;
    this.speed = localStorage.getItem('speed') || 'med';
    this.score = 0;
    this.spawningPoint = JSON.parse(localStorage.getItem('point') || '{"x": 216, "y": 264}');
    this.collectedFruits = [];
    this.gameTime = 0;

    this.pacMan = null;
    this.ghosts = [];
    this.bigDots = [];
    this.normalDots = [];
    this.fruit = null;

    this.isStarted = false;
    this.isGameOver = false;
    this.isEditMode = false;
  }

  async updateGameInfo() {
    const response = await request<GameUpdateResponse>({
      url: '/updateGameStore',
      method: 'POST',
    });

    if (!response) {
      throw new Error('Error in request');
    }

    const getDirection = ({ x, y }: Point) => {
      if (!x) {
        return y > 0 ? DIRECTIONS.DOWN : DIRECTIONS.UP;
      }
      return x > 0 ? DIRECTIONS.RIGHT : DIRECTIONS.LEFT;
    };

    const { data } = response;
    this.score = data.score;
    this.level = data.difficulty;
    this.collectedFruits = data.collectedFruits || [];
    this.lives = data.lives;
    this.isGameOver = data.isGameOver;
    if (this.isGameOver) {
      this.isStarted = false;
    }
    this.pacMan = { ...data.pacMan, direction: getDirection(data.pacMan.speed) };
    this.ghosts = data.ghosts || [];
    this.bigDots = data.bigDots || [];
    this.normalDots = data.normalDots || [];
    this.fruit = data.fruit;
  }

  async saveGameSettings() {
    await request<string, SetGameRequest>({
      url: '/setGame',
      method: 'POST',
      body: {
        x: this.spawningPoint!.x,
        y: this.spawningPoint!.y,
        lives: this.lives,
        speed: this.speed,
      },
    });
    localStorage.setItem('lives', this.lives + '');
    localStorage.setItem('speed', this.speed);
    localStorage.setItem('point', JSON.stringify(this.spawningPoint));
  }

  async start() {
    await request({
      url: '/init',
      method: 'POST',
    });
    this.isStarted = true;
  }

  gameTimeIncrease() {
    this.gameTime++;
    if (this.gameTime === 1_000_000) {
      this.gameTime = 0;
    }
  }

  getGameTime() {
    return this.gameTime;
  }

  setLives(lives: number) {
    this.lives = lives;
  }

  getLives() {
    return this.lives;
  }

  setSpeed(speed: string) {
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }

  getLevel() {
    return this.level;
  }

  getNormalDots() {
    return this.normalDots;
  }

  getBigDots() {
    return this.bigDots;
  }

  getGhosts() {
    return this.ghosts;
  }

  getPacman() {
    return this.pacMan;
  }

  getFruit() {
    return this.fruit;
  }

  getDotsCount() {
    return this.normalDots.length + this.bigDots.length;
  }

  getScore() {
    return this.score;
  }

  getCollectives() {
    return this.collectedFruits;
  }

  getIsStarted() {
    return this.isStarted;
  }

  setIsStarted(isStarted: boolean) {
    this.isStarted = isStarted;
    this.lives = +(localStorage.getItem('lives') || 3);
    this.speed = localStorage.getItem('speed') || 'med';
    this.spawningPoint = JSON.parse(localStorage.getItem('point') || '{"x": 216, "y": 264}');
  }

  getIsEditMode() {
    return this.isEditMode;
  }

  getIsGameOver() {
    return this.isGameOver;
  }

  setEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
  }

  setSpawningPoint(point: Point) {
    this.spawningPoint = point;
  }
}
