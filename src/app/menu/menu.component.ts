import {Component, Input} from "@angular/core";
import {Food} from "../interfaces/menu.interface";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl:'./menu.component.html'
})
export class MenuComponent{
  @Input()
  data!: Food | undefined;
}

