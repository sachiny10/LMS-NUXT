<template>
<div>
    Sample U page <b>{{ id }}</b>
</div>
</template>

<script setup>
definePageMeta({
  layout: "blank",
  name: "url-shortner",
});


const { id } = useRoute().params;
</script>