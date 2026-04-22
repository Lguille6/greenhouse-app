<template>
  <div class="garden-grid">
    <TransitionGroup name="pop">
      <div v-for="plant in store.plants" :key="plant.id" class="plant-card">
        <div :class="['icon', { wiggle: plant.isWiggling }]">
          {{
            plant.waterLevel > 70 ? "🌿" : plant.waterLevel > 30 ? "🌱" : "🥀"
          }}
        </div>
        <h4>{{ plant.name }}</h4>
        <p>{{ plant.waterLevel }}% Wet</p>
        <button @click="handleWater(plant)">💧 Water</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { useGardenStore } from "../stores/gardenStore";
const store = useGardenStore();

const handleWater = (plant) => {
  store.waterPlant(plant.id);
  plant.isWiggling = true;
  setTimeout(() => {
    plant.isWiggling = false;
  }, 500);
};
</script>

<style scoped>
.garden-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
}
.plant-card {
  background: white;
  padding: 15px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.icon {
  font-size: 2.5rem;
  transition: transform 0.2s;
}
.wiggle {
  animation: shake 0.5s ease;
}
@keyframes shake {
  0%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(15deg) scale(1.2);
  }
  75% {
    transform: rotate(-15deg);
  }
}
.pop-enter-active {
  transition: all 0.4s ease;
}
.pop-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
</style>
