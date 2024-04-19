package com.Library.LibrarySystem.Controller;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Library.LibrarySystem.Entity.UserModel;
import com.Library.LibrarySystem.Service.UserService;
import com.google.gson.Gson;

@CrossOrigin()
@RestController
@RequestMapping("/api")
public class UserController {
    
    @Autowired
    UserService userService;
   
    @PostMapping("/adduser")
    public UserModel AddData(@RequestBody UserModel user) {
    	return userService.AddUser(user);
    }
    
    

    @GetMapping("/GetUser")
	public Page<UserModel> getUsers(@RequestParam int page, @RequestParam int size, @RequestParam(required = false) String searchQuery) {
	    if (searchQuery != null && !searchQuery.isEmpty()) {
	        return userService.searchUsers(searchQuery, page, size);
	    } else {
	        return userService.getUsers(page, size);
	    }
	}
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String,String> credentials ) {
    	Gson gson=new Gson();
        String username = credentials.get("username");
        String password = credentials.get("password");
        return ResponseEntity.ok(gson.toJson(userService.authenticate(username, password)).toString());
    }
    
    @DeleteMapping("/DeleteUser/{uid}")
    public String deleteuser(@PathVariable int uid) {
    	return userService.DeleteUser(uid);
    }
   
    
    
}
