import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        newsongplaylist:null,
        newsonglist:null,
        newsongdetail:null,
        isSign: false,
        personinfo:[{mima:'q123456',zhanghao:12345678910}],
        userinfo:null,
        collectlist:[]
    },
    mutations: {
        updataNewSongPlayList: function (state, arr) {
            state.newsongplaylist = arr
        },
        updataNewsongList: function (state,obj) {
            state.newsonglist =obj
        },
        updataNewSongDetail: function (state, arr) {
            state.newsongdetail = arr
        },
        updataSignTrue:function(state){
            state.isSign=true
        },
        updataSignFalse:function(state){
            state.isSign=false
        },
        updataPersoninfo:function(state,obj){
            state.personinfo.push(obj)
        },
        updataUserinfo: function(state,arr){
            state.userinfo = arr
        },
        updataCollectList:function(state,obj){
            state.collectlist.push(obj)   
        }

    },
    actions: {
       
    }
})