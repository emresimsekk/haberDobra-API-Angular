import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriduzenleComponent } from './kategoriduzenle.component';

describe('KategoriduzenleComponent', () => {
  let component: KategoriduzenleComponent;
  let fixture: ComponentFixture<KategoriduzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategoriduzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriduzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
