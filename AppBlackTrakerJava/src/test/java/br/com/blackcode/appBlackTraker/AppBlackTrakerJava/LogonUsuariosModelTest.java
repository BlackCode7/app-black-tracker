package br.com.blackcode.appBlackTraker.AppBlackTrakerJava;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import br.com.blackcode.appBlackTraker.model.LogonUsuariosModel;

public class LogonUsuariosModelTest {

	@Test
	@Order(1)
	@DisplayName("Testando os tipos campos da classe Id")
	void TestaOsTiposDaClasseLogonUsuariosModel_id() {
		LogonUsuariosModel varId = LogonUsuariosModel.builder().id((long) 1).build() ;
		assertEquals(1, varId.getId());
	}
	
	@Test
	@Order(2)
	@DisplayName("Testando os tipos campos da classe userName")
	void TestaOsTiposDaClasseLogonUsuariosModel_userName() {
		LogonUsuariosModel varId = LogonUsuariosModel.builder().userName((String) "Anderson").build() ;
		assertEquals("Anderson", varId.getUserName());
	}
	
	@Test
	@Order(3)
	@DisplayName("Testando os tipos campos da classe email")
	void TestaOsTiposDaClasseLogonUsuariosModel_email() {
		LogonUsuariosModel varId = LogonUsuariosModel.builder().email((String) "Anderson@Anderson.com").build() ;
		assertEquals("Anderson@Anderson.com", varId.getEmail());
	}
	
	@Test
	@Order(4)
	@DisplayName("Testando os tipos campos da classe perfil")
	void TestaOsTiposDaClasseLogonUsuariosModel_perfil() {
		LogonUsuariosModel varId = LogonUsuariosModel.builder().perfil((String) "admin_gestor").build() ;
		assertEquals("admin_gestor", varId.getPerfil());
	}
	
	@Test
	@Order(4)
	@DisplayName("Testando os tipos campos da classe password")
	void TestaOsTiposDaClasseLogonUsuariosModel_password() {
		LogonUsuariosModel varId = LogonUsuariosModel.builder().password((String) "TagHtmlTest").build() ;
		assertEquals("TagHtmlTest", varId.getPassword());
	}
}
