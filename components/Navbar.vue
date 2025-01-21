
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <header class="container-fluid">
      <a class="navbar-brand" href="/">
        <img :src="CLIENT.logo" alt="" class="logo">
        <span class="navbar-brand-name">{{ CLIENT.name }}</span>
      </a>
      <button class="navbar-toggler no-print" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse no-print" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" aria-current="page" to="/">LMS Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" active-class="active" aria-current="page" :to="{name: 'lms-home', params: {lang: 'en'}}">Get Started</NuxtLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ecosystem
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item submenu-item" href="/index.html">Inboice CRM</a></li>
              <li><a class="dropdown-item submenu-item" target="_blank" href="https://demo.inboice.com">CRM Demo <span><img src="/icons/external.svg" alt=""></span></a></li>
              <li><a class="dropdown-item submenu-item" target="_blank" :href="CLIENT.youtubeLink">Youtube Tutorials <span><img src="/icons/external.svg" alt=""></span></a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item submenu-item" target="_blank" href="https://www.bestwebs.in">BestWebs <span><img src="/icons/external.svg" alt=""></span></a></li>
            </ul>
          </li>
        </ul>


          <!-- <div v-if="false" class="" role="search" >
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery" >
            <button class="btn btn-outline-primary" type="submit">Search</button>

            <ul v-if="searchQuery.length >0">
              <li v-for="item in filteredData" :key="item.id">
                <a href='#'>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </a>
              </li>
            </ul>
          </div> -->


        <button class="btn btn-link text-primary" type="button" @click="switchLang($route)">
         <span><img src="/icons/language.svg" alt=""></span>
        </button>
      </div>
    </header>
  </nav>
</template>

<script setup >
const CLIENT = inject('CLIENT');


</script>



<style lang="scss" scoped>

</style>