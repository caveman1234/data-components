<template>
  <div class="CompContainer">
    <div>
      <SelectExt
        v-model="busiData.selectExt"
        url="/web/api/getCombo"
        :field1.sync='busiData.name'
        :field2.sync='busiData.code'
        :field3.sync='busiData.value'
        :relative='{field1:"name",field2:"code",field3:"value"}'
        nameField="label"
        valueField="value"
        @change="selectExtChange"
        defaultValue="value1"
        :disabled="false"
        :dataSource="[]"
        :multiple="false"
      />
    </div>
    <div>
      <RadioExt
        v-model="busiData.radioValue"
        :dataSource="[{label:'选项一',value:'1'},{label:'选项二',value:'2'}]"
        @change="selectExtChange"
      ></RadioExt>
    </div>
    <div>
      <Refer
        v-model="busiData.referValue"
      ></Refer>
    </div>
    <hr />
    <div>
      <el-button @click="func">点击</el-button>
      <el-button @click="promiseClick">promise点击</el-button>
      <el-button @click="promiseDialogClick">promise--dialog--点击</el-button>
      <div ref="test"></div>
      <div ref="hello">11</div>
    </div>

  </div>
</template>
<script>
import SelectExt from "./commonComps/SelectExt.vue";
import RadioExt from "./commonComps/RadioExt.vue";
import Refer from "./commonComps/Refer.vue";

var options = [
  {label:"label1",value:"value1",code:"code1",name:"name1"},
  {label:"label2",value:"value2",code:"code2",name:"name2"},
  {label:"label3",value:"value3",code:"code3",name:"name3"},
  {label:"label4",value:"value4",code:"code4",name:"name4"},
];

export default {
  name:"CompContainer",
  components:{SelectExt,RadioExt,Refer},
  data(){
    return{
      busiData:{
        selectExt:"value2",
        name:"",
        code:"",
        value:"",
        radioValue:"2",
        referValue:""
      },
      options:options,
      helloIns:null
    }
  },
  methods:{
    testEvent(a,b,c){
      debugger
    },
    func(){
      var config = {
        $el:this.$refs.test,//挂载到el元素上,默认append到body
        $class:"create-hello-class",
        $props:{
          prop1:"prop111"
        },
        $events:{
          test:this.testEvent
        }
      };
      var renderFn = createElement => {
        return [
          createElement('h1', {
              slot: 'my-slot'
            }, 'my-slot-content')
        ]
      }
      var single = true;
      this.helloIns = this.$createHello(config,renderFn,single);
    },

    async promiseClick(){
      var result = await this.promiseFun();
      console.log("Object")
      return;
      console.log(result)
    },

    promiseFun(){
      var _this = this;
      return new Promise((resolve,reject) => {
        var config = {
          $el:this.$refs.test,//挂载到el元素上,默认append到body
          $class:"create-hello-class",
          $props:{
            prop1:"prop111"
          },
          $events:{
            show:(msg) => {
              resolve("show--" + msg);
            },
            hide(msg){
              console.log(_this)
              _this.helloIns.remove();
              resolve("hide--" + msg);
            }
          }
        };
        var renderFn = createElement => {
          return [
            createElement('h1', {
                slot: 'my-slot'
              }, 'my-slot-content')
          ]
        }
        var single = true;
        this.helloIns = this.$createHello(config,renderFn,single);
        });
    },
    selectExtChange(value,selectedObj){
      console.log("selectExtChange",value,JSON.stringify(selectedObj))
    },

    dialog1(){
      var _this = this;
      return new Promise((resolve,reject) => {
        var ins = null;
        var config = {
          // $el:this.$refs.test,//挂载到el元素上,默认append到body
          $class:"create-hello-class",
          $props:{
            prop1:"prop111"
          },
          $events:{
            cancle:(msg) => {
              resolve({type:"cancle",ins});
            },
            confirm(msg){
              resolve({type:"confirm",ins});
            }
          }
        };
        ins = this.$createDialog1(config,true).show();
      });
    },
    dialog2(){
      var _this = this;
      return new Promise((resolve,reject) => {
        var ins = null;
        var config = {
          // $el:this.$refs.test,//挂载到el元素上,默认append到body
          $class:"create-hello-class",
          $props:{
            prop1:"prop111"
          },
          $events:{
            cancle:(msg) => {
              resolve({type:"cancle",ins});
            },
            confirm(msg){
              resolve({type:"confirm",ins});
            }
          }
        };
        ins = this.$createDialog2(config,true).show();
      });
    },

    async promiseDialogClick(){
      var res1 = await this.dialog1();
      if(res1.type === "confirm"){
        var res2 = await this.dialog2();
        if(res2.type === "confirm"){
          alert("success");
        }else{
          alert("dialog2--取消");
        }
      }else{
        alert("dialog1-取消");
      }
    },
  },
  watch:{},
  mounted(){

    window.CompContainer = this;
  }
}
</script>
<style lang="scss" scoped>

</style>

