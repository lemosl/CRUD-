import { Injectable } from '@angular/core';
import { Client } from './register/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  static REPO_CLIENT = "_CLIENT";
  constructor() { }


  save(client:Client) {

    console.log(client)
    const storage = this.getStorage();
    storage.push(client);

    //update your BD
    localStorage.setItem(ClientService.REPO_CLIENT, JSON.stringify(storage))

  }

   ClientSearch(nameSearsh: string) : Client[] {



   const client = this.getStorage();

   if (!nameSearsh){
    return client;
   }

   return client.filter(client =>  client.name?.indexOf(nameSearsh) !== -1)


}



 private getStorage() : Client[] {

    const ClientRepository = localStorage.getItem (ClientService.REPO_CLIENT);
  //if there is a database
      if(ClientRepository){
        const client: Client[] = JSON.parse(ClientRepository);
        return client;
      }


      const client: Client[] = [];
      localStorage.setItem(ClientService.REPO_CLIENT, JSON.stringify(client));
       return client;
  }
}
