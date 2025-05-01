import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout'
import  {MatCardModule} from '@angular/material/card'
import  {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import{MatIconModule} from '@angular/material/icon'
import{MatButtonModule} from '@angular/material/button'
import{MatTableModule} from '@angular/material/table'
import { ClientService } from '../client.service';
import { Client } from '../register/client';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-consult',
  imports: [FlexLayoutModule,
            MatCardModule,
            MatFormFieldModule,
            MatButtonModule,
            MatInputModule,
            MatButtonModule,
            MatTableModule,
            FormsModule,
          CommonModule,
      MatIconModule],
  templateUrl:  './consult.component.html',
  styleUrl: './consult.component.scss'
})
export class ConsultComponent implements OnInit  {
  nameSearsh: string ="";
  clientsList : Client[] = [];
  columnltable: string[] = ["id","name","nif","dateOfBirth","email", "phone","action"];
  deleted:boolean = false;

  constructor(

    private service: ClientService,
    private route: Router


  ){
  }

ngOnInit(){
this.clientsList = this.service.ClientSearch('');


}


search(){
  this.clientsList = this.service.ClientSearch(this.nameSearsh)
}

prepareEdit(id: string){

  this.route.navigate( ['/register'], { queryParams: {"id": id} })


 }

 prepareDelete(){
  this.deleted = true;
 }

 deleteItem(client: Client){
  this.service.deletedItem(client);
  this.deleted = false;
 }

}
