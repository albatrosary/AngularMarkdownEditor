import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="onClick(0)">編集</button>
    <button (click)="onClick(1)">表示</button>
    <textarea *ngIf="condition" [(ngModel)]="hoge"></textarea>
    <div *ngIf="!condition" [innerHtml]="hoge | markdown"></div>
    `,
    styles: [`
      button {
        border: 0;
        padding: 0 20px 0 20px;
        font-size: 1.5rem;
        border-bottom: 2px solid #12102b;
        background-color: #ffffff;
      }
      button:focus {
        border: 0;
        outline: -webkit-focus-ring-color auto 0px;
      }
      textarea {
        box-sizing: border-box;
        border: 1px solid #e2e2e2;
        width: 100%;
        height: 100%;
      }
      textarea:focus {
        outline: -webkit-focus-ring-color auto 0px;
      }
      div {
        box-sizing: border-box;
        border: 1px solid #e2e2e2;
        width: 100%;
        height: 100%;
      }
    `]
})

export class AppComponent {
  public hoge: string;
  public condition: boolean = true;
  constructor () {
    this.hoge = localStorage.getItem('amke');
  }
  onClick(i: number) {
    switch(i) {
    case 0:
      this.condition = true; 
    break;
    case 1:
      this.condition = false;
    break;
    }
  }
}
