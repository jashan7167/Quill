package com.quill.app.repo;

import com.quill.app.entity.Note;
import com.quill.app.entity.UserInfoEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NotesRepository extends MongoRepository<Note, String> {
    List<Note> findByUserId(UserInfoEntity user);
    Optional<Note> findByIdAndUser(String id,UserInfoEntity user);
    List<Note> findByUserAndCategory(UserInfoEntity user, String category);
}
