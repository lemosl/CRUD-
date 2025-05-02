import {v4 as uuid} from 'uuid'

export class Client {

  id?: string;
  name?:  string;
  nif?:  string;
  phone?:  number;
  date?: string;
  email?: string;
  deleted: boolean = false;





  static newClient(){
    const client = new Client()
    client.id = uuid();


    return client
  }


}
