import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostListItemComponent } from './cost-list-item.component';

describe('CostListItemComponent', () => {
  let component: CostListItemComponent;
  let fixture: ComponentFixture<CostListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
