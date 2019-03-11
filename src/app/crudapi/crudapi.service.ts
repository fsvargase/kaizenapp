import { Injectable } from '@angular/core';
import { Crudapi } from './crudapi';
import { CRUDAPI_ITEMS } from './crudapi-data';
import { findIndex } from 'lodash';

@Injectable()
export class CrudapiService {
  private pItems = CRUDAPI_ITEMS;

  getCrudapisFromData(): Crudapi[] {
    console.log(this.pItems);
    return this.pItems
  }

  addCrudapi(crudapi: Crudapi) {
    this.pItems.push(crudapi);
    console.log(this.pItems);
  }

  updateCrudapi(crudapi: Crudapi) {
    let index = findIndex(this.pItems, (p: Crudapi) => {
      return p.id === crudapi.id;
    });
    this.pItems[index] = crudapi;
  }

  deleteCrudapi(crudapi: Crudapi) {
    this.pItems.splice(this.pItems.indexOf(crudapi), 1);
    console.log(this.pItems);
  }

}

  // getProductsFromService(): Product[] {
  //   return [{
  //   id: 1,
  //   name: 'Scissors',
  //   description: 'use this to cut stuff',
  //   price: 4.99
  // }, {
  //   id: 2,
  //   name: 'Steak Knives',
  //   description: 'use this to eat food with',
  //   price: 10.99
  // }, {
  //   id: 3,
  //   name: 'Shot Glass',
  //   description: 'use this to take shots',
  //   price: 5.99
  // }]
  // }
