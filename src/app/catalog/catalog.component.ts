import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardsService, productItem } from '../services/product-cards.service';
import { UsersService } from '../services/users.service';
import { filterdataItem } from './filter/filter.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  @Output() testCatalog: EventEmitter<any> = new EventEmitter();
  
  category: string = 'all';
  products: productItem[] = [];
  notFound: boolean = false;
  filterData: filterdataItem = {
    elems: [],
    fat: '',
    sort: '',
    priceMin: '',
    priceMax: ''
  };
  

  constructor(private productService: ProductCardsService, private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getProduts(); 
    this.getCategory();
    this.filterProducts();
    this.usersService.getCurrentUser();
  }
  
  getCategory() {
   this.category = this.route.snapshot.data["category"];
  }

  getProduts(): void {
    this.productService.getProducts().subscribe((p) => (this.products = p));
  }

  private filterProducts(): Array<productItem> {
    if (this.category.length > 0) {
      if (this.category === 'all') {
        return this.products;
      } else {
        return this.products = this.products.filter(product => product.category.find(c => c === this.category));
      };
    } else {
      throw new Error('no category');
    };
  }

  orderBySort(sort: string) :void {
    if(sort === 'highestPrice') {
      this.products = this.products.sort((a, b) => a.productPrice - b.productPrice);
    } else if(sort === 'lowerPrice') {
      this.products = this.products.sort((a, b) => b.productPrice - a.productPrice);
    };
  }

  filterAll(data : filterdataItem) : void {
    this.getProduts();
    this.products = this.products.filter(product =>((product.fat === +data.fat) && 
    (product.productPrice >= +data.priceMin && product.productPrice <= +data.priceMax)));
    if(data.elems.length > 0) {
     this.products = this.products.filter(product => data.elems.find(e => product.filter === e));
    };
    this.orderBySort(data.sort);
  }
}
