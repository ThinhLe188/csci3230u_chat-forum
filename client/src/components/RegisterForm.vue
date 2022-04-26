/* eslint-disable */

<template>
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white" style="border-radius: 1rem;">
                        <div class="card-body p-5">
                            <form class="mb-md-1 mt-md-4 pb-4" @submit.prevent="handleSubmit">
                                <h2 class="fw-bold mb-4 text-uppercase text-center">Sign Up</h2>
                                <div class="form-outline form-white mb-4">
                                    <input type="text" class="form-control form-control-lg" placeholder="Username" v-model="username" required/>
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email" v-model="email" required/>
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password" v-model="password" required/>
                                </div>
                                <div class="form-outline form-white mb-4">
                                    <input type="password" class="form-control form-control-lg" placeholder="Password Confirmation" v-model="passwordConfirm" required/>
                                </div>
                                <div class="m-4 text-center alert alert-success" v-if="isAuth">{{message}}</div>
                                <div class="m-4 text-center alert alert-danger" v-if="message && !isAuth">{{message}}</div>
                                <div class="text-center">
                                    <button class="btn btn-outline-light btn-lg px-5 mx-auto" type="submit">Sign Up</button>
                                </div>
                            </form>
                            <div class="text-center">
                                <p class="mb-0">Already have an account? <a href="/login" class="text-white-50 fw-bold">Login</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import auth from '../auth/auth'

export default {
  name: 'RegisterForm',
  data () {
    return {
      username: null,
      email: null,
      password: null,
      passwordConfirm: null,
      message: null,
      isAuth: false
    }
  },
  methods: {
    handleSubmit () {
      if (this.password !== this.passwordConfirm) {
        this.message = 'Passwords do not match'
        return
      }
      auth.register(this.username, this.email, this.password, (res) => {
        this.isAuth = res.auth
        this.message = res.msg
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
