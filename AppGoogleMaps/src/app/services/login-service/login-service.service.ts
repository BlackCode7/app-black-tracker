import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://localhost:3000'

  public obterTabelaLogin(id: number):Observable<any[]> {
    return this.http.get<any>(this.baseUrl+ "TB_Login" +id)
  }

}
