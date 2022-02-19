import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdetailsComponent } from './weather-details.component';

describe('WeatherDetailsComponent', () => {
  let component: WeatherdetailsComponent;
  let fixture: ComponentFixture<WeatherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherdetailsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
