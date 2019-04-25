import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from "../services/books.service";
import {Router} from "@angular/router";
import {Book} from "../models/book.model";
import {Subscription} from "rxjs/internal/Subscription";

  @Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit,OnDestroy {
  books:Book[] ;
  booksSubscription:Subscription;

  constructor(private booksService: BooksService, private  router: Router) { }

  ngOnInit() {
    this.booksSubscription=this.booksService.booksSubject.subscribe(
      (books:Book[])=>{
        this.books=books;
      }
    );
    this.booksService.getBooks();
  }

  onNewBook(){
    this.router.navigate(['/books','new']);
  }
  onDeleteBook(book:Book){
    this.booksService.deleteBook(book);
  }
  onViewBook(id:number){
    this.router.navigate(['/books/','view',id]);
  }
  ngOnDestroy(){
    this.booksSubscription.unsubscribe();
  }

}
