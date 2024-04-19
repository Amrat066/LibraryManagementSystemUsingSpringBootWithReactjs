	package com.Library.LibrarySystem.Entity;
	
	import java.sql.Date;
	
	
	import jakarta.persistence.CascadeType;
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.JoinColumn;
	import jakarta.persistence.ManyToOne;
	import lombok.AllArgsConstructor;
	import lombok.NoArgsConstructor;
	
	@NoArgsConstructor
	@AllArgsConstructor
	@Entity
	public class ReqOfBooks {
		
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int rid;
	
	    @ManyToOne
	    @JoinColumn(name = "bookid", referencedColumnName = "bid")
	    private Books book;
	    
	    @ManyToOne(cascade = {CascadeType.DETACH})
	    @JoinColumn(name = "userid", referencedColumnName = "uid")
	    private UserModel user;
	    private Date startdate;
	    private Date enddate;
	    public Date getStartdate() {
			return startdate;
		}
		public void setStartdate(Date startdate) {
			this.startdate = startdate;
		}
		public Date getEnddate() {
			return enddate;
		}
		public void setEnddate(Date enddate) {
			this.enddate = enddate;
		}
		private String Note;
	    private String status="pending"; 
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		public int getRid() {
			return rid;
		}
		public void setRid(int rid) {
			this.rid = rid;
		}
		public Books getBook() {
			return book;
		}
		public void setBook(Books book) {
			this.book = book;
		}
		public UserModel getUser() {
			return user;
		}
		public void setUser(UserModel user) {
			this.user = user;
		}
		
		public String getNote() {
			return Note;
		}
		public void setNote(String note) {
			Note = note;
		}
	
	}
