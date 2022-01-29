import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import { LoginModelDTO } from '../modelsDTO/login-modelDTO';
import { LoginServiceService } from '../services/login-service/login-service.service'

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  
  //loginForm: FormGroup = new FormGroup( userName );

  login: any = [];
  loginModelDTO = new LoginModelDTO();

  constructor(
    private formGroup: FormGroup,
    private formBuilder: FormBuilder,
    private loginServiceService: LoginServiceService
  ) { }

  ngOnInit(): void {
    // Iniciando o formulário de login
    // this.loginForm = this.formBuilder.group({    
    //   userName: ['', [Validators.required]],
    //   email: ['', [Validators.required]],
    //   password: ['', [Validators.required]]
    // });

    // this.createForm(new LoginModelDTO());

    // this.carregaDados();
    // console.log(this.carregaDados())
    // //this.obterTabelaLogin(id: any)
  }

  // Fazer o formulário submeter os dados
  onSubmit() {
    // // aqui você pode implementar a logica para fazer seu formulário salvar
    // console.log(this.loginForm.value);
    // // chamando a função createForm para limpar os campos na tela
    // this.createForm(new LoginModelDTO());
    // this.loginForm.reset(new  LoginModelDTO());
  }

  // Controlando os campos do formulário login
  // createForm(login: LoginModelDTO) {
  //   this.loginForm = new FormGroup({
  //     userName: new FormControl(login.userName),
  //     email: new FormControl(login.email),
  //     password: new FormControl(login.password),     
  //   })
  // }


  getTabelaLogin(id: number){
    this.loginServiceService.getTabelaLogin(id).subscribe( result => {
      console.log("ERRO de retorno da SERVICE LOGIN ---> ",result);
      if (result != null) {
        this.login = result;
        if ( this.login.result[0] != null ) {
          this.loginModelDTO = this.login
        }
      }
    })
  }

  carregaDados(){
    this.getTabelaLogin(this.loginModelDTO.id)
  }

}
