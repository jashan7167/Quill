package com.quill.app.Controller;


import com.quill.app.entity.Note;
import com.quill.app.service.NoteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/notes")
@RequiredArgsConstructor
@Slf4j
public class NoteController {

    private final NoteService noteService;

    @PostMapping
    public ResponseEntity<Note> createNote(@RequestBody Note note, Authentication authentication) {

        return ResponseEntity.ok(noteService.createNote(note, authentication));
    }

    @GetMapping
    public ResponseEntity<List<Note>> getAllNotes(Authentication authentication) {
        return ResponseEntity.ok(noteService.getNotesByUser(authentication));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable String id, Authentication authentication) {
        return ResponseEntity.ok(noteService.getNoteById(id, authentication));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable String id, @RequestBody Note note, Authentication authentication) {
        return ResponseEntity.ok(noteService.updateNote(id, note, authentication));
    }

    // ✅ Delete a note (only if the note belongs to the user)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable String id, Authentication authentication) {
        noteService.deleteNote(id, authentication);
        return ResponseEntity.noContent().build();
    }

    // ✅ Get notes by category
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Note>> getNotesByCategory(@PathVariable String category, Authentication authentication) {
        return ResponseEntity.ok(noteService.getNotesByCategory(category, authentication));


    }
}