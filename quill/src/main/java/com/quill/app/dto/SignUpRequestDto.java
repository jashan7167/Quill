package com.quill.app.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class SignUpRequestDto {
    private String username;
    private String emailId;
    private String password;
}
