import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular18test';
  counter = 0;

  increment() {
    this.counter = this.counter + 1;
  }
  decrement() {
    this.counter = this.counter - 1;
  }
  reset() {
    this.counter = 0;
  }

  kounter = signal(0);
  inkrement() {
    this.kounter.set(this.kounter() + 1);
  }
  dekrement() {
    this.kounter.set(this.kounter() - 1);
  }
  resetk() {
    this.kounter.set(0)
  }
}
