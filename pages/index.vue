<template>
        <div class="content font">
          website main page
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