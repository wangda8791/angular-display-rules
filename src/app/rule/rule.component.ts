import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

import { Operators, PageOptions, InitialRuleValue } from 'src/utils/contants';
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
  @Output() formUpdateEmitter = new EventEmitter<any>();

  public operators: OperatorType[] = Operators;
  public pageOptions: PageOptionType[] = PageOptions;

  public validURL: boolean = true;

  public ruleForm = this.fb.group({
    page: [InitialRuleValue.page],
    operator: [InitialRuleValue.operator],
    url: [InitialRuleValue.url]
  });

  private formUpdatedSource = new Subject<any>();
  private formUpdated$ = this.formUpdatedSource.asObservable();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formUpdated$.subscribe(data => this.formUpdateEmitter.emit({index: this.index, data}));
  }

  changeURL() {
    if (this.ruleForm.controls.url.value) {
      this.validURL = true;
    } else {
      this.validURL = false;
    }
    this.updateFormValues();
  }

  removeClick() {
    this.removeEmitter.emit(this.index);
  }

  updateFormValues() {
    this.formUpdatedSource.next(this.ruleForm.getRawValue());
  }
}
