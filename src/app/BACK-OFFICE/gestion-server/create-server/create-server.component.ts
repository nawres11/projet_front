import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import{ServerService} from '../../../services/server/server.service';
import {Serveur} from '../../../entities/Serveur';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {

   @Output() closeAll = new EventEmitter<boolean>();
  server: Serveur;
  submitted = false;
  servers:Serveur[];
  serversList: Observable<any>
  constructor(private serverService: ServerService, private router: Router) {
  }
 


  ngOnInit() {
    this.submitted = false;
    this.server= new Serveur();
     
    
    }
  
  
  save() {
    
      this.serverService.createServer(this.server, this.server.id_serveur)
      this.server = new Serveur();
      this.serverService.getServers().subscribe(data => this.serversList = data, error =>console.log(error));

    } 
  
  closeThis() {
    this.submitted = true;
    this.save();
    this.closeAll.emit(true);
  }
}
