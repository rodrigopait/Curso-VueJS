<template>
  <div>
    <plan v-for="pla in planes" :nombre="pla" :key="pla" @select="planSeleccionado" />
  </div>
</template>

<script>
import Plan from "./Plan.vue";
export default {
  name: "Planes",
  components: {
    Plan,
  },
  props: {},
  data() {
    return {
      planes: [
        "Plan 1 - Principiante",
        "Plan 2 - Intermedio",
        "Plan 3 - Avanzado",
        "Plan 4 - hackers",
      ],
      planSelect: null,
    };
  },
  methods: {
    planSeleccionado: function (plan) {
      this.planSelect = plan;
    },
  },
};
</script>

<style scoped>
</style>