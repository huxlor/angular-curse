import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
// COMPONENTES
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

import { ChatService } from './providers/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [
    { provide: FirestoreSettingsToken, useValue: {} },
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
