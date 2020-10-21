import { Component, Input, OnInit } from '@angular/core';

import { idGen } from 'src/utils';
import { InitialRuleValue } from 'src/utils/contants';

@Component({
  selector: 'app-rule-group',
  templateUrl: './rule-group.component.html',
  styleUrls: ['./rule-group.component.scss']
})
export class RuleGroupComponent implements OnInit {

  @Input() ruleTitle: string = '';
  @Input() ruleDesc: string = '';

  public ruleKeyGroup: string[] = [idGen()];
  public ruleValueGroup: Array<any> = [
    InitialRuleValue
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addRule(): void {
    this.ruleKeyGroup.push(idGen());
    this.ruleValueGroup.push(InitialRuleValue);
  }

  removeRule(index: number): void {
    this.ruleKeyGroup.splice(index, 1);
    this.ruleValueGroup.splice(index, 1);
  }

  updateFormData(event): void {
    const { index, data } = event;
    this.ruleValueGroup[index] = data;
  }
}
