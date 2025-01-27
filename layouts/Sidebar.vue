<template>
    <div>
        <div>
            <Navbar />
            <div class="main-container row container-fluid">
                <Sidebar class="col-2"/>
                <main class="col-10">
                    <slot></slot>
                </main>
            </div>
            <Footbar />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>