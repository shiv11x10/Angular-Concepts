import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
@Component({
    selector: 'app-photos',
    template: `
    
    <button (click)="postData()">Post data</button>
    <table>
    <tr>
    <th>title</th>
    <th>thumbnail</th>
    </tr>
    <tr *ngFor="let photo of photos">
        <td>{{photo.title}}</td>
        <td> <img src="{{photo.thumbnailUrl}}"/></td>
    </tr>
    </table>
    
    `,
    providers:[PhotosService]
})

export class PhotosComponent implements OnInit {
    photos: any
    constructor(private photoservice:PhotosService) {
        console.log("COntr is called")
     }
    ngOnInit() { // when comp is initialized completely:SO all tasks related to fecthing data,calling service should be done in ngoninit
        console.log("ngOnInit is called...")
        //https://jsonplaceholder.typicode.com/album/1/photos
        this.photoservice.getPhotos().subscribe(res=>{
            //THis will be called when server is ready with response
            //console.log(res)
            this.photos= res
        })
    }

    postData(){
        this.photoservice.postphotos().subscribe(res=>{
            console.log(res)
        })
    }
}