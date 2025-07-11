import PagInicial from '../view/PagInicial.vue'
import Cadastro from '../view/Cadastro.vue'
import Login from '../view/Login.vue'
import Perfil from '../view/Perfil.vue'
import Homepage from '../view/Homepage.vue'
import Config from '@/view/Config.vue'
import Atividade from '../view/AtividadeDetalhes.vue'
import NotFound from '@/view/NotFound.vue'
import ServerError from '@/view/ServerError.vue'
import ExplorarGrupo from '@/view/ExplorarGrupo.vue'
import GrupoDetalhe from '@/view/GrupoDetalhe.vue'
import MudEmail from '@/view/MudEmail.vue'
import MudSenha from '@/view/MudSenha.vue'
import{createRouter, createWebHistory} from 'vue-router'


const routes=[
    {name:'PagInicial',
    component:PagInicial,
    path:'/'
    },
    {name:'Cadastro',
    component:Cadastro,
    path:'/cadastro'
    },
    {name:'Login',
    component:Login,
    path:'/login'
    },
    {name:'Perfil',
    component:Perfil,
    path:'/Perfil'    
    },
    {name:'Homepage',
    component:Homepage,
    path:'/homepage'    
    },
    {name:'Config',
    component:Config,
    path:'/config'    
    },
    {name:MudSenha,
    component:MudSenha,
    path:'/mudSenha'    
    },
    {name:MudEmail,
    component:MudEmail,
    path:'/mudEmail'    
    },
    {name:'Atividade',
    component:Atividade,
    path:'/atividade/:id',   
    },
    {name:'ServerError',
    component: ServerError,
    path: '/erro-servidor'
    },
    {name:'ExplorarGrupos',
    component: ExplorarGrupo,
    path:'/explorarGrupos'
    },
    {name:'GrupoDetalhe',
    component: GrupoDetalhe,
    path:'/grupo/:id'
    },
    {name: 'NotFound',
    component: NotFound,
    path: '/:pathMatch(.*)*'  
    }
];
const router =createRouter({
    history:createWebHistory(),
    routes
})

export default router;