import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ["18-27", "25-34", "35-44", "45-54", "2010", "55-64", "65+"];
  public barChartType: ChartType = "bar";
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0], label: "Women" },
    { data: [0, 1, 0, 0, 0, 0, 0], label: "Men" },
    { data: [0, 12, 0, 0, 0, 0, 0], label: "Undefined Users" },
  ];
  constructor() {}

  ngOnInit() {}
}
