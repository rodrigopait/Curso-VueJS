<template>
  <div class="card my-5">
    <div class="card-body">
      <h5 class="text-center card-title">{{producto.titulo}}</h5>
      <img :src="producto.imagen" width="290" height="150" />
      <p class="text-center text-muted card-text display-4">$ {{Number(producto.precio).toFixed()}}</p>
      <button
        class="btn btn-primary form-control"
        :disabled="estaEnCarrito"
        @click="agregarAlCarro(producto)"
      >{{estaEnCarrito ? 'Agregado' : 'Agregar al carrito'}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "producto",
  props: ["producto", "estaEnCarrito"],
  methods: {
    agregarAlCarro: function (producto) {
      this.$emit("agregar-carro", producto);
    },
  },
};
</script>