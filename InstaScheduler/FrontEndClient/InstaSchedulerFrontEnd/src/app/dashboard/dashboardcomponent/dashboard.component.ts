import { Component, OnInit } from '@angular/core';
import * as Dropzone from 'dropzone';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  MAX_DESCRIPTION_LIMIT = 2200;
  css_loading_createpost = 'dimmer';

  constructor() { }

  ngOnInit() {
    this.initializeDropzoneComponents();
  }


  initializeDropzoneComponents(): void {


    let myDropzone = new Dropzone('form#postimage', {
      autoProcessQueue: false,
      uploadMultiple: false,
      maxFiles: 1
    });




    myDropzone.on('addedfile', (file) => {
      console.log('File data: ' + JSON.stringify(file));
      console.log(JSON.stringify(file.xhr));
    });
  }

}
