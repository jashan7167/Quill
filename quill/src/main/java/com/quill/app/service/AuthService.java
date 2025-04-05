package com.quill.app.service;

import com.quill.app.config.jwtConfig.JwtTokenGenerator;
import com.quill.app.dto.AuthResponseDto;
import com.quill.app.dto.LoginRequestDto;
import com.quill.app.dto.SignUpRequestDto;
import com.quill.app.dto.TokenType;
import com.quill.app.entity.UserInfoEntity;
import com.quill.app.repo.UserInfoRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final UserInfoRepo userInfoRepo;
    private final JwtTokenGenerator jwtTokenGenerator;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;


    public Object getJwtTokensAfterAuthentication(LoginRequestDto loginRequestDto) {
        try
        {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequestDto.getEmail(),loginRequestDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            var userInfoEntity = userInfoRepo.findByEmailId(authentication.getName()).orElseThrow(()-> {
                log.error("[AuthService:userSigninAuth] User:{} not found", authentication.getName());
                return new ResponseStatusException(HttpStatus.NOT_FOUND,"User not found");
            });

            String accessToken = jwtTokenGenerator.generateAccessToken(authentication);
            log.info("[AuthService:userSignInAuth] Access token for user:{}, has been generated",userInfoEntity.getUserName());
            return  AuthResponseDto.builder()
                    .accessToken(accessToken)
                    .accessTokenExpiry(15 * 60)
                    .userName(userInfoEntity.getUserName())
                    .tokenType(TokenType.Bearer)
                    .build();

        }
        catch(Exception e)
        {
            log.error("[AuthService:userSignInAuth]Exception while authenticating the user due to :"+e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,"Please Try Again");
        }
    }

    public ResponseEntity<?> registerUser(SignUpRequestDto requestDto)
    {
        if(userInfoRepo.findByEmailId(requestDto.getEmailId()).isPresent())
        {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        UserInfoEntity newUser = new UserInfoEntity();
        newUser.setEmailId(requestDto.getEmailId());
        newUser.setPassword(passwordEncoder.encode(requestDto.getPassword()));
        newUser.setUserName(requestDto.getUsername());
        newUser.setRoles("USER");
        userInfoRepo.save(newUser);

        return ResponseEntity.ok("User registered successfully");
    }


}

