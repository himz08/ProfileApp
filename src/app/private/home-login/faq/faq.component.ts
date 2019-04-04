import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private commonService : CommonService) { }
  
  ngOnInit() {
    this.commonService.headerChanged.emit('Faq');  // to update the header
  }

}
