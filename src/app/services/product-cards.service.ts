import { Injectable } from '@angular/core';
import { PRODUCTCADRS } from '../mock/mock-products';
import { Observable, of } from 'rxjs';


export interface productItem {
  id: number;
  productTitle: string;
  productDescription: string;
  productPrice: number;
  productImg: string;
  category: Array<string>;
  fat: number;
  filter: string;
  popularity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductCardsService {

  private cartProducts: productItem[] = [];

  constructor() { }

  getProducts(): Observable<productItem[]> {
    return of(PRODUCTCADRS);
  }

  setCartProducts(products: productItem[]) {
    this.cartProducts = products;
  }

  getCartProducts() {
    return this.cartProducts;
  }

  getPopularProducts(): productItem[] {
    let popularProductsList = PRODUCTCADRS.slice().sort((a,b) => a.popularity - b.popularity);
    popularProductsList.length = 4;
    return popularProductsList;
  }
}

