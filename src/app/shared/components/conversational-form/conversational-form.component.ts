import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ConversationalForm } from "conversational-form";
@Component({
  selector: 'app-conversational-form',
  templateUrl: './conversational-form.component.html',
  styleUrls: ['./conversational-form.component.scss'],
})
export class ConversationalFormComponent implements OnInit {
  @ViewChild("form") form: ElementRef;
  @Output() onSubmit = new EventEmitter();
formulario: any;
  data: any;
  obj = {};
  fields = [
    {
      tag: "cf-robot-message",
      "cf-questions": "Hello, I am here to help you with creating your session! Please answer the following questions",
    },
    {
      tag: "input",
      type: "text",
      required: "required",
      name: "title",
      "cf-questions": "What is the session title?",
    },
    {
      tag: "input",
      required: "required",
      type: "text",
      name: "description",
      "cf-questions": "Please provide a description for the session",
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommmendedFor",
      "cf-questions": "Choose the recommended attendee?",
      "cf-label": "Head masters",
      value: "hm"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommmendedFor",
      "cf-label": "District education officer",
      value: "deo"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommmendedFor",
      "cf-label": "Block education officer",
      value: "beo"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-questions": "Choose the category which this session belongs to?",
      "cf-label": "School process",
      value: "School process"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-label": "Educational leadership",
      value: "Educational leadership"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-label": "SQAA",
      value: "SQAA"
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: new Date().getDate() + "/" + new Date().getMonth(),
      "cf-questions": "Choose the start date?",
      "cf-label": new Date().getDate() + "/" + new Date().getMonth(),

    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: new Date().getDate() + "/" + new Date().getMonth(),
      "cf-label": new Date().getDate()+1+ "/" + new Date().getMonth(),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: new Date().getDate() + "/" + new Date().getMonth(),
      "cf-label": new Date().getDate()+2+ "/" + new Date().getMonth(),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: new Date().getDate() + "/" + new Date().getMonth(),
      "cf-label": new Date().getDate()+3+ "/" + new Date().getMonth(),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: new Date().getDate() + "/" + new Date().getMonth(),
      "cf-label": new Date().getDate()+4+ "/" + new Date().getMonth(),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: new Date().getDate() + "/" + new Date().getMonth(),
      "cf-label": new Date().getDate()+5+ "/" + new Date().getMonth(),
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '1:00',
      "cf-questions": "Choose the start time?",
      "cf-label": "1:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '2:00',
      "cf-label": "2:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '3:00',
      "cf-label": "3:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '4:00',
      "cf-label": "4:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '5:00',
      "cf-label": "5:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '6:00',
      "cf-label": "6:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '7:00',
      "cf-label": "7:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '8:00',
      "cf-label": "8:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '30',
      "cf-questions": "Please select the duration of the session",
      "cf-label": "30 min"
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '60',
      "cf-label": "1 hr"
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '90',
      "cf-label": "1 hr 30 min"
    },
    {
      tag: "input",
      type: "radio",
      name: "duration",
      value: '120',
      "cf-label": "2 hrs"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "medium",
      "cf-questions": "Great!!!. Now tell me the language in which you planning to take the session",
      "cf-label": "English",
      value: "1"
    },
    {
      tag: "input",
      type: "checkbox",
      name: "medium",
      "cf-label": "Hindi",
      value: "2"
    },
  ];

  constructor() {}


  ngOnInit() {
    this.formulario = ConversationalForm.startTheConversation({
      options: {
        formEl: document.getElementById("form"),
        theme: "dark",
        scrollAcceleration: 0,
        showProgressBar: true,
        hideUserInputOnNoneTextInput: true,
        submitCallback: this.submitCallbackRobot.bind(this),
        preventAutoFocus: true,
        robotImage:
          "https://pbs.twimg.com/profile_images/1120639951056572417/Rs0Dm2mm_400x400.jpg",
        userImage: "https://cdn.worldvectorlogo.com/logos/ubuntu-5.svg",
      },
      tags: this.fields,
    });
    this.form.nativeElement.appendChild(this.formulario.el);
  }

  submitCallbackRobot() {
    let formDataSerialized = this.formulario.getFormData(true);
    this.data = formDataSerialized;
    this.formulario.addRobotChatResponse(
      "Thanks, " +
        this.data.title +
        " you can preview the provided details now."
    );
    this.onSubmit.emit(formDataSerialized)
    setTimeout(()=>{
      this.formulario.remove()
    },2000)
    // this.sendEmail(this.obj);
  }

  // sendEmail(data) {
  //   alert('EMAIL SEND WITH SUCCESS');
  // }
}
