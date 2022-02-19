import { TestBed } from '@angular/core/testing';

import { WeatherdataService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
