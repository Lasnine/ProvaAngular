import { Component, EventEmitter, Output } from '@angular/core';
import { Header } from '../../../shared/header/header';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApi } from '../../../domain/auth-api';
import { email, validate } from '@angular/forms/signals';
import { IUser } from '../../../domain/interface/user';

@Component({
  selector: 'app-subscribe-page',
  imports: [Header, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './subscribe-page.html',
  styleUrl: './subscribe-page.css',
})
export class SubscribePage {
  constructor(private api: AuthApi, private router: Router){}
  subscribeForm: FormGroup = new FormGroup ({
    username: new FormControl(``, [Validators.required]),
    email: new FormControl(``, [Validators.email]),
    birthday: new FormControl(``, [Validators.required]),
    phone: new FormControl(``, [Validators.required]),
    password: new FormControl(``, [Validators.required])
  })

  get Username(){
    return this.subscribeForm.get("username")
  }
  get Email(){
    return this.subscribeForm.get("email")
  }
  get Birthday(){
    return this.subscribeForm.get("birthday")
  }
  get Phone(){
    return this.subscribeForm.get("phone")
  }
  get Password(){
    return this.subscribeForm.get("password")
  }
  
  subscribe = () => {
    if(!this.subscribeForm.valid)
    {
      alert("Todos os campos devem ser preenchidos!")
      return
    }
    const data: IUser = {
      username: this.Username?.value,
      email: this.Email?.value,
      birthday: this.Birthday?.value,
      phone: this.Phone?.value,
      password: this.Password?.value
    }
    this.api.subscribe(data).subscribe(
      res => {
        console.log(res)
        alert("Cadastro realizado com sucesso!");
        this.subscribeForm.reset();
        this.router.navigate(['/login']);
      }
    )
  }
  user: IUser = {
    username: '',
    email: '',
    birthday: '',
    phone: '',
    password: ''
  }
  @Output()
  onClick: EventEmitter<IUser | false> = new EventEmitter();
  
  submit = () => {
    const senhaValida = this.isValidSenha(this.user.password);
    if (senhaValida) {
      this.onClick.emit(this.user);
      this.user = { username: '', email: '', birthday: '', phone: '',password: '' };
    } 
    else {
      this.onClick.emit(false);
    }
  }
  isValidSenha(password: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }

}
