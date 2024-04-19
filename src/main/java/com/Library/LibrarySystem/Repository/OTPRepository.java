package com.Library.LibrarySystem.Repository;

import com.Library.LibrarySystem.Entity.OTP;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OTPRepository extends JpaRepository<OTP, Integer> {
    OTP findByEmail(String email);
}
