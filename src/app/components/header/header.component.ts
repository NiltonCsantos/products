import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  nameProduct: string = ""

  date: string = "";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.getDate(), 1000)
  }

  getDate(): void {
    this.date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }).replace(",", " -");
  }

}
