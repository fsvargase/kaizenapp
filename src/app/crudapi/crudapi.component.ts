import { Component, OnInit } from '@angular/core';
import { CrudapiService } from './crudapi.service';
import { Crudapi } from './crudapi';
import { clone } from 'lodash';

@Component({
   // moduleId: module.id,
   selector: 'app-crudapi',
   templateUrl: './crudapi.component.html',
   styleUrls: ['./crudapi.component.scss']
})

export class CrudapiComponent implements OnInit {
  crudapi: Crudapi[];
  crudapiForm: boolean = false;
  editCrudapiForm: boolean = false;
  isNewForm: boolean;
  newCrudapi: any = {};
  editedCrudapi: any = {};

  constructor(private _crudapiService: CrudapiService) { }

  ngOnInit() {
    this.getCrudapis();
  }

  getCrudapis() {
    this.crudapi = this._crudapiService.getCrudapisFromData();
  }

  showEditCrudapiForm(crudapi: Crudapi) {
    if(!crudapi) {
      this.crudapiForm = false;
      return;
    }
    this.editCrudapiForm = true;
    this.editedCrudapi = clone(crudapi);
  }

  showAddCrudapiForm() {
    // resets form if edited crudapi
    if(this.crudapi.length) {
      this.newCrudapi = {};
    }
    this.crudapiForm = true;
    this.isNewForm = true;
  }

  saveCrudapi(crudapi: Crudapi) {
    if(this.isNewForm) {
      // add a new crudapi
      this._crudapiService.addCrudapi(crudapi);
    }
    this.crudapiForm = false;
  }

  removeCrudapi(crudapi: Crudapi) {
    this._crudapiService.deleteCrudapi(crudapi);
  }

  updateCrudapi() {
    this._crudapiService.updateCrudapi(this.editedCrudapi);
    this.editCrudapiForm = false;
    this.editedCrudapi = {};
  }

  cancelNewCrudapi() {
    this.newCrudapi = {};
    this.crudapiForm = false;
  }

  cancelEdits() {
    this.editedCrudapi = {};
    this.editCrudapiForm = false;
  }

}
