import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ 
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true;

  formLogin!: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void{
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  login(){
    if(!this.formLogin.valid){
      return;
    }
    this.authService.login(this.formLogin.getRawValue()).subscribe();
  }


}
