import { Component, OnInit } from '@angular/core';
import * as Dropzone from 'dropzone';
import { InstagramService } from '../../core/services/instagram.service';
import * as Validator from 'validator';
import { InstagramProfile } from 'src/app/shared/interfaces/instagramprofile.interface';
import { InstagramPost } from 'src/app/shared/interfaces/instagrampost.interface';


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

  itemsPerRow = 2;
  itemsPerPage = 4;
  totalPages = 0;
  totalPosts = 0;
  totalPagesDom = [];
  postData: InstagramPost[] = [];
  displayedPostData: Array<InstagramPost[]> = [];
  currentPage = 0;


  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.initializeDropzoneComponents();
    this.initializeLayoutComponents();
    this.loadProfileData();
    this.loadPostData();
  }


  loadProfileData(): void {
    this.instagramService.retrieveProfileData().subscribe(
      (data) => {
        console.log('ProfileData(Dashboard): ' + JSON.stringify(data));
        this.profileData = data;
      },
      (error) => {
        console.log('An error occured while trying to load the profile data. Please try again or reload the page');
      }
    );
  }


  loadPostData(): void {
    this.instagramService.retrievePosts().subscribe(
      (data) => {
        console.log('PostData(Dashboard): ' + JSON.stringify(data));
        this.initializeTotalPages(data);

        if (this.isPostDataChanged(data)) {
          this.setupPostData();
        }
      },
      (errors) => {
        console.log('An error occured while trying to load the post data. Please try again or reload the page');
      }
    );
  }


  initializeTotalPages(data: InstagramPost[]) {
    this.totalPages = Math.ceil(data.length / this.itemsPerPage);
    for (let i = 0; i < this.totalPages; i++) {
      this.totalPagesDom.push(i + 1);
    }

  }


  /*Returns true if the instagram post data has not changed; Returns false otherwise*/
  isPostDataChanged(data: InstagramPost[]): boolean {
    this.postData = [];
    if (this.postData.length === 0 || this.postData.length !== data.length) {
      this.postData = data;
      return true;
    }

    for (let i = 0; i < data.length; i++) {
      if (!this.isPostEqual(this.postData[i], data[i])) {
        return true;
      }
    }

    return false;
  }

  setupPostData() {
    let containerIndex = 0;
    let i = 0;
    let j = this.currentPage * this.itemsPerPage;
    this.displayedPostData = [];
    this.displayedPostData[containerIndex] = [];
    this.totalPosts = this.postData.length;
    
    while ( i < this.itemsPerPage && j < this.postData.length) {
      if (i % this.itemsPerRow === 0 && i !== 0) {
        this.displayedPostData[++containerIndex] = [];
      }
      this.displayedPostData[containerIndex].push(this.postData[j]);
      i++;
      j++;
    }
    console.log('Results: ' + JSON.stringify(this.displayedPostData));

  }

  isPostEqual(a: InstagramPost, b: InstagramPost): boolean {
    if (
      a.CommentsCount === b.CommentsCount &&
      a.DatePosted === b.DatePosted &&
      a.ImageUriLarge === b.ImageUriLarge &&
      a.ImageUriSmall === b.ImageUriSmall &&
      a.LikesCount === b.LikesCount &&
      a.TimePosted === b.TimePosted &&
      a.ViewCount === b.ViewCount &&
      a.Description === b.Description) {
      return true;
    } else {
      return false;
    }
  }


  changePage(event, position: number) {

    /*for ( let i = 0; i < this.totalPagesDom.length; i++) {
     document.getElementById('postpage' + (i + 1)).classList.remove('active');
    }*/

    console.log('current page' + this.currentPage);

    if (position >= 0 && position < this.totalPages ) {
      //document.getElementById('postpage' + position).classList.add('active');
      this.currentPage = Math.floor(position);
      return;
    }

    if ( position === -1) {
      this.currentPage = (this.currentPage - 1) > 0 ? (this.currentPage - 1) : 0;
      return;
    }

    if ( position === -2) {
      this.currentPage = (this.currentPage + 1) < this.totalPages ? (this.currentPage + 1) : this.totalPages;
      return;
    }

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
