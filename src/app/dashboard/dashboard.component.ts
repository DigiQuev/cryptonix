import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { color } from 'echarts';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

          // export class AppComponent {
          //   title = 'input-output';


          // export class DashboardComponent implements OnInit {
          //   constructor(private http: HttpClient, private changeDetector: ChangeDetectorRef) { }
          // }

// constructor(private http: HttpClient)

          //import { Component } from '@angular/core';
          // @Component({
          //   selector: 'app-root',
          //   templateUrl: './app.component.html',
          //   styleUrls: ['./app.component.scss']
          // })
          // export class AppComponent {
          //   title = 'input-output';
          // }


// le parent fait la requête html pour l'envoyer dans le Html de l'enfant :

export class DashboardComponent {
  crypto!:any
  crypto2!:any
  crypto3!:any
  crypto4!:any
  constructor(private http : HttpClient){
    this.http.get<any>( "https://api.coingecko.com/api/v3/coins/0-5x-long-ethereum-token/market_chart?vs_currency=eur&days=90&interval=daily").subscribe(crypto => {
      this.crypto = crypto.prices;
    })
    this.http.get<any>( "https://api.coingecko.com/api/v3/coins/0-5x-long-bitcoin-token/market_chart?vs_currency=eur&days=90&interval=daily").subscribe(crypto2 => {
      this.crypto2 = crypto2;
    })
    this.http.get<any>( "https://api.coingecko.com/api/v3/coins/1x-short-litecoin-token/market_chart?vs_currency=eur&days=90&interval=daily").subscribe(crypto3 => {
      this.crypto3 = crypto3;
    })
    this.http.get<any>( "https://api.coingecko.com/api/v3/coins/dash/market_chart?vs_currency=eur&days=90&interval=daily").subscribe(crypto4 => {
      this.crypto4 = crypto4;
    })
  }
}
