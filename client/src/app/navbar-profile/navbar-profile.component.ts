import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrl: './navbar-profile.component.css'
})
export class NavbarProfileComponent implements OnInit {
  applicantId: number = 0;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {}
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.applicantId = +params['applicantId'] || 0;
      })
  }
  logout(): void {
    this.authService.removeToken();
    this.router.navigate([''])
  }
}
