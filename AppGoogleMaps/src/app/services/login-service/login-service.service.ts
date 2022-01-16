import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { LoginModelDTO } from 'src/app/modelsDTO/login-modelDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  constructor(
    private http: HttpClient
    ) { }

  baseUrl: string = 'http://localhost:3000/tb_login';

  public getTabelaLogin(id: number):Observable<any[]> {
    return this.http.get<any>(this.baseUrl+ "?flag=" + id);
  }

  public postTabelaLogin(form: any): Observable<LoginModelDTO> {
    return this.http.post<any>(this.baseUrl, form);
  }

}
