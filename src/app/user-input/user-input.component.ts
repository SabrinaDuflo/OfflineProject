import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from '../local-storage-service.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  fName =  new FormControl('');
  lName = new FormControl('');
  email = new FormControl('');

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
  }

  submit(fName: string, lName: string, email: string){
    
    let newCustomer = [fName, lName, email];
    this.localStorageService.storeOnLocalStorage(newCustomer);
  }

}
