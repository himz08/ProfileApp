import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  pageTittle : string;
  bookingCount : any;
  fullName : string;


  constructor(private commonService : CommonService) { }

  ngOnInit() {

    this.commonService.headerChanged.subscribe(   // for dynamical updation of heading

      (data : string) => {        
        this.pageTittle = data;
      }
    );

  }

}
