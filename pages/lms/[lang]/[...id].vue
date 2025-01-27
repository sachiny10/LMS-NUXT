<template>
  <div class="m-4 font">
    <div
      data-bs-spy="scroll"
      data-bs-target="#simple-list-example"
      data-bs-offset="0"
      data-bs-smooth-scroll="true"
      class="scrollspy-example"
      tabindex="0"
    >
      <article v-for="(section, index) in articles" :key="index">
        <div class="links">
          <a :href="'#' + section.id" class="anchor-links section-heading">{{ section.title }}</a>
          <a v-if="section.link" class="link" :href="section.link" target="_blank">{{ section.link }}</a>
        </div>
        <div class="section-para" v-html="section.description"></div>
        <div v-if="section.image" class="image-container">
          <a
            :href="section.image"
            target="_blank"
            title="Click to open this image in new tab"
          >
            <img
              :data-src="section.image"
              :src="defaultSrc"
              class="rounded-2 autozoom"
              :alt="section.altText"
              height="400"
            />
          </a>
        </div>
        <hr v-if="index !== articles.length - 1" />
      </article>
    </div>
  </div>
  <!-- <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Want to read back?</h5>
          <button href="" class="btn btn-primary" @click="navigate('previous', $route, $router)">Previous</button>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Want to read next section?</h5>
          <button class="btn btn-primary" @click="navigate('next', $route, $router)">Next</button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, onUpdated } from "vue";
const { id, lang } = useRoute().params;
definePageMeta({
  layout: "sidebar",
  name: "lms-content",
});


const router = useRouter();
const observer = ref(null);
const defaultSrc = "/loader.svg";

// Load articles dynamically
let data = await import(`../../../data/${lang}/${id[0]}.js`);
const articles = ref(data.default);

// function navigate(type, $route, $router){
//   if(type==="previous"){
//     // $router.go(-1);
//   }
//   console.log({...$router})
//   console.log({...$route})
// }


function setupObserver() {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          if (image.dataset.src && image.src !== image.dataset.src) {
            image.src = image.dataset.src;
            observer.value.unobserve(image);
          }
        }
      });
    },
    {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    }
  );
}

function observeImages() {
  const images = document.querySelectorAll(".autozoom[data-src]");
  images.forEach((image) => {
    observer.value.observe(image);
  });
}

onMounted(() => {
  setupObserver();
  observeImages();
});

onBeforeUnmount(() => {
  if (observer.value) observer.value.disconnect();
});

onUpdated(() => {
  observeImages();
});
</script>

<style lang="scss" scoped>
.section-heading {
  font-weight: 500;
}

.section-para {
  line-height: 1.7;
  font-size: 16px;
}

.image-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  a {
    max-width: 50%;
    height: auto;
  }
}

.sticky-sidebar {
  position: sticky;
  top: 2rem;
  right: 0;
  z-index: 2;
  height: calc(100vh - 7rem);
  overflow-y: auto;
}

.nav-link {
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: bolder;
  text-decoration: none;
}
li{
  ul{
    padding-left: 1rem;
  }
  li{
    font-size: 85%;
  }
}
.links {
    display: flex;
    flex-direction: column;
}
.link{
    display: contents;
}
</style>