import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwcharacterDetailsComponent } from './swcharacter-details.component';

describe('SwcharacterDetailsComponent', () => {
  let component: SwcharacterDetailsComponent;
  let fixture: ComponentFixture<SwcharacterDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwcharacterDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwcharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
