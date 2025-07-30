const translations = {
  pl: {
    header: {
      name: "Paweł Zywert",
      subtitle: "Programista Full-stack",
      imgAlt: "Logo",
    },
    navbar: {
      about: "O mnie",
      skills: "Umiejętności",
      experience: "Doświadczenie",
      projects: "Projekty",
      contact: "Kontakt",
      language: "Język",
    },
    about: {
      title: "O mnie",
      description: `Full-Stack Developer z ponad 3-letnim doświadczeniem w tworzeniu aplikacji webowych, automatyzacji procesów i integracji systemów wewnętrznych oraz zewnętrznych. 
  Na co dzień tworzę rozwiązania frontendowe w React i Angularze oraz backendowe w Node.js, PHP i C# (.NET), pracując z REST API, bazami danych (MySQL, MSSQL, MongoDB) oraz chmurą Azure.
  Z powodzeniem wdrażam aplikacje typu SPA i PWA, stosuję nowoczesne narzędzia jak Vite, Tailwind CSS czy Azure DevOps.
  W pracy cenię czysty kod, komponentową architekturę, automatyzację procesów i rozwój technologiczny. 
  Aktualnie koncentruję się na projektach w React + Vite oraz rozbudowie mojego portfolio o aplikacje produkcyjne i edukacyjne.`,
    },
    skills: {
      title: "Umiejętności",
      technologies: [
        {
          name: "React",
          icon: "SiReact",
          category: "Frontend",
          description:
            "Nowoczesna i wydajna biblioteka do budowy interfejsów użytkownika, oparta na komponentowej architekturze. Używam Reacta przede wszystkim do tworzenia średnich i dużych aplikacji typu SPA, gdzie kluczowe jest szybkie renderowanie i łatwa rozbudowa. W mojej pracy doceniam bogaty ekosystem – w tym hooki, context API, React Router oraz liczne biblioteki wspierające m.in. formularze i walidację. React idealnie sprawdza się przy integracji z backendem oraz zewnętrznymi usługami, np. w systemach typu helpdesk, panelach administracyjnych i aplikacjach raportowych.",
        },
        {
          name: "Angular",
          icon: "SiAngular",
          category: "Frontend",
          description:
            "Rozbudowany framework frontendowy oparty na TypeScript, wykorzystywany do tworzenia skalowalnych aplikacji biznesowych. W mojej praktyce Angular pełni rolę narzędzia edukacyjnego. Posiada rozbudowanemu zestawowi narzędzi i wbudowanym mechanizmom (takim jak routing, formularze, DI).",
        },
        {
          name: "JavaScript",
          icon: "SiJavascript",
          category: "Frontend",
          description:
            "Fundament tworzenia aplikacji webowych — wykorzystuję go zarówno w warstwie frontendowej (manipulacja DOM, obsługa zdarzeń, dynamiczne UI), jak i backendowej (Node.js). JavaScript to mój codzienny język pracy, używany w niemal każdym projekcie: od prostych formularzy, przez interakcje AJAX, po złożone logiki aplikacji jedno- i wielostronicowych. Swobodnie łączę go z frameworkami i bibliotekami jak React, Angular czy jQuery oraz z technologiami backendowymi i bazami danych.",
        },
        {
          name: "TypeScript",
          icon: "SiTypescript",
          category: "Frontend",
          description:
            "Rozszerzenie JavaScriptu, które wprowadza statyczne typowanie i pozwala na wcześniejsze wykrywanie błędów w czasie kompilacji. Dzięki deklaracjom typów, interfejsom i unii typów mogę pisać bardziej bezpieczny i przewidywalny kod, co znacząco redukuje ryzyko błędów wynikających z nieprawidłowych danych. Wykorzystuję TypeScript we wszystkich większych projektach React i Angular, zarówno po stronie komponentów, jak i logiki biznesowej oraz komunikacji z API.",
        },
        {
          name: "jQuery",
          icon: "SiJquery",
          category: "Frontend",
          description:
            "Lekka biblioteka JavaScript, która upraszcza manipulację DOM, obsługę zdarzeń oraz wykonywanie zapytań AJAX. Dzięki swojej prostocie i kompatybilności jQuery nadal pozostaje niezastąpionym narzędziem przy modernizacji starszych aplikacji oraz przy integracjach z backendem bez konieczności użycia fetch czy axios. Korzystam z jQuery m.in. w projektach opartych na PHP oraz w zadaniach, gdzie szybkie dodanie dynamicznych funkcjonalności do istniejącego kodu jest kluczowe.",
        },
        {
          name: "Tailwind CSS",
          icon: "SiTailwindcss",
          category: "Frontend",
          description:
            "Tailwind CSS pozwala mi szybko budować estetyczne i responsywne interfejsy użytkownika. Korzystam z klas narzędziowych do tworzenia layoutów, animacji i stylowania komponentów bez potrzeby pisania niestandardowego CSS. W moim internetowym portfolio, Tailwind przyspieszył wdrożenie spójnego UI w połączeniu z React i Vite.",
        },
        {
          name: "Materialize",
          icon: "SiMaterialdesign",
          category: "Frontend",
          description:
            "Materialize CSS wykorzystywałem głównie w projektach edukacyjnych oraz w aplikacjach, gdzie zależało mi na szybkim wdrożeniu atrakcyjnego interfejsu. Korzystam z gotowych komponentów (navbar, karty, modale), systemu siatki oraz ikon.",
        },
        {
          name: "Bootstrap",
          icon: "SiBootstrap",
          category: "Frontend",
          description:
            "Popularny framework CSS służący do szybkiego tworzenia responsywnych i estetycznych interfejsów. Wykorzystuję Bootstrap głównie do prototypowania oraz tworzenia spójnych layoutów w aplikacjach opartych o PHP, Node.js i czysty JavaScript. Jego gotowe komponenty (formularze, tabele, modale) oraz system siatki umożliwiają sprawne wdrażanie funkcjonalnych interfejsów bez konieczności pisania rozbudowanego CSS. Szczególnie przydaje się w projektach MVP, dashboardach oraz aplikacjach panelowych.",
        },
        {
          name: "Vite",
          icon: "SiVite",
          category: "Frontend",
          description:
            "Ultraszybki bundler i dev server, który znacząco przyspiesza proces tworzenia aplikacji. Wykorzystuję Vite jako podstawowe narzędzie startowe w projektach opartych o React i TypeScript — zarówno w portfolio, jak i w bardziej złożonych aplikacjach jak system Helpdesk. Dzięki Vite uzyskuję natychmiastowy hot reload, prostą konfigurację i znacznie lepszą wydajność niż w klasycznym Webpacku, co pozwala mi szybciej iterować i testować nowe funkcje.",
        },
        {
          name: "HTML5",
          icon: "SiHtml5",
          category: "Frontend",
          description:
            "Fundament każdej aplikacji webowej – odpowiada za strukturę dokumentu i jego semantykę. HTML5 wykorzystuję codziennie do budowy przejrzystych i dostępnych interfejsów użytkownika. Tworzę semantyczne układy z użyciem znaczników takich jak <header>, <section>, <article> czy <nav>, co ułatwia późniejsze stylowanie CSS oraz poprawia dostępność i SEO. Umiejętnie łączę HTML z CSS, JavaScriptem i frameworkami frontendowymi, tworząc nowoczesne, responsywne i zgodne ze standardami aplikacje.",
        },
        {
          name: "CSS3",
          icon: "SiCss3",
          category: "Frontend",
          description:
            "Odpowiedzialny za warstwę wizualną aplikacji — od layoutów po animacje. W codziennej pracy tworzę responsywne interfejsy z wykorzystaniem Flexboxa, Grid Layout, media queries i zmiennych CSS. Styluję komponenty w projektach opartych o czysty HTML, a także w aplikacjach z Reactem i Angular. Używam animacji CSS do podnoszenia interaktywności oraz buduję ciemne i jasne motywy w oparciu o klasy i zmienne. CSS traktuję jako integralną część projektowania nowoczesnych aplikacji webowych.",
        },
        {
          name: "Node.js",
          icon: "SiNodedotjs",
          category: "Backend",
          description:
            "Wykorzystuję Node.js głównie do prostych zadań backendowych, takich jak obsługa połączeń z bazami danych (np. MongoDB, MySQL) oraz tworzenie prostych REST API. Node pozwala mi na szybkie prototypowanie backendu w aplikacjach React i Angular oraz integrację z zewnętrznymi systemami. Używam go również w zadaniach związanych z przetwarzaniem danych oraz automatyzacją (np. odczyt plików JSON, komunikacja z API).",
        },
        {
          name: "PHP",
          icon: "SiPhp",
          category: "Backend",
          description:
            "PHP wykorzystuję głównie do budowy prostych aplikacji webowych, integracji z bazami danych (MySQL) oraz generowania dynamicznych treści na stronach. Stosuję go w starszych projektach oraz tam, gdzie wymagana jest szybka i lekka logika serwerowa – np. w połączeniu z jQuery i AJAX. Dobrze sprawdza się również jako backend w aplikacjach opartych o klasyczny HTML/CSS/JS. Potrafię tworzyć formularze, wysyłać dane do bazy oraz zwracać odpowiedzi JSON, tworząc kompletne rozwiązania bez frameworków.",
        },
        {
          name: "C#",
          icon: "devicon-csharp-plain",
          category: "Backend",
          description:
            "Język C# wykorzystuję do tworzenia aplikacji desktopowych oraz systemów integracyjnych opartych o Windows Forms i .NET. Tworzę rozwiązania do obsługi baz danych (np. MSSQL), generowania dokumentów, obsługi drukarek i zautomatyzowanej komunikacji z API zewnętrznych usług (np. Poczta Polska). C# dobrze sprawdza się w projektach, gdzie liczy się stabilność, silne typowanie i pełna kontrola nad środowiskiem systemowym.",
        },
        {
          name: ".NET",
          icon: "SiDotnet",
          category: "Backend",
          description:
            ".NET to mój główny framework przy tworzeniu aplikacji w języku C#. Wykorzystuję go do budowy aplikacji desktopowych, REST API oraz automatyzacji procesów (np. generowanie plików, wydruki, integracje z systemami zewnętrznymi). Dzięki bogatemu ekosystemowi .NET, tworzę stabilne i wydajne rozwiązania dla biznesu, w tym systemy wspierające logistykę, komunikację z API oraz wewnętrzne narzędzia do zarządzania danymi. Cenię go za silne typowanie, wsparcie dla wielu platform i intuicyjne narzędzia deweloperskie.",
        },
        {
          name: "MySQL",
          icon: "SiMysql",
          category: "Database",
          description:
            "MySQL to relacyjna baza danych, którą najczęściej wykorzystuję w projektach opartych o PHP oraz Node.js. Tworzę struktury baz danych, projektuję relacje i piszę złożone zapytania SQL, m.in. do obsługi formularzy, systemów zgłoszeń oraz paneli administracyjnych. W praktyce wykorzystuję MySQL do przechowywania i filtrowania danych użytkowników, logów, zadań oraz konfiguracji systemów. Dzięki znajomości JOINów, indeksowania i relacji jestem w stanie zapewnić optymalną wydajność zapytań w aplikacjach webowych.",
        },
        {
          name: "MSSQL",
          icon: "devicon-microsoftsqlserver-plain",
          category: "Database",
          description:
            "MSSQL to moja podstawowa baza danych w projektach tworzonych w C# i .NET. Wykorzystuję ją do budowy systemów ewidencji, zarządzania dokumentacją i zautomatyzowanych raportów. Tworzę struktury tabel, relacje, widoki, procedury składowane i zapytania optymalizowane pod kątem wydajności. Zintegrowałem MSSQL z aplikacjami desktopowymi (Windows Forms), wspierając funkcje filtrowania, sortowania i wyszukiwania danych w czasie rzeczywistym.",
        },
        {
          name: "MongoDB",
          icon: "SiMongodb",
          category: "Database",
          description:
            "Używam MongoDB do projektów, w których ważna jest elastyczność danych i szybki rozwój aplikacji. Tworzę modele w Mongoose, wykonuję zapytania do kolekcji i integruję bazę z aplikacjami Node.js. Wykorzystuję MongoDB np. w aplikacjach React i Angular jako baza danych użytkowników, zgłoszeń czy konfiguracji systemów.",
        },
        {
          name: "Azure",
          icon: "devicon-azure-plain",
          category: "DevOps",
          description:
            "Microsoft Azure wykorzystuję głównie do hostowania aplikacji .NET oraz baz danych MSSQL. Korzystam z usług takich jak App Services, Azure SQL Database, Blob Storage oraz Azure Active Directory, m.in. do autoryzacji użytkowników w aplikacjach webowych. W projektach zespołowych wdrażam rozwiązania chmurowe umożliwiające skalowanie systemów, zdalny dostęp do danych i integrację z zewnętrznymi API. Cenię Azure za elastyczność, dobre wsparcie dla .NET oraz zaawansowane możliwości zarządzania infrastrukturą.",
        },
        {
          name: "Azure DevOps",
          icon: "devicon-azuredevops-plain",
          category: "DevOps",
          description:
            "W Azure DevOps zarządzam repozytoriami kodu, organizuję sprinty i zadania oraz tworzę automatyczne pipeline’y CI/CD. Wykorzystuję je do testowania, budowania i wdrażania aplikacji .NET i Node.js. Dzięki integracji z Git oraz tablicami Kanban mogę skutecznie łączyć programowanie z zarządzaniem projektem i automatyzacją procesów.",
        },
        {
          name: "Git",
          icon: "SiGit",
          category: "Other",
          description:
            "Git to moje podstawowe narzędzie kontroli wersji. Na co dzień korzystam z komend takich jak commit, branch, rebase czy merge, zarówno w pracy zespołowej, jak i indywidualnych projektach. Dzięki Git mogę efektywnie zarządzać historią kodu i pracować równolegle nad wieloma funkcjonalnościami.",
        },
        {
          name: "GitHub",
          icon: "SiGithub",
          category: "Other",
          description:
            "Na GitHubie utrzymuję swoje portfolio i projekty zespołowe. Korzystam z pull requestów, GitHub Actions (CI/CD), wiki oraz zarządzania zadaniami. Wspieram też projekty open-source i automatyzuję wdrożenia swoich aplikacji webowych poprzez integrację z GitHub Pages lub Vercel.",
        },
        {
          name: "Figma",
          icon: "SiFigma",
          category: "Other",
          description:
            "Figma służy mi do projektowania UI. Tworzę prototypy, ekrany aplikacji oraz animacje interfejsów. Dzięki Figma mogę konsultować design z klientami i szybko iterować zmiany wizualne w projektach frontendowych.",
        },
        {
          name: "Canva",
          icon: "SiCanva",
          category: "Other",
          description:
            "Canva wykorzystuję do tworzenia grafik promocyjnych, prezentacji, miniatur projektów oraz wizualizacji treści na potrzeby portfolio. Narzędzie pozwala mi szybko tworzyć estetyczne materiały bez angażowania zewnętrznego grafika.",
        },
        {
          name: "MS Office",
          icon: "FaMicrosoft",
          category: "Other",
          description:
            "Pakiet MS Office wspiera moją codzienną pracę biurową i projektową. Korzystam z Excela do analiz i raportów, Worda do dokumentacji technicznej oraz PowerPointa do prezentacji projektów. Używam Outlooka do zarządzania pocztą i kalendarzem, a Microsoft Teams do komunikacji zespołowej, spotkań online i współdzielenia plików w środowiskach projektowych.",
        },
      ],
    },
    projects: {
      title: "Projekty",
      cardLabels: {
        company: "Firma",
        goal: "Cel",
        improvements: "Usprawnienia",
        summarySection: {
          title: "Podsumowanie",
          info: "Ze względu na NDA projektu zrzuty ekranu nie zostały opublikowane.",
        },
      },
      items: [
        {
          name: "Helpdesk",
          tech: [
            "React",
            "Vite",
            "PHP",
            "MySQL",
            "PWA",
            "HTML",
            "CSS",
            "jQuery",
          ],
          company: "Intesys sp. z o.o.",
          purpose:
            "Zaprojektowanie i wdrożenie kompleksowego systemu Help Desk zintegrowanego z pocztą oraz kalendarzem Teams. Stworzenie bazy danych (projekt + implementacja), logotypu i kompletnego layoutu aplikacji.",
          improvement:
            "System automatycznie odbiera zgłoszenia (mailowe i ręczne), zarządza ich statusem, kategorią i priorytetem. Wprowadzono automatyczne powiadomienia, raportowanie, ewidencję sprzętu oraz kalendarz dostępności, zwiększając przejrzystość i efektywność pracy zespołu wraz z dokumentacją i rozliczaniem klientów i pracowników.",
          images: [
            "/Portfolio-PZ/assets/images/helpdesk-2.png",
            "/Portfolio-PZ/assets/images/helpdesk-3.png",
          ],
          links: [
            {
              label: "Post na LinkedIn",
              url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7333078042837200896?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Osadzona publikacja',
            },
          ],
          icon: "/Portfolio-PZ/assets/icons/helpdesk-icon.png",
        },
        {
          name: "Hurtownia danych + System WMS",
          tech: ["HTML", "CSS", "jQuery", "PHP", "AJAX", "MSSQL"],
          company: "handlowa (nazwa niedostępna publicznie)",
          purpose:
            "Modernizacja hurtowni danych oraz wdrożenie systemu WMS wspomagającego procesy magazynowe i handlowe. Projekt obejmował również integrację z narzędziami sprzedażowymi, rozbudowę części administracyjnej systemu oraz dodanie nowych funkcjonalności do hurtowni danych.",
          improvement:
            "Zaktualizowano infrastrukturę systemu (HTML4 → HTML5, PHP → 8.2), wdrożono nowoczesny system logowania (LDAP) oraz rozbudowano moduły zarządzania marżami, promocjami i cennikami. Powstał nowy system WMS obsługujący procesy magazynowe (przyjęcia, wydania, lokalizacje) na różnych urządzeniach (skanery, tablety, komputery).",
          images: [],
          links: [],
          icon: "",
          summary: [
            {
              title: "Migracja technologii",
              points: [
                "Migracja i uporządkowanie  15 latniego długu technicznego do HTML5 i PHP 8.2",
                "Unowocześnienie stylów CSS oraz dewelopment UX/UI aplikacji",
              ],
            },
            {
              title: "Uwierzytelnianie i konta",
              points: [
                "Rozbudowa systemu logowania z integracją LDAPS",
                "Zarządzanie tożsamościami i aliasami  użytkowników",
              ],
            },
            {
              title: "Moduły biznesowe",
              points: [
                "Zarządzanie marżami, promocjami, cennikami krajowymi i zagranicznymi",
                "Integracja oraz aktualizacja danych handlowych",
              ],
            },
            {
              title: "System WMS",
              points: [
                "Stworzenie systemu WMS na skanery, tablety, komputery i telefony",
                "Strandaryzacja usług zgodnie z normami UE",
              ],
            },
          ],
        },
        {
          name: "Poczta Integrator",
          tech: ["C#", ".NET", "MSSQL", "API Integration"],
          company: "Urząd gminy Dopiewo",
          purpose:
            "Stworzenie systemu do automatycznego nadawania i przetwarzania dokumentów, zintegrowanego z eNadawcą oraz systemami urzędu. Zaprojektowanie i implementacja bazy danych oraz interfejsu użytkownika wraz z logotypem.",
          improvement:
            "Aplikacja automatycznie rejestruje odbiór przesyłek, eliminując konieczność ręcznego wprowadzania danych. Pozwala na masową obsługę korespondencji (np. decyzji, upomnień) — nawet do 20 000 dokumentów miesięcznie, przyspieszono pracę działu administracyjnego. System jest utrzymywany i regularnie aktualizowany, by spełniać zmieniające się potrzeby urzędu.",
          images: ["/Portfolio-PZ/assets/images/poczta-1.png"],
          links: [],
          icon: "/Portfolio-PZ/assets/icons/PI-icon.png",
        },
        {
          name: "Hurtownia danych",
          tech: ["MSSQL", "CSS", "jQuery", "PHP", "AJAX", "Materialize"],
          company: "Branża spożywcza (nazwa niedostępna publicznie)",
          purpose:
            "Modernizacja warstwy wizualnej i UX istniejącej hurtowni danych. Dodatkowo opracowano zaawansowany moduł raportowania błędów wspierający kontrolę jakości i obsługę niezgodności produkcyjnych.",
          improvement:
            "System zyskał nowoczesny, responsywny interfejs z dynamicznym renderowaniem komponentów. Zaprojektowany moduł pozwala na przeglądanie i filtrowanie zgłoszonych błędów — w tym przyjęć, wydań, niezgodności dokumentów, partii oraz innych krytycznych procesów — umożliwiając szybkie reagowanie i analizę problemów.",
          images: [],
          links: [],
          icon: "",
          summary: [
            {
              title: "Modernizacja interfejsu",
              points: [
                "Aktualizacja stylów i nadanie charakteru zgodnie z wytyczonym motywem i stylem marki",
              ],
            },
            {
              title: "Moduł raportowania błędów",
              points: [
                "Dewelopment monitoringu błędów z różnych obszarów mi: przyjęcia, wydania, dokumenty, partie",
                "Zintegrowanie fubkcjonalności filtrowania, oraz szczegółowy podgląd zgłoszeń",
                "Zbudowanie integracjii z istniejącącymi systemami",
              ],
            },
          ],
        },
      ],
    },
    contact: {
      title: "Kontakt",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      menAlt: "Me",
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone. Skontaktuj się z autorem:",
    },
  },
  en: {
    header: {
      name: "Pawel Zywert",
      subtitle: "Full-stack Developer",
      imgAlt: "Logo",
    },
    navbar: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
    },
    about: {
      title: "About Me",
      description: `Full-Stack Developer with over 3 years of experience in building web applications, automating processes, and integrating internal and external systems.
I develop frontend solutions in React and Angular as well as backend logic in Node.js, PHP, and C# (.NET), working daily with REST APIs, databases (MySQL, MSSQL, MongoDB), and Microsoft Azure.
I specialize in SPA and PWA applications and use modern tools like Vite, Tailwind CSS, and Azure DevOps.
In my work, I value clean code, component-based architecture, automation, and continuous development.
Currently, I'm focused on React + Vite projects and expanding my portfolio with production and educational apps.`,
    },
    skills: {
      title: "Skills",
      technologies: [
        {
          name: "React",
          icon: "SiReact",
          category: "Frontend",
          description:
            "Modern and efficient library for building user interfaces based on component architecture. I use React primarily to build medium and large SPA applications where fast rendering and easy scalability are crucial. I appreciate its rich ecosystem – including hooks, context API, React Router, and libraries supporting forms and validation. React is perfect for integrating with backends and external services, such as in helpdesk systems, admin panels, and reporting applications.",
        },
        {
          name: "Angular",
          icon: "SiAngular",
          category: "Frontend",
          description:
            "A comprehensive frontend framework based on TypeScript used to build scalable business applications. In my experience, Angular serves primarily as an educational tool. It offers an extensive toolset and built-in mechanisms such as routing, forms, and dependency injection.",
        },
        {
          name: "JavaScript",
          icon: "SiJavascript",
          category: "Frontend",
          description:
            "The foundation of web application development – I use it both on the frontend (DOM manipulation, event handling, dynamic UI) and the backend (Node.js). JavaScript is my daily driver used in almost every project – from simple forms and AJAX interactions to complex logic in single- and multi-page apps. I combine it freely with frameworks and libraries such as React, Angular, or jQuery, and backend technologies with databases.",
        },
        {
          name: "TypeScript",
          icon: "SiTypescript",
          category: "Frontend",
          description:
            "A typed superset of JavaScript that introduces static typing and enables early error detection at compile time. Thanks to type declarations, interfaces, and unions, I can write safer and more predictable code. I use TypeScript in all major React and Angular projects – from components to business logic and API communication.",
        },
        {
          name: "jQuery",
          icon: "SiJquery",
          category: "Frontend",
          description:
            "A lightweight JavaScript library that simplifies DOM manipulation, event handling, and AJAX requests. Thanks to its simplicity and compatibility, jQuery remains an irreplaceable tool for modernizing legacy applications and for backend integrations without using fetch or axios. I use it in PHP-based projects and tasks where quick dynamic functionality is key.",
        },
        {
          name: "Tailwind CSS",
          icon: "SiTailwindcss",
          category: "Frontend",
          description:
            "Tailwind CSS allows me to quickly build aesthetic and responsive user interfaces. I use utility classes to create layouts, animations, and style components without writing custom CSS. In my portfolio, Tailwind helped speed up UI implementation when used with React and Vite.",
        },
        {
          name: "Materialize",
          icon: "SiMaterialdesign",
          category: "Frontend",
          description:
            "I’ve used Materialize CSS primarily in educational projects and apps where quick deployment of an attractive interface was important. I utilize its ready-made components (navbar, cards, modals), grid system, and icon set.",
        },
        {
          name: "Bootstrap",
          icon: "SiBootstrap",
          category: "Frontend",
          description:
            "A popular CSS framework for quickly creating responsive and visually appealing interfaces. I mainly use Bootstrap for prototyping and building consistent layouts in PHP, Node.js, and plain JavaScript applications. Its ready-made components (forms, tables, modals) and grid system enable efficient UI deployment without extensive custom CSS. Particularly useful in MVPs, dashboards, and admin panels.",
        },
        {
          name: "Vite",
          icon: "SiVite",
          category: "Frontend",
          description:
            "An ultra-fast bundler and dev server that significantly speeds up app development. I use Vite as a default starter tool in React + TypeScript projects – both in my portfolio and complex applications like Helpdesk. Thanks to Vite, I get instant hot reload, simple configuration, and better performance than traditional Webpack, allowing me to iterate and test faster.",
        },
        {
          name: "HTML5",
          icon: "SiHtml5",
          category: "Frontend",
          description:
            "The foundation of every web application – defines document structure and semantics. I use HTML5 daily to build clear and accessible user interfaces. I create semantic layouts with tags like <header>, <section>, <article>, and <nav>, improving CSS styling, accessibility, and SEO. I skillfully combine HTML with CSS, JavaScript, and frameworks to build modern, responsive, and standard-compliant applications.",
        },
        {
          name: "Node.js",
          icon: "SiNodedotjs",
          category: "Backend",
          description:
            "I use Node.js mainly for simple backend tasks such as handling database connections (e.g., MongoDB, MySQL) and creating basic REST APIs. Node allows me to quickly prototype backend logic in React and Angular applications and integrate with external systems. I also use it for data processing and automation tasks (e.g., reading JSON files, communicating with APIs).",
        },
        {
          name: "PHP",
          icon: "SiPhp",
          category: "Backend",
          description:
            "I use PHP mainly for building simple web applications, integrating with databases (MySQL), and generating dynamic page content. I use it in legacy projects and in situations that require lightweight and fast server-side logic — for example, combined with jQuery and AJAX. It also works well as a backend for traditional HTML/CSS/JS-based applications. I can create forms, send data to the database, and return JSON responses, building complete solutions without frameworks.",
        },
        {
          name: "C#",
          icon: "devicon-csharp-plain",
          category: "Backend",
          description:
            "I use C# to build desktop applications and integration systems based on Windows Forms and .NET. I develop solutions for database handling (e.g., MSSQL), document generation, printer support, and automated communication with external service APIs (e.g., Polish Post). C# works well in projects where stability, strong typing, and full control over the system environment are essential.",
        },
        {
          name: ".NET",
          icon: "SiDotnet",
          category: "Backend",
          description:
            ".NET is my primary framework for building applications in C#. I use it to create desktop apps, REST APIs, and process automation tools (e.g., file generation, printing, external system integrations). Thanks to the rich .NET ecosystem, I build stable and efficient business solutions, including systems supporting logistics, API communication, and internal data management tools. I value .NET for its strong typing, multi-platform support, and intuitive development tools.",
        },
        {
          name: "MySQL",
          icon: "SiMysql",
          category: "Database",
          description:
            "MySQL is a relational database that I most often use in projects based on PHP and Node.js. I create database structures, design relationships, and write complex SQL queries — e.g., for handling forms, ticketing systems, and admin panels. In practice, I use MySQL to store and filter user data, logs, tasks, and system configurations. Thanks to my knowledge of JOINs, indexing, and relationships, I can ensure optimal query performance in web applications.",
        },
        {
          name: "MSSQL",
          icon: "devicon-microsoftsqlserver-plain",
          category: "Database",
          description:
            "MSSQL is my primary database in projects built with C# and .NET. I use it to build record-keeping systems, document management tools, and automated reports. I design table structures, relationships, views, stored procedures, and performance-optimized queries. I’ve integrated MSSQL with desktop applications (Windows Forms), supporting real-time data filtering, sorting, and searching.",
        },
        {
          name: "MongoDB",
          icon: "SiMongodb",
          category: "Database",
          description:
            "I use MongoDB for projects where data flexibility and rapid application development are important. I create Mongoose models, perform collection queries, and integrate the database with Node.js applications. For example, I use MongoDB in React and Angular apps as a database for users, tickets, or system configurations.",
        },
        {
          name: "Azure",
          icon: "devicon-azure-plain",
          category: "DevOps",
          description:
            "I mainly use Microsoft Azure for hosting .NET applications and MSSQL databases. I utilize services like App Services, Azure SQL Database, Blob Storage, and Azure Active Directory, e.g., for user authorization in web apps. In team projects, I deploy cloud solutions that enable system scalability, remote data access, and integration with external APIs. I value Azure for its flexibility, strong .NET support, and advanced infrastructure management capabilities.",
        },
        {
          name: "Azure DevOps",
          icon: "devicon-azuredevops-plain",
          category: "DevOps",
          description:
            "In Azure DevOps, I manage code repositories, organize sprints and tasks, and create CI/CD pipelines. I use it to test, build, and deploy .NET and Node.js applications. Thanks to Git integration and Kanban boards, I can effectively combine programming with project management and process automation.",
        },
        {
          name: "Git",
          icon: "SiGit",
          category: "Other",
          description:
            "Git is my primary version control tool. I use commands like commit, branch, rebase, and merge daily — in both team and individual projects. Git allows me to efficiently manage code history and work on multiple features in parallel.",
        },
        {
          name: "GitHub",
          icon: "SiGithub",
          category: "Other",
          description:
            "I host my portfolio and team projects on GitHub. I use pull requests, GitHub Actions (CI/CD), wikis, and task management. I also support open-source projects and automate web app deployments via GitHub Pages or Vercel integration.",
        },
        {
          name: "Figma",
          icon: "SiFigma",
          category: "Other",
          description:
            "Figma is my go-to tool for UI design. I create prototypes, app screens, and interface animations. With Figma, I can consult designs with clients and quickly iterate visual changes in frontend projects.",
        },
        {
          name: "Canva",
          icon: "SiCanva",
          category: "Other",
          description:
            "I use Canva to create promotional graphics, presentations, project thumbnails, and visual content for my portfolio. The tool lets me quickly design aesthetic materials without involving an external designer.",
        },
        {
          name: "MS Office",
          icon: "FaMicrosoft",
          category: "Other",
          description:
            "MS Office supports my daily office and project work. I use Excel for analysis and reporting, Word for technical documentation, and PowerPoint for project presentations. I rely on Outlook for email and calendar management, and Microsoft Teams for team communication, online meetings, and file sharing in project environments.",
        },
      ],
    },
    projects: {
      title: "Projects",
      cardLabels: {
        company: "Company",
        goal: "Goal",
        improvements: "Improvements",
        summarySection: {
          title: "Summary",
          info: "Due to the project's NDA, screenshots have not been published.",
        },
      },
      items: [
        {
          name: "Helpdesk",
          tech: [
            "React",
            "Vite",
            "PHP",
            "MySQL",
            "PWA",
            "HTML",
            "CSS",
            "jQuery",
          ],
          company: "Intesys sp. z o.o.",
          purpose:
            "Design and implementation of a comprehensive Help Desk system integrated with email and Microsoft Teams calendar. Creation of the database (design + implementation), logo, and full application layout.",
          improvement:
            "The system automatically receives requests (email and manual), manages their status, category, and priority. Automatic notifications, reporting, equipment records, and availability calendar were introduced — improving clarity and team efficiency alongside documentation and client/employee billing.",
          images: [
            "/Portfolio-PZ/assets/images/helpdesk-2.png",
            "/Portfolio-PZ/assets/images/helpdesk-3.png",
          ],
          links: [
            {
              label: "LinkedIn Post",
              url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7333078042837200896?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post',
            },
          ],
          icon: "/Portfolio-PZ/assets/icons/helpdesk-icon.png",
        },
        {
          name: "Data Warehouse + WMS System",
          tech: ["HTML", "CSS", "jQuery", "PHP", "AJAX", "MSSQL"],
          company: "FMCG industry (name not publicly available)",
          purpose:
            "Modernization of the data warehouse and implementation of a WMS system supporting warehouse and sales processes. The project also included integration with sales tools, expanding the admin section, and adding new functionalities to the warehouse.",
          improvement:
            "Updated system infrastructure (HTML3 → HTML5, PHP → 8.2), implemented a modern login system (LDAP), and extended modules for margin, promotion, and price list management. A new WMS system was created to handle warehouse processes (receipts, dispatches, locations) on various devices (scanners, tablets, computers).",
          images: [],
          links: [],
          icon: "",
          summary: [
            {
              title: "Technology migration",
              points: [
                "Migration and refactoring of 15 years of technical debt to HTML5 and PHP 8.2",
                "Modernized CSS styles and application UX/UI development",
              ],
            },
            {
              title: "Authentication and accounts",
              points: [
                "Expanded login system with LDAPS integration",
                "User identity and alias management",
              ],
            },
            {
              title: "Business modules",
              points: [
                "Management of margins, promotions, and domestic/foreign price lists",
                "Integration and update of sales data",
              ],
            },
            {
              title: "WMS System",
              points: [
                "Creation of a WMS system for scanners, tablets, computers, and phones",
                "Service standardization in line with EU regulations",
              ],
            },
          ],
        },
        {
          name: "Mail Integrator",
          tech: ["C#", ".NET", "MSSQL", "API Integration"],
          company: "Dopiewo Municipality Office",
          purpose:
            "Development of a system for automated dispatch and processing of documents, integrated with eNadawca and municipal systems. Database and UI design and implementation, including logo.",
          improvement:
            "The application automatically registers mail reception, eliminating the need for manual input. It supports mass processing of correspondence (e.g., decisions, reminders) — up to 20,000 documents per month — significantly speeding up administrative work. The system is maintained and regularly updated to meet evolving municipal needs.",
          images: ["/Portfolio-PZ/assets/images/poczta-1.png"],
          links: [],
          icon: "/Portfolio-PZ/assets/icons/PI-icon.png",
        },
        {
          name: "Data Warehouse",
          tech: ["MSSQL", "CSS", "jQuery", "PHP", "AJAX", "Materialize"],
          company: "Food industry (name not publicly available)",
          purpose:
            "Modernization of the visual and UX layer of the existing data warehouse. Additionally, a robust error reporting module was developed to support quality control and production inconsistency handling.",
          improvement:
            "The system received a modern, responsive interface with dynamic component rendering. The designed module allows browsing and filtering of reported errors — including receipts, dispatches, document inconsistencies, batches, and other critical processes — enabling fast response and problem analysis.",
          images: [],
          links: [],
          icon: "",
          summary: [
            {
              title: "Interface modernization",
              points: [
                "Style updates and visual consistency aligned with brand theme and style",
              ],
            },
            {
              title: "Error reporting module",
              points: [
                "Development of error monitoring from areas like receipts, dispatches, documents, batches",
                "Integrated filtering functionality and detailed issue view",
                "Integration with existing systems",
              ],
            },
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      menAlt: "Men",
    },
    footer: {
      rights: "All rights reserved. Contact the author:",
    },
  },
};

export default translations;
