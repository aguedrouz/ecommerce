import { TestBed } from '@angular/core/testing';
import { roundToNearestFive } from './number-utils';

describe('NumberUtils', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should round to nearest five', () => {
    expect(roundToNearestFive(0)).toEqual(0);
    expect(roundToNearestFive(1.0)).toEqual(1.0);
    expect(roundToNearestFive(1.01)).toEqual(1.05);
    expect(roundToNearestFive(1.04)).toEqual(1.05);
    expect(roundToNearestFive(1.05)).toEqual(1.05);
    expect(roundToNearestFive(1.09)).toEqual(1.1);
  });
});
