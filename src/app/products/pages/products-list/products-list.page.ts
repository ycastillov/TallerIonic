import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ProductsListComponent } from '../../components/list/list.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ProductsListComponent]
})
export class ProductsListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
