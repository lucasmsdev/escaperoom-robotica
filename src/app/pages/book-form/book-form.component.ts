// book-form.component.ts

import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = { groupId: 1, title: '', image: '', enigma: '', hints: [] };
  groupIds: number[] = [1, 2, 3, 4, 5];
  enigmas: { [key: number]: string } = {};
  hints: { [key: number]: string[] } = {};

  constructor(private bookService: BookService) {
    this.initHints();
  }

  saveBooks(): void {
    for (let groupId of this.groupIds) {
      this.book.groupId = groupId;
      this.book.enigma = this.enigmas[groupId];
      this.book.hints = this.hints[groupId];

      this.bookService.saveBook(this.book);
      this.bookService.saveHints(groupId, this.hints[groupId]);
    }
  }

  clearBooks(): void {
    this.bookService.clearBooks();
    this.initHints();
  }

  private initHints(): void {
    for (let groupId of this.groupIds) {
      this.hints[groupId] = ['', '', '', '', ''];
    }
  }
}
