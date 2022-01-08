import './styles.css';
import {
  clear,
  drawDot,
  drawFruit,
  drawGhost,
  drawPacMan,
  drawWalls,
  getCanvasContext,
} from './canvas';
import { lifeImage, sleep, COLOR, UNIT, DIRECTIONS } from './common';
import Game from './Game';
import { request } from './request';
import { dotsMap } from './data';

// Startup Page
const maskPanel = document.querySelector('.mask');
const startGameBtn = document.querySelector('#start-btn');
const settingsBtn = document.querySelector('#settings-btn');
const settingsPanel = document.querySelector('.settings-panel');
const positionBtn = document.querySelector('#position');
const livesValue = document.querySelector('#lives .value');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const speedBtns = document.querySelectorAll('#speed span');
const confirmBtn = document.querySelector('#confirm');

// NOTE: Not used for now
const restartBtn = document.querySelector('#restart');

// Game Page
const { canvas } = getCanvasContext();
const infoPanel = document.querySelector('.info');
const fruitsIndicator = document.querySelectorAll('.fruits img');
const footer = document.querySelector('.footer');
const pauseBtn = document.querySelector('#pause');
const backBtn = document.querySelector('#back-btn');
const gameOverPanel = document.querySelector('.game-over');
const allCollectedPanel = document.querySelector('.all-collected');

let game = new Game();
let timer: NodeJS.Timer | null = null;

clear(true);

if (!localStorage.getItem('uid')) {
  localStorage.setItem('uid', Math.random() + '');
}

(async () => {
  await request<string>({ url: '/setUid', method: 'POST' });
})();

const drawWithGameData = async (isFirst?: boolean) => {
  try {
    await game.updateGameInfo();

    clear(true);

    // Draw on canvas
    const normalDots = game.getNormalDots();
    const bigDots = game.getBigDots();
    const ghosts = game.getGhosts();
    const pacman = game.getPacman();
    const fruit = game.getFruit();

    // Draw in info panel
    infoPanel!.querySelector('.level span')!.innerHTML = `${'0' + game.getLevel()}`;
    infoPanel!.querySelector('.dots span')!.innerHTML = `${('000' + game.getDotsCount()).slice(
      -3,
    )}`;
    infoPanel!.querySelector('.score span')!.innerHTML = `${('00000' + game.getScore()).slice(-5)}`;
    const lifeIndicator = infoPanel!.querySelector('.lives');
    while (lifeIndicator!.hasChildNodes()) {
      lifeIndicator!.firstChild && lifeIndicator!.removeChild(lifeIndicator!.firstChild);
    }
    for (let i = 0; i < game.getLives(); i++) {
      const image = lifeImage.cloneNode();
      lifeIndicator!.appendChild(image);
    }
    game
      .getCollectives()
      .forEach((val, index) =>
        val
          ? fruitsIndicator[index].classList.add('collected')
          : fruitsIndicator[index].classList.remove('collected'),
      );

    if (game.getCollectives().every((each) => each)) {
      allCollectedPanel?.classList.add('animate');
    }

    const drawMovingObjs = () => {
      ghosts.forEach((ghost) => {
        if (ghost.status === 'normal') {
          drawGhost(ghost.position.x, ghost.position.y, COLOR[ghost.type]);
        } else if (ghost.status === 'blink') {
          drawGhost(
            ghost.position.x,
            ghost.position.y,
            COLOR[ghost.type],
            false,
            true,
            game.getGameTime(),
          );
        } else if (ghost.status === 'blue') {
          drawGhost(ghost.position.x, ghost.position.y, 'blue');
        } else if (ghost.status === 'twoeye') {
          drawGhost(ghost.position.x, ghost.position.y, COLOR[ghost.type], true);
        }
      });
      pacman &&
        drawPacMan(pacman.position.x, pacman.position.y, pacman.direction, game.getGameTime());
    };

    if (isFirst) {
      drawMovingObjs();
      for (const {
        position: { x, y },
      } of bigDots) {
        await sleep(10);
        drawDot(x, y, true);
      }
      for (const {
        position: { x, y },
      } of normalDots) {
        await sleep(10);
        drawDot(x, y, false);
      }
    } else {
      normalDots.forEach((dot) => drawDot(dot.position.x, dot.position.y, false));
      bigDots.forEach((dot) => drawDot(dot.position.x, dot.position.y, true, game.getGameTime()));
      fruit && drawFruit(fruit.position.x, fruit.position.y, fruit.type);
      drawMovingObjs();
    }

    // Judge game over
    if (game.getIsGameOver()) {
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
      gameOverPanel?.classList.add('appear');
    }
  } catch (error) {
    console.log(error);
    timer && clearInterval(timer);
    timer = null;
  }
};

/**
 * Global keyboard listener
 */
document.addEventListener('keyup', async (e) => {
  if (game.getIsStarted()) {
    e.preventDefault();
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      const map: { [key: string]: number } = {
        ArrowUp: 0,
        ArrowDown: 1,
        ArrowLeft: 2,
        ArrowRight: 3,
      };
      request({ url: '/changeDirection', method: 'POST', body: { direction: map[e.key] } });
    }
  }
});

/**
 * Start game
 * 1. Hide mask
 * 2. Read data from game
 * 3. Display info panel
 * 4. Set game to start
 */
startGameBtn?.addEventListener('click', () => {
  if (!infoPanel || !maskPanel) {
    return;
  }

  maskPanel?.classList.add('hidden');
  infoPanel?.classList.remove('hidden');

  (async () => {
    await game.saveGameSettings();
    await game.start();
    await drawWithGameData(true);

    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(() => {
      drawWithGameData().then(() => game.gameTimeIncrease());
    }, 100);
    footer?.classList.remove('hidden');
  })();
});

restartBtn?.addEventListener('click', async () => {
  infoPanel?.classList.add('hidden');
  await request({ url: '/init', method: 'POST' });
});

settingsBtn?.addEventListener('click', () => {
  livesValue!.innerHTML = `${game.getLives()}`;
  speedBtns.forEach((each) => {
    if (each.getAttribute('name') === game.getSpeed()) {
      each.classList.add('active');
    } else {
      each.classList.remove('active');
    }
  });
  settingsPanel?.classList.toggle('hidden');
});

positionBtn?.addEventListener('click', () => {
  maskPanel?.classList.add('hidden');
  game.setEditMode(true);
});

minusBtn?.addEventListener('click', () => {
  const lives = game.getLives();
  if (lives <= 1) {
    return;
  } else {
    game.setLives(lives - 1);
    livesValue!.innerHTML = `${game.getLives()}`;
  }
});

plusBtn?.addEventListener('click', () => {
  const lives = game.getLives();
  if (lives === 5) {
    return;
  } else {
    game.setLives(lives + 1);
    livesValue!.innerHTML = `${game.getLives()}`;
  }
});

speedBtns.forEach((each) => {
  each.addEventListener('click', () => {
    game.setSpeed(each.getAttribute('name') || 'med');
    speedBtns.forEach((other) => {
      if (other !== each) {
        other.classList.remove('active');
      } else {
        other.classList.add('active');
      }
    });
  });
});

confirmBtn?.addEventListener('click', async () => {
  await game.saveGameSettings();
  settingsPanel?.classList.add('hidden');
});

canvas?.addEventListener('mousemove', (e) => {
  e.stopPropagation();
  if (game.getIsEditMode()) {
    let { offsetX, offsetY } = e;
    let posX = UNIT * Math.round(offsetX / UNIT);
    let posY = UNIT * Math.round(offsetY / UNIT);

    if (!(posX in dotsMap) || !dotsMap[posX].has(posY)) {
      return;
    }
    clear(true);
    drawPacMan(posX, posY, DIRECTIONS.RIGHT);
  }
});

canvas?.addEventListener('click', (e) => {
  e.stopPropagation();
  if (game.getIsEditMode()) {
    let { offsetX, offsetY } = e;
    let posX = UNIT * Math.round(offsetX / UNIT);
    let posY = UNIT * Math.round(offsetY / UNIT);
    game.setSpawningPoint({ x: posX, y: posY });
    clear(true);
    maskPanel?.classList.remove('hidden');
  }
  game.setEditMode(false);
});

pauseBtn?.addEventListener('click', () => {
  if (game.getIsGameOver()) {
    return;
  }

  if (timer) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(() => {
      drawWithGameData().then(() => game.gameTimeIncrease());
    }, 100);
  }
});

backBtn?.addEventListener('click', () => {
  maskPanel?.classList.remove('hidden');
  infoPanel?.classList.add('hidden');
  footer?.classList.add('hidden');
  gameOverPanel?.classList.remove('appear');
  allCollectedPanel?.classList.remove('animate');
  fruitsIndicator.forEach((each) => each.classList.remove('collected'));
  game.setIsStarted(false);
  clear(true);
  timer && clearInterval(timer);
  timer = null;
});
