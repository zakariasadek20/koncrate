import { CommonService } from './services/common.service';
import { RoutesRoutingModule } from './routes-routing.module';
import { RouterModule } from '@angular/router';

import { SlideService } from './services/slide.service';
import { MessageService } from './services/message.service';
import { PostService } from './services/post.service';
import { ServiceService } from './services/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';
import { PostsComponent } from './components/posts/posts.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesComponent } from './components/services/services.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutComponent,
    BlogComponent,
    BreadcrumbComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    MessageComponent,
    PostsComponent,
    ServiceComponent,
    ServicesComponent,
    ShowPostComponent,
    ShowServiceComponent,
    SlidersComponent,
    PageNotFoundComponent,
    ServicesPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    FormsModule,
    RoutesRoutingModule
  ],
  providers: [ServiceService,PostService,MessageService,SlideService,CommonService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
