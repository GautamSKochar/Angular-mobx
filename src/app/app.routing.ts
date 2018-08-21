import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TestMobxComponent } from './pages/test-mobx/test-mobx.component';

const appRoutes: Routes = [
    { path: '', component: TestMobxComponent, pathMatch: 'full' },
    { path: 'todos', component: TestMobxComponent, pathMatch: 'full' },
    { path: 'selected-todos', component: TodoListComponent, pathMatch: 'full' }
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true });
