package org.timemanagement.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public String login(@RequestBody UserDTO user) {
        // replace this with real login logic later
        if ("admin".equals(user.getUsername()) && "pass".equals(user.getPassword())) {
            return "Login successful!";
        } else {
            throw new RuntimeException("Invalid login");
        }
    }

    @PostMapping("/register")
    public String register(@RequestBody UserDTO user) {
        // replace this with actual DB insert
        return "User " + user.getUsername() + " registered!";
    }

    static class UserDTO {
        private String username;
        private String password;

        // getters and setters
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
    }
}
