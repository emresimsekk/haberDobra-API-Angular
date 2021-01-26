import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaberduzenleComponent } from './haberduzenle.component';

describe('HaberduzenleComponent', () => {
  let component: HaberduzenleComponent;
  let fixture: ComponentFixture<HaberduzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaberduzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaberduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
