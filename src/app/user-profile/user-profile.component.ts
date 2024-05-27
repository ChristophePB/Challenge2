import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name: 'Pitou Burgaud',
    firstName: 'Christophe',
    age: 46,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  showAge = true;

  toggleAge() {
    this.showAge = !this.showAge;
  }
}
