package br.com.blackcode.appBlackTraker.AppBlackTrakerJava;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class AppBlackTrakerClasse {
		
	@RequestMapping("/")
	@ResponseBody
	public String hello() {
		return "Hello World";
	}
}
