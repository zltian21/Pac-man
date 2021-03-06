import { UNIT } from './common';

export const dots: { x: number; y: number; isBig: boolean }[] = [
  // 4 big dots
  { x: 3 * UNIT, y: 3 * UNIT, isBig: true },
  { x: 39 * UNIT, y: 3 * UNIT, isBig: true },
  { x: 3 * UNIT, y: 19 * UNIT, isBig: true },
  { x: 39 * UNIT, y: 19 * UNIT, isBig: true },
  // Line 1
  { x: 4 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 5 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 6 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 7 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 8 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 9 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 10 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 12 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 13 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 14 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 16 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 17 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 18 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 23 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 28 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 29 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 30 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 31 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 32 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 33 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 34 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 36 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 37 * UNIT, y: 3 * UNIT, isBig: false },
  { x: 38 * UNIT, y: 3 * UNIT, isBig: false },
  // Last line
  { x: 4 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 5 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 6 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 7 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 8 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 9 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 10 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 12 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 13 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 14 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 16 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 17 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 18 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 20 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 21 * UNIT, y: 19 * UNIT, isBig: false },
  // { x: 22 * UNIT, y: 19 * UNIT, isBig: false },
  // { x: 23 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 24 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 25 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 26 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 28 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 29 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 30 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 31 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 32 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 33 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 34 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 36 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 37 * UNIT, y: 19 * UNIT, isBig: false },
  { x: 38 * UNIT, y: 19 * UNIT, isBig: false },
  // Column 1
  { x: 3 * UNIT, y: 4 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 6 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 8 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 9 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 10 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 12 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 15 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 16 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 3 * UNIT, y: 18 * UNIT, isBig: false },
  // Column 2
  { x: 7 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 7 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 7 * UNIT, y: 15 * UNIT, isBig: false },
  { x: 7 * UNIT, y: 16 * UNIT, isBig: false },
  { x: 7 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 7 * UNIT, y: 18 * UNIT, isBig: false },
  // Column 3
  { x: 9 * UNIT, y: 11 * UNIT, isBig: false },
  // Column 4
  { x: 10 * UNIT, y: 11 * UNIT, isBig: false },
  // Column 5
  { x: 11 * UNIT, y: 4 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 6 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 8 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 9 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 10 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 12 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 15 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 16 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 11 * UNIT, y: 18 * UNIT, isBig: false },
  // Column 6
  { x: 12 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 12 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 7
  { x: 13 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 13 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 8
  { x: 14 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 14 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 9
  { x: 15 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 8 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 9 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 10 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 12 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 15 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 10
  { x: 16 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 16 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 11
  { x: 17 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 17 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 12
  { x: 18 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 18 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 13
  { x: 19 * UNIT, y: 4 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 6 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 8 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 9 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 10 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 12 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 15 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 16 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 19 * UNIT, y: 18 * UNIT, isBig: false },
  // Column 14
  { x: 20 * UNIT, y: 5 * UNIT, isBig: false },
  // Column 15
  { x: 21 * UNIT, y: 5 * UNIT, isBig: false },
  // Column 16
  { x: 22 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 22 * UNIT, y: 19 * UNIT, isBig: false },
  // Column 17
  { x: 23 * UNIT, y: 4 * UNIT, isBig: false },
  { x: 23 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 23 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 23 * UNIT, y: 18 * UNIT, isBig: false },
  { x: 23 * UNIT, y: 19 * UNIT, isBig: false },
  // Column 18
  { x: 24 * UNIT, y: 5 * UNIT, isBig: false },
  // Column 19
  { x: 25 * UNIT, y: 5 * UNIT, isBig: false },
  // Column 20
  { x: 26 * UNIT, y: 5 * UNIT, isBig: false },
  // Column 21
  { x: 27 * UNIT, y: 4 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 6 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 8 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 9 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 10 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 12 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 15 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 16 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 27 * UNIT, y: 18 * UNIT, isBig: false },
  // Column 22
  { x: 28 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 28 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 23
  { x: 29 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 29 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 24
  { x: 30 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 30 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 25
  { x: 31 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 31 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 31 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 26
  { x: 32 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 32 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 32 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 27
  { x: 33 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 33 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 33 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 28
  { x: 34 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 34 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 34 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 29
  { x: 35 * UNIT, y: 4 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 6 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 8 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 9 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 10 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 12 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 15 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 16 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 35 * UNIT, y: 18 * UNIT, isBig: false },
  // Column 30
  { x: 36 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 36 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 36 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 30
  { x: 37 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 37 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 37 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 30
  { x: 38 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 38 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 38 * UNIT, y: 15 * UNIT, isBig: false },
  // Column 31
  { x: 39 * UNIT, y: 4 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 5 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 6 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 7 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 8 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 9 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 10 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 12 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 13 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 14 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 15 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 16 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 17 * UNIT, isBig: false },
  { x: 39 * UNIT, y: 18 * UNIT, isBig: false },

  // On the exit
  { x: 1 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 2 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 40 * UNIT, y: 11 * UNIT, isBig: false },
  { x: 41 * UNIT, y: 11 * UNIT, isBig: false },
];

export const dotsMap: { [key: number]: Set<number> } = dots.reduce((prev, curr) => {
  if (!prev[curr.x]) {
    prev[curr.x] = new Set<number>();
  }
  prev[curr.x].add(curr.y);
  return prev;
}, {} as { [key: number]: Set<number> });
