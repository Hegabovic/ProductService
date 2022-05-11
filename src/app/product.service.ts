import {Injectable} from '@angular/core';
import {Product} from "./_model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];
  private cloneProduct: Product= new Product();


  constructor() {
    this.products = [
      new Product(1, "A20 Samsung", "A20 Samsung", "gmg 00 42", new Date(), 300, 5),
      new Product(2, "A30 Samsung", "A30 Samsung", "gdn 00 11", new Date(), 400, 4),
      new Product(3, "A40 Samsung", "a40 samsung", "gdn 00 23", new Date(), 500, 3),
      new Product(4, "A50 Samsung", "a50 samsung", "tbx 00 48", new Date(), 500, 2),
      new Product(5, "A70 Samsung", "a70 samsung", "tbx 00 22", new Date(), 600, 1),
    ]
  }

  showAllProducts() {
    return this.products;
  }

  add(product: Product) {
    this.products.push(new Product(product.productId,
      product.productName,
      product.productImg,
      product.productCode,
      product.productAvailable,
      product.productPrice,
      product.productRate));
  }

  edit(id: number, selectedProduct: Product) {
    let newProduct = this.products.find(product => {
      return product.productId === id
    });
    if (newProduct) {
      selectedProduct.productId = newProduct.productId;
      selectedProduct.productName = newProduct.productName;
      selectedProduct.productImg = newProduct.productImg;
      selectedProduct.productCode = newProduct.productCode;
      selectedProduct.productAvailable = newProduct.productAvailable;
      selectedProduct.productPrice = newProduct.productPrice;
      selectedProduct.productRate = newProduct.productRate;

      this.cloneProduct = selectedProduct;
    }
  }

  save(id: number) {
    let productIndex = this.products.findIndex(product => product.productId === id);
    this.products.splice(productIndex, 1,
      new Product(this.cloneProduct.productId,
        this.cloneProduct.productName,
        this.cloneProduct.productImg,
        this.cloneProduct.productCode,
        this.cloneProduct.productAvailable,
        this.cloneProduct.productPrice,
        this.cloneProduct.productRate,
      ));
  }

  delete(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      if (id == product.productId) {
        this.products.splice(i, 1);
      }
    }
  }


}
