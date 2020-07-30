<template>
  <div class="container">
    <div class="wrapper">
      <form class="form-signin">
        <h2 class="form-signin-heading">Ingrese sus datos</h2>
        <button class="btn btn-info btn-block" @click="signup()">Registrarse</button>
        <br />
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Email Address"
          required
          autofocus
        />
        <input type="password" class="form-control" name="password" placeholder="Password" required />
        <label class="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
        </label>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>
      </form>
    </div>
  </div>
</template>
