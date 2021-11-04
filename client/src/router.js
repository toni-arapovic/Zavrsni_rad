import { createRouter, createWebHistory } from 'vue-router';

import PocetnaStranica from './pages/PocetnaStranica'
import Processori from './pages/products/Processori'
import MaticnePloce from './pages/products/MaticnePloce'
import Ram from './pages/products/Ram'
import PohranaPodataka from './pages/products/PohranaPodataka'
import GrafickeKartice from './pages/products/GrafickeKartice'
import Kucista from './pages/products/Kucista'
import NapojneJedinice from './pages/products/NapojneJedinice'
import VentilatoriKuleri from './pages/products/VentilatoriKuleri'
import Kosarica from './pages/Kosarica'
import Trazi from './pages/Trazi'
import Naruci from './pages/Naruci'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PocetnaStranica},
        { path: '/processori', component: Processori},
        { path: '/maticneploce', component: MaticnePloce},
        { path: '/ram', component: Ram},
        { path: '/pohranapodataka', component: PohranaPodataka},
        { path: '/grafickekartice', component: GrafickeKartice},
        { path: '/kucista', component: Kucista},
        { path: '/napojnejedinice', component: NapojneJedinice},
        { path: '/ventilatorikuleri', component: VentilatoriKuleri},
        { path: '/kosarica', component: Kosarica},
        { path: '/trazi', component: Trazi},
        { path: '/naruci', component: Naruci}
    ]
  });

  export default router