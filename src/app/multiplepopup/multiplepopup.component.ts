import { Component, OnInit, ViewChild } from '@angular/core';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-multiplepopup',
  templateUrl: './multiplepopup.component.html',
  styleUrls: ['./multiplepopup.component.css']
})
export class MultiplepopupComponent implements OnInit {

  constructor() { }
  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;
  @ViewChild('popup3') popup3: Popup;
  @ViewChild('popup4') popup4: Popup;
  ngOnInit() {
  }


  showPopup1(){
    this.popup1.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#4180ab",
            header: "Single Popup on a page"}
    this.popup1.show(this.popup1.options);
  }

  showPopup2(){
    this.popup2.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#5cb85c",
            header: "Size 60% of page - color = #5cb85c",
            widthProsentage:60,
            animation:"fadeInUp"}
    this.popup2.show(this.popup2.options);
  }

  showPopup3(){
    this.popup3.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#333",
            header: "Animations...",
            widthProsentage:60,
            animation: "bounceIn"}
    this.popup3.show(this.popup3.options);
  }

  showPopup4(){
    this.popup4.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-default",
            color: "#5cb85c",
            header: "Events...",
            widthProsentage:50,
            animation: "bounceInDown"}
    this.popup4.show(this.popup4.options);
  }

  YourConfirmEvent(){
  alert('You cliked confirm');
  this.popup4.hide();
}

}
