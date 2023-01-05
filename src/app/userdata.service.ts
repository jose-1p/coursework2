import { HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';
import { map,catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  responseStatus:any
  errorStatus : any
  url ='https://prod-59.northeurope.logic.azure.com/workflows/fbde6a5339434231874500811070fd07/triggers/manual/paths/invoke/rest/v1/users?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ccXbKOcX_pxo5qIILwh6g5oFTy9f7Db1WgeAvlqmxvM'
  userUrl ='https://prod-06.northeurope.logic.azure.com/workflows/a3dd02ee631e4a7eae996a6dc30ffce3/triggers/manual/paths/invoke/rest/v1/users?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OeX9ZM8KkDWoyqzRau304c8OcEgUgcw3lzjKuX8fHJU'
  loginUrl ='https://prod-38.northeurope.logic.azure.com/workflows/acf97fa39e124c4b8998776084fe3b5e/triggers/manual/paths/invoke/rest/v1/users?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8kXhxdJPcRNSingcchZVQQIi8sOBv6mhVOsklGARR-I'
  uploadUrl = 'https://prod-62.northeurope.logic.azure.com:443/workflows/9f5c7b854fd044ec85cbfae0edc96e6b/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9Dh6a37cz8zmFIIlOV1Cdak3oZpGL6X8gzy4EQO7mtw'
  getVideoUrl = 'https://prod-15.northeurope.logic.azure.com:443/workflows/652bd6a557964bcdbf649c8ed7fea872/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=vOChQq4eZJLpd2j5htOUfgphCZlPVk-EemOkFS7FrGc'
  constructor(private http : HttpClient,private router:Router) {}
  saveUser(params:any){
    return this.http.post(this.url,params)

  }
  // loginCheck(params:any){
  //     return this.http.post(this.loginUrl,params,{observe:'response'}).pipe(map(res=>{
  //       return res.body
  //     }))
  // }
  loginCheck(params:any):Observable<any>{
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(this.loginUrl,params,{'headers':headers,observe:'response'}).pipe(map(res=>{
    //return this.http.post(this.uploadUrl,params,{'headers':headers,observe:'response'}).pipe(map(res=>{
      if(res instanceof HttpErrorResponse){
        throw res;
      }
      return res.status
    })
    ).pipe(
      catchError(err=>{
        window.alert("invalid credentials!")
        return throwError(err);
      })
    )
}
  public getUser(data:any,params:any):Observable<any>{
  //const headers = { 'content-type': 'application/json'} 
    return this.http.post(this.userUrl,data,{observe:'response'}).pipe(map(res=>{
      if(res instanceof HttpErrorResponse){
        throw res;
      }
      return res.status
    })
    ).pipe(
      catchError(err=>{
        console.log(err.status)
        if(err.status === 404){
         this.saveUser(params).subscribe((result)=>{
         console.log(result);
         this.router.navigate(['/dash'])
        })
        }
        return throwError(err);
      })
    )

 }
 saveVideo(params:any){
  const headers = { 'content-type': 'application/json'}
  return this.http.post(this.uploadUrl,params,{'headers':headers,observe:'response'})
 }
  // return this.http.post(this.uploadUrl,params).subscribe(          
  //    (response) =>console.log(response),   
  //    (error) =>console.log(error)  
  //  )
  // const headers = {'Content-Type' : 'multipart/form-data'}
  // return this.http.post(this.uploadUrl,params,{'headers':headers,observe:'response'}).pipe(map(res=>{
  //   if(res instanceof HttpErrorResponse){
  //     throw res;
  //   }
  //   return res.status
  // })
  // ).pipe(
  //   catchError(err=>{
  //     console.log(err)
  //     if(err.status === 404){
  //      this.saveUser(params).subscribe((result)=>{
  //      console.log(result);
  //      this.router.navigate(['/dash'])
  //     })
  //     }
  //     return throwError(err);
  //   })
  // )
 
//  public userAuth(data:any){
//   const headers = { 'content-type': 'application/json'}  
//   return this.http.post(this.userUrl,data,{'headers':headers , observe: 'response'}).pipe(map(res=>{
//     if(res instanceof HttpResponse){
//       return res
//     }
//   })).pipe(catchError(err=>{
//     if(err instanceof HttpErrorResponse){
//       if(err.status == 404){

//       }
      
//     }
//     return err
//   }))

//  }
  // public getUser(data:any):Observable<any>{
  //   return this.http.post(this.userUrl,data,{observe:'response'}).pipe(catchError(error=>{
  //     let errorMessage:string;
  //     errorMessage = this.getServerErrorMessage(error)
  //     return throwError (errorMessage)
  //   })
  //   ).pipe(map(res=>{
  //     return res.status
  //   }))

  // }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return 'nouserfound';
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
  }
  //get videos from azure cosmos db
  public getVideos(){
    return this.http.get(this.getVideoUrl)
  }
}
