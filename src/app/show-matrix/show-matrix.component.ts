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
  @Input ('chooseLevel') chooseLevel;

  margin = {top:20, right:20, bottom:20, left:20};
  data: any = [];
  svg;
  xMap;
  yMap;

  constructor() { }

  ngOnInit() {
    this.getData(this.tasks);
   }

  ngAfterViewInit() {
    this.createChart();
  }

  ngOnChanges() {
    if(this.data) {
      this.data = [];
    }
    this.getData(this.tasks);
    
    if(this.svg)
    {
      var dot = this.svg.selectAll(".dot").data(this.data);
      dot.enter().append("circle"); 
      dot.exit().remove();

      this.svg.selectAll(".dot")
          .data(this.data)
          .enter().append("circle")
          .attr("class", "dot")
          .attr("r", 10)
          .attr("cx", this.xMap)
          .attr("cy", this.yMap)
          .style('fill', 'green');
    }
  }

  createChart() {
    let element = this.chartContainer.nativeElement;
    let width = element.offsetWidth - this.margin.left - this.margin.right;
    let height = element.offsetHeight - this.margin.top - this.margin.bottom;
 

    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);


    // create scales
    var mindate = new Date(2020,0,1),
        maxdate = new Date(2020,2,31);

      var xValue = function(d) { return d3.timeDay(new Date(d.endDate));}
      var xScale = d3.scaleTime().range([0, width]).domain([mindate, maxdate]);
      this.xMap = function(d) { 
        return 20 + xScale(xValue(d));
      }
      
     
      var yValue = function(d) { return d.importance;}
      var yScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);
      this.yMap = function(d) { 
        return 20 + yScale(yValue(d));
      }

      var today = new Date();

      var xAxis = this.svg.append('g')
                      .attr('class', 'axis axis-x')
                      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + height})`)
                      .call(d3.axisBottom(xScale));

      var yAxis = this.svg.append('g')
                      .attr('class', 'axis axis-y')
                      .attr('transform',`translate(${xScale(today)}, ${this.margin.top})`)
                      .call(d3.axisLeft(yScale));

      this.svg.selectAll(".dot")
          .data(this.data)
          .enter().append("circle")
          .attr("class", "dot")
          .attr("r", 10)
          .attr("cx", this.xMap)
          .attr("cy", this.yMap)
          .style('fill', 'green');

  }

  update() {

    if(this.data) {
      this.data = [];
    }
    this.getData(this.tasks);

    this.svg.selectAll(".dot").data(this.data); 

    this.svg.enter().append(".dot"); 

    this.svg.exit().remove();

    this.svg.selectAll(".dot")
          .data(this.data)
          .enter().append("circle")
          .attr("class", "dot")
          .attr("r", 10)
          .attr("cx", this.xMap)
          .attr("cy", this.yMap)
          .style('fill', 'green');

  }

  getData(task) {
    for (var i in task)
    {
      if(task[i].level <= this.chooseLevel)
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

}
