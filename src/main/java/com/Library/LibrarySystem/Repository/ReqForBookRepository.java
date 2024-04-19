package com.Library.LibrarySystem.Repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Library.LibrarySystem.Entity.Books;
import com.Library.LibrarySystem.Entity.ReqOfBooks;
@Repository
public interface ReqForBookRepository  extends JpaRepository<ReqOfBooks, Integer>{

	
	@Query("SELECT b FROM ReqOfBooks b ORDER BY b.rid DESC")
    Page<ReqOfBooks> findAllInDescendingOrder(Pageable pageable);
	
	@Query("SELECT req FROM ReqOfBooks req JOIN req.book b JOIN req.user u " +
	           "WHERE LOWER(b.bookname) LIKE LOWER(concat('%', :searchQuery, '%')) " +
	           "OR LOWER(u.username) LIKE LOWER(concat('%', :searchQuery, '%')) " +
//	           "OR LOWER(req.startdate) LIKE LOWER(concat('%', :searchQuery, '%')) " +	        
//	           "OR LOWER(req.enddate) LIKE LOWER(concat('%', :searchQuery, '%')) " +
	           "OR LOWER(req.Note) LIKE LOWER(concat('%', :searchQuery, '%')) " +
	           "OR LOWER(req.status) LIKE LOWER(concat('%', :searchQuery, '%'))")
	Page<ReqOfBooks> searchRequest(@Param("searchQuery") String searchQuery, Pageable pageable);

	ReqOfBooks findBybook(Books book);

    List<ReqOfBooks> findByUserUid(int uid);
    
    
	 
	
	

}
