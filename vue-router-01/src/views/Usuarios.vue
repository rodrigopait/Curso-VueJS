<template>
  <div class="container">
    <h1>Informacion de Usuario</h1>
    <router-link
      :to="{name:'Usuarios', params:{id: item}}"
      v-for="(item,index) of arregloDeUsuarios"
      :key="index"
    >
      <button>{{item}}</button>
    </router-link>
    <usuario />
  </div>
</template>

<script>
import Usuario from "@/components/Usuario.vue";

export default {
  name: "Usuarios",
  components: {
    Usuario,
  },
  data() {
    return {
      arregloDeUsuarios: ["pai", "carlos", "luisa", "karla"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
