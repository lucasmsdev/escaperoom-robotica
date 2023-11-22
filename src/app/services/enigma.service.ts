// enigma.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnigmaService {
  private enigmasByGroup: { [key: number]: string } = {
    1: "Enigma para o Grupo 1",
    2: "Enigma para o Grupo 2",
    3: "Enigma para o Grupo 3",
    4: "Enigma para o Grupo 4",
    5: "Enigma para o Grupo 5",
    6: "Enigma para o Grupo 6",
  };

  private currentGroupId: number = 0;
  private currentEnigma: string = '';

  setEnigmaByGroup(grupo: number): void {
    this.currentGroupId = grupo;
    this.currentEnigma = this.enigmasByGroup[grupo];
  }

  getCurrentEnigma(): string {
    return this.currentEnigma || '';
  }

  getCurrentGroupId(): number {
    return this.currentGroupId;
  }
}
