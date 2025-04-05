package com.quill.app.userConfig;

import com.quill.app.entity.UserInfoEntity;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import com.quill.app.repo.UserInfoRepo;

import java.util.List;

@Component
@Slf4j
@RequiredArgsConstructor
public class InitialUserInfo implements CommandLineRunner {
    private final UserInfoRepo userInfoRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        log.info("InitialUserInfo: Starting user initialization...");

        try {
            UserInfoEntity admin = new UserInfoEntity();
            admin.setUserName("admin");
            admin.setPassword(passwordEncoder.encode("password"));
            admin.setRoles("ROLE_ADMIN");
            admin.setEmailId("admin@admin.com");

            userInfoRepo.save(admin);
            log.info("Users saved successfully.");
        } catch (Exception e) {
            log.error("Error saving users: ", e);
        }
    }
}