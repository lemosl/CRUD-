import { Injectable } from '@angular/core';
import { Client } from './register/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  static REPO_CLIENT = "_CLIENT";
  constructor() { }


  save(client:Client) {
    const storage = this.getStorage();
    console.log(localStorage.getItem(ClientService.REPO_CLIENT));
    storage.push(client);
    //update your BD
    localStorage.setItem(ClientService.REPO_CLIENT, JSON.stringify(storage));
  }

  NewUpdated(client: Client){

    const storage =this.getStorage();
    storage.forEach(c => {
      if(c.id === client.id){
          Object.assign(c,client);
      }
    })
    localStorage.setItem(ClientService.REPO_CLIENT, JSON.stringify(storage));
  }

  deletedItem(client : Client){
   const storage = this.getStorage();

   const newList = storage.filter(c=> client.id !== client.id )

   localStorage.setItem(ClientService.REPO_CLIENT, JSON.stringify(newList));

  // otherway
  // const indexItem = storage.indexOf(client);
  //if (indexItem >-1) {
  // storage.splice(indexIteam, 1)
  //}

  }

   ClientSearch(nameSearsh: string) : Client[] {



   const client = this.getStorage();

   if (!nameSearsh){
    return client;
   }

   return client.filter(client =>  client.name?.indexOf(nameSearsh) !== -1)


}

searchClientById(id: string): Client | undefined{
       const clients = this.getStorage()
       return clients.find(clients  => clients.id === id)
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
