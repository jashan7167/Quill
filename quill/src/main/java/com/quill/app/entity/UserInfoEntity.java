package com.quill.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "userInfo") // MongoDB collection name
public class UserInfoEntity {
    @Id // MongoDB primary key
    private String id; // Use String for MongoDB ID

    @Field("USER_NAME") // MongoDB field name
    private String userName;

    @Field("PASSWORD") // MongoDB field name
    private String password;

    @Field("MOBILE_NUMBER") // MongoDB field name
    private String mobileNumber;

    @Field("EMAIL_ID") // MongoDB field name
    private String emailId;

    @Field("ROLES") // MongoDB field name
    private String roles; // ROLE_ADMIN,ROLE_MANAGER --> [ROLE_ADMIN,ROLE_MANAGER]

    @DBRef
    private List<Note> notes;
}