<template>
  <div id="table" class="p-4 vh-100 bg_page">
    <h1 class="logo">
      <span>F </span>
      <span class="cuboid">
          <span class="cuboid-face cuboid-face-front"></span>
          <span class="cuboid-face cuboid-face-back"></span>
          <span class="cuboid-face cuboid-face-top"></span>
          <span class="cuboid-face cuboid-face-bottom"></span>
          <span class="cuboid-face cuboid-face-left"></span>
          <span class="cuboid-face cuboid-face-right"></span>
      </span>
      <span> RUM</span>
    </h1>
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
import Thread from '../scripts/thread'
// console.log(localStorage?.token)

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

      const newThread = {
        content: this.message,
        title: this.title
      }
      Thread.addPost(newThread, (res) => {
        console.log(res)
      })
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

.logo {
    font-size: calc(1em + 3vw);
    letter-spacing: 0.08em;
    color: rgb(255, 89, 0);
    text-transform: uppercase;
    white-space: nowrap;
    user-select: none;
}

.cuboid,
.cuboid-face {
    display: inline-block;
}

.cuboid {
    font-size: 0.8em;
    position: relative;
    height: 0.5em;
    width: 1em;
    vertical-align: middle;
    transform-style: preserve-3d;
    transform: rotateX(-40deg) rotateY(-45deg);
}

.cuboid-face {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: 0.08em solid rgb(255, 89, 0);;
}

.cuboid-face-top,
.cuboid-face-bottom {
    height: 1em;
}

.cuboid-face-front {
    transform: translateZ(0.5em);
}

.cuboid-face-back {
    transform: rotateY(180deg) translateZ(0.5em);
}

.cuboid-face-left {
    transform: rotateY(-90deg) translateZ(0.5em);
}

.cuboid-face-right {
    transform: rotateY(90deg) translateZ(0.5em);
}

.cuboid-face-top {
    transform: rotateX(90deg) translateZ(0.5em);
}

.cuboid-face-bottom {
    transform: rotateX(-90deg);
}
</style>
