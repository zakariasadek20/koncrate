import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ServicesComponent } from './components/services/services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { BlogComponent } from './components/blog/blog.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"blog",component:BlogComponent},
  {path:"blog/:slug",component:ShowPostComponent},
  {path:"services",component:ServicesPageComponent},
  {path:"services/:slug",component:ServiceComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
