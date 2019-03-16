<template>
  <div v-if="visiable" @click="func" class="Hello">
    Hello--{{prop1}}
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
    func(){
      this.$emit("test",1,2,3,4);
    },
    show(){
      this.visiable = true;
    },
    hide(){
      this.visiable = false;
    }
  },
  watch: {

  },
  filters: {

  },
  mounted() {

  },
}
</script>
<style lang="scss" scoped>
// @import "./Hello.scss";
</style>
