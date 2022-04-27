<template>
  <div class="row py-5 px-4 vh-100 profile_page">
      <div class="col-md-5 mx-auto">
          <!-- Profile widget -->
          <div class="bg-white shadow rounded overflow-hidden">
              <div class="px-4 pt-0 pb-4 cover">
                  <div class="media align-items-end profile-head">
                      <div class="media-body mb-5 text-white">
                          <h4 class="mt-0 mb-0">{{username}}</h4>
                          <p class="small mb-4"> <i class="fas fa-map-marker-alt mr-2"></i>{{email}}</p>
                      </div>
                  </div>
              </div>
              <div type="button" data-toggle="modal" data-target="#chartModal" class="bg-light p-4 d-flex justify-content-end text-center">
                  <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">{{stat.posts}}</h5>
                          <small class="text-muted">
                          <i class="fas fa-image mr-1"></i>Post</small>
                      </li>
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">{{stat.comments}}</h5>
                          <small class="text-muted"> <i class="fas fa-user mr-1">
                          </i>Comment</small>
                      </li>
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">{{stat.votes}}</h5>
                          <small class="text-muted"> <i class="fas fa-user mr-1">
                          </i>Likes</small>
                      </li>
                  </ul>
              </div>
              <div class="py-4 px-4">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                      <h5 class="mb-0">Recent Threads</h5>
                  </div>
                  <!-- insert recent thread here -->
                  <div class="row">
                  </div>
              </div>
          </div>
      </div>
      <!-- Chart -->
      <ChartPage/>
  </div>
</template>

<script>
import ChartPage from './ChartPage.vue'
import User from '../scripts/user'

export default {
  name: 'ProfilePage',
  components: { ChartPage },
  data () {
    return {
      username: User.getUsername(),
      email: User.getEmail(),
      stat: {},
      showChart: true
    }
  },
  created: function () {
    User.getStat((res) => {
      if (res.success) {
        this.stat = res.stat
      } else {
        console.log(res.msg)
      }
    })
  }
}
</script>

<style>
  .profile_page {
    background: linear-gradient(to right, #009fff, #ec2f4b);
  }

  .profile-head {
    transform: translateY(5rem)
  }

  .cover {
    background: linear-gradient(to right, #283048, #859398);
    background-size: cover;
    background-repeat: no-repeat
  }
</style>
