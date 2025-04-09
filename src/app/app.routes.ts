import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BeerListComponent } from './pages/beer-list/beer-list.component';
import { BeerComponent } from './pages/beer/beer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [{
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
},{
    path: 'home',
    component: BeerListComponent
},{
    path: 'beer',
    children: [{
        path: '',
        component: BeerComponent
    },{
        path: ':id',
        component: BeerComponent
    }]
},{
    path:'**',
    component: NotFoundComponent
}];
