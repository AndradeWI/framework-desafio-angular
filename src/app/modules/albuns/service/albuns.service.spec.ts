import { TestBed } from '@angular/core/testing';

import { AlbunsService } from './albuns.service';

describe('AlbunsService', () => {
  let service: AlbunsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbunsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
