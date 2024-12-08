import { runSolution } from '../utils.ts';

/** provide your solution as the return of this function */
export async function day5a(data: string[]) {
  let startOfUpdates = 0;
  let result = 0;

  const pageOrderings: Record<string, string[]> = {};

  // Put all page orderings in single array
  for(let i = 0; i < data.length; i++) {
    if(data[i] === '') {
      startOfUpdates = i;
      break;
    }

    const ordering = data[i].split('|');

    if(pageOrderings[ordering[0]] === undefined) {
      pageOrderings[ordering[0]] = [ordering[1]];

      continue;
    }

    pageOrderings[ordering[0]].push(ordering[1]);
  }
  
  // Set updates into array to search
  for(let i = startOfUpdates + 1; i < data.length; i++) {
    let correctOrder = true;
    const updates = data[i].split(',').map(Number);

    // Go through each number in this row and check orderings
    for(let j = 0; j < updates.length; j++) {
      const pagesAfter = pageOrderings[updates[j]];

      if(!pagesAfter) {
        continue;
      }

      const pagesAfterNumeric = pagesAfter.map(Number);

      for(let k = 0; k < pagesAfter.length; k++) {
        const indexOf = updates.indexOf(pagesAfterNumeric[k]);

        if(indexOf < j && indexOf >= 0) {
          correctOrder = false;
        }
      }
    }

    if(correctOrder) {
      result += updates[(updates.length - 1) / 2];
    }
  }

  return result;
}

await runSolution(day5a);
