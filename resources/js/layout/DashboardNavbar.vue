<template>
    <base-nav class="navbar-top navbar-dark"
              id="navbar-main"
              :show-toggle-button="false"
              expand>
        <div class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
        </div>
        <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
                <base-dropdown class="nav-link pr-0">
                    <div class="media align-items-center" slot="title">
                        <!-- <span class="avatar avatar-sm rounded-circle">
                          <img alt="Image placeholder" src="img/theme/team-4-800x800.jpg">
                        </span> -->
                        <div class="media-body ml-2 d-none d-lg-block" :user="user">
                            <span class="mb-0 text-sm font-weight-bold">{{user.name}}</span>
                        </div>
                    </div>

                    <!-- <template>
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome!</h6>
                        </div>
                        <router-link to="/profile" class="dropdown-item">
                            <i class="ni ni-user-run"></i>
                            <span>Logout</span>
                        </router-link>
                    </template> -->
                </base-dropdown>
            </li>
        </ul>
    </base-nav>
</template>
<script>
  export default {
    data() {
      return {
        activeNotifications: false,
        showMenu: false,
        searchQuery: '',
        has_error: false,
        user: {}
      };
    },
    mounted() {
      if (localStorage.token) {
        this.token = localStorage.token;
      }
      this.getUsers()
    },
    methods: {
      toggleSidebar() {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
      },
      hideSidebar() {
        this.$sidebar.displaySidebar(false);
      },
      toggleMenu() {
        this.showMenu = !this.showMenu;
      },
      getUsers() {
        this.$http({
          url: 'auth/user',
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + this.token
          }
        })
        .then((res) => {
          this.user = res.data.data
          // console.log(this.user.name)
        }, () => {
          this.has_error = true
        })
      }
    }
  };
</script>
