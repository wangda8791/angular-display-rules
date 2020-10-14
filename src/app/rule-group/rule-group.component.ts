import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule-group',
  templateUrl: './rule-group.component.html',
  styleUrls: ['./rule-group.component.scss']
})
export class RuleGroupComponent implements OnInit {

  public lastIndex: number = 0;
  public ruleIndexGroup: number[] = [0];

  constructor() { }

  ngOnInit(): void {
  }

  addRule() {
    this.lastIndex++;
    this.ruleIndexGroup.push(this.lastIndex);
  }

  removeRule(index: number) {
    this.ruleIndexGroup.splice(index, 1);
  }

}
