import { Component, OnInit } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-singlepopup',
  templateUrl: './singlepopup.component.html',
  styleUrls: ['./singlepopup.component.css']
})
export class SinglepopupComponent implements OnInit {

  constructor(private popup:Popup) { }
  

  ngOnInit() {
  }

  showSample(){
    this.popup.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#4180ab",
            header: "Single Popup on a page"}
    this.popup.show();
  }


}
