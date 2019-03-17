<template>
  <div v-if="visiable" class="Hello">
    Hello--{{prop1}}--{{msg}}
    <div @click="hide">hide</div>
    <div>
      <slot name="my-slot"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hello",
  components: {},
  props: ["prop1"],
  data() {
    return {
      msg:"hello",
      visiable:true
    }
  },
  methods: {
    show(){
      this.visiable = true;
      // this.$emit("show","hello-show");//只能resolve一次
    },
    hide(){
      this.visiable = false;
      this.$emit("hide","hello-hide");
      this.resetData();
      // this.remove();
    },
    resetData(){
      this.msg = "hello";
      this.visiable = true;
    }
  },
  watch: {

  },
  filters: {

  },
  mounted() {
    // this.$emit("show","hello-show");
  },
}
</script>
<style lang="scss" scoped>
// @import "./Hello.scss";
</style>
