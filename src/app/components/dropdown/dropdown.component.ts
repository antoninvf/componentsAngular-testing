import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input()
  items: string[] = []

  public toggleBool: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
