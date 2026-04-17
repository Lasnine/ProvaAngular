import { Routes } from '@angular/router';
import { AuthenticationPage } from './features/authentication-page/authentication-page';
import { SubscribePage } from './features/authentication-page/subscribe-page/subscribe-page';
import { LoginPage } from './features/authentication-page/login-page/login-page';
import { ChatPage } from './features/chat-page/chat-page';
import { ContactsPage } from './features/contacts-page/contacts-page';

export const routes: Routes = [
    {path: 'app', component: AuthenticationPage, children: [
        // {path: 'cadastro', component: SubscribePage},
        // {path: 'login', component: LoginPage},
    ]},
    {path: 'cadastro', component: SubscribePage},
    {path: 'login', component: LoginPage},
    {path: 'chat', component: ChatPage},
    {path: 'contatos', component: ContactsPage},
];
