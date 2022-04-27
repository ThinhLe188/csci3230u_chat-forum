<template>
  <div id="table" class="p-4 vh-100 bg_page">
    <!-- Button trigger modal -->
    <button id="create-thread" v-if="loggedIn"
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Create Thread
    </button>
    <table class="table table-hover table-striped table-dark table-borderless">
      <tr>
        <th style="width: 5%">KARMA</th>
        <th style="width: 90%">TITLE</th>
        <th style="width: 5%">BY</th>
      </tr>
      <tbody>
        <tr id="thread-list" v-for="thread in threads" :key="thread.title">
          <th v-on:click="thread[0] += 1" scope="row" ref="likes">{{thread[0]}}</th>
          <td>{{thread[1]}}</td>
          <td>{{username}}</td>
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
import User from '../scripts/user'

export default {
  name: 'HomeList',
  data () {
    return {
      loggedIn: User.loggedIn(),
      username: User.getUsername(),
      likes: 0,
      title: '',
      message: '',
      threadCount: 0,
      threads: []
    }
  },
  methods: {
    getThreadInfo () {
      // console.log(this.$refs.title.value)
      // console.log(this.$refs.message.value)
      this.title = this.$refs.title.value
      this.message = this.$refs.message.value
      this.threadCount += 1
      this.threads.push([this.likes, this.title, this.message, this.threadCount])
      // clear the inputs
      this.$refs.title.value = null
      this.$refs.message.value = null
      console.log(this.threads)
    }
  }
}
</script>

<style>
  #create-thread {
    background: rgb(255, 89, 0);
    border: 1px solid rgb(255, 89, 0);
    margin-bottom: 10px;
  }
  .bg_page {
    background:
    linear-gradient(135deg, black 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, black 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, black 25%, transparent 25%),
    linear-gradient(45deg, black 25%, transparent 25%);
    background-size: 2em 2em;
    background-color: #161616;
  }
  table {
    border: 5px solid rgb(255, 89, 0);
  }
  tr, th {
    color: rgb(255, 89, 0);
  }

  .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
    color: rgb(255, 89, 0);
    text-decoration: underline;
  }
</style>
