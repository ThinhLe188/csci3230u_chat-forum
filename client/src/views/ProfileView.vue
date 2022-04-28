<template>
  <div>
    <ProfilePage :stat="stat"/>
    <!-- Chart -->
    <ChartPage :userStat="stat"/>
  </div>
</template>

<script>
import ProfilePage from '../components/ProfilePage.vue'
import ChartPage from '../components/ChartPage.vue'
import User from '../scripts/user'

export default {
  name: 'ProfileView',
  components: {
    ProfilePage,
    ChartPage
  },
  data () {
    return {
      stat: {}
    }
  },
  created () {
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
