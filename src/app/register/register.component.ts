import { Component } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import  {MatCardModule} from '@angular/material/card'
import  {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import{MatIconModule} from '@angular/material/icon'
import{MatButtonModule} from '@angular/material/button'
import { Client } from './client';




@Component({
  selector: 'app-register',
  imports: [FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, MatIconModule,
    MatButtonModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  client: Client = Client.newClient()

  save(){
    console.log("Os Dados cliente: ", this.client)
  }

}
