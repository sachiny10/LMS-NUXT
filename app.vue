<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import client from './client.json';
import { personas } from './config';
provide('CLIENT', client);
provide('personas',personas)


</script>