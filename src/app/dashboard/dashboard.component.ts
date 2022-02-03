import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  options: any;
  updateOptions: any;

  private oneDay = 24 * 3600 * 1000;
  private now!: Date;
  private value!: number ;
  private data!: any[];
  private liste!:any[];
  private timer: any;

  constructor(private http: HttpClient, private changeDetector: ChangeDetectorRef) { }

  // generate some random testing data:
  ngOnInit(): void {
    this.data = [];
    this.liste = [];
    this.now = new Date(1997, 9, 3);
    this.value = Math.random() * 1000;

    // récupérer les info via la requete http
      // METHODE  :)
    this.http.get<any[]>("https://api.coingecko.com/api/v3/coins/0-5x-long-bitcoin-token/market_chart?vs_currency=eur&days=90&interval=daily").subscribe((priceFromRequest: any)=>{
    this.liste = priceFromRequest.prices;

      
    let name = 0;
    let value = 0;
    this.liste.forEach((element:any) => {
        name = element[0].toString();
        value = element[1];
        this.data.push({name, value});
    })  
    this.options.series = [{
      name: 'Mocking Data',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: this.data
    }];
    this.changeDetector.detectChanges();

  });

    // initialize chart options:
    this.options = {
      title: {
        text: 'Dynamic Data + Time Axis'
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params:any) => {
          params = params[0];
          const date = new Date(parseInt(params.name));
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false
        }
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      }
    }

    // Mock dynamic data:
    // this.timer = setInterval(() => {
    //   for (let i = 0; i < 5; i++) {
    //     this.data.shift();
    //     this.data.push(this.randomData());
    //   }

    //   // update series data:
    //   this.updateOptions = {
    //     series: [{
    //       data: this.data
    //     }]
    //   };
    // }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  // randomData() {
  //   this.now = new Date(this.now.getTime() + this.oneDay);
  //   this.value = this.value + Math.random() * 21 - 10;
  //   return {
  //     name: this.now.toString(),
  //     value: [
  //       [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
  //       Math.round(this.value)
  //     ]
  //   };
  // }

}