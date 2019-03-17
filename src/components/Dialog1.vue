<template>
  <el-dialog
    title="弹窗一"
    :visible.sync="dialogVisible"
    width="30%"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <div slot="title">
      <span>弹窗一</span>
      <i @click="cancle" class="el-icon-close" style="float:right;cursor:pointer;"></i>
    </div>

    <span slot="footer" class="dialog-footer">
      <el-button @click="cancle">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: "Dialog1",
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
    },
    close(){
      debugger
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
