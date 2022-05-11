export class Product {
  constructor(
              public productId:number=0,
              public productName:string="",
              public productImg:string="",
              public productCode:string="",
              public productAvailable:Date=new Date(),
              public productPrice:number=0,
              public productRate:number=0,
              ) {
  }
}
