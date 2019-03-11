import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { JsonbackendService } from './services/jsonbackend.service';
import { ProductService } from './products/product.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { BadgesComponent } from './badges/badges.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ElishCustomMaterialModule } from './shared/custommaterial/custommaterial.module';
import { ListadoComponent } from './listado/listado.component';

import { JmattabledataComponent } from './services/jmattabledata/jmattabledata.component';
import { ApimattabledataComponent } from './services/apimattabledata/apimattabledata.component';
import { ProductComponent } from './products/product.component';
import { GraficaComponent } from './grafica/grafica.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    BadgesComponent,
    PaginationComponent,
    ListadoComponent,
    JmattabledataComponent,
    ApimattabledataComponent,
    ProductComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ElishCustomMaterialModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [JsonbackendService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
