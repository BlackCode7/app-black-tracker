import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglemapaComponent } from './googlemapa.component';

describe('GooglemapaComponent', () => {
  let component: GooglemapaComponent;
  let fixture: ComponentFixture<GooglemapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglemapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglemapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
