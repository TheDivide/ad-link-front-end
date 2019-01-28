import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

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
      author: 'Yuri'
    },
    {
      id: 1,
      title: 'Zero to One',
      author: 'Peter Thiel'
    }
  ];


  constructor() { }

  ngOnInit() {}
}
