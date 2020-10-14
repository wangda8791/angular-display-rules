import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Operators, PageOptions } from 'src/utils/contants';
import { OperatorType, PageOptionType } from 'src/utils/types';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss'],
})
export class RuleComponent implements OnInit {

  @Input() index: number;
  @Input() isLast: boolean = false;
  @Output() removeEmitter = new EventEmitter<number>();

  public operators: OperatorType[] = Operators;
  public pageOptions: PageOptionType[] = PageOptions;

  public validURL: boolean = true;

  public ruleForm = this.fb.group({
    page: [0],
    operator: [0],
    url: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  changeURL() {
    if (this.ruleForm.controls.url.value) {
      this.validURL = true;
    } else {
      this.validURL = false;
    }
  }

  removeClick() {
    this.removeEmitter.emit(this.index);
  }
}
