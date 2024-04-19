package com.Library.LibrarySystem.Service.ServiceImpl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.Library.LibrarySystem.Entity.ReqOfBooks;
import com.Library.LibrarySystem.Repository.ReqForBookRepository;
import com.Library.LibrarySystem.Service.ReqofBook;

@Service
public class ReqofBookImpl implements ReqofBook{

	@Autowired
	ReqForBookRepository repository;
	public ReqofBookImpl(ReqForBookRepository repository) {
	        this.repository = repository;
	    }
	@Override
	public Integer addrequest(ReqOfBooks book) {
		ReqOfBooks request=repository.findBybook(book.getBook());
		if(request!=null && "Approved".equals(request.getStatus())){
			return 0;
		}
		repository.save(book);
		return 1;
	}

//	 @Override
//	    public Page<ReqOfBooks> getRequest(int page, int size) {
//	        Pageable pageable = PageRequest.of(page, size);
//	        return repository.findAll(pageable);
//	    }

	    @Override
	    public Page<ReqOfBooks> searchRequest(String searchQuery, int page, int size) {
	        Pageable pageable = PageRequest.of(page, size);
	        return repository.searchRequest(searchQuery, pageable);
	    }
	@Override
	public String cancelRequest(int id) {
		repository.deleteById(id);
		return "the data is removed !! "+id;

	}
	@Override
	public ReqOfBooks approveBook(int rid) {
		ReqOfBooks book=repository.findById(rid).orElse(null);
		if(book!=null) {
			book.setStatus("Approved");
			repository.save(book);
		}
		return book;
	}
	
	@Override
	public long countassignbook() {
		List<ReqOfBooks> books=repository.findAll();
		int countassignbook=(int) books.stream().filter(book->"Approved".equals(book.getStatus())).count();
		return countassignbook;
		
	}
	@Override
	public long countmybook(int uid) {
	    List<ReqOfBooks> books = repository.findByUserUid(uid); 
	    long countApprovedBooks = books.stream()
	                                   .filter(book -> "Approved".equals(book.getStatus()))
	                                   .count();
	    return countApprovedBooks;
	}
	@Override
	public Page<ReqOfBooks> getRequestDescending(int page, int size) {
		 Pageable pageable = PageRequest.of(page, size);
	     return repository.findAllInDescendingOrder(pageable); 
	}
	
	
	
	
	
	
	
		 
	
}
