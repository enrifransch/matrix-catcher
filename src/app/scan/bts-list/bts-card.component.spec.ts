import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsCardComponent } from './bts-card.component';

describe('BtsCardComponent', () => {
  let component: BtsCardComponent;
  let fixture: ComponentFixture<BtsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
