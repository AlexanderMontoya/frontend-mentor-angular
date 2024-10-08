import { Routes } from "@angular/router";

export default [
    {
        path:"",
        loadComponent: () => import('./main/main.component').then((m)=>m.MainComponent)
    }
] as Routes