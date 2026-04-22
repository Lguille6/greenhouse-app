import { defineStore } from "pinia";

export const useGardenStore = defineStore("garden", {
  state: () => ({
    plants: [],
  }),
  getters: {
    gardenHealth: (state) => {
      if (state.plants.length === 0) return 0;
      const totalWater = state.plants.reduce((sum, p) => sum + p.waterLevel, 0);
      return Math.round(totalWater / state.plants.length);
    },
    thirstyPlantsCount: (state) =>
      state.plants.filter((p) => p.waterLevel < 50).length,
  },
  actions: {
    plantSeed(name) {
      this.plants.push({
        id: Date.now(),
        name,
        waterLevel: 10,
        isWiggling: false,
      });
    },
    waterPlant(id) {
      const plant = this.plants.find((p) => p.id === id);
      if (plant && plant.waterLevel < 100) {
        plant.waterLevel = Math.min(100, plant.waterLevel + 20);
      }
    },
  },
});
