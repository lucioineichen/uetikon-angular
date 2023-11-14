import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetencesComponent implements OnInit {
  ngOnInit(): void {
    // Access the SVG container using ElementRef and D3.js
    const svg = d3.select('#treeContainer')

    // Define the trunk's coordinates
    const trunkX1 = 400 // Starting x-coordinate
    const trunkY1 = 600 // Starting y-coordinate
    const trunkX2 = 400 // Ending x-coordinate (same as starting for a vertical trunk)
    const trunkY2 = 400 // Ending y-coordinate

    // Create the trunk line
    svg
      .append('line')
      .attr('x1', trunkX1)
      .attr('y1', trunkY1)
      .attr('x2', trunkX2)
      .attr('y2', trunkY2)
      .style('stroke', 'brown') // Trunk color
      .style('stroke-width', 10) // Trunk thickness

    const leafData = [
      { cx: 400, cy: 350, radius: 30, color: 'green' },
      { cx: 380, cy: 320, radius: 30, color: 'green' },
      { cx: 420, cy: 320, radius: 30, color: 'green' },
      // Add more leaf data as needed
    ]

    // Create the leaves
    const leaves = svg
      .selectAll('.leaf') // Use a class selector
      .data(leafData)
      .enter()
      .append('circle')
      .attr('class', 'leaf')
      .attr('cx', (d) => d.cx) // x-coordinate of the leaf center
      .attr('cy', (d) => d.cy) // y-coordinate of the leaf center
      .attr('r', (d) => d.radius) // radius of the leaf
      .style('fill', (d) => d.color) // leaf color
  }
}
