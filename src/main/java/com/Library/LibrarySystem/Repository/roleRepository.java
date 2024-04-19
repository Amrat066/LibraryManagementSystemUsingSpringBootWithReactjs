package com.Library.LibrarySystem.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Library.LibrarySystem.Entity.Role;

public interface roleRepository extends JpaRepository<Role, Integer>{

	static Role findByRole(String string) {
		return null;
	}

}
