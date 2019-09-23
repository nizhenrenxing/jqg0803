import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recommend from './router/Recommend.vue'
import Rank from './router/Rank.vue'
import Search from './router/Search.vue'
import RecommendPlayer from './router/RecommendPlayer.vue'
import SongRankContent from './router/SongRankContent.vue'
import NewsonglistMore from './router/NewsonglistMore.vue'
import Sign from './router/Sign.vue'
import Logon from './router/Logon.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/person',
      name: 'person',
      component: () => import('./router/Person.vue')
    },
    {
      path: '/recommendplayer',
      name: 'recommendplayer',
      component: RecommendPlayer
    },
    {
      path: '/rank/songrankcontent',
      name: 'songrankcontent',
      component: SongRankContent
    },
    {
      path: '/recommend/newsonglistmore',
      name: 'newsonglistmore',
      component: NewsonglistMore
    },
    {
      path: '/person/sign',
      name: 'sign',
      component: Sign
    },
    {
      path: '/person/logon',
      name: 'logon',
      component: Logon
    }
  ]
})
