import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { Flux } from 'src/app/entities/Flux';
import {FluxService} from'../../../services/flux/flux.service';




@Component({
  selector: 'app-create-opening-request',
  templateUrl: './create-opening-request.component.html',
  styleUrls: ['./create-opening-request.component.css'],

})
export class CreateOpeningRequestComponent  {

  @Output() closeAll = new EventEmitter<boolean>();
  flux: Flux;
  submitted = false;
  id:number;
  fluxs:Flux[];
  serversList: Observable<any>
  constructor(private fluxService:FluxService, private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    this.flux= new Flux(); 
  }

  save() {
    
    this.fluxService.createFlux(this.flux,this.id).subscribe(data => console.log(data), error1 => console.log(error1));
    this.flux= new Flux();
    this.validate();
  } 

closeThis() {
  this.submitted = true;
  this.save();
  this.closeAll.emit(true);
}

validate() {
  
  this.router.navigate(['admin/validate']);
}

}