<template>
    <div class="chat-nav">
        <img-avatar hasInfo src=""/>
        <div class="chat-nav-item active" @click="handleClick('msg')">
          <icon-svg name="hanhan-01-01" md :color="color"/>
        </div>
        <div class="chat-nav-item" @click="handleClick('person')">
          <div class="dot"></div>
          <icon-svg name="haoyou" md :color="color"/>
        </div>
    </div>
</template>

<script>
export default {
  components: { },
  name: 'LayoutNav',
  props: {

  },
  emits: ["change"],
  setup(props, { emit }) {

    const iconProps = {
      color: '#fff',
    }

    function handleClick(val) {
      emit("change", val)
    }

    return {
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
.chat-nav-item {
  margin-top: 20px;
  cursor: pointer;
  position: relative;
}

.chat-nav-item.active .icon-svg,
.icon-svg:hover,
.icon-svg.active {
  fill: var(--blue) !important;
}
.dot {
  position: absolute;
  top: 0;
  right: 10px;
  height: 14px;
  width: 14px;
  border-radius: 20px;
  background-color: red;
  transform: scale(0.7);
  color: #fff;
}
</style>
