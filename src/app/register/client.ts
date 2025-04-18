import {v4 as uuid} from 'uuid'

export class Client {

  id?: string;
  nif?:  string;
  name?:  string;
  phone?:  number;
  date?: string;






  static newClient(){
    const client = new Client()
    client.id = uuid();


    return client
  }


}
