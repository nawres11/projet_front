import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import {ConfirmDialogModule} from 'primeng/confirmdialog';
//import {ConfirmationService, Message} from 'primeng/api';

@Component({
  selector: 'app-create-opening-request',
  templateUrl: './create-opening-request.component.html',
  styleUrls: ['./create-opening-request.component.css'],
  //providers: [ConfirmationService]
})
export class CreateOpeningRequestComponent  {
/*
  msgs: Message[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  confirm() {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to proceed?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
          },
          reject: () => {
              this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
          }
      });
  }*/
}