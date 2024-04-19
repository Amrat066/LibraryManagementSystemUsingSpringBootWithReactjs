package com.Library.LibrarySystem.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.Library.LibrarySystem.Entity.Books;
import com.Library.LibrarySystem.Service.BookService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin()
public class BookController {
	
	@Autowired
	BookService service;
	public BookController(BookService service) {
	        this.service = service;
	}
	@PostMapping("/addbook")
	public Books addbook(@RequestBody Books book) {
		return service.addbook(book);
	}

	@GetMapping("/getbook")
	public Page<Books> getBooks(@RequestParam int page, @RequestParam int size, @RequestParam(required = false) String searchQuery) {
	    if (searchQuery != null && !searchQuery.isEmpty()) {
	        return service.searchBooks(searchQuery, page, size);
	    } else {
	        return service.getBooksDescending(page, size);
	    }
	}
	
	
	@DeleteMapping("/deletebook/{id}")
		public String delebook(@PathVariable int id) {
			return service.DeleteBook(id);	
	}
	@GetMapping("/countbook")
	public long totalbooks() {
		return service.TotalBook();
	}
	
	@PutMapping("/updatebook")
	public Books updateBook(@RequestBody Books book) {
		return service.updateBook(book);
	}
	@GetMapping("/getbookbyid/{id}")
	public Books getbookbyId(@PathVariable int id) {
		return service.getbookById(id);
	}
}
