import { Component, OnInit } from '@angular/core';
import * as Dropzone from 'dropzone';
import { InstagramService } from '../../core/services/instagram.service';
import * as Validator from 'validator';
import { InstagramProfile } from 'src/app/shared/interfaces/instagramprofile.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  MAX_DESCRIPTION_LIMIT = 2200;
  cssLoadingCreatePost = 'dimmer';

  postImage: File = null;
  postContent: string = null;
  profileData: InstagramProfile = null;

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.initializeDropzoneComponents();
    this.initializeLayoutComponents();
    this.loadProfileData();
  }


  loadProfileData(): void {
    this.instagramService.retrieveProfileData().subscribe(
      (data) => {
        console.log('ProfileData(Dashboard): ' + JSON.stringify(data));
        this.profileData = data;
      },
      (error) => {
        console.log('An error occured while trying to load the data. Please try again or reload the page');
      }
    )
  }
  initializeLayoutComponents(): void {
    document.getElementById('btn-postimage').setAttribute('disabled', '');
  }


  initializeDropzoneComponents(): void {


    const postDropzone = new Dropzone('form#postimage', {
      autoProcessQueue: false,
      uploadMultiple: false,
      addRemoveLinks: true,
      thumbnailWidth: 350,
      thumbnailHeight: 350,
      acceptedFiles: 'image/jpeg,image/png,image/gif',
      maxFiles: 1
    });


    postDropzone.on('addedfile', (file) => {
      if (postDropzone.files.length > 1) {
        postDropzone.removeFile(postDropzone.files[0]);
      }

      const validImage = new RegExp('(\.png|\.jpg|\.jpeg|\.gif)$').test(file.name);
      if (validImage) {
        this.postImage = file;
        document.getElementById('btn-postimage').removeAttribute('disabled');
      } else {
        this.postImage = null;
        document.getElementById('btn-postimage').setAttribute('disabled', '');
      }
    });


    postDropzone.on('removedfile', (file) => {
      document.getElementById('btn-postimage').setAttribute('disabled', '');
    });


    postDropzone.on('complete', (data) => {
      console.log('Complete: ' + JSON.stringify(data));
  });
  }

  onSubmitPost(): void {

    this.cssLoadingCreatePost = 'dimmer active';
    if (this.postImage === null) {
      this.cssLoadingCreatePost = 'dimmer';
      return;
    }

    if (this.postContent === null || this.postContent.length === 0) {
      this.postContent = '';
    }

    this.instagramService.createPost(this.postImage, this.postContent).subscribe(
      (data) => {
        console.log(data);
        this.postContent = '';
        this.postImage = null;
        this.cssLoadingCreatePost = 'dimmer';
      },
      (error) => {
        console.log(error);
        this.cssLoadingCreatePost = 'dimmer';
      }
    );
  }


  onUpdate(event: any, itemId: string): void {

    if (event === null || event === undefined) {
      return;
    }

    switch (itemId) {
      case 'post-content':
        const content = event.target.value;
        if (content.length === 0 || content.trim().length === 0) {
          this.postContent = '';
        } else {
          this.postContent = content.trim();
        }
        break;
        default:
          console.log('(Dasboard: OnUpdate) Item ID not found');
          break;
    }
  }

}
