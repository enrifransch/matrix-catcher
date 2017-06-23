import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsListComponent } from './bts-list.component';

describe('BtsListComponent', () => {
  let component: BtsListComponent;
  let fixture: ComponentFixture<BtsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
