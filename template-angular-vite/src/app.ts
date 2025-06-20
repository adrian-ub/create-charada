import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://angular.dev/" target="_blank">
        <img src="/angular.svg" class="logo angular" alt="Angular logo" />
      </a>
      <h1>Vite + Angular</h1>
      <div class="card">
        <button (click)="increment()">Count {{ count() }}</button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Angular logos to learn more
      </p>
    </div>
  `,
})
export class AppComponent {
  count = signal(0)

  increment() {
    this.count.update(cnt => ++cnt)
  }
}
