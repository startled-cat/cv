import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface Experience {
  name: string;
  desc: string;
  more?: string;
  yearStart: number;
  yearEnd?: number;
  icon?: string;
  list?: string[];
  tags?: string[];
}

export interface Achievement {
  year: number;
  name: string;
  desc: string;
  tags?: string[];
}

export interface DrawerSettings {
  mode: 'side' | 'over' | 'push';
  backdrop: boolean;
}

export interface Skill {
  name: string;
  level?: number;
  icon?: string;
  img?: string;
}

@Component({
  selector: 'main-content',
  templateUrl: 'main-content.html',
  styleUrls: ['main-content.css']
})
export class MainContent {
  accordionMulti: boolean = true;
  displayNavbar: boolean = false;
  hideExpansionToggles: boolean = true;
  drawerSettings: DrawerSettings = {
    mode: 'over',
    backdrop: true
  };

  achievements: Achievement[] = [
    {
      year: 2020,
      name: 'Praca inżynierska',
      desc: 'Aplikacja internetowa wspomagająca zarządzanie domowym budżetem',
      tags: [
        'TypeScript',
        'Python',
        'Angular',
        'RxJs',
        'Material',
        'Flask',
        'Heroku',
        'PostgreSQL'
      ]
    },
    {
      year: 2019,
      name: 'Projekt kompetencyjny',
      desc: 'Badanie otoczenia za pomocą ultradźwiękowego czujnika odległości',
      tags: ['Python', 'C', 'PyQt', 'Arduino']
    }
  ];

  jobs: Experience[] = [
    {
      yearStart: 2019,
      yearEnd: 2020,
      name: 'Hutchinson Poland Sp. z o.o. Zakład Łódź 1',
      desc: 'Stażysta w dziale pasków transmisyjnych',
      list: [
        'Utrzymywanie, usprawniane i modernizacja istniejącego oprogramowania',
        'Zbieranie wymagań od użytkowników',
        'Tworzenie nowego oprogramowania',
        'Dokumentacja wdrażanych rozwiązań',
        'Automatyzacja i informatyzacja procesów',
        'Szkolenie użytkowników z obsługi storzonego oprogramowania'
      ],
      tags: [
        'Docker',
        'Node.js',
        'Express',
        'TypeScript',
        'Angular',
        'RxJs',
        'Ubuntu Server',
        'MS SQL Server'
      ]
    },
    {
      yearStart: 2016,
      yearEnd: 2016,
      name: 'Mobisoft Łódź',
      desc: 'Praktykant',
      list: [
        'Pomoc w obsłudze sklepu internetowego',
        'Modyfikowanie i tworzenie szablonów aukcji allegro'
      ],
      tags: ['HTML', 'CSS', 'PhotoShop']
    }
  ];

  schools: Experience[] = [
    {
      yearStart: 2021,
      name:
        'Politechnika Łódzka, wydział Elektrotechniki, Elektroniki, Informatyki i Automatyki',
      desc: 'Studia magisterskie, Informatyka',
      more: 'Specjalizacja: Systemy rozproszone i platformy mobilne',
      tags: []
    },
    {
      yearStart: 2017,
      yearEnd: 2021,
      name:
        'Politechnika Łódzka, wydział Elektrotechniki, Elektroniki, Informatyki i Automatyki',
      desc: 'Studia inżynierskie, Informatyka',
      more: 'Specjalizacja: Inżynieria oprogramowania',
      tags: []
    },
    {
      yearStart: 2013,
      yearEnd: 2017,
      name: 'Technikum nr 10 im. Jana Szczepanika w Łodzi',
      desc: 'Technik informatyk',
      icon: 'desktop_windows',
      tags: []
    }
  ];

  skills: Skill[] = [
    {
      name: 'Angielski (C1)',
      icon: 'translate',
      level: 0.95
    },

    {
      name: 'TypeScript',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png',
      level: 0.7
    },

    {
      name: 'Node',
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fnodejs-icon-logo-png-transparent.png&f=1&nofb=1',
      level: 0.6
    },
    {
      name: 'Angular',
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fangular-icon-1-logo-png-transparent.png&f=1&nofb=1',
      level: 0.7
    },

    {
      name: 'Angular Material',
      img: 'https://material.angular.io/assets/img/angular-material-logo.svg',
      level: 0.8
    },

    {
      name: 'RxJs',
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.auth0.com%2Fblog%2Fauth-observables%2Frxjs-logo.png&f=1&nofb=1',
      level: 0.5
    },

    {
      name: 'Docker',
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.docker.com%2Fsites%2Fdefault%2Ffiles%2Fd8%2Fstyles%2Frole_icon%2Fpublic%2F2019-07%2FMoby-logo.png%3Fitok%3DsYH_JEaJ&f=1&nofb=1',
      level: 0.4
    },

    {
      name: 'Python',
      img:
        'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png',
      level: 0.6
    },

    {
      name: 'Flask',
      img:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fflask-training-courses.uk%2Fimages%2Fflask-logo.png&f=1&nofb=1',
      level: 0.5
    },

    {
      name: 'Java',
      img:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F226%2F226777.png&f=1&nofb=1',
      level: 0.7
    },

    {
      name: 'C',
      img:
        'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png',
      level: 0.8
    },
    {
      name: 'C#',
      img:
        'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/csharp/csharp.png',
      level: 0.4
    }
  ];
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
