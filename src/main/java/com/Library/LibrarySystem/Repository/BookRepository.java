package com.Library.LibrarySystem.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.Library.LibrarySystem.Entity.Books;

@Repository
public interface BookRepository extends JpaRepository<Books, Integer>{

	@Query("SELECT b FROM Books b ORDER BY b.bid DESC")
    Page<Books> findAllInDescendingOrder(Pageable pageable);
	
	@Query("SELECT b FROM Books b WHERE LOWER(b.bookname) LIKE LOWER(CONCAT('%', :searchQuery, '%')) OR LOWER(b.description) LIKE LOWER(CONCAT('%', :searchQuery, '%'))")
	Page<Books> searchBooks(@Param("searchQuery") String searchQuery, Pageable pageable);


}
