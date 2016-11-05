import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  formModel: FormGroup;


  // formModel: FormGroup = new FormGroup({
  //   dateRange: new FormGroup({
  //     from: new FormControl(),
  //     to: new FormControl()
  //   })
  // });

  constructor() {
    this.formModel = new FormGroup({
      'username': new FormControl(),
      'ssn': new FormControl(),
      'passwordsGroup': new FormGroup({
        'password': new FormControl(),
        'pconfirm': new FormControl()
      }),
      'dateRange': new FormGroup({
        'from': new FormControl(),
        'to': new FormControl()
      })
    });
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }
}
