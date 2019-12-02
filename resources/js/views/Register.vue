<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-body px-lg-5 py-lg-5">
                    <div class="text-center text-muted mb-4">
                        <small>Sign Up</small>
                    </div>
                    <div class="alert alert-danger" v-if="has_error && !success">
                        <p v-if="error == 'registration_validation_error'">error</p>
                        <p v-else>other error</p>
                    </div>
                    <form autocomplete="off" @submit.prevent="register" v-if="!success" method="post"> <!-- role="form" -->
                        <!-- <base-input class="input-group-alternative mb-3" placeholder="Name" addon-left-icon="ni ni-hat-3" v-model="model.name"></base-input>

                        <base-input class="input-group-alternative mb-3"
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
                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.name }">
                            <label for="name">Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Name" v-model="name">
                            <span class="help-block" v-if="has_error && errors.name">{{ errors.name }}</span>
                        </div>                    
                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.email }">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email">
                            <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
                        </div>                    
                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                            <label for="password">Password</label>
                            <input type="password" id="password" class="form-control" v-model="password">
                            <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
                        </div>                    
                        <div class="form-group" v-bind:class="{ 'has-error': has_error && errors.password }">
                            <label for="password_confirmation">Confirm Password</label>
                            <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation">
                        </div>

                        <button type="submit" class="my-4 btn btn-default">Create account</button>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'register',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            has_error: false,
            error: '',
            errors: {},
            success: false
      }
    },
    methods: {
        register() {
            var app = this
            this.$auth.register({
                data: {
                    name: app.name,
                    email: app.email,
                    password: app.password,
                    password_confirmation: app.password_confirmation
                },
                success: function() {
                    app.success = true
                    this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
                },
                error: function(res) {
                    console.log(res.response.data.errors)
                    app.has_error = true
                    app.error = res.response.data.error
                    app.errors = res.response.data.errors || {}
                }
            })
        }
    }
  }
</script>
<style>
</style>

