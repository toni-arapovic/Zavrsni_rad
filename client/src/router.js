import { createRouter, createWebHistory } from 'vue-router';

import PocetnaStranica from './pages/PocetnaStranica'
import Kosarica from './pages/Kosarica'
import Trazi from './pages/Trazi'
import Naruci from './pages/Naruci'
import Kontakt from './pages/Kontakt'
import Proizvodi from './pages/Proizvodi'
import Proizvod from './pages/Proizvod'
import Login from './pages/Login'
import Register from './pages/Register'
import Korisnik from './pages/Korisnik'
import KorisnikNarudzbe from './pages/KorisnikNarudzbe'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: PocetnaStranica},
        { path: '/kosarica', component: Kosarica},
        { path: '/trazi', component: Trazi},
        { path: '/naruci', component: Naruci},
        { path: '/kontakt', component: Kontakt},
        { path: '/login', component: Login},
        { path: '/register', component: Register},
        { path: '/korisnik', component: Korisnik},
        { path: '/korisniknarudzbe', component: KorisnikNarudzbe},
        { path: '/:prType', component: Proizvodi},
        { path: '/proizvod/:prId', component: Proizvod}

    ]
  });

  export default router