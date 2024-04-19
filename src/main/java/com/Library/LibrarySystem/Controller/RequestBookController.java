package com.Library.LibrarySystem.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.Library.LibrarySystem.Entity.ReqOfBooks;
import com.Library.LibrarySystem.Service.ReqofBook;
import org.springframework.web.bind.annotation.PutMapping;


@CrossOrigin
@RestController
public class RequestBookController {
	
	@Autowired
	ReqofBook service;
	@PostMapping("/addrequest")
	 public ResponseEntity<Integer> addReqOfBooks(@RequestBody ReqOfBooks reqOfBooks) {
        Integer newReqOfBooks = service.addrequest(reqOfBooks);
        return new ResponseEntity<>(newReqOfBooks, HttpStatus.CREATED);
    }
	@GetMapping("/getrequest")
	public Page<ReqOfBooks> getRequest(@RequestParam int page, @RequestParam int size, @RequestParam(required = false) String searchQuery) {
	    if (searchQuery != null && !searchQuery.isEmpty()) {
	        return service.searchRequest(searchQuery, page, size);
	    } else {
	        return service.getRequestDescending(page, size);
	    }
	}
	@DeleteMapping("/DeleteRequest/{rid}")
	public String DeleRequest(@PathVariable int rid) {
		return service.cancelRequest(rid);
			
	}
	@PutMapping("approveBook/{rid}")
	public ReqOfBooks ApprovedRequest(@PathVariable int rid) {
		return service.approveBook(rid);
	}
	@GetMapping("/AssignBook")
	public long CountAssignBook() {
		return service.countassignbook();
	}
	 
	@GetMapping("/CountMyApprovedBooks/{uid}")
    public long countMyApprovedBooks(@PathVariable int uid) {
        return service.countmybook(uid);
    }	
	
	
}
