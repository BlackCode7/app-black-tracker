package br.com.blackcode.appBlackTraker.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.blackcode.appBlackTraker.model.LogonUsuariosModel;


@Controller
public class LoginTrackerCadastroController {

	@RequestMapping("/login")
	public List<LogonUsuariosModel> lista() {		
		LogonUsuariosModel usuarioModel = new LogonUsuariosModel();		
		return Arrays.asList(usuarioModel, usuarioModel, usuarioModel);
	}
	
	

}
