import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  const left = [];
  const right = [];

  let sumOfMultiples = 0;

  // Put each column into into it's own array
  for(const line of data) {
    const splitLine = line.split('   ');

    left.push(splitLine[0]);
    right.push(splitLine[1]);
  }

  left.sort();
  right.sort();

  for(let i = 0; i < left.length; i++) {
    let count = 0;

    for(let j = 0; j < right.length; j++) {
      if(left[i] === right[j]) {
        count++;
      }
    }

    sumOfMultiples += left[i] * count;
    count = 0;
  }

  return sumOfMultiples;
}

await runSolution(day1b);
