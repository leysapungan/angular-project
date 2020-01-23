import { Component, OnInit, ViewChild, ElementRef, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-gantt-chart',
  templateUrl: './gantt-chart.component.html',
  styleUrls: ['./gantt-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GanttChartComponent implements OnInit{
  @ViewChild('chart', {static:false}) private chartContainer: ElementRef;
  
  @Input ('header') header;
  @Input ('task') task;

  @Output('minDate') minDate = new EventEmitter();
  @Output('maxDate') maxDate = new EventEmitter();

   margin: any = { top: 0, bottom: 0, left: 10, right: 10};
   width: number;
   height: number;
   xScale: any;
   xAxis: any;
  

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createChart();
  }


  createChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = 20;
    
    let svg = d3.select(element).append('svg')
      .attr('width', 1000)
      .attr('height', element.offsetHeight);


    // create scales
    var mindate = new Date(2020,0,1),
        maxdate = new Date(2020,2,31);

        
        
    this.xScale = d3.scaleTime().domain([mindate, maxdate]).range([0, this.width]);

    var xScale = this.xScale;

    if (this.header)
    {
      this.xAxis = svg.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisTop(this.xScale));

    }
    else
    {
      let task = this.task;
      let level = task.level;
      let startDate = task.attributes[0].startDate;
      let endDate = task.attributes[0].endDate; 

      var sDay = d3.timeDay(new Date(startDate));
      var eDay = d3.timeDay(new Date(endDate));
 
      let rectangle = svg.append("rect")
                          .attr("x", this.margin.left + this.xScale(sDay))
                          .attr("y", 0)
                          .attr("width", this.xScale(eDay) - this.xScale(sDay))
                          .attr("height", 20)
                          .style('fill', level == 0 ? 'red' : 'blue')
                          .on("mouseover", mouseOver);
      
      
      function mouseOver() {
        d3.select(this).style("cursor", "e-resize");
      }


      var deltaX, deltaW;
      var outer = this;
      
      var dragHandler = d3.drag()
                          .on("start", dragStart)
                          .on("drag", dragging)
                          .on("end", dragEnd);


      function dragStart() {
        deltaX =  Number(d3.select(this).attr("x"));
        deltaW =  Number(d3.select(this).attr("width"));

        if(d3.event.x <= deltaX + (deltaW/2))
        {
          d3.select(this).classed("left", true);
        }
        else
        {
          d3.select(this).classed("right", true);
        }
      }

      function dragging() {        

        if(d3.select(this).classed("left") && d3.event.x < deltaX + deltaW)
        {
            d3.select(this)
            .attr("x", d3.event.x)
            .attr("width", (deltaW+deltaX) - d3.event.x);
        }
        else if(d3.select(this).classed("right") && d3.event.x > deltaX)
        {
            d3.select(this)
            .attr("x",deltaX)
            .attr("width", d3.event.x - deltaX);
        }
      }

      function dragEnd() {
        console.log(this);
        deltaX =  Number(d3.select(this).attr("x"));
        deltaW =  Number(d3.select(this).attr("width"));

        let parseDate = d3.timeFormat("%Y-%m-%d");

        if(d3.select(this).attr("class") == "left")
        {
          d3.select(this).classed("left", false);

          task.attributes[0].startDate = parseDate(xScale.invert(deltaX));
          task.attributes[0].minDate = parseDate(xScale.invert(deltaX));

          outer.setMinDate(task);
        }
        else if (d3.select(this).attr("class") == "right")
        {
          d3.select(this).classed("right", false);

          task.attributes[0].endDate = parseDate(xScale.invert(deltaX+deltaW));        
          task.attributes[0].maxDate = parseDate(xScale.invert(deltaX+deltaW));

          outer.setMaxDate(task);
        }

        console.log("Start : ", parseDate(xScale.invert(deltaX)));
        console.log("End : ", parseDate(xScale.invert(deltaX+deltaW)));

        // setTimeout(callback, 1000); 
 
        // function callback() {
            // outer.updateChart();
        // }

        outer.updateChart();
      }

      dragHandler(rectangle);
    }
  }

  updateChart() {

  }

  setMinDate(task) {
    this.minDate.emit(task);
  }

  setMaxDate(task) {
    this.maxDate.emit(task);
  }
}
