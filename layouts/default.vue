<template>
    <div>
        <Navbar />
        <div class="main-container container-fluid">
            <slot />
        </div>
        <Footbar />
    </div>
</template>
<script setup>

</script>

<style lang="scss" scoped>
.main-container {
    margin-top: 76px;
}
</style>