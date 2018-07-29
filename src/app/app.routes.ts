import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { InstallComponent } from './componentes/install/install.component';


const app_routes: Routes = [
    { path: 'home', component: WelcomeComponent },
    { path: 'install', component: InstallComponent },
    //{ path: 'path3', component: Name3Component },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

export const app_routing = RouterModule.forRoot(app_routes) 
