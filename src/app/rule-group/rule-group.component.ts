import { Component, OnInit } from '@angular/core';

import { InitialRuleValue } from 'src/utils/contants';

@Component({
  selector: 'app-rule-group',
  templateUrl: './rule-group.component.html',
  styleUrls: ['./rule-group.component.scss']
})
export class RuleGroupComponent implements OnInit {

  public lastIndex: number = 0;
  public ruleIndexGroup: number[] = [0];
  public ruleValueGroup: Array<any> = [
    InitialRuleValue
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addRule() {
    this.lastIndex++;
    this.ruleIndexGroup.push(this.lastIndex);
    this.ruleValueGroup.push(InitialRuleValue);
  }

  removeRule(index: number) {
    this.ruleIndexGroup.splice(index, 1);
  }

  updateFormData(event) {
    const { index, data } = event;
    this.ruleValueGroup[index] = data;
  }
}
