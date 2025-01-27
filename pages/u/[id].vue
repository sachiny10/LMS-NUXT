<template>
<div>
    Sample U page {{ id }}
</div>
</template>

<script setup>
const { id } = useRoute().params;
console.log(id)
</script>