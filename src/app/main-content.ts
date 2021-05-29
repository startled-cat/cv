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

@Component({
  selector: 'main-content',
  templateUrl: 'main-content.html',
  styleUrls: ['main-content.css']
})
export class MainContent {

  hideExpansionToggles:boolean = false;
  drawerSettings: DrawerSettings = {
    mode: 'over',
    backdrop: true
  };

  showFiller = false;

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
      name: 'Hutchinson Poland Sp. z o.o. Zakład Łódź 1, ul. Kurczaki 130',
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
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
