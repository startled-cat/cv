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
  year: number | string;
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
  level: number;
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
  hideExpansionToggles: boolean = false;
  expanded: boolean = false;
  showPhoneNumber: boolean = false;
  drawerSettings: DrawerSettings = {
    mode: 'over',
    backdrop: true
  };



  achievements: Achievement[] = [
    {
      year: '2022 - planowany termin obrony',
      name: 'Praca magisterska',
      desc: 'System weryfikacji wieloskładnikowej oparty na technologii blockchain',
      tags: [
        'Python',
        'Solidity',
        'Blockchain',
        'EVM'
      ]
    },
    {
      year: 2020,
      name: 'Praca inżynierska',
      desc: 'Aplikacja internetowa wspomagająca zarządzanie domowym budżetem',
      tags: [
        'TypeScript',
        'Python',
        'Angular',
        'Flask',
        'Heroku',
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
      yearStart: 2021,
      yearEnd: 2022,
      name: 'Accenture Services Sp. z o. o.',
      desc: 'Praktykant DevOps',
      list: [
        'Nauka i praca w zespole ATC DevOps',
        'Wykonywanie testów oraz dokumentowanie wprowadzanych zmian',
        'Administrowanie systemem Jira'
      ],
      tags: [
        'Jira', 'Jenkins', 'AWS'
      ]
    },
    {
      yearStart: 2019,
      yearEnd: 2020,
      name: 'Hutchinson Poland Sp. z o.o. Zakład Łódź 1',
      desc: 'Praktykant w dziale pasków transmisyjnych',
      list: [
        'Utrzymywanie, usprawniane i modernizacja istniejącego oprogramowania',
        'Zbieranie wymagań od użytkowników',
        'Automatyzacja i informatyzacja procesów',
        'Szkolenie użytkowników z obsługi storzonego oprogramowania'
      ],
      tags: [
        'Docker',
        'Node.js',
        'Express',
        'TypeScript',
        'Angular',
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
      tags: ['HTML', 'CSS', 'Photoshop']
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
      level: 0.95,
    },

    {
      name: 'TypeScript',
      img:
        'assets/typescript-seeklogo.com.svg',
      level: 0.7,
    },

    {
      name: 'Node',
      img:
        'assets/nodejs-seeklogo.com.svg',
      level: 0.6,
    },
    {
      name: 'Angular',
      img:
        'assets/angular-seeklogo.com.svg',
      level: 0.7,
    },

    // {
    //   name: 'Angular Material',
    //   img: 'assets/angular-material-logo.svg',
    //   level: 0.8,
    // },

    // {
    //   name: 'RxJs',
    //   img:
    //     'assets/rxjs-seeklogo.com.svg',
    //   level: 0.6,
    // },

    {
      name: 'Docker',
      img:
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDM5XzctZG9ja2VyIj48Zz48Zz48cmVjdCBoZWlnaHQ9IjQzLjE5MyIgc3R5bGU9ImZpbGw6IzA5OUNFQzsiIHdpZHRoPSI0Ny41MDYiIHg9IjIyOS45OTkiIHk9IjE0Ny4yMjUiLz48cmVjdCBoZWlnaHQ9IjQyLjY5IiBzdHlsZT0iZmlsbDojMDk5Q0VDOyIgd2lkdGg9IjQ3LjUwNiIgeD0iMjI5Ljk5OSIgeT0iMTk5LjExNSIvPjxyZWN0IGhlaWdodD0iNDMuMTkzIiBzdHlsZT0iZmlsbDojMDk5Q0VDOyIgd2lkdGg9IjQ3LjUwNiIgeD0iMTczLjg2OSIgeT0iMTQ3LjIyNSIvPjxyZWN0IGhlaWdodD0iNDIuNjkxIiBzdHlsZT0iZmlsbDojMDk5Q0VDOyIgd2lkdGg9IjQ3LjUwNyIgeD0iMjg2LjIiIHk9IjE5OS4wNDMiLz48cmVjdCBoZWlnaHQ9IjQzLjYyNSIgc3R5bGU9ImZpbGw6IzA5OUNFQzsiIHdpZHRoPSI0Ny41MDYiIHg9IjIyOS45OTkiIHk9Ijk0Ljk3NSIvPjxyZWN0IGhlaWdodD0iNDMuMTkzIiBzdHlsZT0iZmlsbDojMDk5Q0VDOyIgd2lkdGg9IjQ3LjUwNSIgeD0iMTE3LjczOCIgeT0iMTQ3LjIyNSIvPjxyZWN0IGhlaWdodD0iNDIuNjkxIiBzdHlsZT0iZmlsbDojMDk5Q0VDOyIgd2lkdGg9IjQ3LjUwNiIgeD0iMTczLjg2OSIgeT0iMTk5LjA0MyIvPjxwYXRoIGQ9Ik00NzYuNDQxLDIxOS4wOTVjLTEwLjM1LTYuOTcyLTM0LjIxLTkuNDg3LTUyLjUzNy02LjAzNiAgICAgYy0yLjM3MS0xNy4yNDktMTIuMDAzLTMyLjI3LTI5LjUzOC00NS43ODJsLTEwLjA2Mi02LjY4NWwtNi42ODUsMTAuMDYyYy0xMy4yMjUsMTkuOTgtMTYuODE3LDUyLjg5Ni0yLjY1OCw3NC42MDIgICAgIGMtNi4yNTIsMy4zNzctMTguNTQ1LDcuOTc4LTM0Ljc4Niw3LjY4OUgyNy43NTdjLTYuMjUyLDM2LjUxMSw0LjE2OSw4My45NDUsMzEuNjI0LDExNi41MDEgICAgIGMyNi42NjMsMzEuNTUxLDY2LjYyMyw0Ny41NzksMTE4Ljg3Miw0Ny41NzljMTEzLjEyNCwwLDE5Ni44NTEtNTIuMTA0LDIzNi4wMjEtMTQ2Ljc2YzE1LjM4MSwwLjI4OCw0OC41ODQsMC4wNzMsNjUuNjE4LTMyLjQ4MyAgICAgYzEuMDc4LTEuNzk3LDQuNzQzLTkuNDg4LDYuMTA3LTEyLjI5MUw0NzYuNDQxLDIxOS4wOTV6IiBzdHlsZT0iZmlsbDojMDk5Q0VDOyIvPjxwb2x5Z29uIHBvaW50cz0iMTA5LjE4NiwxOTkuMDQzIDEwOS4xMTMsMTk5LjA0MyA2MS42OCwxOTkuMDQzIDYxLjY4LDI0MS43MzQgMTA5LjE4NiwyNDEuNzM0ICAgICIgc3R5bGU9ImZpbGw6IzA5OUNFQzsiLz48cmVjdCBoZWlnaHQ9IjQyLjY5MSIgc3R5bGU9ImZpbGw6IzA5OUNFQzsiIHdpZHRoPSI0Ny41MDUiIHg9IjExNy43MzgiIHk9IjE5OS4wNDMiLz48L2c+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMSIvPjwvc3ZnPg==',
      level: 0.65,
    },

    {
      name: 'Python',
      img:
        'assets/python-seeklogo.com.svg',
      level: 0.75,
    },

    {
      name: 'Flask',
      img:
        'assets/flask-seeklogo.com.svg',
      level: 0.4,
    },
    {
      name: 'Git',
      img:
        'assets/git-seeklogo.com.svg',
      level: 0.5,
    },
    //   name: 'Express.js',
    //   img:
    //     'assets/javascript-js-seeklogo.com.svg',
    //   level: 0.6,
    // },
    {
      name: 'JavaScript',
      img:
        'assets/javascript-js-seeklogo.com.svg',
      level: 0.6,
    },

    {
      name: 'Java',
      img:
        'assets/java-seeklogo.com.svg',
      level: 0.5,
    },

    {
      name: 'C',
      img:
        'assets/c-programming-language-seeklogo.com.svg',
      level: 0.7,
    },
    // {
    //   name: 'C#',
    //   img:
    //     'assets/c-sharp-c-seeklogo.com.svg',
    //   level: 0.3,
    // },
    // {
    //   name: 'Flutter',
    //   img:
    //     'assets/flutter-seeklogo.com.svg',
    //   level: 0.2,
    // },
    {
      name: 'Linux',
      img:
        'assets/tux-seeklogo.com.svg',
      level: 0.5,
    }


  ].sort((a, b) => b.level - a.level);

  legal: string = "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).";


}
