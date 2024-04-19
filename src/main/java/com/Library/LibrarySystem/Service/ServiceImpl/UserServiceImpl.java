package com.Library.LibrarySystem.Service.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.Library.LibrarySystem.Entity.UserModel;
import com.Library.LibrarySystem.Repository.UserRepository;
import com.Library.LibrarySystem.Service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository repository;
	@Override
	public UserModel AddUser(UserModel user) {
		return repository.save(user);
	}

	 @Override
	    public Page<UserModel> getUsers(int page, int size) {
	        Pageable pageable = PageRequest.of(page, size);
	        return repository.findAll(pageable);
	    }

	    @Override
	    public Page<UserModel> searchUsers(String searchQuery, int page, int size) {
	        Pageable pageable = PageRequest.of(page, size);
	        return repository.searchUser(searchQuery, pageable);
	    }
	
    public UserModel authenticate(String username, String password) {
        UserModel user = repository.findByUsername(username);
        if(user!=null && user.getPassword().equals(password)) {
        	return user;
        }
        return null;
    }
	

	@Override
	public String DeleteUser(int uid) {
		repository.deleteById(uid);
		return "the user is deleted"+uid;
	}
	
	
	
	 
}
