import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dashboardCategoryResolver } from './dashboard-category.resolver';

describe('dashboardCategoryResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => dashboardCategoryResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
