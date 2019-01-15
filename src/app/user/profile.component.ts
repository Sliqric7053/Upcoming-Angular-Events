import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    const lastName = new FormControl(this.auth.currentUser.lastName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: lastName,
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfile(formValues) {
    this.auth
      .updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(() => {
        this.toastr.success('Profile saved');
        // this.router.navigate(['/events']);
      });
  }

  validateFirstName() {
    return (
      this.profileForm.controls.firstName.valid ||
      this.profileForm.controls.firstName.untouched
    );
  }

  validateLastName() {
    return (
      this.profileForm.controls.lastName.valid ||
      this.profileForm.controls.lastName.untouched
    );
  }
}
