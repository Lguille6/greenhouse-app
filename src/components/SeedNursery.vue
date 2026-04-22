<template>
  <div class="panel">
    <input v-model="plantName" placeholder="Name your plant..." />
    <button @click="handlePlanting">Plant Seed</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGardenStore } from "../stores/gardenStore";

const plantName = ref("");
const store = useGardenStore();

const handlePlanting = () => {
  if (plantName.value) {
    store.plantSeed(plantName.value);
    plantName.value = "";
  }
};
</script>
