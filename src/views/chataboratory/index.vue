<template>
  <div :style="isShowNotice ? 'padding: 0;height: calc(100% - 30px)' : 'padding: 0;height: 100%'">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:"index",
  computed: {
    ...mapGetters(["isShowNotice"]),
  },
}
</script>