package br.com.blackcode.appBlackTraker.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@Table(name="TB_LOGONUSUARIO")
@ToString(exclude = "id")
@Builder(toBuilder = true)
@EqualsAndHashCode
@AllArgsConstructor @NoArgsConstructor 
public class LogonUsuariosModel implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String userName;
	private String email;
	private String perfil;
	private String password;
	
		
}
