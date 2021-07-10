<template>
    <div class="chat-nav">
        <img-avatar hasInfo src=""/>
        <icon-svg v-for="icon in icons" v-bind:key="icon.key" :class="k === icon.key ? 'active': ''" @click="handleClick(icon.key)" :name="icon.name" bg :color="color"/>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  components: { },
  name: 'LayoutNav',
  props: {
    active: {
      type: String,
      default: "msg"
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const k = ref(props.active)

    const icons = [
      { name: 'hanhan-01-01', key: 'msg' },
      { name: 'haoyou', key: 'person' },
    ]
    const iconProps = {
      color: '#fff',
    }

    function handleClick(val) {
      k.value = val
      emit("change", val)
    }

    return {
      k,
      icons,
      handleClick,
      ...iconProps,
    }
  }
}
</script>

<style scoped>
@import url("../styles/index.css");
.chat-nav {
  float: left;
  width: 60px;
  height: 100%;
  border: 1px solid var(--black);
  border-right: none;
  background-color: var(--dark);
  text-align: center;
  padding-top: 20px;
}
.icon-svg {
  margin-top: 20px;
  cursor: pointer;
}

.icon-svg:hover,
.icon-svg.active {
  fill: var(--blue) !important;
}
</style>
