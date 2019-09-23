<template>
  <div class="person">
    <div class="person_server">
      <div class="person_sign">
        <li>
          账号:
          <input type="text" placeholder="请输入账号" v-model="ZH" />
        </li>
        <li>
          密码:
          <input type="text" placeholder="请输入密码" v-model="MM" />
        </li>
      </div>
      <div class="person_in">
        <span class="zhuce" @click="turnlogon">注册</span>
        <span class="denglu" @click="getinfo(ZH)">登录</span>
      </div>
    </div>
    <transition name='shademove'>
    <div class="shade" v-show="isshow">
        <p>账号或密码错误</p>
        <span class="left" @click="sure">确认</span><span class="right" @click="sure">取消</span>
    </div>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "person",
  data() {
    return {
      ZH: "",
      MM: "",
      info: true,
      isshow:false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.$store.state.isSign === true) {
        vm.$router.push({ path: "/person/sign" });
      } else {
        return;
      }
    });
  },
  methods: {
    turnlogon() {
      this.$router.push({ path: "/person/logon" });
    },
    getinfo(ZH) {
      var personinfo = this.$store.state.personinfo;
      var personinfolist =[]
      var info=true
      
      for (var i = 0; i < personinfo.length; i++) {
        if(personinfo[i].zhanghao==this.ZH&&personinfo[i].mima==this.MM){
          this.info=false
          this.$store.commit('updataUserinfo',ZH) 
          this.$store.commit('updataSignTrue',true) 
          this.$router.push({path:'/person/sign'})
        }
           
      }

      if(this.info==true){
        this.isshow=true
      }

    },
    sure(){
      this.isshow=false
    }
  }
};
</script>

<style lang="scss" scoped>
.person {
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
  .shade{
    width: 60%;
    height: 20%;
    position: relative;
    left: 24%;
    box-sizing: border-box;
    border: 2px solid black;
    background: #fff;
    border-radius: 8px;
    top: -90px;
    p{
     padding-top: 10px;
    }
    span{
      display: inline-block;
      &.left{
        width: 35px;
        margin-right: 20px;
        background: green;
        color: #fff;
      }
      &.right{
        width: 35px;
        margin-left: 20px;
        background: red;
        color: #fff;
      }
    }
  }
  .person_server {
    width: 100%;
    .person_sign {
      list-style: none;
      li {
        width: 100%;
        margin: 15px 0;
        input {
          width: 250px;
          line-height: 30px;
          border: 0;
          border-radius: 15px;
          outline: none;
          padding: 0 15px;
        }
      }
    }
    .person_in {
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
  .shademove-enter,
  .shademove-leave-to {
    transform: scale(0)
  }
  .shademove-enter-active,
  .shademove-leave-active {
    transition: all 0.3s;
  }
  .shademove-enter-to,
  .shademove-leave {
    transform: scale(1);
  }
}
</style>