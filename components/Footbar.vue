<template>
    <footer class="bg-primary page-footer d-flex p-1 items-center">
      <div class="copyright">
        <a :href="client.website" target="_blank" class="text-white">{{ client.company }}</a>
        <span class="mx-1">|</span>
        &copy; 2018 - {{ new Date().getFullYear() }}
        <a href="https://www.inboice.com/" target="_blank" class="text-white mx-1">Inboice CRM</a>
        <span>v{{ client.version }} </span>

        <span class="mx-1">|</span>
        Made with &#9829; by <a href="https://www.bestwebs.in" target="_blank" class="q-mr-sm text-white"> BestWebs</a>
      </div>
      <div class="flex-grow-1"></div>
      <div class="no-print">
        <NuxtLink to="/" class="footer-links text-white">Usage Terms & Conditions</NuxtLink>
      </div>
    </footer>
  </template>

  <script setup>
  import { inject } from "vue";

  const client = inject("CLIENT");
  </script>
  <style lang="scss">
  .page-footer{
    text-align: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    font-size: 80%;
    .footer-links{
      &{
        border-radius: 0;
        padding: 0 5px;
        min-height: auto;
        line-height: 1;
      }
      &:not(:last-child){
        border-right: 1px solid #fff;
      }
    }
  }

  .copyright{
    color: #fff;
    padding-left: 5px;
  }
  @media (max-width: 700px) {
    .page-footer{
      flex-direction: column-reverse;
      width: 100%;
    }
    .copyright{
      width:100%;
      margin-top: 10px;
    }
  }
  </style>
