import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { TodoDetailComponent } from './app/todo-detail/todo-detail.component';
import { TodoListComponent } from './app/todo-list/todo-list.component';
 // Import FontAwesome if needed

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      ReactiveFormsModule, // Ensure ReactiveFormsModule is imported
      TodoListComponent, // Import other components as needed
      FormsModule    // Import other modules as needed
    ),
  ],
}).catch((err) => console.error(err));
