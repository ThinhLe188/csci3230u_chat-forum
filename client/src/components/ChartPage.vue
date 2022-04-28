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
          <div class="modal-body d-flex flex-column justify-content-center" id="chart">
            <h5>User Post / Comment / Likes Ratio</h5>
            <div class="d-flex justify-content-center mt-4">
              <svg class="chart" width="300" height="200"></svg>
            </div>
            <div id="legend" class="d-flex justify-content-center mt-4">
              <div><div class='box green'></div>= Post </div>
              <br>
              <div><div class='box blue'></div>= Comment </div>
              <br>
              <div><div class='box orange'></div>= Likes </div>
            </div>
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
    userStat: Object
  },
  data () {
    return {
      stat: this.userStat
    }
  },
  async mounted () {
    await this.$nextTick()
    var data = Object.values(this.stat)
    data = [4, 20, 60]
    var svg = d3.select('svg')
    var width = svg.attr('width')
    var height = svg.attr('height')
    var radius = Math.min(width, height) / 2
    var g = svg.append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00'])
    var pie = d3.pie()
    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    var arcs = g.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .attr('stroke', 'black')
    arcs.append('path')
      .attr('fill', function (d, i) {
        return color(i)
      })
      .attr('d', arc)
  }
}
</script>

<style>
  h5 {
    font-weight: bold;
    text-align: center;
  }

  #legend {
    font-weight: bold;
  }

  .box {
    float: left;
    height: 20px;
    width: 20px;
    margin-bottom: 15px;
    margin-right: 5px;
    margin-left: 15px;
    border: 1px solid black;
    clear: both;
  }

  .green {
  background-color: #4daf4a;
  }

  .blue {
    background-color: #377eb8;
  }

  .orange {
    background-color: #ff7f00;
  }
</style>
