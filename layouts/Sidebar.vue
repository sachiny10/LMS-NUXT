<template>
    <div>
        <div>
            <Navbar />
            <div class="main-container container-fluid">
                <aside>
                    <ul>
                        <li v-for="menuItem in menuItems">{{menuItem}}</li>
                    </ul>
                </aside>
                <main>
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