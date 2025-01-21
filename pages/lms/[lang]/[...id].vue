<template>
    <div>
        <br>
        <br>
        <br>
        <br>

        <h1>lms id page is "<i>{{ id }}</i>"</h1>
    </div>
</template>
<script setup >
const {id, lang} = useRoute().params
definePageMeta({
    layout: "sidebar",
    name: "lms-content"
})

let data = await import(`../../../data/${lang}/${id[0]}.js`);

console.log(data.default);
</script>
<style lang="scss" scoped>

</style>