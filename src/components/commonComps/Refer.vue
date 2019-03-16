<template>
  <div>
    <div>
      <el-select
        v-model="referValue"
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
        size="mini"
        class="Refer"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div>
      <el-dialog
        title="参照"
        :visible.sync="dialogVisible"
        width="600px"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>

var options = [
  {label:"label1",value:"value1",name:"name1",code:"code1"},
  {label:"label2",value:"value2",name:"name2",code:"code2"},
  {label:"label3",value:"value3",name:"name3",code:"code3"},
  {label:"label4",value:"value4",name:"name4",code:"code4"},
  {label:"label5",value:"value5",name:"name5",code:"code5"},
];

export default {
  name: "Refer",
  components: {},
  props: {
    value:{required:true,type:[String,Number]},
    field1:{type:[Boolean,String,Number]},         //带入字段1
    filed2:{type:[Boolean,String,Number]},         //带入字段2
    filed3:{type:[Boolean,String,Number]},         //带入字段3
    filed4:{type:[Boolean,String,Number]},         //带入字段4
    filed5:{type:[Boolean,String,Number]},         //带入字段5
    filed6:{type:[Boolean,String,Number]},         //带入字段6
  },
  data() {
    return {
      dialogVisible:false,

      referValue: '',
      loading:false,
      options:options
    }
  },
  methods: {
    handleInputClick(v){
      console.log("inputClick",v);
      this.dialogVisible = true;
    },
    remoteMethod(query){
      console.log("query",query);
    }
  },
  watch: {
    value(value){
      console.log("watch-change::",value);
    }
  },
  filters: {

  },
  mounted() {
    window.Refer = this;
  },
}
</script>
<style lang="scss" scoped>
.Refer{
  width: 100%;
}
</style>
