<template>
  <!-- Reply Modal -->
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
            <h5 class="modal-title" id="exampleModalLabel">Reply</h5>
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
                <label for="message-text" class="col-form-label" name="message-label">
                  Message:
                </label>
                <textarea class="form-control" style="height: 300px" ref="message" id="message-text"></textarea>
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
            <button type="button" @click.prevent="PostReply()" class="btn btn-primary" data-dismiss="modal">Submit Thread</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import User from '../scripts/user'
// import Thread from '../scripts/thread'
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
    PostReply () {
      console.log(localStorage.getItem('reply'))
      // console.log(this.$refs.title.value)
      // console.log(this.$refs.message.value)
      /* this.title = ''
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
      }) */
    }
  }
}
</script>
