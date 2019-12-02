<template>
    <div class="main-content bg-default">

        <!-- Header -->
        <div class="header bg-gradient-success py-7">
            <div class="container">
                <div class="header-body text-center mb-7">
                </div>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-7">
            <slide-y-up-transition mode="out-in" origin="center top">
                <router-view></router-view>
            </slide-y-up-transition>
        </div>
    </div>
</template>
<script>
  import { SlideYUpTransition } from 'vue2-transitions'

  export default {
    name: 'auth-layout',
    components: {
      SlideYUpTransition
    },
    data() {
      return {
        year: new Date().getFullYear(),
        showMenu: false
      }
    }
  }
</script>
<style>
</style>
