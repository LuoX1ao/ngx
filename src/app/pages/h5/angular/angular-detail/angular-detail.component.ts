import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-detail',
  templateUrl: './angular-detail.component.html',
  styleUrls: ['./angular-detail.component.css']
})
export class AngularDetailComponent implements OnInit {

  source1 = `
  /* Get stock data somehow */
const source = getAsyncStockData();

const subscription = source
  .filter(quote => quote.price > 30)
  .map(quote => quote.price)
  .forEach(price => console.log(\`Prices higher than $30: \${price}\`));
  `.trim();

  source2 = `
/* Get stock data somehow */
const source = getAsyncStockData();

const subscription = source
  .filter(quote => quote.price > 30)
  .map(quote => quote.price)
  .subscribe(
    price => console.log(\`Prices higher than $30: \${price}\`),
    err => console.log(\`Something went wrong: \${err.message}\`)
  );

/* When we're done */
subscription.dispose();
  `.trim();

  source: string = `
  import { Component } from '@angular/core';

  @Component({
    template: 'Hello {{ name }}'
  })
  class HelloWorldComponent {
    name: string = 'World!';
  }
  `.trim();

  constructor() { }

  ngOnInit() {

  }



}
