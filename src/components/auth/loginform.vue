<template>
    <div class="login-container">
      <h1 class="text-center p-4 border-bottom text-uppercase">Login Form</h1>
  
      <div class="px-4 pt-4">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="email">Email</label>
            <base-input
              id="email"
              class="form-control"
              v-model="user.email"
              :error="errors['email']"
            ></base-input>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <base-input
              id="password"
              class="form-control"
              label="Password"
              v-model="user.password"
              type="password"
              :error="errors['password']"
            ></base-input>
          </div>
          <div class="mt-4 mb-2">
            <button class="btn btn-block btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
        errors: {},
      };
    },
    methods: {
      handleSubmit() {
        this.$router.push({ name: "products" });
        this.errors = {
          email: ["The email field is required"],
          password: ["The password field is required"],
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  form {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    padding: 30px;
    width: 400px;
  }
  
  h1 {
    color: #007bff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  
  .form-group label {
    color: #6c757d;
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border: none;
    border-radius: 25px;
    color: #fff;
    font-weight: bold;
    padding: 10px 15px;
    text-transform: uppercase;
    width: 100%;
  }
  
  .btn-primary:hover {
    background-color: #0062cc;
  }
  </style>
  