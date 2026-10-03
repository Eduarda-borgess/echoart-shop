import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Menu } from './shared/menu/menu';
import { Footer } from './shared/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Menu, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = 'Echoart Shop';
  nome = 'Ana';
}
