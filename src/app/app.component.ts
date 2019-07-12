import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'OfflineProject';

  constructor(private localStorageService: LocalStorageService) {}
  
  ngOnInit(): void {
    //const newTodo = 'new todo'; 
    //this.localStorageService.storeOnLocalStorage(a, b, c);
}
}
