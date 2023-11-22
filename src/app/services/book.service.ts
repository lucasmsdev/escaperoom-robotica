// book.service.ts
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  getCurrentGroupId() {
      throw new Error("Method not implemented.");
  }
  private readonly BOOKS_KEY = 'books_data';
  private readonly PONTUACAO_KEY_PREFIX = 'pontuacao_';

  constructor(private localStorageService: LocalStorageService) {}

  saveBook(book: Book): void {
    const books: Book[] = this.getBooks() || [];
    books.push(book);
    this.localStorageService.saveData(this.BOOKS_KEY, books);
  }

  getBooks(): Book[] | null {
    return this.localStorageService.getData(this.BOOKS_KEY);
  }

  clearBooks(): void {
    this.localStorageService.clearData(this.BOOKS_KEY);
  }

  getBookByGroup(groupId: number): Book | undefined {
    const books: Book[] = this.getBooks() || [];
    return books.find((book) => book.groupId === groupId);
  }

  saveHints(groupId: number, hints: string[]): void {
    const book: Book = this.getBookByGroup(groupId) || { groupId, title: '', image: '', enigma: '', hints: [] };
    book.hints = hints;

    const books: Book[] = this.getBooks() || [];
    const index = books.findIndex((b) => b.groupId === groupId);

    if (index !== -1) {
      books[index] = book;
    } else {
      books.push(book);
    }

    this.localStorageService.saveData(this.BOOKS_KEY, books);
  }

  savePontuacao(groupId: number, pontuacao: number): void {
    const pontuacaoKey = this.getPontuacaoKey(groupId);
    this.localStorageService.saveData(pontuacaoKey, pontuacao);
  }

  getPontuacao(groupId: number): number {
    const pontuacaoKey = this.getPontuacaoKey(groupId);
    return this.localStorageService.getData(pontuacaoKey) || 1000; // Valor padrão 1000 se não houver pontuação salva
  }

  private getPontuacaoKey(groupId: number): string {
    return `${this.PONTUACAO_KEY_PREFIX}${groupId}`;
  }

  getAllEnigmas(): string[] {
    const books: Book[] = this.getBooks() || [];
    return books.map((book) => book.enigma);
  }

  getEnigmaOrder(groupId: number): string[] | null {
    const enigmaOrderKey = this.getEnigmaOrderKey(groupId);
    return this.localStorageService.getData(enigmaOrderKey);
  }
  
  saveEnigmaOrder(groupId: number, enigmaOrder: string[]): void {
    const enigmaOrderKey = this.getEnigmaOrderKey(groupId);
    this.localStorageService.saveData(enigmaOrderKey, enigmaOrder);
  }
  
  private getEnigmaOrderKey(groupId: number): string {
    return `enigma_order_${groupId}`;
  }
}
