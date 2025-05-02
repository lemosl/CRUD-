import { Component, OnInit, inject } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import  {MatCardModule} from '@angular/material/card'
import  {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import{MatIconModule} from '@angular/material/icon'
import{MatButtonModule} from '@angular/material/button'
import{MatSnackBar} from '@angular/material/snack-bar'
import { Client } from './client';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';




@Component({
  selector: 'app-register',
  imports: [FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule,
    MatButtonModule,NgxMaskDirective,  ],
    providers:[
    provideNgxMask()
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  client: Client = Client.newClient();
  updated: boolean= false;
  snack: MatSnackBar = inject(MatSnackBar)

  constructor(
    private service: ClientService,
    private router: ActivatedRoute,
    private route: Router
    ){

  }

  ngOnInit(): void {

    this.router.queryParamMap.subscribe( (query:any) => {
      const params = query['params']
      const id = params['id']
      if(id){
        let ClienteFound = this.service.searchClientById(id);

        if(ClienteFound) {
           this.updated = true
           this.client = ClienteFound
        }
        else
        {
         this.client = Client.newClient();
         }
      }
    })
  }


  save(){
        if(!this.updated){
          this.service.save(this.client);
          this.client = Client.newClient();
          this.ShowMessage("Customer added successfully!");
        }else{
          this.service.NewUpdated(this.client)
          this.route.navigate(['/consult'])
          this.ShowMessage("Customer updated successfully!");

        }

  }

  ShowMessage(message: string){
    this.snack.open(message,"ok");
   }


}
