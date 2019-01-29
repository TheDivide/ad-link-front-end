import { Component, OnInit, Input} from '@angular/core';
import { BookService } from './book.service';
import { subscribeOn } from 'rxjs/operators';
import {  Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  books: Book [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addBook() {
    this.bookService.addBook(this.book).
      subscribe( book => this.books.push(book) );
  }

  getBooks() {
    this.bookService.getBooks().
    subscribe( books => this.books.push(books) );
  }

}
