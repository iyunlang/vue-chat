<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" class="search-input" placeholder="User name">
      <icon-svg @click="handleSearch" name="tubiaozhizuomoban" size="34px" :color="'#fff'"/>
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
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 10px;
}
.search-wrapper:after {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  display: block;
  height: 1px;
  content: '';
  background-color: var(--light);
}
.search-input {
  float: left;
  width: 188px;
  width: calc(100% - 52px);
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
.icon-svg {
  display: block;
  float: left;
  width: 34px;
  height: 34px;
  margin-left: 10px;
}
</style>
