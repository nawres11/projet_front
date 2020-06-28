import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-opening-request',
  templateUrl: './opening-request.component.html',
  styleUrls: ['./opening-request.component.css']
})
export class OpeningRequestComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  submit() {
  
    this.router.navigate(['admin/FluxList']);
  }
  
}
