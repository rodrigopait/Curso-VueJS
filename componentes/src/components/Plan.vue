<template>
  <div @click="seleccionar" class="plan" :class="{'plan-activo':seleccionado}">
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
  },
  data() {
    return {
      seleccionado: false,
    };
  },
  methods: {
    seleccionar: function () {
      this.$emit("select", this.nombre);
      this.seleccionado = true;
    },
  },
};
</script>

<style scoped>
.subtitulo {
  margin: 0.7rem auto;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0;
  max-width: 500px;
  color: #5c6162;
}

.planes {
  padding: 0 40px;
  margin-bottom: 40px;
}

.planes .plan {
  background-color: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.planes .plan,
.planes .plan > .weight {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.planes .plan > .weight {
  width: 20%;
  font-size: 1.875rem;
  font-weight: 500;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #7dacaf;
  color: #136268;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  height: 100px;
}

.planes .plan > .descripcion {
  width: 60%;
  padding: 1rem;
}
.planes .plan > .descripcion .titulo {
  color: #3d4852;
  text-align: center;
  display: block;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.planes .plan-activo,
.planes .plan:hover {
  -webkit-box-shadow: 0 15px 30px 0 rgba(143, 42, 42, 0.11),
    0 5px 15px 0 rgba(88, 6, 6, 0.08);
  box-shadow: 0 10px 20px 0 rgba(95, 6, 6, 0.11),
    0 5px 15px 0 rgba(61, 4, 4, 0.08);
  background-color: coral;
}

.planes .plan-activo:after,
.planes .plan:hover:after {
  border-width: 2px;
  border-color: #df0d4c;
  border-radius: 0.25rem;
  content: "";
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>