import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  const minDiff = 1;
  const maxDiff = 3;
  let safeCount = 0;

  for(let i = 0; i < data.length; i++) {
    const differenceArray = []
    const lineArray = data[i].split(' ').map(Number);

    for(let j = 0; j < lineArray.length - 1; j++) {
      differenceArray.push(lineArray[j] - lineArray[j+1]);
    }

    const allInSameOrder = differenceArray.every((value) => value < 0) || differenceArray.every((value) => value > 0);
    const allWithinBounds = differenceArray.every((value) => Math.abs(value) <= maxDiff) && differenceArray.every((value) => Math.abs(value) >= minDiff);

    if(allInSameOrder && allWithinBounds) {
      safeCount++;
    }
  }

  return safeCount;
}

await runSolution(day2a);
