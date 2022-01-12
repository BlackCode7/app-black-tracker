import { Component, OnInit } from '@angular/core';
import { LoginModelDTO } from '../modelsDTO/login-modelDTO';
import { LoginServiceService } from '../services/login-service/login-service.service'

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  component: any;
  title = "Test Title";

  login: any = [];
  loginModelDTO = new LoginModelDTO();


  constructor(
    private loginServiceService: LoginServiceService
  ) { }

  obterTabelaLogin(id: any){
    this.loginServiceService.obterTabelaLogin(id).subscribe( data => {
      console.log("ERRO de retorno da SERVICE LOGIN ---> ",data);
      if (data != null) {
        this.login = data;
        if ( this.login.data[0] != null ) {
          this.loginModelDTO = this.login
        }
      }
    })
  }

  carregaDados(){
    this.obterTabelaLogin(this.loginModelDTO.id)
  }

  ngOnInit(): void {
    this.carregaDados();
    console.log(this.carregaDados())
    //this.obterTabelaLogin(id: any)
  }

}
