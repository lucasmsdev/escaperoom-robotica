// enigma.component.ts

import { Component, OnInit } from '@angular/core';
import { EnigmaService } from 'src/app/services/enigma.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-enigma',
  templateUrl: './enigma.component.html',
  styleUrls: ['./enigma.component.css'],
})
export class EnigmaComponent implements OnInit {
  book: Book | undefined;
  enigma: string = '';
  pontuacao: number = 1000;
  showPopup = false;
  tipNumber: number = 0;
  dicaAberta: boolean[] = [false, false, false, false, false];

  constructor(
    private enigmaService: EnigmaService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const groupId = this.enigmaService.getCurrentGroupId();
    this.book = this.bookService.getBookByGroup(groupId);
    
    if (this.book) {
      this.enigma = this.book.enigma;
    }

    // Carregar pontuação salva para o grupo atual
    this.pontuacao = this.bookService.getPontuacao(groupId);
  }

  showTip(tipNumber: number) {
    if (this.pontuacao >= 200 && !this.dicaAberta[tipNumber]) {
      this.tipNumber = tipNumber;
      this.showPopup = true;
      this.pontuacao -= 200;
      this.dicaAberta[tipNumber] = true;

      // Salvar pontuação para o grupo atual
      const groupId = this.enigmaService.getCurrentGroupId();
      this.bookService.savePontuacao(groupId, this.pontuacao);
    } else if (this.dicaAberta[tipNumber]) {
      alert("Esta dica já foi aberta!");
    } else {
      alert("Você não tem pontos suficientes para mais dicas!");
    }
  }

  closePopup() {
    this.showPopup = false;
  }

  getTipDescription(): string {
    if (this.book && this.tipNumber > 0 && this.tipNumber <= this.book.hints.length) {
      return this.book.hints[this.tipNumber - 1];
    }
    return "";
  }
}
