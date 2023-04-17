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
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
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
        </div>
      </div>
    </nav>
    <div class="mt-5 pt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
