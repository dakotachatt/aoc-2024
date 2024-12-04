import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day3b(data: string[]) {
  let result = 0;
  let combinedString = '';

  for(let i = 0; i < data.length; i++) {
    combinedString += data[i];
  }

  const splitByDos = combinedString.split('do()');

  for(let j = 0; j < splitByDos.length; j++) {
    const splitByDonts = splitByDos[j].split('don\'t()');

    const matchArray = splitByDonts[0].match(/mul\((\d+),(\d+)\)/g);

    console.log('matches', matchArray)

    if(!matchArray) {
      continue
    }

    for(let k = 0; k < matchArray.length; k++) {
      const match = matchArray[k];

      const numberArray = match.replaceAll('mul(', '').replaceAll(')', '').split(',').map(Number);

      result += (numberArray[0] * numberArray[1]);
    }
  }

  return result;
}

await runSolution(day3b);
