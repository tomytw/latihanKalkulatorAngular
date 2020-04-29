import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  resvarpass = ""
  ngOnInit() {
    let res = this.route.snapshot.paramMap.get('res');
    this.resvarpass = res;
  }

}