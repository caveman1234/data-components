<template>
  <el-dialog
    title="弹窗二"
    :visible.sync="dialogVisible"
    width="30%"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
  >
    <span>弹窗二</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancle">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: "Dialog2",
  components: {},
  props: {

  },
  data() {
    return {
      dialogVisible:false
    }
  },
  methods: {
    cancle(){
      this.dialogVisible = false;
      this.$emit("cancle");
    },
    confirm(){
      this.dialogVisible = false;
      this.$emit("confirm");
    },
    show(){
      this.dialogVisible = true;
    },
    hide(){
      this.dialogVisible = false;
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
</style>
