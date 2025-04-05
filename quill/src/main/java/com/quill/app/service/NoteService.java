package com.quill.app.service;


import com.quill.app.entity.Note;
import com.quill.app.entity.UserInfoEntity;
import com.quill.app.repo.NotesRepository;
import com.quill.app.repo.UserInfoRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NoteService {
    private final NotesRepository notesRepository;
    private final UserInfoRepo userInfoRepo;

    public Note createNote(Note note, Authentication authentication)
    {
        UserInfoEntity user = getAuthenticatedUser(authentication);
        note.setUser(user);
        return notesRepository.save(note);

    }

    public List<Note> getNotesByUser(Authentication authentication)
    {
        UserInfoEntity user = getAuthenticatedUser(authentication);
        return notesRepository.findByUserId(user);
    }

    public Note getNoteById(String noteId,Authentication authentication)
    {
        UserInfoEntity user = getAuthenticatedUser(authentication);
        return notesRepository.findByIdAndUser(noteId,user)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Note updateNote(String noteId, Note noteDetails, Authentication authentication) {
        Note existingNote = getNoteById(noteId, authentication);
        existingNote.setTitle(noteDetails.getTitle());
        existingNote.setContent(noteDetails.getContent());
        existingNote.setCategory(noteDetails.getCategory());
        existingNote.setColor(noteDetails.getColor());
        existingNote.setPinned(noteDetails.isPinned());
        return notesRepository.save(existingNote);
    }

    // ✅ Delete a note (only if the note belongs to the user)
    public void deleteNote(String noteId, Authentication authentication) {
        Note note = getNoteById(noteId, authentication);
        notesRepository.delete(note);
    }

    // ✅ Get notes by category
    public List<Note> getNotesByCategory(String category, Authentication authentication) {
        UserInfoEntity user = getAuthenticatedUser(authentication);
        return notesRepository.findByUserAndCategory(user, category);
    }


    private UserInfoEntity getAuthenticatedUser(Authentication authentication) {
        return userInfoRepo.findByEmailId(authentication.getName()).orElseThrow(()-> new ResponseStatusException(HttpStatus.UNAUTHORIZED,"User not found"));
    }
}
