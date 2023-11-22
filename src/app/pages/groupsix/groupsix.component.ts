// groupsix.component.ts

import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: 'app-groupsix',
  templateUrl: 'groupsix.component.html',
  styleUrls: ['./groupsix.component.css']
})

export class GroupsixComponent implements OnInit {
  enigmas: string[] = [];
  selectedEnigmaIndex: number | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // Obter todos os enigmas
    const originalEnigmas = this.bookService.getAllEnigmas() || [];

    // Embaralhar os enigmas
    this.enigmas = this.shuffleEnigmas(originalEnigmas);

    // Inicializar o índice do enigma selecionado como nulo
    this.selectedEnigmaIndex = null;
  }

  selectEnigma(index: number): void {
    // Marcar o enigma selecionado
    this.selectedEnigmaIndex = index;
  }

  moveEnigmaUp(): void {
    // Mover o enigma selecionado para cima na lista
    if (this.selectedEnigmaIndex !== null && this.selectedEnigmaIndex > 0) {
      this.swapEnigmas(this.selectedEnigmaIndex, this.selectedEnigmaIndex - 1);
    }
  }

  moveEnigmaDown(): void {
    // Mover o enigma selecionado para baixo na lista
    if (
      this.selectedEnigmaIndex !== null &&
      this.selectedEnigmaIndex < this.enigmas.length - 1
    ) {
      this.swapEnigmas(this.selectedEnigmaIndex, this.selectedEnigmaIndex + 1);
    }
  }

  private shuffleEnigmas(enigmas: string[]): string[] {
    // Embaralhar os enigmas utilizando o algoritmo Fisher-Yates
    const shuffledEnigmas = [...enigmas];
    for (let i = shuffledEnigmas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledEnigmas[i], shuffledEnigmas[j]] = [shuffledEnigmas[j], shuffledEnigmas[i]];
    }
    return shuffledEnigmas;
  }

  private swapEnigmas(indexA: number, indexB: number): void {
    // Trocar os enigmas nas posições indexA e indexB
    const temp = this.enigmas[indexA];
    this.enigmas[indexA] = this.enigmas[indexB];
    this.enigmas[indexB] = temp;

    // Atualizar o índice do enigma selecionado após a troca
    this.selectedEnigmaIndex = indexB;
  }
}
