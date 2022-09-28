import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user!: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.user = this.profileService.getUser()
  }

}
