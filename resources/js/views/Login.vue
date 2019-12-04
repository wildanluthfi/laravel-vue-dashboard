<template>
        <div class="row justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary shadow border-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="text-center text-muted mb-4">
                            <small>Sign in</small>
                        </div>
                        <div class="alert alert-danger" v-if="has_error">
                            <p>Please try again</p>
                        </div>
                        <form autocomplete="off" @submit.prevent="login" method="POST">
                            <!-- <base-input class="input-group-alternative mb-3"
                                        placeholder="Email"
                                        addon-left-icon="ni ni-email-83"
                                        v-model="model.email">
                            </base-input>

                            <base-input class="input-group-alternative"
                                        placeholder="Password"
                                        type="password"
                                        addon-left-icon="ni ni-lock-circle-open"
                                        v-model="model.password">
                            </base-input> -->

                            <!-- <base-checkbox class="custom-control-alternative">
                                <span class="text-muted">Remember me</span>
                            </base-checkbox>
                            <div class="text-center">
                                <base-button type="primary" class="my-4">Sign in</base-button>
                            </div> -->

                            <div class="form-group">
                                <label for="email">E-mail</label>
                                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" class="form-control" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-default">Sign in</button>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6">
                    </div>
                    <div class="col-6 text-right">
                        <router-link to="/register" class="text-light">
                          <small>Create new account</small>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
  export default {
      name: 'login',
      data() {
          return {
              email: '',
              password: '',
              has_error: false
          }
      },
      mounted() {

      },
      methods: {
        login() {
          var redirect = this.$auth.redirect()
          var app = this
          this.$auth.login({
            params: {
              email: app.email,
              password: app.password
            },
            success: function() {
              // const redirectTo = redirect ? redirect.from.name : this.$auth.user().role === 2 ? 'dashboard' : 'dashboard'
              // this.$router.push({name: redirectTo})
              // this.$router.push({name: 'dashboard'})
            },
            error: function() {
              app.has_error = true
            },
            rememberMe: true,
            fetchUser: true
          })
        }
      }
  }
</script>
<style>
</style>
