import { runSolution } from '../utils.ts';

type CurrentPosition = {
  // [y-axis, x-axis]
  coordinates: [number, number],
  direction: 'N' | 'S' | 'E' | 'W'
}

const GUARD_MARKER = '^';
const OBSTACLE_MARKER = '#';

/** provide your solution as the return of this function */
export async function day6a(data: string[]) {
  let currentPosition: CurrentPosition = {
    coordinates: [0, 0],
    direction: 'N'
  };
  const labMap: string[][] = [];
  const positionRecord: string[] = [];
  const labDimensions: [number, number] = [data[0].length, data.length];

  // Get initial coordinates of security guard
  for(let i = 0; i < data.length; i++) {
    for(let j = 0; j < data[0].length; j++) {
      if(data[i][j] === GUARD_MARKER) {
        currentPosition = {
          coordinates: [i, j],
          direction: 'N'
        }
      }
    }
  }

  // Create map of lab
  for(let i = 0; i < data.length; i++) {
    labMap.push(data[i].split(''));
  }

  // Step through guards movements
  while(!isAtEnd(currentPosition, labDimensions)) {
    if(shouldMoveForward(currentPosition, labMap)) {
      moveForwardAndUpdatePositionRecord(currentPosition, positionRecord);
    } else {
      turnRight(currentPosition);
    }
  }

  console.log(positionRecord);

  return positionRecord.length + 1;
}

function shouldMoveForward(currentPosition: CurrentPosition, labMap: string[][]) {
  const currentXPos = currentPosition.coordinates[1];
  const currentYPos = currentPosition.coordinates[0];

  if(currentPosition.direction === 'N' && labMap[currentYPos - 1][currentXPos] !== OBSTACLE_MARKER) {
    return true;
  }

  if(currentPosition.direction === 'E' && labMap[currentYPos][currentXPos + 1] !== OBSTACLE_MARKER) {
    return true;
  }

  if(currentPosition.direction === 'S' && labMap[currentYPos + 1][currentXPos] !== OBSTACLE_MARKER) {
    return true;
  }

  if(currentPosition.direction === 'W' && labMap[currentYPos][currentXPos - 1] !== OBSTACLE_MARKER) {
    return true;
  }

  return false;
}

function moveForwardAndUpdatePositionRecord(currentPosition: CurrentPosition, positionRecord: string[]) {
  const currentXPos = currentPosition.coordinates[1];
  const currentYPos = currentPosition.coordinates[0];

  if(currentPosition.direction === 'N') {
    currentPosition.coordinates = [currentYPos - 1, currentXPos]
  }

  if(currentPosition.direction === 'E') {
    currentPosition.coordinates = [currentYPos, currentXPos + 1]
  }

  if(currentPosition.direction === 'S') {
    currentPosition.coordinates = [currentYPos + 1, currentXPos]
  }

  if(currentPosition.direction === 'W') {
    currentPosition.coordinates = [currentYPos, currentXPos - 1]
  }

  if(!positionRecord.includes(`${currentYPos},${currentXPos}`)) {
    positionRecord.push(`${currentYPos},${currentXPos}`);
  }
}

function turnRight(currentPosition: CurrentPosition) {
  if(currentPosition.direction === 'N') {
    currentPosition.direction = 'E';
    return;
  }

  if(currentPosition.direction === 'E') {
    currentPosition.direction = 'S';
    return;
  }

  if(currentPosition.direction === 'S') {
    currentPosition.direction = 'W';
    return;
  }

  if(currentPosition.direction === 'W') {
    currentPosition.direction = 'N';
    return;
  }
}

function isAtEnd(currentPosition: CurrentPosition, labDimensions: [number, number]): boolean {
  if(currentPosition.direction === 'N' && currentPosition.coordinates[0] === 0) {
    return true;
  }

  if(currentPosition.direction === 'W' && currentPosition.coordinates[1] === 0) {
    return true;
  }

  if(currentPosition.direction === 'S' && currentPosition.coordinates[0] === labDimensions[0] - 1) {
    return true;
  }

  if(currentPosition.direction === 'E' && currentPosition.coordinates[1] === labDimensions[1] - 1) {
    return true;
  }

  return false
}

await runSolution(day6a);
