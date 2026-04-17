import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.css',
})
export class Botao {
  isClicked: boolean = false;
  @Output()
  Click: EventEmitter<void> = new EventEmitter();
  @Input()
  label: string = "";
  clicked = () => {
    this.Click.emit();
  }  
}
