<template>
  <div class="search-wrapper">
      <input type="text" class="search-input" placeholder="Search">
      <icon-font name="icon-tubiaozhizuomoban" :color="'#fff'"/>
  </div>
</template>

<script>

export default {
  name: 'ChatSearch',
  props: {
    
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
  height: 42px;
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
.icon-font {
  display: block;
  float: left;
  width: 42px;
  height: 42px;
  margin-left: 10px;
  border: 1px solid var(--light);
  background-color: var(--blue);
  background-repeat: no-repeat;
  background-position: top 12px left 14px;
  border-radius: 50%;
}
</style>
