import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { InstallComponent } from './componentes/install/install.component';
import { StartComponent } from './componentes/start/start.component';


const app_routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'install', component: InstallComponent },
    { path: 'welcome', component: WelcomeComponent },
    //{ path: 'path3', component: Name3Component },
    { path: '**', pathMatch: 'full', redirectTo: 'welcome'},
];

export const app_routing = RouterModule.forRoot(app_routes) 
