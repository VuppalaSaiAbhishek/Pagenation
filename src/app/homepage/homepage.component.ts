import { Component } from '@angular/core';
import { ProdutsService } from '../produts.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    Products:number[]=[];
    currentPage = 1;
    currentPageItems:any;
    totalPagesArray: number[] = [];
    selecteditems=2;
    itemsPerPage=this.selecteditems;
    page=1;
    start =1
    end =2;
    z:number=0;
    i:any;
    pagestart=0;
    limit=5;
    constructor(private a:ProdutsService){}
    ngOnInit(){
        this.APIProducts(this.pagestart,this.limit);
    }
    APIProducts(a:any,b:any){
      this.a.getProducts(a,b).subscribe((data:any)=>{
        this.Products = [...this.Products,...data.obj];
        this.updatePagination();
      });
    }

  updatePagination() {
    this.itemsPerPage = this.selecteditems;
   this.start = (this.page - 1) * this.itemsPerPage + 1;
this.end = Math.min(this.start + this.itemsPerPage - 1, this.Products.length);
     console.log(this.start,this.end);
        this.currentPageItems = this.Products.slice(this.start-1, this.end);
    console.log(this.currentPageItems);
     
  }
  changeSeleteItems(x:any){
      this.selecteditems = x;
      this.page = Math.floor(this.start/x)+1;
      this.updatePagination();
  }
  clickLeft(){
      if(this.page>1){
        this.page--;
        this.updatePagination();
      }
  }
  clickRight(){
    if((this.page * this.itemsPerPage)<this.Products.length){
        this.page = this.page+1;
        this.updatePagination();
    }
    if(this.end == this.Products.length){
        this.pagestart = this.pagestart+this.limit;
        this.APIProducts(this.pagestart,this.limit);
    }
  }
}
