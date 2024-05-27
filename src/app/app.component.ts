import { Component } from '@angular/core';
import { BlockComponent } from './block/block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, BlockComponent],
})
export class AppComponent {
  title = 'Bienvenue sur le site de Christophe !';
}
