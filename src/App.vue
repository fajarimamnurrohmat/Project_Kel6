<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
      <div class="container">
        <a class="navbar-brand fw-bolder" href="#">
          <i class="fas fa-utensils mr-2"></i>
          Warung Nasi Goreng Mbk Indah
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ show: isNavbarOpen }" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/Home">
                <i class="fas fa-home mr-2"></i>
                Beranda
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/User">
                <i class="fas fa-user-circle mr-2"></i>
                User Page
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Admin' }">
                <i class="fas fa-cogs mr-2"></i>
                Admin Page
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/auth/login" class="nav-link">
                <i class="fas fa-sign-in-alt mr-2"></i>
                Login
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'auth.register' }" class="nav-link">
                <i class="fas fa-user-plus mr-2"></i>
                Register
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-5 pt-5">
      <router-view></router-view>
    </div>
    <footer class="footer navbar-dark bg-secondary text-white text-center py-1">
      <div class="container">
        <p>&copy; 2023 Warung Nasi Goreng Mbk Indah. All rights reserved.</p>
        <p>Alamat: Jl. Fatahillah, Kode Pos 66214 RT 01/RW 02, Dusun Sentulan Kelurahan Panggungrejo, Kecamatan Tulunggung Kabupaten Tulunggung</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  }
};
</script>
