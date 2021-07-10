<template>
  <app-provider>
    <!-- <router-view /> -->
    <div class="chat-wrapper">
        <div class="chat-container">
            <layout-nav :active="key" @change="handleNavChange"/>
            <div class="chat-main">
              <layout-left :active="key" />
              <layout-center/>
              <layout-right/>
            </div>
        </div>
    </div>
  </app-provider>
</template>

<script>
import { ref} from 'vue'

import AppProvider from './components/AppProvider.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutLeft from './components/LayoutLeft.vue'
import LayoutCenter from './components/LayoutCenter.vue'
import LayoutRight from './components/LayoutRight.vue'

export default {
  name: 'App',
  components: {
    AppProvider,
    LayoutNav,
    LayoutLeft,
    LayoutCenter,
    LayoutRight,
  },
  setup() {
    const key = ref("msg")
    const showRight = ref(false)

    function handleNavChange(val) {
      key.value = val
    }

    return {
      key,
      showRight,
      handleNavChange,
    }
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
}
.chat-wrapper {
  position: relative;
  left: 50%;
  width: var(--wrapper);
  /* min-height: 600px; */
  height: 100%;
  -webkit-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
}
.chat-container {
  box-sizing: border-box;
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
  position: relative;
  height: 100%;
  margin-left: 60px;
  background-color: var(--white);
  overflow: hidden;
}
.chat-wrapper.full {
  width: 100%;
}
.chat-wrapper.full .chat-container {
  width: 100%;
  height: 100%;
}

</style>
