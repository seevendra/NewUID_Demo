import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { NewsApiService} from '../../news-api.service'

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private newsapi: NewsApiService) { }

  mArticles: Array<any>;
  mSources: Array<any>;

  public pieChartLabels = ['Retirement Fund 100', 'Domestic Mutual Fund 2020', 'Easyearn ETF Equity 2025'];
  public pieChartData = [1502, 578, 1000];
  public pieChartType = 'pie';
  public donutChartType = 'doughnut';
  public donutChartData = [7.4, 6, 5];
  public pieOptions: any = {
    legend: {
      position: 'right',
      labels: {
        fontSize: 12,
        fontColor: 'White',
      }
    }
  };

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'white', // legend color (can be hexadecimal too)
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white',  // x axe labels (can be hexadecimal too)
        },
        gridLines: {
          color: '#5f5e5e'  // grid line color (can be removed or changed)
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white',  // y axes numbers color (can be hexadecimal too)
          min: 0,
          beginAtZero: true,

        }
      }]
    }
  };

  public barChartLabels = ['Mutual Funds', 'Cash Funds', 'Retirement Plans'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [500, 1559, 1180], label: 'Invested Amount' },
    { data: [728, 2348, 1440], label: 'Return Amount' }
  ];

  public lineChartData: ChartDataSets[] = [
    { data: [12, 17, 27, 32, 27, 21], label: 'Risk Score' },
    { data: [21, 25, 15, 35, 31, 15], label: 'Profit Percentage' },
  ];
  public lineChartLabels: Label[] = ['Q4-2018','Q1-2019', 'Q2-2019', 'Q3-2019', 'Q4-2019', 'Q1-2020'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'white', // legend color (can be hexadecimal too)
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
       ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  public MutualFundsData = [
    { data: ['HOLD', 28000, 120, 298.00, 300.00, 35787.6, 7788, 0.278], label: 'VFIAX' },
    { data: ['SELL', 19000, 70, 318.30, 300.00, 22281.0, 3281, 0.172], label: 'SPY' },
    { data: ['SELL', 5500, 40, 148.89, 200.00, 5955.6, 456, 0.083], label: 'VSMPX' },
    { data: ['BUY', 14200, 200, 74.91, 100.00, 149.82, 782, 0.055], label: 'VITAX' }
  ];
  // tslint:disable-next-line:max-line-length
  public MutualFundsDataLabels = ['Suggestion', 'Invested Amount', 'Holding Units', 'Current NAV','Target NAV', 'Current Value', 'G/L', 'Return Abs %'];

  public CashFundsData = [
    { data: ['SELL', 10, 1134.4, 11344, 1395.11, 13951.1, 552607.1], label: 'GOOGL' },
    { data: ['SELL', 15, 278.6, 4179, 298.34, 4475.1, 296.1], label: 'AAPL' },
    { data: ['HOLD', 30, 434.8, 23892, 265.11, 3265.1, 143614.1], label: 'SO' },
    { data: ['BUY', 87, 808.6, 32873, 808.34, 2413.1, 625372.1], label: 'MSFT' },
  ];
  public CashDataLabels = ['Suggestion', 'Quantity', 'Hold Price', 'Hold Value', 'Current Price', 'Market Value', 'Profit/Loss'];

  public RetirePlanFundsData = [
    { data: [2000234.65, 234763.98, 210345], label: '401(K) Plan 1' },
    { data: [53687.90, 57832.30, 57832.30], label: 'Pre 2005 Deffered Comp. Plan' },
    { data: [62345.00, 68654, 68654], label: 'Post 2005 Deffered Comp. Plan' },
    { data: [1100, 2300, 2300], label: '2011 Deffered Comp. Plan' }
  ];
  public RetirePlanDataLabels = ['Beginning Balance', 'Ending Balance', 'Vested Balance'];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;



  public news = [
    {
      item_id: '1',
      name: 'Who Has Been Buying Apple, Inc. (NASDAQ:APPL) Shares?',
      // tslint:disable-next-line:max-line-length
      description: 'We have lost count of how many times insiders have accumulated shares in a company that goes on to improve markedly. On...',
      created: '07/13/2019 11:05 AM'
    }, {
      item_id: '2',
      name: 'Natural Gas Price Prediction ; Prices Rally as Cold Weather Emerges',
      description: 'Natural Gas Price Prediction; Prices Rally as Cold Weather Emerges',
      created: '07/01/2019 03:41 PM'
    }, {
      item_id: '3',
      name: 'How Did McCormick & Company, Incorporated (MKC) Compare Against Hedge Fund Darlings in 2019?',
      // tslint:disable-next-line:max-line-length
      description: 'Many investors, including Paul Tudor Jones or Stan Druckenmiller, have been saying before 2018, Q4 market crash that the stock market is overvalued due to a low interest rate environment that leads to companies swapping their equity for debt and focusing mostly on short-term performance such as beating the quarterly earnings estimates.',
      created: '06/15/2019 09:02 AM'
    }
  ];

  ngOnInit() {
       this.newsapi.getArticleByID('APPL').subscribe(data => { debugger; this.mArticles = data['articles'];}) ;
  }

   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
