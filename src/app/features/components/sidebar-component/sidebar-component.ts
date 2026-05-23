import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser,faAddressBook,faCalendarCheck,faRightFromBracket   } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-component',
  standalone: true,
  imports: [RouterModule,CommonModule,FontAwesomeModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  faUser = faUser;
  faAddressBook = faAddressBook;
  sidebarOpen = true;
  faCalendarCheck = faCalendarCheck;
  faRightFromBracket = faRightFromBracket;


  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  rol: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


   ngOnInit() {
    this.rol = this.authService.getUserRole();
    console.log(this.rol);    
  }  

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
