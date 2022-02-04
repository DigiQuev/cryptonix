import { ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { color } from 'echarts';
import { reduce } from 'rxjs';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})

export class ChartComponent implements OnInit {
  @Input() prices!: any[];

  options: any;
  updateOptions: any;

  private data!: any[];
  private liste!: any[];
  private timer: any;
  constructor(private changeDetector: ChangeDetectorRef) { };


  ngOnInit(): void {
    this.data = []; //this.data = this.prices
    this.options = {
      title: {
        text: 'BTC',
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
    this.liste = this.prices; //this.liste = [];


    let name = '';
    let value: any;
    this.liste.forEach((element: any) => {
      const date = new Date(element[0]);
      name = date.toString();

      value = [
        [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/'),
        element[1]
      ]
      console.log({ name, value });

      this.data.push({ name, value });
    })
    const fisrtDate = this.data[0].value[1];
    const lastDate = this.data[this.data.length - 1].value[1];
    let color;
    if (fisrtDate < lastDate) {
      color = 'green';
    } else {
      color = 'red';
    }
    this.options.series = [{
      name: 'Mocking Data',
      type: 'line',
      color: color,
      showSymbol: false,
      hoverAnimation: false,
      data: this.data
    }];
    this.changeDetector.detectChanges();



  }
}

// import { Component, Input, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-child',
//   templateUrl: './child.component.html',
//   styleUrls: ['./child.component.scss']
// })
// export class ChildComponent implements OnInit {

//   @Input() myInputProperty!: string;

//   constructor() { }

//   ngOnInit(): void {


//     console.log(this.myInputProperty);


//   }

// }