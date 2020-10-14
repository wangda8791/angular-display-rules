import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleGroupComponent } from './rule-group.component';

describe('RuleGroupComponent', () => {
  let component: RuleGroupComponent;
  let fixture: ComponentFixture<RuleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
