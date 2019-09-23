<template>
  <div class="logon">
    <div class="logon_info">
      <li class="a">
        账号:
        <input type="text" placeholder="请输入账号" v-model="zh"  @focus="ashow" @blur="ahid"/>
        <p v-show="this.aisshow">请输入11位手机号</p>
      </li>
      <li class="b" >
        密码:
        <input type="text" placeholder="请输入密码" v-model="mm" @focus="bshow" @blur="bhid"/>
        <p v-show="this.bisshow">请输入以字母开头，长度在6-18之间，只能包含字符、数字和下划线</p>
      </li>
      <li>
        确认密码:
        <input type="text" placeholder="请再次输入密码" v-model="suremm" />
      </li>
      <li>
        认证码:
        <span>
          <input class="suremm" type="text" placeholder="请输入验证码" v-model="renzheng" />
        </span>
        <span
          class="renzhengma"
         @click="changNum" 
        >{{this.randomunm}}</span>
      </li>
    </div>
    <div class="logon_in">
      <span class="zhuce" @click="chang">立即注册</span>
      <span class="denglu" @click="turnsign">返回登录</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "logon",
  data() {
    return {
      zh: "",
      mm: "",
      suremm: "",
      renzheng: "",
     index:0,
     aisshow:false,
     bisshow:false,
     randomunm:123123,
      renzhengNum: [123123,564456,724485,859877,325647,358987,458768]
    };
  },
  computed: {
    randomNum() {
      return this.renzhengNum[
        Math.floor(Math.random() * this.renzhengNum.length)
      ];
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.zh.trim() || this.mm.trim()) {
      let c = confirm("wraning");
      if (c) {
        next();
      } else {
        return
      }
    }
    console.log(to);
    next();
  },
  methods: {
    chang() {
      let renZH = /^1\d{10}/; //以数字1开头，长度11位
      let renMM = /^[a-zA-Z]\w{5,17}$/; //以字母开头，长度在6-18之间，只能包含字符、数字和下划线
      let pastzh = renZH.test(this.zh);
      let pastmm = renMM.test(this.mm);
      let personinfoarr=[]
      let personinfolist=this.$store.state.personinfo
      for(var i=0;i<personinfolist.length;i++){
         personinfoarr.push(personinfolist[i].zhanghao)
      }
      console.log(personinfoarr)
      if (pastzh && pastmm&&this.mm==this.suremm&&this.renzheng==this.randomunm&&personinfoarr.indexOf(this.zh)==-1) {
        confirm("注册成功");
        this.$store.commit('updataPersoninfo',{zhanghao:this.zh,mima:this.mm})
        console.log(personinfolist.length)
        console.log(personinfolist)
        this.zh = ""
        this.mm = ""
        this.suremm= ""
        this.renzheng=""
        
      } else {
        confirm("注册失败");
      }
      
    },
    changNum(){
      this.index++
    },
    ashow(){
      this.aisshow=true
    },
    bshow(){
      this.bisshow=true
    },
    ahid(){
      this.aisshow=false
    },
    bhid(){
      this.bisshow=false
    },
    turnsign(){
      this.$router.replace({path:'/person'})
    }
  },
  watch: {
     index(newvalue,oldvalue){
       if(newvalue!=oldvalue){
         console.log(newvalue,oldvalue)
       this.randomunm= this.renzhengNum[
        Math.floor(Math.random() * this.renzhengNum.length)]
       }
     }
    },
};
</script>

<style lang="scss" scoped>
.logon {
  width: 100%;
  position: fixed;
  top: 40px;
  bottom: 40px;
  left: 0;
  right: 0;
  border-top: 1px solid #fff;
  padding-top: 20px;
  overflow: auto;
  background: rgba(0, 0, 0, 0.12);
  .logon_info {
    list-style: none;
    li {
      width: 100%;
      margin: 15px 0;
      text-align: right;
      padding-right: 20px;
      box-sizing: border-box;
     
      p{
        margin:0;
        padding: 0;
        font-size: 12px;
        color: red;
        text-align: left;
        width: 240px;
        margin-left: 100px;
       
      }
      .renzhengma {
        display: inline-block;
        box-sizing: border-box;
        margin-left:10px; 
        width: 90px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        background: #fff
      }
      input {
        width: 240px;
        line-height: 30px;
        border: 0;
        border-radius: 15px;
        outline: none;
        padding: 0 15px;
        &.suremm {
          width: 140px;
          line-height: 30px;
          border: 0;
          border-radius: 15px;
          outline: none;
          padding: 0 15px;
        }
      }
    }
  }
  .logon_in {
    width: 100%;
    position: relative;
    span {
      display: inline-block;
      &.zhuce {
        position: absolute;
        left: 109px;
      }
      &.denglu {
        position: absolute;
        right: 70px;
      }
    }
  }
}
</style>