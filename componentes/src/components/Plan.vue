<template>
  <div class="plan">
    <div class="descripcion">
      <span class="titulo">{{nombre}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: {
    nombre: {
      type: String,
      default: "Plan 1 - Principiante",
      required: true,
    },
    precio: Number,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>