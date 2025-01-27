<template>
    <aside class="lms-sidebar">
        <ul class="lms-sidebar__menu list-unstyled ps-0">
            <li v-for="menuItem in menuItems" class="lms-sidebar__menu-item mb-1" >
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"  data-bs-toggle="collapse" :data-bs-target="'#'+menuItem.id" aria-expanded="false">
                    {{ menuItem.title }}
                </button>
                <div class="collapse" :id="menuItem.id">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li v-for="childLinks in menuItem.children">
                            <NuxtLink
                                :to="`/lms/${$route.params.lang ?? 'en'}/${menuItem.id}/${childLinks.id}`"
                                class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                            >
                                {{ childLinks.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import fs from 'fs';
import path from "path"
import { toTitleCase } from '@utils/strings';


const route = useRoute();
const menuItems = [];

let files = fs.readdirSync(path.resolve(__dirname, `../data/${route.params.lang ?? "en"}`));
for (let file of files) {
    file = file.replace('.js', '');
    const data = await import( /* @vite-ignore */path.resolve(__dirname, `../data/${route.params.lang ?? "en"}/${file}.js`));
    menuItems.push({
        id: file,
        title: toTitleCase(file),
        children: data.default.map(({id, title}) => ({id, title}))
    })
}

</script>

<style lang="scss" scoped>
.lms-sidebar{
    &__menu{
        list-style: none;
        padding: 0;
        top: 30px;
        left: 30px;
    }
    &__menu-item{
        a{
            color: #000;
        }
    }
}
.active{
    border-left: 4px solid #0d6efd;
}
</style>