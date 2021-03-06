package br.com.blackcode.appBlackTraker.AppBlackTrakerJava;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import br.com.blackcode.appBlackTraker.controller.LoginTrackerCadastroController;
import br.com.blackcode.appBlackTraker.model.LogonUsuariosModel;

public class LoginTrackerCadastroControllerTest {

	@Test
	@Order(1)
	@DisplayName("Teste da classe LoginTrackerCadastroController")
	void testaMetodoClasseControllerLoginTracker() {
		LoginTrackerCadastroController usuarioModelid = new LoginTrackerCadastroController();	
		List<LogonUsuariosModel> loginTrackerController = usuarioModelid.lista();
		
		assertEquals(true, loginTrackerController.equals(loginTrackerController));			
	}
	
	
}
