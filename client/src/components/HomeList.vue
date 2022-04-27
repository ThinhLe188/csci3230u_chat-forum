<template>
  <div id="table" class="p-4">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Create Thread
    </button>
    <table class="table table-hover">
      <tr>
        <th style="width: 5%">KARMA</th>
        <th style="width: 95%">TITLE</th>
      </tr>
      <tbody>
        <tr v-for="thread in threads" :key="thread.title">
          <th v-on:click="thread[0] += 1" scope="row" ref="likes">{{thread[0]}}</th>
          <td>{{thread[1]}}</td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Your Thread</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="getFormValues">
              <div class="form-group">
                <label for="title-name" class="col-form-label">Title:</label>
                <input type="text" class="form-control" ref="title" />
              </div>
              <div class="form-group">
                <label for="message-text" class="col-form-label" name="message-label">
                  Message:
                </label>
                <textarea class="form-control" ref="message" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" @click.prevent="getThreadInfo()" class="btn btn-primary" data-dismiss="modal">Submit Thread</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  data () {
    return {
      likes: 0,
      title: '',
      message: '',
      threads: []
    }
  },
  methods: {
    onClick () {
      console.log('A')
    },
    getThreadInfo () {
      // console.log(this.$refs.title.value)
      // console.log(this.$refs.message.value)
      this.title = this.$refs.title.value
      this.message = this.$refs.message.value
      this.threads.push([this.likes, this.title, this.message])
      // clear the inputs
      this.$refs.title.value = null
      this.$refs.message.value = null
      console.log(this.threads)
    }
  }
}
</script>

<style>
</style>
