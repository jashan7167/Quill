package com.quill.app.userConfig;

import com.quill.app.entity.UserInfoEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;


//userdetails is creating a authentication object , mapping the user with the authority object
public class UserInfoConfig implements UserDetails {

    private final UserInfoEntity userInfoEntity;

    public UserInfoConfig(UserInfoEntity userInfoEntity) {
        this.userInfoEntity = userInfoEntity;
    }

    @Override
    public boolean isEnabled() {
        return UserDetails.super.isEnabled();
    }

    @Override
    public String getPassword() {
        return userInfoEntity.getPassword();
    }

    @Override
    public String getUsername() {
        return userInfoEntity.getEmailId();
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.stream(userInfoEntity.getRoles().split(",")).map(SimpleGrantedAuthority::new).toList();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
}
