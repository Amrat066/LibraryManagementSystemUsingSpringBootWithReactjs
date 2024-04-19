package com.Library.LibrarySystem.Service;
import org.springframework.data.domain.Page;
import com.Library.LibrarySystem.Entity.UserModel;
public interface UserService {
	
	public UserModel AddUser(UserModel user);
	 Page<UserModel> getUsers(int page, int size);
	 Page<UserModel> searchUsers(String searchQuery, int page, int size);
	public UserModel authenticate(String username, String password);
	public String DeleteUser(int uid);
	
}
