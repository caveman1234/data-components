<template>
  <el-radio-group v-model="radioValue" class="RadioExt">
    <el-radio
      v-for="(item,index) in dataSource"
      :label="item.value"
      :key="index"
      @change="radioExtChange"
    >{{item.label}}</el-radio>
  </el-radio-group>
</template>
<script>
export default {
  name: "RadioExt",
  components: {},
  props: {
    value:{required:true,type:[String,Number,Boolean],default:""},
    dataSource:{required:true,type:Array},
    defaultValue:"1"
  },
  data() {
    return {
      radioValue:""
    }
  },
  methods: {
    isEmpty(value){
      var emptyArr = [null,undefined,""];
      return emptyArr.includes(value);
    },
    setValue(value){
      this.radioValue = value;
      this.$emit("input",value);
      this.$emit("change",value);
    },
    radioExtChange(value){
      this.setValue(value);
    }
  },
  watch: {
    value(value){
      if(this.isEmpty(value) || this.radioValue === value) return;
      this.setValue(value);
    }
  },
  filters: {

  },
  beforeMount(){
    //默认值优先
    if(!this.isEmpty(this.defaultValue)){
      this.setValue(this.defaultValue);
    }else{
      if(!this.isEmpty(this.value)){
        this.setValue(this.value);
      }
    }
  },
  mounted() {
    window.RadioExt = this;
  },
}
</script>
<style lang="scss" scoped>
</style>
