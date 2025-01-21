<script setup>

</script>

<template>
    <div>
        <Navbar />
        <div class="main-container container-fluid">
            <slot />
        </div>
        <Footbar />
    </div>
</template>

<style lang="scss" scoped>
.main-container {
    margin-top: 76px;
}
</style>