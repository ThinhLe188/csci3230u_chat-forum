/* eslint-disable */

<template>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5">
                            <form class="mb-md-1 mt-md-4 pb-4" @submit.prevent="handleSubmit">
                                <h2 class="fw-bold mb-4 text-uppercase text-center">Login</h2>
                                <div class="form-outline form-white mb-4">
                                    <input type="texr" class="form-control form-control-lg" placeholder="Email" v-model="email" required/>
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" v-model="password" required/>
                                </div>
                                <div class="m-4 text-center alert alert-danger" v-if="errorMessage">{{errorMessage}}</div>
                                <div class="text-center">
                                    <button class="btn btn-outline-light btn-lg px-5 mx-auto" type="submit">Login</button>
                                </div>
                            </form>
                            <div class="text-center">
                                <p class="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import auth from '../scripts/auth'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: null,
      password: null,
      errorMessage: null
    }
  },
  methods: {
    handleSubmit () {
      auth.login(this.email, this.password, (res) => {
        if (res.auth) {
          auth.getProfile((res) => {
            this.$router.replace('/')
          })
        }
        this.errorMessage = res.msg
      })
    }
  }
}
</script>

<style scoped lang="scss">
    .gradient-custom {
        font-weight: bold;
        background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
    }

    ::placeholder {
        font-weight: bold;
    }

    button {
        font-weight: bold;
    }
</style>
