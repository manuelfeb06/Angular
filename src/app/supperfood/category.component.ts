import {Component} from "@angular/core";
import {Category} from "../interfaces/category.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Food} from "../interfaces/menu.interface";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  data: Category | undefined;
  food: Food | undefined;

  constructor(private http: HttpClient) {
  }
  ngOnInit(){
    this.superFood();
  }
  superFood(){
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    let params = new HttpParams();
    this.http.get<Category>(url,{params:params})
      .subscribe(value => {
        this.data = value;
      });
    const url_food = 'https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<Food>(url_food,{params:params})
      .subscribe(value => {
        this.food = value;
      })
  }
}
