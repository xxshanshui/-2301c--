<template>
  <div @click="handleClick">
    <svg-icon :icon-class="isfull ? 'small-screen2' : 'screen-full'"></svg-icon>
  </div>
</template>

<script>
import screenfull from "screenfull"
export default {
  data() {
    return {
      isfull: false
    }
  },
  methods: {
    handleClick() {
      screenfull.toggle()
      if (screenfull.isEnabled) {
        screenfull.on("change", () => {
          this.isfull = screenfull.isFullscreen
        })
      }
    }
  },
  destroyed() {
    screenfull.off("change", () => {
      console.log("销毁")
    })
  }
}
</script>

<style lang="scss" scoped></style>
