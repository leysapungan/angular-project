import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-show-matrix',
  templateUrl: './show-matrix.component.html',
  styleUrls: ['./show-matrix.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShowMatrixComponent implements OnInit {
  @ViewChild('matrix', {static:false}) private chartContainer: ElementRef;

  @Input ('tasks') tasks;

  margin = {top:20, right:20, bottom:20, left:20};
  data: any = [];

  constructor() { }

  ngOnInit() {
    this.getData(this.tasks);
    console.log(this.data);
   }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {

    let element = this.chartContainer.nativeElement;
    let width = element.offsetWidth - this.margin.left - this.margin.right;
    let height = element.offsetHeight - this.margin.top - this.margin.bottom;
 

    let svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);


    // create scales
    var mindate = new Date(2020,0,1),
        maxdate = new Date(2020,2,31);

      var xValue = function(d) { return d3.timeDay(new Date(d.endDate));}
      var xScale = d3.scaleTime().range([0, width]).domain([mindate, maxdate]);
      var xMap = function(d) { 
        return 20 + xScale(xValue(d));
      }
      
     
      var yValue = function(d) { return d.importance;}
      var yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);
      var yMap = function(d) { 
        return 20 + yScale(yValue(d));
      }


      var xAxis = svg.append('g')
                      .attr('class', 'axis axis-x')
                      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + height})`)
                      .call(d3.axisBottom(xScale));

      var yAxis = svg.append('g')
                      .attr('class', 'axis axis-y')
                      .attr('transform',`translate(${this.margin.left}, ${this.margin.top})`)
                      .call(d3.axisLeft(yScale));

      svg.selectAll(".dot")
          .data(this.data)
          .enter().append("circle")
          .attr("class", "dot")
          .attr("r", 10)
          .attr("cx", xMap)
          .attr("cy", yMap)
          .style('fill', 'green');

  }

  getData(task) {
    for (var i in task)
    {
      var endDate = task[i].attributes[0].endDate;
      var importance = task[i].importance;

      var inputData = {
        'endDate':endDate,
        'importance':importance
      };

      this.data.push(inputData);

      if(task[i].subTask)
      {
        this.getData(task[i].subTask);
      }
    }
  }

}
