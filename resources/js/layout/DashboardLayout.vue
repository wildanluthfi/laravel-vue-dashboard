<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar :background-color="sidebarBackground" short-title="" title="">
      <template slot="dashboard">
        <sidebar-item :link="{name: 'Dashboard', icon: 'ni ni-tv-2 text-primary', path: '/dashboard'}"/>
      </template>
      <template slot="links">
        <sidebar-item :link="{name: 'Listening', icon: 'ni ni-tv-2 text-primary', path: '/listening'}"/>
        <sidebar-item :link="{name: 'Structure', icon: 'ni ni-planet text-blue', path: '/structure'}"/>
        <sidebar-item :link="{name: 'Written Expression', icon: 'ni ni-pin-3 text-orange', path: '/written-expression'}"/>
        <sidebar-item :link="{name: 'Reading', icon: 'ni ni-single-02 text-yellow', path: '/reading'}"/>
      </template>
      <template slot="assignment-links">
        <sidebar-item :link="{name: 'Listening', icon: 'ni ni-tv-2 text-primary', path: '/listening/assignment'}"/>
        <sidebar-item :link="{name: 'Structure', icon: 'ni ni-planet text-blue', path: '/structure/assignment'}"/>
        <sidebar-item :link="{name: 'Written Expression', icon: 'ni ni-pin-3 text-orange', path: '/written-expression/assignment'}"/>
        <sidebar-item :link="{name: 'Reading', icon: 'ni ni-single-02 text-yellow', path: '/reading/assignment'}"/>
      </template>
      <template slot="exam-links">
        <sidebar-item :link="{name: 'Exam', icon: 'ni ni-tv-2 text-primary', path: '/exam'}"/>
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
      <!-- <div class="container-fluid">
        <h3>username</h3>
      </div> -->

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <!-- <content-footer v-if="!$route.meta.hideFooter"></content-footer> -->
      </div>
    </div>
  </div>
</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  // import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      // ContentFooter,
      FadeTransition
    },
    data() {
      return {
        sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
      };
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style lang="scss">
</style>
