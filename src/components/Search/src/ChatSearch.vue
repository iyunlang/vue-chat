<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" class="search-input" placeholder="User name" @input="handleSearch">
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ChatSearch',
  props: {
    
  },
  setup() {
    const search = ref("")

    function handleSearch() {
      console.log(search.value)
    }

    return {
      search,
      handleSearch,
    }
  }
}
</script>

<style scoped>
@import url("../../../styles/index.css");
.search-wrapper {
  overflow: hidden;
}
.search-input {
  float: left;
  /* width: 188px;
  width: calc(100% - 52px); */
  width: 100%;
  height: 34px;
  padding: 0 15px;
  border: 1px solid var(--light);
  background-color: #eceff1;
  border-radius: 21px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
}
.search-input:focus {
  outline: none;
}
</style>
