import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Serveur} from '../../../entities/Serveur';
import {ServerService} from '../../../services/server/server.service';
import {ActivatedRoute,Router} from '@angular/router';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})

export class ServerListComponent implements OnInit {
  
  
  servers: any=[];
  // server: Serveur;
  id: number;
  public showAddServer: boolean;
  blurAll: boolean;
  showModifServer: boolean;
  showDetails: boolean;
  public reloadData$ = this.serverService.serverCreated$.pipe(
    tap(serverCreated => this.reloadData())
  );

  currentServer = null;

  constructor(private serverService: ServerService,private route: ActivatedRoute, private router: Router,) {
    this.router.events.subscribe((val) => {this.reloadData(); });
   }

   ngOnInit() {
    this.blurAll = false;}

  reloadData() {

    // this.server = new Serveur();
    this.serverService.getServers().subscribe(
      _servers => this.servers = _servers
    );
    console.log(this.servers);
    
  }
  
  details(id: number) {
    // this.serverService.getServertById(id);
    this.showDetails = true;
    this.blurAll = true;
      // this.id = this.route.snapshot.params['id'];
      this.serverService.getServertById(id).subscribe(data => {
        console.log(data);
        // this.server = data;
        this.currentServer = data;
      }, error1 => console.log(error1));
  }
    
  
  
  updateServer(id: number) {
    this.showModifServer = true;
    this.blurAll = true;
    this.serverService.updateServer(id, this.currentServer).subscribe(success => {
      this.reloadData();  
    }, 

    err => console.error(err));
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




