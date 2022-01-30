package br.com.blackcode.appBlackTraker.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

public class AppTracekController {

	@RequestMapping("/")
	@ResponseBody
	public String hello() {
		return "Hello World";
	}

}
