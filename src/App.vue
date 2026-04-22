<script setup>
import SeedNursery from "./components/SeedNursery.vue";
import GardenBed from "./components/GardenBed.vue";
import GreenhouseDashboard from "./components/GreenhouseDashboard.vue";
</script>

<template>
  <main>
    <GreenhouseDashboard />
    <SeedNursery />
    <GardenBed />
  </main>
</template>

<style>
body {
  background-color: #f0f4f0;
  font-family: "Segoe UI", sans-serif;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  padding: 20px;
}
#app {
  max-width: 600px;
  width: 100%;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}
button:hover {
  transform: scale(1.05);
}
input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-right: 10px;
}
</style>
