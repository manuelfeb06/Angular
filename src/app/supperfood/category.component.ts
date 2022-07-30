import {Component} from "@angular/core";
import {Cretory} from "../interfaces/cretory.interface";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-cretory',
  templateUrl: './cretory.component.html'
})
export class CretoryComponent{
  data: Cretory | undefined;

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.Cretory
  }
}
