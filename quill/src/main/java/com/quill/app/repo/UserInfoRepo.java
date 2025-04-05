package com.quill.app.repo;

import com.quill.app.entity.UserInfoEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoRepo extends MongoRepository<UserInfoEntity,Long> {
    Optional<UserInfoEntity> findByEmailId(String emailID);



}
