import {Component, OnInit} from '@angular/core';
import {Product} from "../../_model/product";
import {ProductService} from "../../product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  createdProduct: Product = new Product();
  selectedProduct: Product = new Product();

  displayImage: boolean = false;
  displayModal: boolean = false;
  displayEditModal: boolean = false;
  searchKey: string = "";
  val3: any;

  addNewProduct() {
    this.displayModal = false;
    this._productService.add(this.createdProduct);
  }

  resetField() {
    this.createdProduct.productId = 0;
    this.createdProduct.productName = "";
    this.createdProduct.productImg = "";
    this.createdProduct.productAvailable = new Date();
    this.createdProduct.productPrice = 0;
    this.createdProduct.productRate = 0;
    this.createdProduct.productCode = "";
  }

  ngOnInit(): void {
    this.products = this._productService.showAllProducts();
  }


  deleteProduct(id: number) {
    this._productService.delete(id)
  }


  constructor(private _productService: ProductService) {
  }

  editProduct(id: number) {
    this.displayEditModal = !this.displayEditModal;
    this._productService.edit(id, this.selectedProduct);
  }

  saveProduct(id: number) {
    this._productService.save(id);
    this.displayEditModal = false;
  }


  showModalDialog() {
    return this.displayModal = true;
  }

  showImage() {
    return this.displayImage = !this.displayImage;
  }

  showEditModalDialog() {
    return this.displayEditModal = true;
  }
}
