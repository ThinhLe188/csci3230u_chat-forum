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
// import * as d3 from 'd3'

export default {
  name: 'ChartPage',
  props: {
    stat: Array
  }
}
</script>
