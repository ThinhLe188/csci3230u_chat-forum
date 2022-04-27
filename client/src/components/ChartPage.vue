<template>
    <div
      class="modal fade"
      id="chartModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body" id="chart">
            <svg class="chart" width="300" height="200"></svg>
            {{stat}}
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'ChartPage',
  props: {
    stat: Array
  },
  mounted () {
    // hard code user data here
    var data = [2, 40, 60]

    var svg = d3.select('svg')
    var width = svg.attr('width')
    var height = svg.attr('height')
    var radius = Math.min(width, height) / 2
    var g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c'])
    var pie = d3.pie()
    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    var arcs = g.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')
    arcs.append('path')
      .attr('fill', function (d, i) {
        return color(i)
      })
      .attr('d', arc)
  }
}
</script>

<style>
  .chart rect {
    fill: blue;
  }
  .chart text {
    fill: white;
    font: 10px sans-serif;
    text-anchor: end;
  }
</style>
