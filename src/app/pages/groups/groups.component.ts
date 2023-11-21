import { Component, Injector} from '@angular/core';
import { Router } from '@angular/router';
import { EnigmaService } from 'src/app/services/enigma.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})

export class GroupsComponent {
  constructor(private router: Router, private enigmaService: EnigmaService) {}

  navegarEnigma(grupo: number) {
    this.enigmaService.setEnigmaByGroup(grupo);
    this.router.navigate(['enigma']);
  }
}
