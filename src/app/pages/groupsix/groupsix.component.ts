import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/services/book.service";
import { Book } from "src/app/models/book.model";

@Component({
    selector: 'app-groupsix',
    templateUrl: 'groupsix.component.html',
    styleUrls: ['./groupsix.component.css']
})

export class GroupsixComponent implements OnInit {
    
    enigmas: string[] = [];

    constructor(private bookService: BookService) {}
  
    ngOnInit(): void {
      // Obter todos os enigmas
      this.enigmas = this.bookService.getAllEnigmas() || [];
      
      // Embaralhar a lista de enigmas
      this.shuffleEnigmas();
    }
  
    private shuffleEnigmas(): void {
      for (let i = this.enigmas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.enigmas[i], this.enigmas[j]] = [this.enigmas[j], this.enigmas[i]];
      }
    }
}   