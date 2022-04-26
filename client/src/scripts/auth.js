import axios from 'axios'

export default {
  register (username, email, password, callback) {
    const newUser = {
      username: username,
      email: email,
      password: password
    }
    axios.post('http://localhost:8000/user/register', newUser)
      .then(res => {
        const mes = {
          auth: true,
          msg: res.data
        }
        return callback(mes)
      })
      .catch(err => {
        const mes = {
          auth: false,
          msg: err.response.data
        }
        return callback(mes)
      })
  },

  login (email, password, callback) {
    const user = {
      email: email,
      password: password
    }
    axios.post('http://localhost:8000/user/login', user)
      .then(res => {
        localStorage.token = res.data.token
        const mes = {
          auth: true,
          msg: res.data.msg
        }
        this.loginStatus(true)
        return callback(mes)
      })
      .catch(err => {
        const mes = {
          auth: false,
          msg: err.response.data
        }
        this.loginStatus(false)
        return callback(mes)
      })
  },

  loggedIn () {
    return !!localStorage.token
  },

  logout (callback) {
    localStorage.clear()
    this.loginStatus(false)
    return callback()
  },

  loginStatus () {},

  getUsername (callback) {
    axios.get('http://localhost:8000/user/profile', {
      headers: {
        'auth-token': localStorage.token
      }
    }).then(res => {
      return callback(res.data.username)
    })
  }
}
