import { TestBed } from '@angular/core/testing';

import { AppDefinitionService } from './app-definition.service';

describe('AppDefinitionService', () => {
  let service: AppDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
