import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileuploadnew',
  templateUrl: './fileuploadnew.component.html',
  styleUrls: ['./fileuploadnew.component.css']
})
export class FileuploadnewComponent implements OnInit {
  uploadUrl = 'https://prod-62.northeurope.logic.azure.com:443/workflows/9f5c7b854fd044ec85cbfae0edc96e6b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9Dh6a37cz8zmFIIlOV1Cdak3oZpGL6X8gzy4EQO7mtw'
  file:any=null
  title=""
  publisher=""
  producer =""
  genre=""
  age_rating =""
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  getTitle(title:string){
    this.title=title

  }
  getPublisher(publisher:string){
    this.publisher=publisher
  }
  getProducer(producer:string){
    this.producer=producer
  }
  getGenre(genre:string){
    this.genre=genre
  }
  getAgeRating(age_rating:string){
    this.age_rating=age_rating
  }
  getFile(event:any){
    console.log(event)
    this.file =<File> event.target.files[0];
    console.log('file',this.file)

  }
  submitData(){
    let headers = new HttpHeaders()
    headers.append('Content-Type','multipart/form-data')
    let submitFormData = new FormData()
    submitFormData.append('title',"abc")
    // submitFormData.append('publisher',this.publisher)
    // submitFormData.append('producer',this.producer)
    // submitFormData.append('genre',this.genre)
    // submitFormData.append('age_rating',this.age_rating)
    // submitFormData.append('File',this.file)
    this.http.post(this.uploadUrl,submitFormData,{'headers':headers}).subscribe(res=>{})
  }

}
