<template>
    <div class="register-container">
      <h1 class="text-center p-4 border-bottom text-uppercase">Register Form</h1>
  
      <div class="px-4 pt-4">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="user.name" :class="{ 'is-invalid': errors['name'] }">
            <div class="invalid-feedback">{{ errors['name'] }}</div>
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="user.email" :class="{ 'is-invalid': errors['email'] }">
            <div class="invalid-feedback">{{ errors['email'] }}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="user.password" :class="{ 'is-invalid': errors['password'] }">
            <div class="invalid-feedback">{{ errors['password'] }}</div>
          </div>
  
          <div class="form-group">
            <label for="password-confirm">Password Confirmation</label>
            <input type="password" class="form-control" id="password-confirm" v-model="user.password_confirm" :class="{ 'is-invalid': errors['password_confirm'] }">
            <div class="invalid-feedback">{{ errors['password_confirm'] }}</div>
          </div>
  
          <div class="mt-4 mb-2">
            <button class="btn btn-block btn-primary">Register</button>
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
          name: "",
          email: "",
          password: "",
          password_confirm: "",
        },
        errors: {},
      };
    },
    methods: {
      handleSubmit() {
        this.errors = {
          email: ["The email field is required"],
          password: ["The password field is required"],
        };
      },
    },
  };
  </script>
  
  <style>
  .register-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input.form-control {
    border-radius: 0px;
  }
  
  button.btn {
    border-radius: 0px;
  }
  </style>
  