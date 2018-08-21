import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MobxAngularModule } from 'mobx-angular';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom_material_module/custom.material.module';
import { FormsModule } from '../../node_modules/@angular/forms';
import { TestMobxComponent } from './pages/test-mobx/test-mobx.component';
import { SelectedFrameworksComponent } from './pages/selected-frameworks/selected-frameworks.component';
import { NewFrameworkComponent } from './pages/new-framework/new-framework.component';
import { ChangeDetectionCounterComponent } from './pages/change-detection-counter/change-detection-counter.component';
import { Frameworks } from './shared/framework.store';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    TestMobxComponent,
    SelectedFrameworksComponent,
    NewFrameworkComponent,
    ChangeDetectionCounterComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CustomMaterialModule,
    MobxAngularModule,
    AppRoutes
  ],
  providers: [
    Frameworks
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
