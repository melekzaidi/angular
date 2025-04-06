import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


import { MemberFormComponent } from './member-form/member-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ConfigrmDialogueComponent } from './configrm-dialogue/configrm-dialogue.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TemplateComponent } from './template/template.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatListModule} from '@angular/material/list';

import {MatMenuModule} from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { ModalEvtComponentComponent } from './modal-evt-component/modal-evt-component.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalEventVisibilityComponent } from './modal-event-visibility/modal-event-visibility.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberFormComponent,
    ConfigrmDialogueComponent,
    TemplateComponent,
    DashboardComponent,
    ToolsComponent,
    ArticlesComponent,
    EventsComponent,
    ModalEvtComponentComponent,
    ModalEventVisibilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatDialogModule,
    BrowserAnimationsModule,MatTableModule,HttpClientModule,MatIconModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,MatInputModule,
    MatSidenavModule,MatToolbarModule,MatListModule,MatMenuModule,MatDatepickerModule,MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
