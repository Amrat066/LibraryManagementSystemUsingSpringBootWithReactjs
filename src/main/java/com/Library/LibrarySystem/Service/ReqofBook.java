package com.Library.LibrarySystem.Service;

import org.springframework.data.domain.Page;

import com.Library.LibrarySystem.Entity.ReqOfBooks;

public interface ReqofBook {
	
	public Integer addrequest(ReqOfBooks book);
	//Page<ReqOfBooks> getRequest(int page, int size);
	Page<ReqOfBooks> searchRequest(String searchQuery, int page, int size);	
	public String cancelRequest(int id);
	public ReqOfBooks approveBook(int rid);
	public long countassignbook();
	public long countmybook(int uid);
	Page<ReqOfBooks> getRequestDescending(int page, int size);

	
}
