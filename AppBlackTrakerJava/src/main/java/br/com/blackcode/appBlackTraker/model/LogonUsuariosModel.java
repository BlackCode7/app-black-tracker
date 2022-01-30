package br.com.blackcode.appBlackTraker.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@ToString(exclude = "id")
@Builder(toBuilder = true)
@EqualsAndHashCode
@AllArgsConstructor @NoArgsConstructor 
@Entity
@Data
public class LogonUsuariosModel {
	
	@Id
	@GeneratedValue
	private int id;
	private String userName;
	private String email;
	private String perfil;
	private String password;
	
		
}