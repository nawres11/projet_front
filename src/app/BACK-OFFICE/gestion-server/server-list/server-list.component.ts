import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Serveur} from '../../../entities/Serveur';
import {ServerService} from '../../../services/server/server.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})

export class ServerListComponent implements OnInit {
  
  
  servers: any=[];
  server: Serveur;
  id: number;
  public showAddServer: boolean;
  blurAll: boolean;
  showModifServer: boolean;
  showDetails: boolean;
  

  constructor(private serverService: ServerService, private router: Router) {
    this.router.events.subscribe((val) => {this.reloadData(); });
   }

   ngOnInit() {
    this.blurAll = false;}

  reloadData() {

    this.server = new Serveur();
    this.servers = this.serverService.getServers();
    console.log(this.servers);
    /*https://guide-angular.wishtack.io/angular/http/utilisation-de-httpclient */
  }
  
  details(id: number) {
    this.id = id;
    this.showDetails = true;
    this.blurAll = true;
  
  }
  updateServer(id: number) {
    this.id = id;
    this.reloadData();
    this.showModifServer = true;
    this.blurAll = true;
    
  }
  addServer() {
    this.showAddServer = true;
    this.blurAll = true;
    this.router.navigate(['admin/addServer']);
  }

  closeAdd() {
  this.showDetails = false;
  this.showAddServer= false;
  this.showModifServer = false;
  this.blurAll = false;
  this.reloadData();
  }

  closeAddFromAdd($event) {
    if ($event === true) {
      this.closeAdd();
    }
  }
  

}




