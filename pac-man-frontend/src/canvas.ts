import { HEIGHT, WIDTH, UNIT, DIRECTIONS, FRUIT } from './common';

let ctx: CanvasRenderingContext2D | null;
let canvas: HTMLCanvasElement | null;

export const getCanvasContext = () => {
  !canvas && (canvas = document.querySelector('#canvas'));
  !ctx && (ctx = canvas?.getContext('2d') || null);

  return { ctx, canvas };
};

export const clear = (shouldDrawWalls?: boolean) => {
  if (!ctx) {
    getCanvasContext();
  }

  if (ctx) {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    shouldDrawWalls && drawWalls();
  }
};

export const drawWalls = () => {
  if (!ctx) {
    return;
  }

  ctx.save();
  ctx.strokeStyle = '#4ec2f7';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#a6e0fb';
  ctx.shadowBlur = 20;

  // Upper boundary
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(WIDTH, 0);
  ctx.lineTo(WIDTH, 10 * UNIT);
  ctx.lineTo(WIDTH - 2 * UNIT, 10 * UNIT);
  ctx.lineTo(WIDTH - 2 * UNIT, 2 * UNIT);
  ctx.lineTo(26 * UNIT, 2 * UNIT);
  ctx.lineTo(26 * UNIT, 4 * UNIT);
  ctx.lineTo(24 * UNIT, 4 * UNIT);
  ctx.lineTo(24 * UNIT, 2 * UNIT);
  ctx.lineTo(22 * UNIT, 2 * UNIT);
  ctx.lineTo(22 * UNIT, 4 * UNIT);
  ctx.lineTo(20 * UNIT, 4 * UNIT);
  ctx.lineTo(20 * UNIT, 2 * UNIT);
  ctx.lineTo(2 * UNIT, 2 * UNIT);
  ctx.lineTo(2 * UNIT, 10 * UNIT);
  ctx.lineTo(0, 10 * UNIT);
  ctx.closePath();
  ctx.stroke();

  // Lower boundary
  ctx.beginPath();
  ctx.moveTo(0, 12 * UNIT);
  ctx.lineTo(2 * UNIT, 12 * UNIT);
  ctx.lineTo(2 * UNIT, HEIGHT - 2 * UNIT);
  ctx.lineTo(WIDTH - 2 * UNIT, HEIGHT - 2 * UNIT);
  ctx.lineTo(WIDTH - 2 * UNIT, 12 * UNIT);
  ctx.lineTo(WIDTH, 12 * UNIT);
  ctx.lineTo(WIDTH, HEIGHT);
  ctx.lineTo(0, HEIGHT);
  ctx.closePath();
  ctx.stroke();

  // 2 Walls at middle bottom
  ctx.strokeRect(20 * UNIT, 16 * UNIT, 2 * UNIT, 2 * UNIT);
  ctx.strokeRect(24 * UNIT, 16 * UNIT, 2 * UNIT, 2 * UNIT);

  // 4 walls on the right
  ctx.strokeRect(WIDTH - 6 * UNIT, 4 * UNIT, 2 * UNIT, 2 * UNIT);
  ctx.strokeRect(WIDTH - 6 * UNIT, 8 * UNIT, 2 * UNIT, 2 * UNIT);
  ctx.strokeRect(WIDTH - 6 * UNIT, 12 * UNIT, 2 * UNIT, 2 * UNIT);
  ctx.strokeRect(WIDTH - 6 * UNIT, 16 * UNIT, 2 * UNIT, 2 * UNIT);

  // R
  ctx.strokeStyle = '#8a4af3';
  ctx.shadowColor = '#ad80f6';
  ctx.beginPath();
  ctx.moveTo(4 * UNIT, 4 * UNIT);
  ctx.lineTo(10 * UNIT, 4 * UNIT);
  ctx.lineTo(10 * UNIT, 10 * UNIT);
  ctx.lineTo(8 * UNIT, 10 * UNIT);
  ctx.lineTo(8 * UNIT, 6 * UNIT);
  ctx.lineTo(6 * UNIT, 6 * UNIT);
  ctx.lineTo(6 * UNIT, 10 * UNIT);
  ctx.lineTo(8 * UNIT, 10 * UNIT);
  ctx.lineTo(8 * UNIT, 12 * UNIT);
  ctx.lineTo(10 * UNIT, 12 * UNIT);
  ctx.lineTo(10 * UNIT, 18 * UNIT);
  ctx.lineTo(8 * UNIT, 18 * UNIT);
  ctx.lineTo(8 * UNIT, 12 * UNIT);
  ctx.lineTo(6 * UNIT, 12 * UNIT);
  ctx.lineTo(6 * UNIT, 18 * UNIT);
  ctx.lineTo(4 * UNIT, 18 * UNIT);
  ctx.closePath();
  ctx.stroke();

  // I
  ctx.strokeStyle = '#f44336';
  ctx.shadowColor = '#f77b72';
  ctx.strokeRect(12 * UNIT, 4 * UNIT, 6 * UNIT, 2 * UNIT);
  ctx.strokeRect(12 * UNIT, 8 * UNIT, 2 * UNIT, 6 * UNIT);
  ctx.strokeRect(16 * UNIT, 8 * UNIT, 2 * UNIT, 6 * UNIT);
  ctx.strokeRect(12 * UNIT, 16 * UNIT, 6 * UNIT, 2 * UNIT);

  // C
  ctx.strokeStyle = '#66de6e';
  ctx.shadowColor = '#a3eba8';
  ctx.beginPath();
  ctx.moveTo(20 * UNIT, 6 * UNIT);
  ctx.lineTo(26 * UNIT, 6 * UNIT);
  ctx.lineTo(26 * UNIT, 10 * UNIT);
  ctx.lineTo(24 * UNIT, 10 * UNIT);
  ctx.lineTo(24 * UNIT, 8 * UNIT);
  ctx.lineTo(22 * UNIT, 8 * UNIT);
  ctx.lineTo(22 * UNIT, 14 * UNIT);
  ctx.lineTo(24 * UNIT, 14 * UNIT);
  ctx.lineTo(24 * UNIT, 12 * UNIT);
  ctx.lineTo(26 * UNIT, 12 * UNIT);
  ctx.lineTo(26 * UNIT, 16 * UNIT);
  ctx.lineTo(20 * UNIT, 16 * UNIT);
  ctx.closePath();
  ctx.stroke();

  // Barrier
  ctx.save();
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 2;
  ctx.setLineDash([5]);
  ctx.beginPath();
  ctx.moveTo(26 * UNIT, 10 * UNIT);
  ctx.lineTo(26 * UNIT, 12 * UNIT);
  ctx.closePath();
  ctx.stroke();

  // E
  ctx.restore();
  ctx.strokeStyle = '#eba3e6';
  ctx.shadowColor = '#f3c7f0';
  ctx.strokeRect(28 * UNIT, 4 * UNIT, 6 * UNIT, 2 * UNIT);
  ctx.strokeRect(28 * UNIT, 16 * UNIT, 6 * UNIT, 2 * UNIT);
  ctx.beginPath();
  ctx.moveTo(28 * UNIT, 8 * UNIT);
  ctx.lineTo(34 * UNIT, 8 * UNIT);
  ctx.lineTo(34 * UNIT, 10 * UNIT);
  ctx.lineTo(30 * UNIT, 10 * UNIT);
  ctx.lineTo(30 * UNIT, 12 * UNIT);
  ctx.lineTo(34 * UNIT, 12 * UNIT);
  ctx.lineTo(34 * UNIT, 14 * UNIT);
  ctx.lineTo(28 * UNIT, 14 * UNIT);
  ctx.closePath();
  ctx.stroke();

  ctx.restore();
};

export const drawGhost = (
  x: number,
  y: number,
  color: string,
  isTwoEye?: boolean,
  isBlinking?: boolean,
  time?: number,
) => {
  if (!ctx) {
    return;
  }

  x -= 14;
  y -= 14;

  if (!isTwoEye) {
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 0;
    ctx.shadowColor = '';

    ctx.beginPath();
    ctx.moveTo(x, y + 28);
    ctx.lineTo(x, y + 14);
    ctx.bezierCurveTo(x, y + 6, x + 6, y, x + 14, y);
    ctx.bezierCurveTo(x + 22, y, x + 28, y + 6, x + 28, y + 14);
    ctx.lineTo(x + 28, y + 28);
    ctx.lineTo(x + 23.333, y + 23.333);
    ctx.lineTo(x + 18.666, y + 28);
    ctx.lineTo(x + 14, y + 23.333);
    ctx.lineTo(x + 9.333, y + 28);
    ctx.lineTo(x + 4.666, y + 23.333);
    ctx.lineTo(x, y + 28);
    if (
      isBlinking &&
      time !== undefined &&
      ((time - 1) % 6 == 0 || (time - 2) % 6 == 0 || (time - 3) % 6 == 0)
    ) {
      ctx.fillStyle = 'blue';
    }
    ctx.fill();
  }

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(x + 8, y + 8);
  ctx.bezierCurveTo(x + 5, y + 8, x + 4, y + 11, x + 4, y + 13);
  ctx.bezierCurveTo(x + 4, y + 15, x + 5, y + 18, x + 8, y + 18);
  ctx.bezierCurveTo(x + 11, y + 18, x + 12, y + 15, x + 12, y + 13);
  ctx.bezierCurveTo(x + 12, y + 11, x + 11, y + 8, x + 8, y + 8);
  ctx.moveTo(x + 20, y + 8);
  ctx.bezierCurveTo(x + 17, y + 8, x + 16, y + 11, x + 16, y + 13);
  ctx.bezierCurveTo(x + 16, y + 15, x + 17, y + 18, x + 20, y + 18);
  ctx.bezierCurveTo(x + 23, y + 18, x + 24, y + 15, x + 24, y + 13);
  ctx.bezierCurveTo(x + 24, y + 11, x + 23, y + 8, x + 20, y + 8);
  ctx.fill();

  ctx.fillStyle = 'black';
  ctx.beginPath();
  ctx.arc(x + 20, y + 14, 2, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x + 8, y + 14, 2, 0, Math.PI * 2, true);
  ctx.fill();
};

export const drawPacMan = (x: number, y: number, direction: DIRECTIONS, time?: number) => {
  if (!ctx) {
    return;
  }

  ctx.beginPath();
  ctx.fillStyle = '#ffc107';
  if (time !== undefined && ((time - 1) % 4 === 0 || (time - 2) % 4 === 0)) {
    ctx.arc(x, y, 12, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
    return;
  }

  switch (direction) {
    case DIRECTIONS.RIGHT:
      ctx.arc(x, y, 12, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(x - 5, y);
      break;
    case DIRECTIONS.LEFT:
      ctx.arc(x, y, 12, (Math.PI * 6) / 7, (Math.PI * 8) / 7, true);
      ctx.lineTo(x + 5, y);
      break;
    case DIRECTIONS.UP:
      ctx.arc(x, y, 12, -(Math.PI * 5) / 14, (Math.PI * 19) / 14, false);
      ctx.lineTo(x, y + 5);
      break;
    case DIRECTIONS.DOWN:
      ctx.arc(x, y, 12, (Math.PI * 9) / 14, (Math.PI * 5) / 14, false);
      ctx.lineTo(x, y - 5);
  }
  ctx.fill();
};

export const drawDot = (x: number, y: number, isBig?: boolean, time?: number) => {
  if (!ctx) {
    return;
  }

  ctx.fillStyle = '#ff9800';
  ctx.beginPath();

  if (isBig) {
    ctx.ellipse(x, y, 8 / ((time! % 4) + 1), 8, 0, 0, 2 * Math.PI);
  } else {
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
  }
  ctx.closePath();
  ctx.fill();
};

export const drawFruit = (x: number, y: number, type: string) => {
  if (!ctx) {
    return;
  }

  x -= 14;
  y -= 14;

  const image = new Image(32, 32);
  image.src = FRUIT[type];

  ctx.drawImage(image, x, y, 32, 32);
};
