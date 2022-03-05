import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jusbid-model',
  templateUrl: './jusbid-model.component.html',
  styleUrls: ['./jusbid-model.component.scss']
})
export class JusbidModelComponent implements OnInit {

  @Input() isShowJusbidModel: boolean = false;
  @Input() isShowClose: boolean = true;
  @Output() closeJusbidModel = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModel(close: boolean): void {
    this.closeJusbidModel.emit(close);
  }

}
