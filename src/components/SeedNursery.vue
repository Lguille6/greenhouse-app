<template>
  <div class="nursery">
    <input
      v-model="plantName"
      placeholder="Name your plant..."
      @keyup.enter="handlePlanting"
    />
    <button @click="handlePlanting">Plant Seed</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGardenStore } from "../stores/gardenStore";

const plantName = ref("");
const store = useGardenStore();

const handlePlanting = () => {
  if (plantName.value.trim()) {
    store.plantSeed(plantName.value);
    plantName.value = "";
  }
};
</script>

<style scoped>
.nursery {
  background: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
