import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-scrape-task',
  templateUrl: './add-scrape-task.component.html',
  styleUrls: ['./add-scrape-task.component.scss'],
})
export class AddScrapeTaskComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['login']);
    }
  }
}
