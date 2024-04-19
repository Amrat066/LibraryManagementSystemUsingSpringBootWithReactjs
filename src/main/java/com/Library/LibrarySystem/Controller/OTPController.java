package com.Library.LibrarySystem.Controller;

import com.Library.LibrarySystem.Service.OTPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
public class OTPController {
	
    @Autowired
    private OTPService otpService;
    @PostMapping("/send-otp")
    public boolean sendOtp(@RequestParam String email) {
        String otp = otpService.generateOTP();
        otpService.sendOtpToEmail(email, otp);
        return true;
    }
    @PostMapping("/verify-otp")
    public boolean verifyOtp(@RequestParam String email, @RequestParam String otp) {
        return otpService.verifyOtp(email, otp);
    }
}
