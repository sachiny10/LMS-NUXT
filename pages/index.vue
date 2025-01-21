<template>
        <div class="content font">
      <div class="text-center">
        <h1 class="title mt-5 mx-2">Inboice CRM</h1>
        <div class="description mt-3 mx-3">
          <p class="font-weight-bold">
            A Customer Relationship Management (CRM) system is a software solution designed to manage a company's interactions with current and potential customers.
          </p>
        </div>
        <div class="btns mt-4">
          <div class="btn-group">
            <NuxtLink type="button" class="btn btn-primary" to="/content">
              <span class="get-started-btn"><img src="/icons/right-arrow.svg" alt="" class=".get-started-btn "></span>
              Get Started
            </NuxtLink>
            <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
              <li disabled class="text-muted ms-3">View as</li>
              <li><hr class="dropdown-divider"></li>
              <li v-for="(persona,title) in personas" :key="persona" >
                <NuxtLink class="dropdown-item" to="/content">
                  {{ title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <a :href="CLIENT.youtubeLink" target="_blank" class="btn btn-light tutorial-btn">
            <span><img src="/icons/video.svg" alt=""></span>
            Visit Youtube Tutorials
          </a>
        </div>
      </div>
    </div>
</template>

<script setup >
const CLIENT = inject('CLIENT');
const personas = inject('personas');
const persona = ref({});
</script>


<style lang="scss" >

.content {
    height: calc(100vh - 76px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-weight: 900;
    font-size: 76px;
    line-height: 1.25;
    letter-spacing: -1.5px;
  }

  .description {
    max-width: 600px;
  }

  .btns {
    display: flex;
    gap: 100px;
    justify-content: center;
  }

  .btn {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
  }

  .tutorial-btn span img ,
  .get-started-btn span img {
    margin-right: 8px;
  }

  .get-started-btn {
    color: #1976d2;
  }
</style>