<template>
  <AppProvider>
    <router-view />
  </AppProvider>
  <div class="chat-wrapper">
      <div class="chat-container">
          <LayoutNav/>
          <div class="chat-main">
            <LayoutLeft/>
            <LayoutCenter/>
          </div>
      </div>
  </div>
  
</template>

<script>
import AppProvider from './components/AppProvider.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutLeft from './components/LayoutLeft.vue'
import LayoutCenter from './components/LayoutCenter.vue'

export default {
  name: 'App',
  components: {
    AppProvider,
    LayoutNav,
    LayoutLeft,
    LayoutCenter,
  }
}
</script>

<style>
#app {

}
.chat-wrapper {
  position: relative;
  left: 50%;
  width: var(--wrapper);
  height: 800px;
  -webkit-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
}
.chat-container {
  position: relative;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 75%;
  background-color: var(--white);
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}
.chat-main {
  height: 100%;
  margin-left: 60px;
  background-color: var(--white);
}

</style>
