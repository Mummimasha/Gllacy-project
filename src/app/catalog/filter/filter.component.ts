import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
export interface filterdataItem {
  elems: Array<any>,
  fat: string,
  sort: string ,
  priceMin: string,
  priceMax: string,
}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
  @Output() selectedProducts: EventEmitter<any> = new EventEmitter;

  checkedElems: Array<any> = [];
  currentFat: string = '30';
  currentSort: string = 'popular';
  currentPriceMin: number = 0;
  currentPriceMax: number = 300;
  minGap:number = 50;

  constructor() { }

  ngOnInit(): void {

  }

  filterByFat(value: string): void {
    this.currentFat = value;
  }

  filterByFilter(value: string, item: any) : void {
    if(item.checked) {
      this.checkedElems.push(value);
    } else if(this.checkedElems.find(e => e === value)) {
      let index = this.checkedElems.indexOf(value);
      FilterComponent.deleteElement(this.checkedElems, index);
    };
  }

  private static deleteElement(array: any, index: number) {
    return array.splice(index, 1);
  }

  private filterData() {
    return {
      elems: this.checkedElems,
      fat: this.currentFat,
      sort: this.currentSort,
      priceMin: this.currentPriceMin,
      priceMax: this.currentPriceMax,
    };
  }

  filterByProducts() : void {
    this.selectedProducts.emit(this.filterData());
  } 

  sortByPopular(value: string) : void {
    this.currentSort = value;
  }

  slideOne(cPMin: number, cPmax: number) {
    if(cPmax - cPMin <= this.minGap) {
       cPMin = cPmax - this.minGap;
    };
  }

  slideTwo() {
    if(this.currentPriceMax - this.currentPriceMin<= this.minGap) {
       this.currentPriceMax = this.currentPriceMin + this.minGap;
    };
  }
}
