import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogged=this.authService.GetUserLogged();

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

}
