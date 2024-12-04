import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day3a(data: string[]) {
  let result = 0;

  for(let i = 0; i < data.length; i++) {
    const matchArray = data[i].match(/mul\(\d+,\d+\)/g);

    console.log(matchArray);

    for(let j = 0; j < matchArray.length; j++) {
      const match = matchArray[j];
      const numberArray = match.replaceAll('mul(', '').replaceAll(')', '').split(',').map(Number);

      console.log(numberArray);

      result += (numberArray[0] * numberArray[1]);
    }
  }

  return result;
}

await runSolution(day3a);
