import { Component, OnInit } from '@angular/core';
import * as Dropzone from 'dropzone';
import { InstagramService } from '../../core/services/instagram.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  MAX_DESCRIPTION_LIMIT = 2200;
  css_loading_createpost = 'dimmer';

  postImage: File = null;
  postContent: string = null;

  constructor(private instagramService: InstagramService) { }

  ngOnInit() {
    this.initializeDropzoneComponents();
  }


  initializeDropzoneComponents(): void {


    let myDropzone = new Dropzone('form#postimage', {
      autoProcessQueue: false,
      uploadMultiple: false,
      addRemoveLinks: true,
      thumbnailWidth: 350,
      thumbnailHeight: 350,
      maxFiles: 1
    });


    myDropzone.on('addedfile', (file) => {
      console.log(JSON.stringify(myDropzone.getQueuedFiles()));
      myDropzone.accept(file, (error) => {
        console.log(error);
      });
    });

    myDropzone.on('maxfilesexceeded', (file) => {
      myDropzone.removeAllFiles();
      myDropzone.addFile(file);
    });



    myDropzone.on('complete', (data) => {
      console.log('Complete: ' + JSON.stringify(data));
  });
  }

  onSubmitPost(): void {

    if (this.postImage === null) {
      this.css_loading_createpost = 'dimmer active';
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
        this.css_loading_createpost = 'dimmer';
      },
      (error) => {
        console.log(error);
        this.css_loading_createpost = 'dimmer';
      }
    );
  }

}
