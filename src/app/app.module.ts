import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarPanelComponent } from './adminpanel/navbar-panel/navbar-panel.component';
import { AllAdminPanelComponent } from './adminpanel/all-admin-panel/all-admin-panel.component';
import { AjouterPersonnelComponent } from './adminpanel/ajouter-personnel/ajouter-personnel.component';
import { ConsulterPersonnelComponent } from './adminpanel/consulter-personnel/consulter-personnel.component';
import { ModifierPersonnelComponent } from './adminpanel/modifier-personnel/modifier-personnel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarPanelComponent,
    AllAdminPanelComponent,
    AjouterPersonnelComponent,
    ConsulterPersonnelComponent,
    ModifierPersonnelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
