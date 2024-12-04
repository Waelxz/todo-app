import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-reactive-form',
  standalone: true, 
  imports:[ReactiveFormsModule], // Ensure this is set to true
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent {
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn(): void {
    if (this.authForm.valid) {
      const { login, password } = this.authForm.value;
      this.authService.authenticate(login, password).subscribe();
    }
  }
}
