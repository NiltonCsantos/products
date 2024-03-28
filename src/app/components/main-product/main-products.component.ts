import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-sport',
  templateUrl: './main-products.component.html'
})
export class MainSportComponent implements OnInit {

  products: Product[]=[];

  opacity:string=""

  constructor(private api:ApiService, private router:Router){

  }

  ngOnInit(): void {

    this.findProducts();;
  }

  findProducts(): void {
    this.api.getAllProducts().subscribe({
      next: (products) => {
        // Ordena os produtos pelo preço (Bubble Sort)
        for (let i = 0; i < products.length - 1; i++) {
          for (let j = 0; j < products.length - i - 1; j++) {
            if (products[j].price > products[j + 1].price) {
              const temp = products[j];
              products[j] = products[j + 1];
              products[j + 1] = temp;
            }
          }
        }
        // Atualiza o serviço com os produtos ordenados
        this.products=products;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }





  handleDelete(id: number): void {


    this.api.deleleteProduct(id).subscribe({
      next: () => {

        this.products = this.products.filter(product => product.id !== id);

      },
      error: error => {

        console.error('Ocorreu um erro ao deletar um produto:', error);
      }
    });
  }







}
