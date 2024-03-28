import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProduct } from 'src/app/models/formProduct';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-cadastre',
  templateUrl: './form-cadastre.component.html'
})
export class FormCadastreComponent implements OnInit {


  product: FormProduct = {
    name: null,
    description: null,
    price: 0,
    isAvailable: null
  };

  productFind: Product = {
    id:0,
    name: null,
    description: null,
    price: 0,
    isAvailable: null
  };



  productId:string | null=null;



  message: string = "";
  display: string = "hidden";

  constructor(private api: ApiService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.productId =  (this.route.snapshot.paramMap.get('id'));

    if(this.productId!=null){
      this.api.getProduct(this.productId).subscribe({

        next:(p)=>{
          this.productFind=p

          alert(this.productFind.id)
        },
        error(err) {
          console.log(err);
        },
      });
    }
  }

  onSubmite(): void {
    if (
      this.product.price > 0 &&
      this.product.isAvailable != null &&
      this.product.name != null &&
      this.product.description != null
    ) {
      this.api.cadastreProduct(this.product).subscribe({
        next:()=>{
          this.navigateToListProducts();
        },

        error(err) {
          console.log(err);

        },
      });
    } else {
      this.message = "Você deve preencher todos os campos";
      this.display = "flex";
    }
  }

  changeVisible(): void {
    this.display = "hidden";
  }

  navigateToListProducts(){


    this.router.navigate(['list/products']);
  }

  onHandlePut():void{

    this.api.putProduct(this.productFind).subscribe({
      next:()=>{
        this.navigateToListProducts();
      },
      error(err) {
        console.log(err);

      },
    })


  }
}
