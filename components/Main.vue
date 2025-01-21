<script setup >
import { ref, onMounted } from 'vue';

const enData = ref([]);
const hiData = ref([]);

onMounted(async () => {
  const enModules = import.meta.glob('@/data/en/*.js');
  for (const path in enModules) {
    const module = await enModules[path]();
    enData.value.push(module.default);
  }

  const hiModules = import.meta.glob('@/data/hi/*.js');
  for (const path in hiModules) {
    const module = await hiModules[path]();
    hiData.value.push(module.default); 
  }

  console.log('English Data:', enData.value);
  console.log('Hindi Data:', hiData.value);
});
</script>

<template>
    <div>
      <ul>
        
      </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>