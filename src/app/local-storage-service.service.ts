import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

// key that is used to access the data in local storageconst 
let STORAGE_KEY = 'local_customer';

@Injectable()
export class LocalStorageService {
     anotherCustomer = [];
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(customer: Array<String>): void {
          
          // get array of tasks from local storage
          const currentCustomer = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentCustomer.push({
              firstName: customer[0],
              lastName: customer[1],
              email: customer[2]
          });
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentCustomer);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
     }
}