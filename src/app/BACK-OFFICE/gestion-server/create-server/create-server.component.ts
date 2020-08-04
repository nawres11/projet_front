import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../../../services/server/server.service';
import { Serveur } from '../../../entities/Serveur';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Projet } from '../../../entities/Projet';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {

  @Output() closeAll = new EventEmitter<boolean>();
  server: Serveur;
  submitted = false;
  servers: any = [];
  createForm: FormGroup;
  serversList: Observable<any>;
  selectedProject:Projet;
  projectsList: Observable<any>;

  constructor(private formBuilder: FormBuilder,private serverService: ServerService, private router: Router) {
    this.server = new Serveur();
  }
 
  ngOnInit() {
    this.submitted = false;
    this.createForm = this.formBuilder.group({
      id: [this.server.id_serveur, [Validators.required]],
      intitule: [this.server.intitule, [Validators.required,Validators.maxLength(10)]],
      type: [this.server.type, [Validators.requiredTrue]],
      statut: [this.server.statut, [Validators.requiredTrue]],
      url: [this.server.url, [Validators.required,Validators.pattern]],
      port: [this.server.port, [
        Validators.required,
        Validators.maxLength(4)
      ]],
     
  });
}
 get f() { return this.createForm.controls; }

  save() {

    //this.serverService.createServer(this.server,this.server.Productcategory.idCategory
    this.serverService.createServer(this.server)
      .subscribe(
        data => console.log("server ", data),
        error1 => console.log(error1)
      );
    this.server = new Serveur();
    this.goToList();
  }
  
  closeThis() {
    this.submitted = true;
    this.save();
    this.closeAll.emit(true);
  }

  goToList() {
    this.serverService.getServers();
    this.router.navigate(['admin/ServerList']);
  }
}
