import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLineComponent } from './ad-line.component';

describe('AdLineComponent', () => {
  let component: AdLineComponent;
  let fixture: ComponentFixture<AdLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
