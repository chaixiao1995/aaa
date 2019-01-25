import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    // state用于存储数据
    state: {
        count: 1,
        userInfo: {},
        list: []
    },
    // mutations里面放的是方法，主要用于改变state中的数据
    mutations: {
      increment (state) {
        state.count++
      },
      initUserInfo(state,data){
        state.userInfo = data;
      },
      initList(state,data){
        state.list = data;
      }
    }
  })

  export default store;