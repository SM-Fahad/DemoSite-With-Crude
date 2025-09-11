import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUpData = {
  name: '',
  emailPhone: '',
  password: '',
  confirmPassword: ''
};

onSignUp(data: any) {
  console.log('Sign Up Data:', data);
  if (data.password !== data.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }
  alert('Account created successfully!');
}

}

