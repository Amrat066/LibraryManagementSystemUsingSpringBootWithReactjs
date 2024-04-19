package com.Library.LibrarySystem.Service;


import org.springframework.data.domain.Page;
import com.Library.LibrarySystem.Entity.Books;

public interface BookService {
	
	public Books addbook(Books book);
	//Page<Books> getBooks(int page, int size);
	Page<Books> searchBooks(String searchQuery, int page, int size);
	public String DeleteBook(int id);
	public long TotalBook();
    public Books updateBook(Books book);
    public Books getbookById(int id);
	Page<Books> getBooksDescending(int page, int size);

}
