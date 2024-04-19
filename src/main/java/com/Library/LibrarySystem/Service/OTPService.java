package com.Library.LibrarySystem.Service;

import com.Library.LibrarySystem.Entity.OTP;

public interface OTPService {
    public String generateOTP();
    public void sendOtpToEmail(String email, String otp);
    public boolean verifyOtp(String email, String otp);
	OTP saveOtp(OTP otp);
}
