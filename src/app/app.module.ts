import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//  import { NguiMapModule} from '@ngui/map';s
 import { AgmCoreModule } from '@agm/core';
 



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { GoogleSigninComponent } from './google-signin/google-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GooglemapComponent,
    GoogleSigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     // NguiMapModule.forRoot({apiUrl: 'AIzaSyAOkoWd9uJ8JKi4F15KJE9SmzNxDM_7_gg'}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAOkoWd9uJ8JKi4F15KJE9SmzNxDM_7_gg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
