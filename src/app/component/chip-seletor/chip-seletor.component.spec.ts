import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipSeletorComponent } from './chip-seletor.component';

describe('ChipSeletorComponent', () => {
  let component: ChipSeletorComponent;
  let fixture: ComponentFixture<ChipSeletorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipSeletorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipSeletorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
