import { SigninComponent } from './../signin/signin.component';
import { SignupComponent } from './../signup/signup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from  '@angular/material/dialog';

@Component({
  selector: 'navigaiton-bar',
  templateUrl: './navigaiton-bar.component.html',
  styleUrls: ['./navigaiton-bar.component.css']
})
export class NavigaitonBarComponent implements OnInit{
  constructor(private  dialogRef : MatDialog) { }

  ngOnInit(): void {
  }

  openRegisterDialog(){
    this.dialogRef.open(SignupComponent, {
      height: '300px',
      width: '435px',
    });
  }
  openLoginDialog(){
    this.dialogRef.open(SigninComponent, {
      height: '300px',
      width: '435px',
    })
  }
}
