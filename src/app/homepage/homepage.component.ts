import { Component } from '@angular/core';
import { ProdutsService } from '../produts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    Products:any;
    currentPage = 1;
    currentPageItems:any;
    totalPagesArray: number[] = [];
    itemsPerPage=5;
    z:number=0;
    i:any;
    constructor(private a:ProdutsService){}
    ngOnInit(){
      this.Products = this.a.getProducts();
      this.z = this.Products.length/this.itemsPerPage;
      for(this.i=1;this.i<this.z;this.i++){
        this.totalPagesArray.push(this.i);
      }
       this.updatePagination();
    }
  setPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  updatePagination() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.currentPageItems = this.Products.slice(start, end);
  }
}
