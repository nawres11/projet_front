import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Serveur} from '../../../entities/Serveur';
import {Flux} from '../../../entities/Flux';
import { FluxService} from '../../../services/flux/flux.service';
import {ServerService} from '../../../services/server/server.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-flux-list',
  templateUrl: './flux-list.component.html',
  styleUrls: ['./flux-list.component.css']
})
export class FluxListComponent implements OnInit {
  
  fluxs: Observable<any>;
  flux: Flux;
  server: Serveur;
  id: number;
  public showAddFlux: boolean;
  blurAll: boolean;

  constructor(private fluxService: FluxService, private router: Router) {
    this.router.events.subscribe((val) => {this.reloadData(); }); }

  ngOnInit() {
    this.blurAll = false;
    
  }
  reloadData() {

    this.flux = new Flux ();
    this.fluxs = this.fluxService.getFluxs();
  }
 
  addFlux() {
    this.showAddFlux = true;
    this.blurAll = true;
    this.router.navigate(['admin/addFlux']);
  }

  closeAdd() {
 
  this.showAddFlux = false;
  this.blurAll = false;
  this.reloadData();
  }

  closeAddFromAdd($event) {
    if ($event === true) {
      this.closeAdd();
    }
  }
}