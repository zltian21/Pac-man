export const UNIT = 24;
export const WIDTH = 1008;
export const HEIGHT = 528;

export enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export enum FRUITS {
  CHERRY,
  ORANGE,
  BANANA,
  APPLE,
  AVOCADO,
}

export const COLOR: { [key: string]: string } = {
  red: '#e91e63',
  yellow: '#ffcc01',
  blue: '#00fcff',
  pink: '#fea0cc',
};

export const FRUIT: { [key: string]: string } = {
  avocado:
    'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/avocado_latpoc.png',
  cherry:
    'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/cherry_irhhhz.png',
  orange:
    'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/orange_y7ehso.png',
  banana:
    'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/banana_ksnsbc.png',
  apple:
    'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/apple_hr27jm.png',
};

export const lifeImage = new Image(30, 30);
lifeImage.src =
  'https://res.cloudinary.com/rylanzhou/image/upload/v1636996530/COMP%20504/pacman_r4rhhz.svg';

export const sleep = (timeout: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
