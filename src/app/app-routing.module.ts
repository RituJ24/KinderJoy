import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'alpha-practice',
    loadChildren: () => import('./alpha-practice/alpha-practice.module').then( m => m.AlphaPracticePageModule)
  },
  {
    path: 'num-learn',
    loadChildren: () => import('./num-learn/num-learn.module').then( m => m.NumLearnPageModule)
  },
  {
    path: 'num-pract',
    loadChildren: () => import('./num-pract/num-pract.module').then( m => m.NumPractPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
