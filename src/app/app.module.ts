import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNewsFeedComponent } from './custom-components/home-news-feed/home-news-feed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsTilesComponent } from './news-tiles/news-tiles.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MatChipsModule } from '@angular/material/chips';
import { NavbarComponent } from './custom-components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogueboxComponent } from './custom-components/login-dialoguebox/login-dialoguebox.component';
import { AuthGuard } from './services/auth.guard';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { NewsPageComponent } from './news-page/news-page.component';
import { AdminNavbarComponent } from './custom-components/admin-navbar/admin-navbar.component';
import { FooterComponent } from './custom-components/footer/footer.component';
import { SearchDirective } from './custom-directives/search.directive';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeNewsFeedComponent,
    CarouselComponent,
    NewsTilesComponent,
    AdminPageComponent,
    HomePageComponent,
    LoginDialogueboxComponent,
    NewsPageComponent,
    AdminNavbarComponent,
    FooterComponent,
    SearchDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NgbCarouselModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
