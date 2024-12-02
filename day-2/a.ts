import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  const minDiff = 1;
  const maxDiff = 3;
  let safeCount = 0;

  for(let i = 0; i < data.length; i++) {
    let allIncreasing = true;
    let allDecreasing = true;
    let isSafe = true;
    const lineArray = data[i].split(' ').map(Number);

    console.log(lineArray)

    for(let j = 0; j < lineArray.length - 1; j++) {
      if(lineArray[j] - lineArray[j+1] > 0) {
        allDecreasing = false
      }

      if(lineArray[j] - lineArray[j+1] < 0) {
        allIncreasing = false
      }
    }

    if(!allDecreasing && !allIncreasing) {
      continue;
    }

    for(let j = 0; j < lineArray.length - 1; j++) {
      const meetsMaxConstraint = Math.abs(lineArray[j] - lineArray[j + 1]) <= maxDiff;
      const meetsMinConstraint = Math.abs(lineArray[j] - lineArray[j + 1]) >= minDiff;

      // console.log(`${lineArray[j]} - ${lineArray[j+1]} = ${lineArray[j] - lineArray[j+1]}, meetsMax? ${meetsMaxConstraint}, meetsMin? ${meetsMinConstraint}`)

      if(!meetsMaxConstraint || !meetsMinConstraint) {
        isSafe = false
      }
    }

    console.log(`Line ${i}:`, isSafe)

    if(isSafe) {
      safeCount++;
    }
  }

  return safeCount;
}

await runSolution(day2a);
