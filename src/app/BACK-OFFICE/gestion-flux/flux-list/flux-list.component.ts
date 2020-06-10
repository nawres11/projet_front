import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Serveur} from '../../../entities/Serveur';
import {ServerService} from '../../../services/server/server.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-flux-list',
  templateUrl: './flux-list.component.html',
  styleUrls: ['./flux-list.component.css']
})
export class FluxListComponent implements OnInit {
  
    
    servers: Observable<any>;
    server: Serveur;
    id: number;
    
  
  
    constructor(private serverService: ServerService, private router: Router) {
      this.router.events.subscribe((val) => {this.reloadData(); });
     }
  
    ngOnInit() {
      this.getServerList();
    }
    reloadData() {
    
      this.server = new Serveur();
      this.servers = this.serverService.getServers();
    }
    
    getServerList(): void {
      this.serverService.getServers()
          .subscribe(servers => this.servers =servers);
    }
      
      addFlux() {
        this.getServerList();
        this.router.navigate(['addFlux']);
      }
    
  }  