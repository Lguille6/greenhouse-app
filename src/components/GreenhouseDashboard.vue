<template>
  <div class="dashboard">
    <h2>Greenhouse Status</h2>
    <p>
      Overall Health: <strong>{{ store.gardenHealth }}%</strong>
    </p>
    <div class="health-bar-bg">
      <div
        class="health-bar-fill"
        :style="{ width: store.gardenHealth + '%' }"
      ></div>
    </div>
    <p v-if="store.thirstyPlantsCount > 0" class="warning">
      ⚠️ {{ store.thirstyPlantsCount }} plants need water!
    </p>
  </div>
</template>

<script setup>
import { useGardenStore } from "../stores/gardenStore";
const store = useGardenStore();
</script>

<style scoped>
.dashboard {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  border-left: 5px solid #42b983;
}
.health-bar-bg {
  background: #eee;
  height: 12px;
  border-radius: 6px;
  overflow: hidden;
  margin: 10px 0;
}
.health-bar-fill {
  background: #42b983;
  height: 100%;
  transition: width 0.8s ease;
}
.warning {
  color: #f57c00;
  font-weight: bold;
}
</style>
