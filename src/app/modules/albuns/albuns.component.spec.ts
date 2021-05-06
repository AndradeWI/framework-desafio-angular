import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunsComponent } from './albums.component';

describe('AlbunsComponent', () => {
  let component: AlbunsComponent;
  let fixture: ComponentFixture<AlbunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
