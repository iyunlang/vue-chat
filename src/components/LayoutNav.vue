<template>
    <div class="chat-nav">
        <img-avatar src=""/>
        <icon-svg class="active" name="hanhan-01-01" bg :color="color"/>
        <icon-svg name="haoyou" bg :color="color"/>
        <!-- <img src="./assets/img/thomas.jpg" alt=""> -->
        <!-- <svg class="icon active" aria-hidden="true">
            <use xlink:href="#icon-hanhan-01-01"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-haoyou"></use>
        </svg> -->
    </div>
</template>

<script>

export default {
  components: { },
  name: 'LayoutNav',
  props: {

  },
  setup() {
    const iconProps = {
      color: '#fff',
    }
    return {
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
}
.icon-svg {
  margin-top: 20px;
  cursor: pointer;
}
.img-avatar {
  width: 38px;
  height: 38px;
  border-radius: 3px;
  margin-top: 20px;
}

.icon-svg:hover,
.icon-svg.active {
  fill: var(--blue) !important;
}
</style>
