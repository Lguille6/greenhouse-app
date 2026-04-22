<template>
  <div class="dashboard">
    <h2>Greenhouse Status</h2>
    <p>
      Overall Health: <strong>{{ store.gardenHealth }}%</strong>
    </p>
    <p v-if="store.thirstyPlantsCount > 0" style="color: orange">
      Warning: {{ store.thirstyPlantsCount }} plants need water!
    </p>
    <p v-else>All plants are happy!</p>
  </div>
</template>

<script setup>
import { useGardenStore } from "../stores/gardenStore";
const store = useGardenStore();
</script>
