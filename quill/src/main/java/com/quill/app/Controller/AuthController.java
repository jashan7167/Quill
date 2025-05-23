package com.quill.app.Controller;


import com.quill.app.dto.LoginRequestDto;
import com.quill.app.dto.SignUpRequestDto;
import com.quill.app.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequestDto loginRequestDto) {
        return ResponseEntity.ok(authService.getJwtTokensAfterAuthentication(loginRequestDto));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpRequestDto signUpRequestDto)
    {
        return authService.registerUser(signUpRequestDto);
    }
}
