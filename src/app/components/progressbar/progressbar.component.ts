import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input()
  public values: string[] = []

  public finalValues: string[] = []

  public changePercentages() {
    let sum = 0
    let vals: number[] = []
    for (let i = 0; i < this.values.length; i++) {
      sum += parseInt(this.values[i])
    }
    for (let i = 0; i < this.values.length; i++) {
      vals[i] = (parseInt(this.values[i]) / sum) * 100
    }
    for (let i = 0; i < this.values.length; i++) {
      this.finalValues.push(vals[i].toFixed(2).toString())
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.changePercentages()

  }
}
