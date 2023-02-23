import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ConversationalForm } from "conversational-form";
import { isArray } from 'lodash';
import * as moment from 'moment';
import { urlConstants } from 'src/app/core/constants/urlConstants';
import { HttpService, LoaderService, ToastService } from 'src/app/core/services';
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
  arrayKeys = ['recommendedFor', 'categories', 'medium']
  timeKeys = ['startDate', 'startTime']
  obj = {};
  fields = [
    {
      tag: "cf-robot-message",
      "cf-questions": "Hello, I am here to help you with creating your session! Please answer the following questions",
    },
    {
      tag: "input",
      required: "required",
      type: "text",
      name: "aboutSession",
      "cf-questions": "What is this session about?",
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommendedFor",
      "cf-questions": "Choose the recommended attendee?",
      "cf-label": "Head masters",
      value: '{"label":"Head master","value":"hm"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommendedFor",
      "cf-label": "District education officer",
      value: '{"label":"District education officer","value":"deo"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "recommendedFor",
      "cf-label": "Block education officer",
      value: '{"label":"Block education officer","value":"beo"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-questions": "Choose the category which this session belongs to?",
      "cf-label": "School process",
      value: '{"label":"School process","value":"School process"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-label": "Educational leadership",
      value: '{"label":"Educational leadership","value":"Educational leadership"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "categories",
      "cf-label": "SQAA",
      value: '{"label":"SQAA", "value":"SQAA"}'
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().format("YYYY-MM-DD"),
      "cf-questions": "Choose the start date?",
      "cf-label": moment().format("DD-MM-YYYY"),

    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(1, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(1, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(2, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(2, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(3, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(3, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(4, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(4, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(5, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(5, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startDate",
      value: moment().add(6, 'd').format("YYYY-MM-DD"),
      "cf-label": moment().add(6, 'd').format("DD-MM-YYYY"),
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
      value: '1:00',
      "cf-questions": "Choose the start time?",
      "cf-label": moment().format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '2:00',
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
      "cf-label": moment().add(1, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '3:00',
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
      "cf-label": moment().add(2, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '4:00',
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
      "cf-label": moment().add(3, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '5:00',
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
      "cf-label": moment().add(4, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '6:00',
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
      "cf-label": moment().add(1, 'h').format("HH") + ':00'
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '7:00',
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
      "cf-label": "7:00"
    },
    {
      tag: "input",
      type: "radio",
      name: "startTime",
      value: '8:00',
      // "cf-conditional-startDate": moment().format("DD-MM-YYYY"),
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
      value: '{"label":"English","value":"1"}'
    },
    {
      tag: "input",
      type: "checkbox",
      name: "medium",
      "cf-label": "Hindi",
      value: '{"label":"Hindi","value":"2"}'
    },
    {
      tag: "input",
      type: "file",
      name: "images",
      accept: "image/*",
      "cf-questions": "Finally, please upload image for your session",
    },
  ];

  constructor(private loaderService: LoaderService, private http: HttpService, private toast: ToastService) { }


  ngOnInit() {
    this.formulario = ConversationalForm.startTheConversation({
      options: {
        formEl: document.getElementById("form"),
        theme: "red",
        scrollAcceleration: 0,
        showProgressBar: true,
        hideUserInputOnNoneTextInput: false,
        submitCallback: this.submitCallbackRobot.bind(this),
        preventAutoFocus: false,
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
    this.formulario.addRobotChatResponse(
      "Thanks, you can preview the provided details now."
    );
    // for (const key in formDataSerialized) {
    //   if(isArray(formDataSerialized[key])){
    //     console.log(formDataSerialized[key])
    //   }
    // }
    formDataSerialized.startDate = new Date(formDataSerialized.startDate + " " + formDataSerialized.startTime).getTime();
    formDataSerialized.endDate = moment(formDataSerialized.startDate).add(formDataSerialized.duration, 'm').toDate().getTime();
    formDataSerialized.startDate=formDataSerialized.startDate/1000
    formDataSerialized.endDate=formDataSerialized.endDate/1000
    this.data = {
      "aboutSession": formDataSerialized.aboutSession,
      "startDate": formDataSerialized.startDate,
      "endDate": formDataSerialized.endDate};
    this.arrayKeys.forEach((value: string) => {
      let i = 0;
      formDataSerialized[value].forEach((entry: any) => {
        formDataSerialized[value][i] = JSON.parse(entry)
        i++;
      })
    })
    setTimeout(async () => {
      let response = await this.getChatGPTResponse()
      console.log("api res: ",response)
      formDataSerialized.title = response.sessionTitle;
      formDataSerialized.description = response.sessionDescription;
      this.onSubmit.emit(formDataSerialized)
      this.formulario.remove()
    }, 2000)
  }

  async getChatGPTResponse() {
    const config = {
      url: urlConstants.API_URLS.AUTOFILL,
      payload: this.data,
    };
    try {
      let data: any = await this.http.post(config);
      return data;
    }
    catch (error) {
    }
  }
  handleError(error: any): any {
    console.log(error)
    this.toast.showToast("Something went wrong","danger")
  }
}
