<template>
  <div class="garden-grid">
    <div v-for="plant in store.plants" :key="plant.id" class="plant-card">
      <h4>{{ plant.name }}</h4>
      <p>Hydration: {{ plant.waterLevel }}%</p>
      <button @click="store.waterPlant(plant.id)">Water</button>
    </div>
  </div>
</template>

<script setup>
import { useGardenStore } from "../stores/gardenStore";

const store = useGardenStore();
</script>
