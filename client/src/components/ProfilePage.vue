<template>
  <div class="row py-5 px-4">
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
              <div class="bg-light p-4 d-flex justify-content-end text-center">
                  <ul class="list-inline mb-0">
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">{{post}}</h5>
                          <small class="text-muted">
                          <i class="fas fa-image mr-1"></i>Post</small>
                      </li>
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">{{comment}}</h5>
                          <small class="text-muted"> <i class="fas fa-user mr-1">
                          </i>Comment</small>
                      </li>
                      <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">{{likes}}</h5>
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
  </div>
</template>

<script>
import auth from '../scripts/auth'

export default {
  name: 'ProfilePage',
  data () {
    return {
      username: auth.getUsername(),
      email: auth.getEmail(),
      post: 0,
      comment: 0,
      likes: 0
    }
  }
}
</script>

<style>
  .profile-head {
    transform: translateY(5rem)
  }

  .cover {
    background: black;
    background-size: cover;
    background-repeat: no-repeat
  }
</style>
