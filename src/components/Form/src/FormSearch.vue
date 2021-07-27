<template>
  <div class="search-wrapper">
      <input type="text" v-model="search" class="search-input" placeholder="User name" @input="handleSearch">
      <icon-svg v-if="!!content" name="shanchu" size="20px" @click="handleClear" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ChatSearch',
  props: {
    groupId: {
      type: [String,Number],
      require: true,
    },
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
.search-wrapper >>> .icon-svg {
  position: absolute;
  right: 10px;
  top: 4px;
}
.search-wrapper {
  overflow: hidden;
  position: relative;
}
.search-input {
  float: left;
  /* width: 188px;
  width: calc(100% - 52px); */
  width: 100%;
  height: 28px;
  padding-left: 15px;
  padding-right: 30px;
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
