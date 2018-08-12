import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  allowEdit = true;
  rightBtnName = 'Edit';
  leftBtnName: string = 'Delete';
  @Input() list;
  @Output() leftBtn: EventEmitter<String> = new EventEmitter<String>();
  @Output() rightBtn: EventEmitter<String> = new EventEmitter<String>();
  @Output() editBtnCard: EventEmitter<String> = new EventEmitter<String>();
  @Output() deleteBtnCARD: EventEmitter<String> = new EventEmitter<String>();
  @Output() saveBtnCARD: EventEmitter<String> = new EventEmitter<String>();
  @Output() sendNameCARDFn: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendEventIDCARD: EventEmitter<any> = new EventEmitter<any>();
 

  userName='alo';
  rightBtnCardFn(eventID) {
    //console.log(this.allowEdit)
    if (this.allowEdit){//nowEdit
    //this.list.name='hi';
    this.rightBtnName = 'Save';
    this.leftBtnName = 'Cancel';
    this.allowEdit = false;
    this.editBtnCard.emit(eventID);
    }
    else if (!this.allowEdit){//nowSave
      this.rightBtnName = 'Edit';
      this.leftBtnName = 'Delete';
      this.allowEdit = true;
      this.sendEventIDCARD.emit(eventID);
      this.saveBtnCARD.emit(eventID);
      this.sendNameCARDFn.emit(this.userName);
      console.log('emit')
      // this.userName.emit();
      //console.log(this.userName);
      //this.deleteBtnCard.emit(eventID);
      }
    // console.log(eventID);
    // console.log(event.type);
   // return eventID;
  }
  leftBtnCardFn(eventID) {
    //console.log(this.allowEdit)
    if (this.allowEdit){
    console.log('yuyu');
    this.deleteBtnCARD.emit(eventID);
    }
    else if (!this.allowEdit){
      this.rightBtnName = 'Edit';
      this.leftBtnName = 'Delete';
      this.allowEdit = true;
      //this.deleteBtnCard.emit(eventID);
      }
    console.log(eventID);
    console.log(event.type);
  }
}


