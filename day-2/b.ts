import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2b(data: string[]) {
  const minDiff = 1;
  const maxDiff = 3;
  let safeCount = 0;

  for(let i = 0; i < data.length; i++) {
    const lineArray = data[i].split(' ').map(Number);

    let differenceArray = []

    for(let j = 0; j < lineArray.length - 1; j++) {
      differenceArray.push(lineArray[j] - lineArray[j+1]);
    }

    const allInSameOrder = differenceArray.every((value) => value < 0) || differenceArray.every((value) => value > 0);
    const allWithinBounds = differenceArray.every((value) => Math.abs(value) <= maxDiff) && differenceArray.every((value) => Math.abs(value) >= minDiff);

    if(allInSameOrder && allWithinBounds) {
      safeCount++;
      continue;
    }

    for(let j = 0; j < lineArray.length; j++) {
      const newLineArray = [...lineArray];
      newLineArray.splice(j,1);

      let differenceArray = []

      for(let k = 0; k < newLineArray.length - 1; k++) {
        differenceArray.push(newLineArray[k] - newLineArray[k+1]);
      }
  
      const allInSameOrder = differenceArray.every((value) => value < 0) || differenceArray.every((value) => value > 0);
      const allWithinBounds = differenceArray.every((value) => Math.abs(value) <= maxDiff) && differenceArray.every((value) => Math.abs(value) >= minDiff);
  
      if(allInSameOrder && allWithinBounds) {
        safeCount++;
        break;
      }
    }
  }

  return safeCount;
}

await runSolution(day2b);
