import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {
  timer: number = 45;
  interval: any
  constructor() {
  }
  ngOnInit(): void {

    this.interval = setInterval(() => {
      if (this.timer === 1) {
        clearInterval(this.interval)
      }
      this.timer -= 1;
    }, 1000);

  }
  clickButton(value) {
  }
}
