import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }
  disabled=true;
  alert()
  {
  confirm("are you sure want to update details")
  }
  alert1()
  {
  confirm("are you sure want to delet your account");
  }
  ngOnInit() {


  }

}
