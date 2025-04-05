package com.quill.app.config.jwtConfig;


import com.quill.app.repo.UserInfoRepo;
import com.quill.app.userConfig.UserInfoConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Objects;

@Component
@RequiredArgsConstructor
public class JwtTokenUtils {

    public String getUserName(Jwt jwtToken) {
        return jwtToken.getSubject();
    }

    public boolean isTokenValid(Jwt jwtToken, UserDetails userDetails) {
        final String userName = getUserName(jwtToken);
        boolean isTokenExpired = getIfTokenExpired(jwtToken);
        boolean isTokenUseSameAsDatabase = userName.equals(userDetails.getUsername());
        return !isTokenExpired && !isTokenUseSameAsDatabase;
    }

    public boolean getIfTokenExpired(Jwt jwtToken)
    {
        //check if the token is not expired if it is expired then it will return true otherwise false
        return Objects.requireNonNull(jwtToken.getExpiresAt()).isBefore(Instant.now());
    }

    private final UserInfoRepo userInfoRepo;
    public UserDetails userDetails(String emailId)
    {
        return userInfoRepo.findByEmailId(emailId).map(UserInfoConfig::new).orElseThrow(()-> new UsernameNotFoundException("Username:" + emailId + " doesnot exist"));
    }

}
