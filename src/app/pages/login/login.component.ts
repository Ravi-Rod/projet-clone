import { Component, OnInit, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../constants/config';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
bgUrl = BG_IMG_URL;

email!: string;
password!: string;

form!: FormGroup;

loginService= inject(LoginService);
router= inject(Router)

Toastr= inject(ToastrService);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form= this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
     })

    if(this.loginService.isloggedIn){
      this.router.navigateByUrl('/browse');
    }
  }

  onSubmit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      console.log('Félicitation han..')
      this.loginService.login(this.email, this.password);
      this.Toastr.success('connecté !');
      this.router.navigateByUrl('/browse');
    }
    else{
      this.Toastr.error('Veuillez remplir convenablement le formulaire.')
    }
  }

}
