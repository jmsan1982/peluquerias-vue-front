import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import ListadoMunicipios from "@/components/municipios/ListadoMunicipios";
import ListadoPeluquerias from "@/components/peluquerias/ListadoPeluquerias";
import CreateFirmaComponent from "@/components/firmas/CreateFirmaComponent";
import PeluqueriaComponent from "@/components/peluquerias/PeluqueriaComponent";
import ListadoPeluqueriasMunicipio from "@/components/peluquerias/ListadoPeluqueriasMunicipio";
import NewPeluqueriaComponent from "@/components/peluquerias/NewPeluqueriaComponent";
import EditPeluqueriaComponent from "@/components/peluquerias/EditPeluqueriaComponent";


const routes = [
    {path: '/', component: ListadoMunicipios},
    {path: '/inicio', component: ListadoMunicipios},
    {path: '/municipios', component: ListadoMunicipios},
    {path: '/peluquerias', component: ListadoPeluquerias},
    {path: '/nueva-peluqueria',name: 'nuevaPeluqueria', component: NewPeluqueriaComponent},
    {path: '/editar-peluqueria/:id', name: 'editarPeluqueria', component: EditPeluqueriaComponent},
    {path: '/peluquerias-municipio/:id', name: 'peluqueriasMunicipio', component: ListadoPeluqueriasMunicipio},
    {path: '/peluqueria/:id',  name: 'peluqueria', component: PeluqueriaComponent},
    {path: '/crear-firma', name: 'create-firma', component: CreateFirmaComponent},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
