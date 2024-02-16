import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartistModule } from 'ng-chartist';
import { NgChartsModule } from 'ng2-charts';

import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { ChartjsChartComponent } from './chartjs-chart/chartjs-chart.component';
import { ChartistChartComponent } from './chartist-chart/chartist-chart.component';
import { BasicAreaChartComponent } from './apex-chart/basic-area-chart/basic-area-chart.component';
import { AreaSpalineChartComponent } from './apex-chart/area-spaline-chart/area-spaline-chart.component';
import { BarChartComponent } from './apex-chart/bar-chart/bar-chart.component';
import { ColumnChartComponent } from './apex-chart/column-chart/column-chart.component';
import { BubbleChartComponent } from './apex-chart/bubble-chart/bubble-chart.component';
import { SteplineChartComponent } from './apex-chart/stepline-chart/stepline-chart.component';
import { ColumnChart2Component } from './apex-chart/column-chart2/column-chart2.component';
import { PieChartComponent } from './apex-chart/pie-chart/pie-chart.component';
import { DonutChartComponent } from './apex-chart/donut-chart/donut-chart.component';
import { MixedChartComponent } from './apex-chart/mixed-chart/mixed-chart.component';
import { CandlestickChartComponent } from './apex-chart/candlestick-chart/candlestick-chart.component';
import { RadarChartComponent } from './apex-chart/radar-chart/radar-chart.component';
import { RadialBarChartComponent } from './apex-chart/radial-bar-chart/radial-bar-chart.component';
import { AreaChart1Component } from './google-chart/area-chart1/area-chart1.component';
import { AreaChart2Component } from './google-chart/area-chart2/area-chart2.component';
import { ColumnChart1Component } from './google-chart/column-chart1/column-chart1.component';
import { GanttChartComponent } from './google-chart/gantt-chart/gantt-chart.component';
import { LineChartComponent } from './google-chart/line-chart/line-chart.component';
import { ComboChartComponent } from './google-chart/combo-chart/combo-chart.component';
import { BarChart2Component } from './google-chart/bar-chart2/bar-chart2.component';
import { WordTreeChartComponent } from './google-chart/word-tree-chart/word-tree-chart.component';
import { PieChart1Component } from './google-chart/pie-chart1/pie-chart1.component';
import { PieChart2Component } from './google-chart/pie-chart2/pie-chart2.component';
import { PieChart3Component } from './google-chart/pie-chart3/pie-chart3.component';
import { PieChart4Component } from './google-chart/pie-chart4/pie-chart4.component';
import { GoogleColumnChart2Component } from './google-chart/google-column-chart2/google-column-chart2.component';
import { ChartjsBarchartComponent } from './chartjs-chart/chartjs-barchart/chartjs-barchart.component';
import { ChartjsLinegraphComponent } from './chartjs-chart/chartjs-linegraph/chartjs-linegraph.component';
import { ChartjsRadargraphComponent } from './chartjs-chart/chartjs-radargraph/chartjs-radargraph.component';
import { ChartjsLinechartComponent } from './chartjs-chart/chartjs-linechart/chartjs-linechart.component';
import { ChartjsDonutchartComponent } from './chartjs-chart/chartjs-donutchart/chartjs-donutchart.component';
import { ChartjsPolarchartComponent } from './chartjs-chart/chartjs-polarchart/chartjs-polarchart.component';
import { AdvanceSmilChartComponent } from './chartist-chart/advance-smil-chart/advance-smil-chart.component';
import { SvgPathChartComponent } from './chartist-chart/svg-path-chart/svg-path-chart.component';
import { DonutSvgChartComponent } from './chartist-chart/donut-svg-chart/donut-svg-chart.component';
import { BiPolarLineChartComponent } from './chartist-chart/bi-polar-line-chart/bi-polar-line-chart.component';
import { LineAreaChartComponent } from './chartist-chart/line-area-chart/line-area-chart.component';
import { BiPolarBarChartComponent } from './chartist-chart/bi-polar-bar-chart/bi-polar-bar-chart.component';
import { StackedBarChartComponent } from './chartist-chart/stacked-bar-chart/stacked-bar-chart.component';
import { HorizontialBarChartComponent } from './chartist-chart/horizontial-bar-chart/horizontial-bar-chart.component';
import { ExtremeResponsiveChartComponent } from './chartist-chart/extreme-responsive-chart/extreme-responsive-chart.component';
import { SimpleLineChartComponent } from './chartist-chart/simple-line-chart/simple-line-chart.component';
import { HolesDataChartComponent } from './chartist-chart/holes-data-chart/holes-data-chart.component';
import { FilledHolesDataChartComponent } from './chartist-chart/filled-holes-data-chart/filled-holes-data-chart.component';


@NgModule({
  declarations: [
    ApexChartComponent,
    GoogleChartComponent,
    ChartjsChartComponent,
    ChartistChartComponent,
    BasicAreaChartComponent,
    AreaSpalineChartComponent,
    BarChartComponent,
    ColumnChartComponent,
    BubbleChartComponent,
    SteplineChartComponent,
    ColumnChart2Component,
    PieChartComponent,
    DonutChartComponent,
    MixedChartComponent,
    CandlestickChartComponent,
    RadarChartComponent,
    RadialBarChartComponent,
    AreaChart1Component,
    AreaChart2Component,
    ColumnChart1Component,
    GanttChartComponent,
    LineChartComponent,
    ComboChartComponent,
    BarChart2Component,
    WordTreeChartComponent,
    PieChart1Component,
    PieChart2Component,
    PieChart3Component,
    PieChart4Component,
    GoogleColumnChart2Component,
    ChartjsBarchartComponent,
    ChartjsLinegraphComponent,
    ChartjsRadargraphComponent,
    ChartjsLinechartComponent,
    ChartjsDonutchartComponent,
    ChartjsPolarchartComponent,
    AdvanceSmilChartComponent,
    SvgPathChartComponent,
    DonutSvgChartComponent,
    BiPolarLineChartComponent,
    LineAreaChartComponent,
    BiPolarBarChartComponent,
    StackedBarChartComponent,
    HorizontialBarChartComponent,
    ExtremeResponsiveChartComponent,
    SimpleLineChartComponent,
    HolesDataChartComponent,
    FilledHolesDataChartComponent
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule,
    Ng2GoogleChartsModule,
    NgChartsModule,
    ChartistModule
  ]
})
export class ChartsModule { }
