package com.quill.app.userConfig;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.quill.app.repo.UserInfoRepo;


//get the user in form of auth object

@Service
@RequiredArgsConstructor
public class UserInfoManagerConfig implements UserDetailsService {

    private final UserInfoRepo userInfoRepo;


    //FIND THE USERNAME MAP IT TO THE USERDETAILS(userinfoconfig) else return the exception
    @Override
    public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
        return userInfoRepo.findByEmailId(emailId).map(UserInfoConfig::new).orElseThrow(()-> new UsernameNotFoundException("USERNAME NOT FOUND"));
    }
}

