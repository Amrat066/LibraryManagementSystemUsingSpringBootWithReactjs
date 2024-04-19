package com.Library.LibrarySystem.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import  com.Library.LibrarySystem.Entity.UserModel;
@Repository
public interface UserRepository extends JpaRepository<UserModel, Integer> {
	UserModel findByUsername(String username);
	@Query("SELECT u FROM UserModel u WHERE LOWER(u.username) LIKE LOWER(CONCAT('%', :searchQuery, '%')) OR LOWER(u.email) LIKE LOWER(CONCAT('%', :searchQuery, '%')) OR CAST(u.age AS string) LIKE LOWER(CONCAT('%', :searchQuery, '%'))")
	Page<UserModel> searchUser(@Param("searchQuery") String searchQuery, Pageable pageable);
		
}
