package br.com.blackcode.appBlackTraker.AppBlackTrakerJava;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import br.com.blackcode.appBlackTraker.controller.AppTracekController;

public class AppBlackTrakerJavaTeste {

	@Test
	@Order(1)
	@DisplayName("Teste da primeira função da aplicação!")
	void TestAppBlackTrakerClasse() {
		AppBlackTrakerClasse helloTest = new AppBlackTrakerClasse();
		assertEquals("Hello World", helloTest.hello());		
	}
	
	@Test
	@Order(2)
	@DisplayName("Teste da primeira função da aplicação!")
	void TestAppTrakerController() {
		AppTracekController helloTest = new AppTracekController();
		assertEquals("Hello World", helloTest.hello());		
	}
	
}
