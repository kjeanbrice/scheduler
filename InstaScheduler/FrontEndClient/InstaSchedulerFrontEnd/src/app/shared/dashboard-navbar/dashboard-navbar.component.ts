import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { InstagramProfile } from '../interfaces/instagramprofile.interface';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit, OnChanges {

  @Input() profileData: InstagramProfile;
  profileImageLocation =  '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.profileData) {
      console.log( 'Nav:' + JSON.stringify(this.profileData));
      this.profileImageLocation = this.profileData.ProfileImageUri;
    }
  }

}
