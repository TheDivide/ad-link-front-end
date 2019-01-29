import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.scss']
})
export class MyBooksComponent implements OnInit {

  books: Book[] = [
    {
      id: 1,
      title: 'Sapiens',
      author: {
        name: 'Yuri'
      },
      image_url: null
    },
    {
      id: 1,
      title: 'Zero to One',
      author: {
        name: 'Peter Thiel'
      },
      image_url: null
    }
  ];


  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().
    subscribe( books => {
      this.books = [ ...this.books, ...books ];
    } );
  }
}
