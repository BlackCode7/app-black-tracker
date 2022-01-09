import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaLoginComponent } from './tela-login.component';

describe('TelaLoginComponent', () => {
  let component: TelaLoginComponent;
  let fixture: ComponentFixture<TelaLoginComponent>;

  //let https: HttpsClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        TelaLoginComponent,
        //HttpClientTestingsModule 
      ]
    }).compileComponents();
  });
  //component = TestBed.createComponent(TelaLoginComponent);

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title in component', () => {
    component.component = {...component.component, title: 'AppGoogleMaps'}
    fixture.detectChanges();
    expect()
  });
});
