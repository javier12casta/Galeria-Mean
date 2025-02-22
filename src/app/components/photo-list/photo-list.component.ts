import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
    .subscribe(
      res => {
        this.photos = res;
      },
      err => console.log(err)
    )
  }

  selectedCard(id: string) {
    this.router.navigate(['/photos', id]);
  }
  
}
