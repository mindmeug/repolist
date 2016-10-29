import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Details} from "../pages/details/details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Details
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Details
  ],
  providers: []
})
export class AppModule {}
