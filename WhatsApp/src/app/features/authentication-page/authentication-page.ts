import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Botao } from '../../shared/botao/botao';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  imports: [Header, Botao, RouterLink],
  templateUrl: './authentication-page.html',
  styleUrl: './authentication-page.css',
})
export class AuthenticationPage {
  
  isValidSenha(password: string): boolean {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  }
}
