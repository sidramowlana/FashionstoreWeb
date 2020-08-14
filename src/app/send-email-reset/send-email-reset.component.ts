import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-email-reset',
  templateUrl: './send-email-reset.component.html',
  styleUrls: ['./send-email-reset.component.css']
})
export class SendEmailResetComponent implements OnInit {
  sendEmailForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.sendEmailForm = new FormGroup({
      'email': new FormControl(null, Validators.required)
    })
  }

  onSendEmail(){
  }
}
