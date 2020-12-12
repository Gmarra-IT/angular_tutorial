import { Component, OnInit, Input  } from '@angular/core';
import { Hero } from '../hero';

// per nuova conf con routing attivo alle pagine di dettaglio, devo estrarre su quale oggetto siamo per mostrare i dettagli corretti.
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute, // tiene le info della route dell'istanza, da cui estrarremo il paremetro id
    private heroService: HeroService, // get gli heroes data dal server, o nel nostro caso dal mock (tramite service)
    private location: Location // utile alla navigazione, per tornare da dove siamo venuti con browser back
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id'); //il più converte la stringa (tutti i parametri in js) in numero
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
