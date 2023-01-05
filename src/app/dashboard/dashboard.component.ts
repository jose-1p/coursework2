import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dataArray:any =[]
  videoUrl: string ='https://mynetflixappstrgact.blob.core.windows.net'
  title :string =""
  videoDetails:{url:string,name:string}[]=[]
  constructor(private userDataService:UserdataService) { }

  ngOnInit(): void {
    try {
      this.userDataService.getVideos().subscribe(res=>{
        this.dataArray = res
        console.log(this.dataArray)
        for(let i=0; i<this.dataArray.length ;i++){
          let video={
            url:this.videoUrl + this.dataArray[i]['filePath'],
            name : this.dataArray[i]['title']

          }
          this.videoDetails.push(video)
        }
        console.log(this.videoDetails)
      })
      
    } catch (error) {
      console.log(error)
      
    }
   
  }

}
