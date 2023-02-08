export function roundToNearestFive(number: number): number {
  return Math.ceil(number * 20) / 20;
}
