package com.Library.LibrarySystem.Service.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.Library.LibrarySystem.Entity.Books;
import com.Library.LibrarySystem.Repository.BookRepository;
import com.Library.LibrarySystem.Service.BookService;

@Service
public class BookServiceImpl implements BookService {

	
	@Autowired
	BookRepository repository;
	 public BookServiceImpl(BookRepository repository) {
	        this.repository = repository;
	    }

	@Override
	public Books addbook(Books book) {
		return repository.save(book);
	}

	
//	 @Override
//	    public Page<Books> getBooks(int page, int size) {
//	        Pageable pageable = PageRequest.of(page, size);
//	        return repository.findAll(pageable);
//	    }
	
	 @Override
	    public Page<Books> getBooksDescending(int page, int size) {
	        Pageable pageable = PageRequest.of(page, size);
	        return repository.findAllInDescendingOrder(pageable); 
	    }
	 
	    @Override
	    public Page<Books> searchBooks(String searchQuery, int page, int size) {
	        Pageable pageable = PageRequest.of(page, size);
	        return repository.searchBooks(searchQuery, pageable);
	    }
	@Override
	public String DeleteBook(int id) {
		
		repository.deleteById(id);
		return "data is removed"+id;
	}
	@Override
	public long TotalBook() {
		return repository.count();
		
	}

	@Override
	public Books updateBook(Books book) {
		Books existingProduct = repository.findById(book.getBid()).orElse(null);
	    if (existingProduct != null) {
	        existingProduct.setBookname(book.getBookname());
	        existingProduct.setDescription(book.getDescription());
	        return repository.save(existingProduct);
	    }
	    return null;
	}

	@Override
	public Books getbookById(int id) {
			return repository.findById(id).orElse(null);
	}
	
}	
