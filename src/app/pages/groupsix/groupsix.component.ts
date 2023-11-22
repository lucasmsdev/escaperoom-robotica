// groupsix.component.ts

import { Component, OnInit, TemplateRef } from "@angular/core";
import { BookService } from "src/app/services/book.service";


@Component({
  selector: 'app-groupsix',
  templateUrl: 'groupsix.component.html',
  styleUrls: ['./groupsix.component.css']
})

export class GroupsixComponent implements OnInit {
  enigmas: string[] = [];
  selectedEnigmaIndex: number | null = null;
  isJogoEncerrado: boolean = false;
  

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    const originalEnigmas = this.bookService.getAllEnigmas() || [];
    this.enigmas = this.shuffleEnigmas(originalEnigmas);
    this.selectedEnigmaIndex = null;
  }

  selectEnigma(index: number): void {
    this.selectedEnigmaIndex = index;
  }

  moveEnigmaUp(): void {
    if (this.selectedEnigmaIndex !== null && this.selectedEnigmaIndex > 0) {
      this.swapEnigmas(this.selectedEnigmaIndex, this.selectedEnigmaIndex - 1);
    }
  }

  moveEnigmaDown(): void {
    if (
      this.selectedEnigmaIndex !== null &&
      this.selectedEnigmaIndex < this.enigmas.length - 1
    ) {
      this.swapEnigmas(this.selectedEnigmaIndex, this.selectedEnigmaIndex + 1);
    }
  }

 encerrarJogo(): void {
  const enigmasOrdenados = [...this.enigmas].sort();
  const jogoEncerrado = this.arraysIguais(this.enigmas, enigmasOrdenados);

  if (jogoEncerrado) {
    alert('Parabéns! Você acertou a ordem dos enigmas.');
  } else {
    alert('Ordene os enigmas corretamente antes de encerrar o jogo.');
  }
}

  private shuffleEnigmas(enigmas: string[]): string[] {
    const shuffledEnigmas = [...enigmas];
    for (let i = shuffledEnigmas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledEnigmas[i], shuffledEnigmas[j]] = [shuffledEnigmas[j], shuffledEnigmas[i]];
    }
    return shuffledEnigmas;
  }

  private swapEnigmas(indexA: number, indexB: number): void {
    const temp = this.enigmas[indexA];
    this.enigmas[indexA] = this.enigmas[indexB];
    this.enigmas[indexB] = temp;
    this.selectedEnigmaIndex = indexB;
  }

  private arraysIguais(arr1: string[], arr2: string[]): boolean {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
}
