import { Routes } from '@angular/router';
import {Sucess} from './sucess/sucess';
import {App} from './app';
import {Home} from './home/home';
export const routes: Routes = [

      { path: '', component: Home },
      { path: 'Sucess', component: Sucess },
];
