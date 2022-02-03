import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  loginControl = new FormControl();
  passwordControl = new FormControl();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  connectUser() {
    console.log(this.loginControl.value);
    console.log(this.passwordControl.value);

    const login = this.loginControl.value;
    const password = this.passwordControl.value;

    this.httpClient.post('http://localhost:3000/login', {
      login,
      password
    }).subscribe((loginResult: any) => {
      localStorage.setItem('id', loginResult.id);
    });

  }
}
