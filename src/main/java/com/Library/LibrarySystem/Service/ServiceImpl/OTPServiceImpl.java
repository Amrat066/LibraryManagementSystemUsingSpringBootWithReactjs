package com.Library.LibrarySystem.Service.ServiceImpl;

import com.Library.LibrarySystem.Entity.OTP;
import com.Library.LibrarySystem.Repository.OTPRepository;
import com.Library.LibrarySystem.Service.OTPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class OTPServiceImpl implements OTPService {

    @Autowired
    private OTPRepository otpRepository;

    @Autowired
    private JavaMailSender mailSender;

    private static final int OTP_LENGTH = 6;
    private static final String OTP_CHARS = "0123456789";

    @Override
    public String generateOTP() {
        StringBuilder otp = new StringBuilder(OTP_LENGTH);
        Random random = new Random();
        for (int i = 0; i < OTP_LENGTH; i++) {
            otp.append(OTP_CHARS.charAt(random.nextInt(OTP_CHARS.length())));
        }
        return otp.toString();
    }

    @Override
    public void sendOtpToEmail(String email, String otpValue) {
        OTP otp = new OTP(email, otpValue);
        otpRepository.save(otp);
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP");
        message.setText("Your OTP is: " + otpValue);
        mailSender.send(message);   
    }
    @Override
    public boolean verifyOtp(String email, String otp) {
        OTP savedOTP = otpRepository.findByEmail(email);
        return savedOTP != null && savedOTP.getOtp().equals(otp);
    }
    @Override
    public OTP saveOtp(OTP otp) {
        return otpRepository.save(otp);
    }
}
