import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  const left = [];
  const right = [];

  let sumOfDifferences = 0;

  // Put each column into into it's own array
  for(const line of data) {
    const splitLine = line.split('   ');

    left.push(splitLine[0]);
    right.push(splitLine[1]);
  }

  left.sort();
  right.sort();

  for(let i = 0; i < left.length; i++) {
    sumOfDifferences += Math.abs(right[i] - left[i]);
  }

  return sumOfDifferences;
}

await runSolution(day1a);
