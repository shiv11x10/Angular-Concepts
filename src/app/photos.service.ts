import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class PhotosService {
    
    constructor(private httpclient:HttpClient) { }
    
    getPhotos():Observable<any>{
      return  this.httpclient.get('https://jsonplaceholder.typicode.com/album/1/photos')
    }

    postphotos():Observable<any>{
        return  this.httpclient.post('https://jsonplaceholder.typicode.com/album/1/photos',{
            "albumId": 1,
            "title": "et inventore quae ut tempore eius voluptatum",
            "url": "https://via.placeholder.com/600/9e59da",
            "thumbnailUrl": "https://via.placeholder.com/150/9e59da"
            
        })
    }
}