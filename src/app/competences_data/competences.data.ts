export interface ICompetence {
  _id: string
  name: string
  subCompetences: string[]
}

export interface ISubTopic {
  _id: string
  name: string
  competences: ICompetence[]
}

export interface ITopic {
  _id: string
  name: string
  subTopics?: ISubTopic[]
  competences?: ICompetence[]
}

export interface ISubject {
  _id: string
  name: string
  topics: ITopic[]
}



export const competences: ISubject[] = [
  {
    _id: 's0',
    name: 'Textiles und Technisches Gestalten',
    topics: [
      {
        _id: 's0t0',
        name: 'TTG.1 - Wahrnehmung und Kommunikation',
        subTopics: [
          {
            _id: 's0t0st0',
            name: 'TTG.1.A - Wahrnehmung und Reflexion',
            competences: [
              {
                _id: 's0t0st0c0',
                name: '1. Die Schülerinnen und Schüler können gestalterische und technische Zusammenhänge an Objekten wahrnehmen und reflektieren.',
                subCompetences: [
                  'können Funktionen und Wirkung von Objekten zielgerichtet untersuchen (Zusammenspiel von Funktion, Konstruktion, Gestaltungselementen).',
                  'erkennen, mit welchen Verfahren Objekte hergestellt wurden.',
                  'können technische Zusammenhänge erkennen und erklären (Energiebereitstellung, Robotik, Overlockmaschine, Web- oder Wirkmaschine).',
                ],
              },
            ],
          },
          {
            _id: 's0t0st1',
            name: 'TTG.1.B - Kommunikation und Dokumentation',
            competences: [
              {
                _id: 's0t0st1c0',
                name: '1. Die Schülerinnen und Schüler können Gestaltungs- bzw. Designprozesse und Produkte begutachten und weiterentwickeln.',
                subCompetences: [
                  'können Designprozesse analysieren und daraus Konsequenzen für nächste Prozesse formulieren.',
                  'können Produkte kriterienorientiert begutachten, beurteilen und optimieren (z.B. mit professionell hergestellten Produkten vergleichen).',
                ],
              },
              {
                _id: 's0t0st1c1',
                name: '2. Die Schülerinnen und Schüler können Gestaltungs- bzw. Designprozesse und Produkte dokumentieren und präsentieren.',
                subCompetences: [
                  'können die Phasen des Designprozesses und die entwickelten Produkte nachvollziehbar dokumentieren und präsentieren (z.B. Portfolio, Lernjournal, Ausstellung).',
                  'können mit fachspezifischem Wortschatz über Prozesse und Produkte kommunizieren.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's0t1',
        name: 'TTG.2 - Prozesse und Produkte',
        subTopics: [
          {
            _id: 's0t1st0',
            name: 'TTG.2.A - Gestaltungs- bzw. Designprozess',
            competences: [
              {
                _id: 's0t1st0c0',
                name: '1. Die Schülerinnen und Schüler können eine gestalterische und technische Aufgabenstellung erfassen und dazu Ideen und Informationen sammeln, ordnen und bewerten.',
                subCompetences: [
                  'können zu Aufgabenstellungen und zu eigenen Fragestellungen Ideen entwickeln und Informationen recherchieren, strukturieren und bewerten.',
                ],
              },
              {
                _id: 's0t1st0c1',
                name: '2. Die Schülerinnen und Schüler experimentieren und können daraus eigene Produktideen entwickeln.',
                subCompetences: [
                  'können eigene Produktideen aufgrund selbst entwickelter Kriterien formulieren und experimentell entwickeln. Dabei berücksichtigen sie Funktion, Konstruktion, Gestaltungselemente, Verfahren, Material.',
                ],
              },
              {
                _id: 's0t1st0c2',
                name: '3. Die Schülerinnen und Schüler können gestalterische und technische Produkte planen und herstellen.',
                subCompetences: [
                  'können unter Berücksichtigung formaler, funktionaler und konstruktiver Bedingungen Produkte planen (z.B. Konstruktionsplan, mehrteilige Schnittmuster, Schaltschema).',
                  'können das geplante Produkt herstellen.',
                ],
              },
            ],
          },
          {
            _id: 's0t1st1',
            name: 'TTG.2.B - Funktion und Konstruktion',
            competences: [
              {
                _id: 's0t1st1c0',
                name: '1. Die Schülerinnen und Schüler können Funktionen verstehen und eigene Konstruktionen in den Themenfeldern Spiel/Freizeit, Mode/Bekleidung, Bau/Wohnbereich, Mechanik/Transport und Elektrizität/Energie entwickeln.',
                subCompetences: [
                  'können Funktions- und Konstruktionsprinzipien von Spiel- und Freizeitobjekten analysieren und für eigene Umsetzungen nutzen (z.B. Sportgerät, Skaterrampe, Flipperkasten).',
                  'können den Schritt von zweidimensionalen Schnittmustern zu dreidimensionalen Kleidungsstücken oder Accessoires nachvollziehen und unter Anleitung ausführen.',
                  'können einfache textile Konstruktionen ableiten und komplexere Konstruktionen verstehen und unter Anleitung ausführen (Schnittmuster).',
                  'können Trends und Formen von Kleidungsstücken und Accessoires erkennen und für eigene Produkte nutzen.',
                  'können geeignete textile Konstruktionen auswählen und auf individuelle Vorhaben anpassen.',
                  'können eigene Bedürfnisse zu Einrichtungsgegenständen formulieren und ihre Ideen mit einfachen Konstruktionen selbstständig umsetzen.',
                  'kennen funktionale und konstruktive Elemente des Bauens und der Raumgestaltung (z.B. Wärmedämmung, Skelett- oder Fachwerkbau, Raumteiler, Lichtobjekt).',
                  'können ausgehend von einer Analyse der Raumsituation, von Farbe und Material eigene Bedürfnisse für Produkte im Wohnbereich formulieren und umsetzen.',
                  'kennen Materialien, funktionale und konstruktive Elemente des Bauens und der Raumgestaltung und können diese anwenden (z.B. Sitzbank, Hausmodelle).',
                  'kennen die Funktion und Konstruktion von Antrieben und können diese anwenden (Elektromotor).',
                  'setzen sich mit mechanisch- technischen Grundlagen auseinander und können diese anwenden (Kraftübertragung mit Getriebe).',
                  'kennen Maschinen und Transportmittel und können Funktionsmodelle bauen.',
                  'kennen ausgewählte mechanisch-technische Gesetzmässigkeiten und können diese in Produkten anwenden (z.B. Steuerung, Übersetzung, Bewegungsübertragung).',
                  'kennen Energiespeicher und Energiewandler und können damit Produkte entwickeln (Batterie oder Akku, Solarzelle oder Generator).',
                  'kennen Eigenschaften von schwachstrombetriebenen Geräten und können diese anwenden (z.B. Steuerung, Robotik, Leuchte mit Leuchtdioden, Thermobiegegerät).',
                  'kennen Formen der Energiebereitstellung (z.B. Photovoltaik, Wind-, Wasser-, Wärmekraftwerk) und können Elemente davon in ihre Produkte integrieren.',
                ],
              },
            ],
          },
          {
            _id: 's0t1st2',
            name: 'TTG.2.C - Gestaltungselemente',
            competences: [
              {
                _id: 's0t1st2c0',
                name: '1. Die Schülerinnen und Schüler können die Gestaltungselemente Material, Oberfläche, Form und Farbe bewusst einsetzen.',
                subCompetences: [
                  'können Wirkungen von Materialien und Oberflächen beurteilen und gezielt in der eigenen Produktgestaltung einsetzen.',
                  'können Formen und Motive entwerfen und auf der Fläche bewusst anordnen (z.B. Logo, Ornamentik).',
                  'können dreidimensionale Formen gezielt einsetzen (z.B. Gesamtform, Teilform).',
                  'können Farbkombinationen entwickeln und die Farbwirkung gezielt einsetzen (z.B. Sättigungskontrast, Farbtypanalyse).',
                ],
              },
            ],
          },
          {
            _id: 's0t1st3',
            name: 'TTG.2.D - Verfahren',
            competences: [
              {
                _id: 's0t1st3c0',
                name: '1. Die Schülerinnen und Schüler können handwerkliche Verfahren ausführen und bewusst einsetzen.',
                subCompetences: [
                  'können die Verfahren zunehmend selbstständig und gezielt einsetzen und anwenden: \r\n- schneiden (z.B. Bleche, Gewinde, Blachenstoffe, doppelte Stofflagen, Webpelz);\r\n- sägen, bohren (Massivholz, Metallhalbzeuge, Acrylglas).',
                  'können die Verfahren zunehmend selbstständig und gezielt einsetzen und anwenden: \r\n- schleifen, polieren (z.B. Kunststoff);\r\n- biegen (Bleche, Acrylglas), tiefziehen (Kunststoffe);\r\n- modellieren, giessen (z.B. Wachs, Gips, Ton).',
                  'können die Verfahren zunehmend selbstständig und gezielt einsetzen und anwenden: \r\n- nähen (innovative textile Materialien, Maschenstoffe);\r\n- kleben (Acrylglas, textile Kunststoffe, Vliese);\r\n- hartlöten oder schweissen (z.B. schweissen mit Schutzgas, Kunststofffolie).',
                  'können die Verfahren zunehmend selbstständig und gezielt einsetzen und anwenden: \r\n- stricken (z.B. Rundstricken, Formen stricken) oder häkeln (z.B. Formen häkeln).',
                  'können die Verfahren zunehmend selbstständig und gezielt einsetzen und anwenden:\r\n- sticken (z.B. Nähmaschine, Stickcomputer), applizieren, schichten, ausschneiden (z.B. Quilt);\r\n- drucken (z.B. Transferdruck, Siebdruck).',
                ],
              },
            ],
          },
          {
            _id: 's0t1st4',
            name: 'TTG.2.E - Material, Werkzeuge und Maschinen',
            competences: [
              {
                _id: 's0t1st4c0',
                name: '1. Die Schülerinnen und Schüler kennen Materialien, Werkzeuge und Maschinen und können diese sachgerecht einsetzen.',
                subCompetences: [
                  'kennen die Eigenschaften von Materialien und können diese sachgerecht anwenden (Massivholz, Acrylglas, Metallhalbzeuge, Vlies, Blache, Gewebe, Maschenstoffe).',
                  'können Werkzeuge und Maschinen verantwortungsbewusst einsetzen und sachgerecht anwenden (z.B. Overlockmaschine, Stickcomputer, Tellerschleifmaschine, Stich- und Bandsäge, Lamellen-Dübelfräse).',
                  'können für die Bearbeitung von Materialien Werkzeuge und Maschinen selbstständig wählen und damit sachgerecht umgehen.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's0t2',
        name: 'TTG.3 - Kontexte und Orientierung',
        subTopics: [
          {
            _id: 's0t2st0',
            name: 'TTG.3.A - Kultur und Geschichte',
            competences: [
              {
                _id: 's0t2st0c0',
                name: '1. Die Schülerinnen und Schüler können Objekte als Ausdruck verschiedener Kulturen und Zeiten erkennen und deren Symbolgehalt deuten (aus den Themenfeldern Spiel/Freizeit, Mode/Kleidung, Bau/Wohnbereich, Mechanik/Transport, Energie/Elektrizität).',
                subCompetences: [
                  'können eine Recherche zu kulturellen oder historischen Aspekten durchführen und deren Ergebnisse präsentieren (z.B. Kleidung, Mode, Freizeit, Maschine, Energiebereitstellung).',
                  'können den symbolischen Gehalt von Objekten aus Design und Technik erkennen und deren Wirkung im Alltag deuten (z.B. Jugendkultur, Markenemblem, Logo).',
                ],
              },
              {
                _id: 's0t2st0c1',
                name: '2. Die Schülerinnen und Schüler können technische und handwerkliche Entwicklungen verstehen und ihre Bedeutung für den Alltag einschätzen.',
                subCompetences: [
                  'können Erfindungen und deren Folgen verstehen und bewerten (z.B. synthetische Materialien, Bionik, Energiebereitstellung, Robotik).',
                  'können Entwicklungen und Innovationen aus Design und Technik in ihrer Vernetzung analysieren und deren Folgen für den Alltag einschätzen (z.B. Stickcomputer, CNC- Maschine, 3D-Drucker).',
                ],
              },
            ],
          },
          {
            _id: 's0t2st1',
            name: 'TTG.3.B - Design- und Technikverständnis',
            competences: [
              {
                _id: 's0t2st1c0',
                name: '1. Die Schülerinnen und Schüler können bei Kauf und Nutzung von Produkten ökonomische, ökologische und gesellschaftliche Zusammenhänge erkennen.',
                subCompetences: [
                  'können Rohstoffgewinnung und Produktion im Sinne der Nachhaltigkeit einschätzen (Textilien, Möbel, Elektronik).',
                  'können Informationen zu ökonomischen, ökologischen und gesellschaftlichen Zusammenhängen der Rohstoffgewinnung recherchieren, um Vor- und Nachteile bei Kauf und Nutzung abzuwägen.',
                ],
              },
              {
                _id: 's0t2st1c1',
                name: '2. Die Schülerinnen und Schüler kennen die Herstellung und die sachgerechte Entsorgung von Materialien und können deren Verwendung begründen.',
                subCompetences: [
                  'können die Herstellungsprozesse und den Gebrauch von Materialien erläutern und nach Kriterien der Nachhaltigkeit bewerten (Metalle, textile Fasern).',
                  'kennen die Materialien, welche besondere Entsorgungsmassnahmen nötig machen und wissen um eine sinnvolle Weiter- oder Wiederverwertung (Altkleider, elektronische Geräte, Holzwerkstoffe).',
                ],
              },
              {
                _id: 's0t2st1c2',
                name: '3. Die Schülerinnen und Schüler können handwerkliche und industrielle Herstellung vergleichen.',
                subCompetences: [
                  'können gewerblich oder industriell gefertigte Produkte aus verschiedenen Perspektiven betrachten und bewerten (Unikat und Massenprodukt).',
                  'können den Zusammenhang von technischen Innovationen und der Veränderung in der Berufsarbeit und im Alltag verstehen und erklären (z.B. Konfektion, industrielle Produktionsstrasse).',
                ],
              },
              {
                _id: 's0t2st1c3',
                name: '4. Die Schülerinnen und Schüler können technische Geräte und Produkte aus dem Alltag in Betrieb nehmen und das entsprechende Wissen aus Gebrauchsanleitungen, Montageplänen und dem Internet aufbauen.',
                subCompetences: [
                  'können technische Geräte und Produkte aufgrund von Bedienungsanleitung und Montageplänen sicher in Betrieb nehmen (z.B. Bügeleisen, Möbelzusammenbau, Heimwerkermaschine).',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's1',
    name: 'Bildnerisches Gestalten',
    topics: [
      {
        _id: 's1t0',
        name: 'BG.1 - Wahrnehmung und Kommunikation',
        subTopics: [
          {
            _id: 's1t0st0',
            name: 'BG.1.A - Wahrnehmung und Reflexion',
            competences: [
              {
                _id: 's1t0st0c0',
                name: '1. Die Schülerinnen und Schüler können bildhaft anschauliche Vorstellungen aufbauen, weiterentwickeln und darüber diskutieren.',
                subCompetences: [
                  'können bildhaft anschauliche Vorstellungen aufgrund von Empfindungen, Fantasien und Wissen assoziativ und bewusst aufbauen, kombinieren und weiterentwickeln (z.B. unterschiedliche Atmosphären, Konstruktionen, Komposition, Storyboard).',
                  'können ihre bildhaft anschauliche Vorstellungen analysieren und darüber diskutieren.',
                ],
              },
              {
                _id: 's1t0st0c1',
                name: '2. Die Schülerinnen und Schüler können Bilder wahrnehmen, beobachten und darüber reflektieren.',
                subCompetences: [
                  'können die Subjektivität und Vielschichtigkeit von visuellen, taktilen, auditiven und kinästhetischen Wahrnehmungen analysieren und mit anderen vergleichend reflektieren.',
                  'können ihre Beobachtungen zu Raum-, Farb- und Bewegungsphänomenen beschreiben (z.B. Nähe-Distanz, Licht-Schatten, optische Farbmischungen, Bildfolge).',
                  'können Lebewesen, Situationen, Gegenstände und Bilder aus verschiedenen Perspektiven und in unterschiedlichen Kontexten beobachten.',
                  'können ihr Vorwissen mit der Beobachtung vergleichen und ihren Blick schärfen.',
                  'können ihre Empfindungen und Erkenntnisse beschreiben und vergleichen.',
                  'können ihre Beobachtungen zu Raum-, Farb- und Bewegungsphänomenen beschreiben (z.B. optische Täuschungen, Anamorphose, Fluchtpunkt, farbige Nachbilder, Wundertrommel, Animation).',
                ],
              },
              {
                _id: 's1t0st0c2',
                name: '3. Die Schülerinnen und Schüler können ästhetische Urteile bilden und begründen.',
                subCompetences: [
                  'können ein persönliches ästhetisches Urteil an Kriterien festmachen, eine eigene Meinung entwickeln und diese mit anderen Standpunkten vergleichen.',
                  'können Eigenschaften und Qualitätsmerkmale von Bildern analysieren, einordnen und beurteilen (z.B. Bildwirkung, inhaltliche und formale Umsetzung).',
                ],
              },
            ],
          },
          {
            _id: 's1t0st1',
            name: 'BG.1.B - Präsentation und Dokumentation',
            competences: [
              {
                _id: 's1t0st1c0',
                name: '1. Die Schülerinnen und Schüler können bildnerische Prozesse und Produkte dokumentieren, präsentieren und darüber kommunizieren.',
                subCompetences: [
                  'können Phasen ihres Prozesses in Bild und Wort dokumentieren (z.B. Portfolio, Lernjournal).',
                  'können ihre Prozesse aufzeigen und ihre Produkte präsentieren (z.B. installieren, in Szene setzen, digital aufbereiten).',
                  'können mit Fachbegriffen ihre Prozesse und Produkte kommentieren und diskutieren.',
                  'können die subjektive Bedeutung ihrer Bilder aufzeigen und zur Diskussion stellen.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's1t1',
        name: 'BG.2 - Prozesse und Produkte',
        subTopics: [
          {
            _id: 's1t1st0',
            name: 'BG.2.A - Bildnerischer Prozess',
            competences: [
              {
                _id: 's1t1st0c0',
                name: '1. Die Schülerinnen und Schüler können eigenständige Bildideen zu unterschiedlichen Situationen und Themen alleine oder in Gruppen entwickeln.',
                subCompetences: [
                  'können eigene Bildideen und Fragestellungen aus ihrem Interessensbereich und gesellschaftlichen Umfeld entwickeln (z.B. Werbung, Selbstdarstellung, Schönheit, Lifestyle, virtuelle Welten, Streetart).',
                ],
              },
              {
                _id: 's1t1st0c1',
                name: '2. Die Schülerinnen und Schüler können eigenständig bildnerische Prozesse alleine oder in Gruppen realisieren und ihre Bildsprache erweitern.',
                subCompetences: [
                  'können in Spiel und Experiment auf Unerwartetes reagieren, ihre Aufmerksamkeit für Details schärfen und ihre Bildsprache erweitern.',
                  'können Materialien, Dinge und Bilder aus eigenen und fremden Kontexten kriteriengeleitet sammeln und ordnen sowie damit experimentieren.',
                  'können Sammlungen und Experimente als Inspirationsquellen für ihren weiteren bildnerischen Prozess nutzen.',
                  'können in Spiel und Experiment Unbekanntes zulassen, Besonderheiten und Zusammenhänge entdecken und ihre Bildsprache differenzieren.',
                  'können die Bildidee und -wirkung ihrer Bilder nach eigenen oder vorgegebenen Kriterien begutachten und daraus Impulse für das Verdichten oder Weiterentwickeln gewinnen.',
                ],
              },
            ],
          },
          {
            _id: 's1t1st1',
            name: 'BG.2.B - Bildnerische Grundelemente',
            competences: [
              {
                _id: 's1t1st1c0',
                name: '1. Die Schülerinnen und Schüler können die Wirkung bildnerischer Grundelemente untersuchen und für ihre Bildidee nutzen.',
                subCompetences: [
                  'können Anordnungen von Punkten und Linien gezielt für eine lineare, flächige und räumliche Wirkung einsetzen.',
                  'können durch Figur-Grund-Beziehung, Grössenveränderung, Reduktion und Abstraktion Formen entwickeln und gezielt einsetzen.',
                  'können Farben nach Helligkeit, Farbton und Sättigung nuanciert mischen und gezielt einsetzen.',
                  'können Farbverläufe und Farbbeziehungen entdecken, aufeinander abstimmen und einsetzen.',
                  'können Erscheinungsfarben mischen und bewusst einsetzen.',
                  'können Raum in Natur, Architektur und öffentlichem Raum untersuchen und dreidimensional gestalten.',
                  'können Raum durch lineare Verkürzungen, Farb- und Luftperspektive in der Fläche darstellen.',
                  'können mithilfe von Strukturen eine differenzierte Oberflächenwirkung im Bild und am Objekt erzeugen und gezielt einsetzen (z.B. glänzend, schuppig, gerillt, zerknittert).',
                  'können durch Lichtzeichnen mit ihrem Körper Bewegungsspuren erforschen und einsetzen.',
                  'können die Darstellung von Bewegung durch Schärfe-Unschärfe, Zeitraffer und Zeitlupe erproben und darstellen.',
                ],
              },
            ],
          },
          {
            _id: 's1t1st2',
            name: 'BG.2.C - Bildnerische Verfahren und kunstorientierte Methoden',
            competences: [
              {
                _id: 's1t1st2c0',
                name: '1. Die Schülerinnen und Schüler können die Wirkung bildnerischer Verfahren untersuchen und für ihre Bildidee nutzen.',
                subCompetences: [
                  'können schraffieren und gezielt deckend malen.',
                  'können regelmässig und unregelmässig schraffieren sowie lasierend und pastos malen.',
                  'können parallel, kreuz und quer schraffieren und ihren Duktus zeichnerisch und malerisch variieren (z.B. Pinselführung, Druckstärke, Geste).',
                  'können Monotypie, Rolldruck und Zweifarbendruck erproben und einsetzen.',
                  'kennen unterschiedliche Druckverfahren und deren Eigenheiten (z.B. spiegelverkehrt, verlorene Platte, Seriendruck, Reproduktion) und können diese gezielt einsetzen.',
                  'können Prägedruck, Siebdruck und Linoldruck erproben und gezielt einsetzen.',
                  'können die Collage und digitale Montage erproben und einsetzen (z.B. Bild im Bild- Bezug, Bildpaare).',
                  'können Collage und Montage als Handlungs- und Denkweise gezielt einsetzen (z.B. irreale oder surreale Bildkombinationen).',
                  'können durch Abformen und Nachformen modellieren (z.B. Figur und Objekt) und durch Biegen, Kleben und Schnüren bauen und konstruieren.',
                  'kennen aufbauende, abtragende und konstruktive Verfahren und können diese gezielt einsetzen (z.B. Körperbild, Raumbild).',
                  'kennen Positiv-Negativ-Formen, Hohl- und Vollplastik, Skulptur, Gussform, Raummodell und kinetische Objekte und können diese räumlich umsetzen.',
                  'können durch Performance und Aktion Raum-Körperbezüge schaffen (z.B. ungewohnte Beziehungen, Selbstinszenierung, Rauminstallation).',
                  'können Farbkontraste, Nähe und Distanz beim Fotografieren erproben und anwenden (z.B. Fotoroman, Trickfilm).',
                  'kennen bildsprachliche Mittel in Fotografie und Film (z.B. Perspektive, Tiefenschärfe, Einstellungsgrösse) und können diese erproben und gezielt einsetzen.',
                  'können Bilder und Filme digital bearbeiten (z.B. Korrekturen, Schnitt, Montage).',
                  'können eine Reportage, Dokumentation oder ein Storyboard in der Gruppe erstellen.',
                ],
              },
              {
                _id: 's1t1st2c1',
                name: '2. Die Schülerinnen und Schüler können kunstorientierte Methoden anwenden.',
                subCompetences: [
                  'können Hör-, Riech- Schmeck-, Bewegungs- oder Tasterfahrungen bildnerisch darstellen (z.B. Rhythmus zeichnen).',
                  'können durch Abstrahieren, Reduzieren, Kombinieren, Variieren und Dekonstruieren Darstellungsmöglichkeiten erproben, auswählen und gezielt einsetzen.',
                  'können Hör-, Riech- Schmeck-, Bewegungs- oder Tasterfahrungen bildnerisch darstellen (z.B. Musik als Videoclip inszenieren).',
                ],
              },
            ],
          },
          {
            _id: 's1t1st3',
            name: 'BG.2.D - Materialien und Werkzeuge',
            competences: [
              {
                _id: 's1t1st3c0',
                name: '1. Die Schülerinnen und Schüler können Eigenschaften und Wirkungen von Materialien und Werkzeugen erproben und im bildnerischen Prozess einsetzen.',
                subCompetences: [
                  'können Tusche, Graphit, Farbpigmente und Bindemittel erproben und einsetzen.',
                  'können Bildträger erproben und auswählen (z.B. Postkarte, Post-it, Recyclingmaterial, Schulareal).',
                  'können Acrylfarbe erproben und einsetzen.',
                  'können Packpapier, Verpackungsmaterial und Druckerzeugnisse als Bildträger erproben und nutzen.',
                  'können Materialien zeichnerisch und malerisch erproben und einsetzen (z.B. Rötel, Sprayfarbe, Ölfarbe, Aquarellfarbe).',
                  'können Bildträger gezielt einsetzen und variieren.',
                  'können Kernseife, Gips, Panzerkarton, Metall- und Plastikfolie als dreidimensionales Material erproben und einsetzen.',
                  'können die Wirkung plastischer Materialien erproben und für eine differenzierte räumliche Darstellung einsetzen.',
                  'können Materialien plastisch erproben und für eine räumliche Darstellung einsetzen (z.B. Porenbeton, Wachs, Offsetplatte).',
                  'kennen die Anwendungsmöglichkeit und Wirkung von Werkzeugen und können diese sachgerecht einsetzen (z.B. Modellier-, Schnittwerkzeug).',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's1t2',
        name: 'BG.3 - Kontexte und Orientierung',
        subTopics: [
          {
            _id: 's1t2st0',
            name: 'BG.3.A - Kultur und Geschichte',
            competences: [
              {
                _id: 's1t2st0c0',
                name: '1. Die Schülerinnen und Schüler können Kunstwerke aus verschiedenen Kulturen und Zeiten sowie Bilder aus dem Alltag lesen, einordnen und vergleichen.',
                subCompetences: [
                  'können Bildsprache und Stilmittel in Kunstwerken aus verschiedenen Kulturen und Zeiten sowie in Bildern aus dem Alltag beschreiben und analysieren.',
                  'kennen verschiedene Kunstwerke aus unterschiedlichen Kulturen und Zeiten und können deren kulturelle Bedeutung einordnen.',
                  'können Kunsterfahrungen beschreiben und diskutieren (z.B. in Begegnungen mit Kunstschaffenden und originalen Kunstwerken).',
                  'können Abbild, Fiktion und Abstraktion in Kunstwerken mit eigenen Bildern vergleichen und Unterschiede sowie Gemeinsamkeiten aufzeigen.',
                ],
              },
            ],
          },
          {
            _id: 's1t2st1',
            name: 'BG.3.B - Kunst- und Bildverständnis',
            competences: [
              {
                _id: 's1t2st1c0',
                name: '1. Die Schülerinnen und Schüler können Wirkung und Funktion von Kunstwerken und Bildern erkennen.',
                subCompetences: [
                  'können Kunstwerke und Bilder in Bezug auf Darstellungsabsicht und Bildwirkung analysieren (z.B. Stilepochen, Trends, Schönheitsideale).',
                  'kennen Möglichkeiten der Manipulation von Bildern in analogen und digitalen Bildwelten.',
                  'erkennen, dass Kunstwerke und Bilder irritieren, manipulieren, dekorieren, illustrieren, klären und unterhalten können (z.B. Propaganda, Schaubild, Zierbild, Schema).',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's2',
    name: 'Berufliche Orientierung',
    topics: [
      {
        _id: 's2t0',
        name: 'BO.1  - Persönlichkeitsprofil',
        competences: [
          {
            _id: 's2t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können ihr Persönlichkeitsprofil beschreiben und nutzen.',
            subCompetences: [
              'können Elemente ihres Persönlichkeitsprofils wahrnehmen und beschreiben (Fähigkeiten, Voraussetzungen, Interessen, Einstellungen, Werte).',
              'können das Selbstbild mit dem Fremdbild respektive der Aussensicht vergleichen und festhalten.',
              'können aus ihrem Selbst- und Fremdbild Schlüsse für ihre Bildungs- und Berufswahl ziehen.',
            ],
          },
        ],
      },
      {
        _id: 's2t1',
        name: 'BO.2  - Bildungswege, Berufs- und Arbeitswelt',
        competences: [
          {
            _id: 's2t1st-1c0',
            name: '1. Die Schülerinnen und Schüler können sich mit Hilfe von Informations- und Beratungsquellen einen Überblick über das schweizerische Bildungssystem verschaffen.',
            subCompetences: [
              'können die Grundzüge der schweizerischen Aus- und Weiterbildung sowie seine Durchlässigkeit anhand einer einfachen Grafik erklären.',
              'können sich selbstständig Informationen zu mindestens drei ausgewählten Berufen bzw. Ausbildungswegen in verschiedenen Berufsfeldern beschaffen (z.B. im Berufsinformationszentrum (BIZ), im Internet, an Berufsmessen, an Informationsveranstaltungen).',
              'können Anforderungen und Tätigkeiten anhand von mindestens zwei ausgewählten Berufs- bzw. Ausbildungswegen aufzeigen und gegenüberstellen.',
              'können in ihre Überlegungen und Abklärungen auch Anforderungen und Tätigkeiten von geschlechtsuntypischen Ausbildungen und Berufen mit einbeziehen.',
            ],
          },
          {
            _id: 's2t1st-1c1',
            name: '2. Die Schülerinnen und Schüler können einen persönlichen Bezug zur Arbeitswelt herstellen und Schlüsse für ihre Bildungs- und Berufswahl ziehen.',
            subCompetences: [
              'können Berufe aus ihrem familiären und weiteren Umfeld in Bezug zu ihrem aktuellen Bildungs- und Berufswunsch setzen.',
              'können eigene biografische Prägungen und Erwartungen ihres Umfeldes zum Beruf reflektieren und geschlechtsspezifische, soziale und kulturelle Stereotypen hinterfragen und dazu eine eigenständige Position vertreten.',
              'können Konsequenzen für die eigene Bildungs- und Berufswahl ziehen.',
            ],
          },
        ],
      },
      {
        _id: 's2t2',
        name: 'BO.3  - Entscheidung und Umgang mit Schwierigkeiten',
        competences: [
          {
            _id: 's2t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können Prioritäten setzen, sich entscheiden und zugleich gegenüber Alternativen offen bleiben.',
            subCompetences: [
              'können verschiedene Methoden der Entscheidungsfindung an einfachen Alltagssituationen anwenden (z.B. Entscheidungsbaum, Pro/Contra, Gefühl/Vernunft).',
              'können aus dem Vergleich von Persönlichkeitsprofil und Überblick über Bildungswege, Berufs- und Arbeitswelt ihren Standort bestimmen und erste passende Ausbildungsziele festlegen.',
              'können nach vorgegebenen Kriterien mindestens drei mögliche Berufe auswählen, die Auswahl begründen, gewichten und konsequent weiterverfolgen.',
              'können sich für eine Ausbildung oder einen Beruf entscheiden und zugleich gegenüber Alternativen offen bleiben (z.B. verwandte Berufe, eine andere Ausbildung, Übergangslösung).',
            ],
          },
          {
            _id: 's2t2st-1c1',
            name: '2. Die Schülerinnen und Schüler können mögliche Herausforderungen im Bildungs- und Berufswahlprozess erkennen, Frustrationen benennen, eigene Ressourcen miteinbeziehen und Lösungsmöglichkeiten entwickeln.',
            subCompetences: [
              'können Schwierigkeiten, belastende Gefühle und Gründe für Frustration im Bildungs- und Berufswahlprozess benennen, sich damit auseinandersetzen und sich ihrer Ressourcen bewusst bleiben (z.B. Fähigkeiten, Unterstützung im Umfeld).',
              'können mit Erziehungsberechtigten und/oder Fachpersonen Schwierigkeiten im Bildungs- und Berufswahlprozess analysieren (z.B. persönliche Voraussetzungen, Wirtschaftslage, Arbeitsmarkt).',
              'können bei Schwierigkeiten ressourcenorientiert Lösungen entwickeln (z.B. alleine, mit Erziehungsberechtigten und/oder Fachpersonen).',
            ],
          },
        ],
      },
      {
        _id: 's2t3',
        name: 'BO.4  - Planung, Umsetzung und Dokumentation',
        competences: [
          {
            _id: 's2t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können im Rahmen des Bildungs- und Berufswahlentscheids Ziele setzen, den konkreten Bewerbungsprozess planen und nach Bedarf neue Ziele setzen sowie Alternativen planen.',
            subCompetences: [
              'können bei einfachen (Lern-)Vorhaben im Bildungs- und Berufswahlprozess Ziele setzen und Planungsschritte festlegen.',
              'können in ihrem Bildungs- bzw. Berufswahlentscheid den konkreten Bewerbungsprozess planen (z.B. Aufnahmeprüfungen, Tests, Anmeldeverfahren).',
              'können nach Bedarf neue Ziele setzen und Alternativen planen (z.B. Brückenangebote, weitere Anschlusslösungen).',
            ],
          },
          {
            _id: 's2t3st-1c1',
            name: '2. Die Schülerinnen und Schüler können ihre geplanten Schritte im Hinblick auf ihre Ausbildungsziele umsetzen und den Übergang vorbereiten.',
            subCompetences: [
              'können selbstständige Einblicke in Berufe und Ausbildungen vorbereiten und organisieren respektive sich Unterstützung holen (z.B. Schnupperlehren).',
              'können Ergebnisse aus den praktischen Erfahrungen und Rückmeldungen der Berufsbildenden reflektieren und Konsequenzen ziehen.',
              'können den Übergang planen und sich spezifisch auf die neuen Anforderungen der Lehre, der weiterführenden Schule oder der Anschlusslösung vorbereiten respektive weitere Alternativen suchen.',
            ],
          },
          {
            _id: 's2t3st-1c2',
            name: '3. Die Schülerinnen und Schüler können ihren Berufswahlprozess nachvollziehbar dokumentieren und daraus ihre Bewerbungsunterlagen zusammenstellen.',
            subCompetences: [
              'können ihre spezifischen Ressourcen dokumentieren (Fähigkeiten, Erfahrungen, Aktivitäten in Schule und Freizeit, Sprachkenntnisse).',
              'können wichtige Informationen und Erfahrungen aus der Praxis sammeln und dokumentieren (Berufsinformationen, Schnupperlehrbeurteilungen).',
              'können den persönlichen Entscheidungsprozess dokumentieren und die Berufs- oder Ausbildungswahl nachvollziehbar begründen, insbesondere die eigene Motivation.',
              'können mit Hilfe der gesammelten Dokumente (z.B. Portfolio, Berufswahlordner) wichtige Informationen für ihre Bewerbungsunterlagen zusammenstellen.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's3',
    name: 'Bewegung und Sport',
    topics: [
      {
        _id: 's3t0',
        name: 'BS.1 - Laufen, Springen, Werfen',
        subTopics: [
          {
            _id: 's3t0st0',
            name: 'BS.1.A - Laufen',
            competences: [
              {
                _id: 's3t0st0c0',
                name: '1. Die Schülerinnen und Schüler können schnell, rhythmisch, über Hindernisse, lang und sich orientierend laufen. Sie kennen die leistungsbestimmenden Merkmale und wissen, wie sie ihre Laufleistungen verbessern können.',
                subCompetences: [
                  'können auf den Fussballen schnell über tiefe Hindernisse laufen.',
                  'können auf den Fussballen schnell und rhythmisch über Hindernisse laufen.',
                  'können wichtige Merkmale der Schnelllauftechnik im Hürdenlauf anwenden.',
                  'können ihr Alter in Minuten laufen und wissen, dass regelmässiges Trainieren für die Leistungssteigerung entscheidend ist.',
                  'können ihr Alter in Minuten laufen. Sie können erklären, wie Ausdauer trainiert wird, und wissen, welche Prozesse im Körper ablaufen.',
                  'können verschiedene Ausdauertrainingsmethoden erklären, ausführen und ihre Leistungsentwicklung begründen.',
                  'können im Gelände oder im Wald eine Route mit einer Karte ablaufen.',
                  'können erklären, worauf sie beim Orientieren mit der Karte achten und wenden dies im Orientierungslauf an.',
                ],
              },
            ],
          },
          {
            _id: 's3t0st1',
            name: 'BS.1.B - Springen',
            competences: [
              {
                _id: 's3t0st1c0',
                name: '1. Die Schülerinnen und Schüler können vielseitig weit und hoch springen. Sie kennen die leistungsbestimmenden Merkmale und können ihre Leistung realistisch einschätzen.',
                subCompetences: [
                  'können verschiedene Hüpf- und Sprungfolgen ohne und mit Material kombinieren (z.B. Spring- und Schwungseil).',
                  'können Sprünge und Tricks den Mitschülerinnen und Mitschülern weitergeben.',
                  'können die Anlaufgeschwindigkeit in einen weiten Sprung umsetzen.',
                  'können wichtige Merkmale der Weitsprungtechnik anwenden.',
                  'können wichtige Merkmale der Weitsprungtechnik bei Mitschülerinnen und Mitschülern beobachten und rückmelden.',
                  'können den Steigerungslauf in einen hohen Sprung umsetzen.',
                  'können wichtige Merkmale einer Hochsprungtechnik (z.B. Fosbury-Flop) anwenden und die eigene Leistung realistisch einschätzen.',
                  'können wichtige Merkmale der Hochsprungtechnik bei Mitschülerinnen und Mitschülern beobachten und rückmelden.',
                ],
              },
            ],
          },
          {
            _id: 's3t0st2',
            name: 'BS.1.C - Werfen',
            competences: [
              {
                _id: 's3t0st2c0',
                name: '1. Die Schülerinnen und Schüler können Gegenstände weit werfen, stossen, schleudern und kennen die leistungsbestimmenden Merkmale.',
                subCompetences: [
                  'können einen Schleuderwurf aus dem Stand ausführen (z.B. zusammengeknotetes Seil).',
                  'können wichtige Merkmale der Wurftechnik mit 5-Schrittanlauf nennen und anwenden (z.B. Ball, Speer).',
                  'können einen Gegenstand aus einer Drehung schleudern (z.B. Velopneu).',
                  'können wichtige Merkmale des Werfens und Schleuderns bei Mitschülerinnen und Mitschülern beobachten und rückmelden.',
                  'können wichtige Merkmale des Speerwerfens oder des Drehwerfens nennen und anwenden.',
                  'können einen Gegenstand mit einer Ganzkörperstreckung weit stossen (z.B. Medizinball).',
                  'können wichtige Merkmale der Kugelstosstechnik nennen und beim Stossen anwenden.',
                  'können eine Kugel weit stossen und wichtige Merkmale bei Mitschülerinnen und Mitschülern beobachten und rückmelden.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's3t1',
        name: 'BS.2 - Bewegen an Geräten',
        subTopics: [
          {
            _id: 's3t1st0',
            name: 'BS.2.A - Grundbewegungen an Geräten',
            competences: [
              {
                _id: 's3t1st0c0',
                name: '1. Die Schülerinnen und Schüler können Grundbewegungen wie Balancieren, Rollen-Drehen, Schaukeln-Schwingen, Springen, Stützen und Klettern verantwortungsbewusst ausführen. Sie kennen Qualitätsmerkmale und können einander helfen und sichern.',
                subCompetences: [
                  'können eine Bewegungsfolge zum Balancieren ausführen.',
                  'können auf schwierigen, anspruchsvollen Geräten balancieren (z.B. Slackline).',
                  'können eine Bewegungsfolge zum Rollen-Drehen ausführen.',
                  'können Roll- und Drehbewegungen unter erschwerten Bedingungen ausführen (z.B. Rolle vorwärts mit Minitrampolin auf den Mattentisch, Handstand abrollen).',
                  'können Roll- oder Drehbewegungen mit Flugphase kontrolliert ausführen (z.B. Salto vorwärts).',
                  'können eine Bewegungsfolge zum Schaukeln (z.B. an den Ringen) oder zum Schwingen (z.B. am Barren) ausführen.',
                  'können eine Bewegungsfolge unter erschwerten Bedingungen ausführen (z.B. synchron, zu Musik).',
                  'können eine Folge von Hindernissen ökonomisch überwinden.',
                  'können das Überwinden von Hindernissen variabel gestalten.',
                  'können Überkopf-Stützsprünge ausführen (z.B. Hochwende, Handstandüberschlag).',
                  'können in Wagnissituationen verantwortungsbewusst handeln.',
                  'können den anderen und sich selbst gegenüber verantwortungsbewusst handeln.',
                  'können Hilfsgriffe und Sicherheitsmassnahmen situationsgerecht anwenden.',
                  'können Bewegungsfolgen an Gerätekombinationen in der Gruppe gestalten und präsentieren.',
                ],
              },
            ],
          },
          {
            _id: 's3t1st1',
            name: 'BS.2.B - Beweglichkeit, Kraft und Körperspannung',
            competences: [
              {
                _id: 's3t1st1c0',
                name: '1. Die Schülerinnen und Schüler können Körperspannung aufbauen, ihren Körper stützen und die Gelenke in funktionellem Umfang bewegen. Sie wissen, wie sie Beweglichkeit und Kraft trainieren können.',
                subCompetences: [
                  'können Trainingsgrundsätze für das Verbessern der Beweglichkeit und das Steigern der Kraft erklären und anwenden.',
                  'können selbstständig Beweglichkeit und Kraft trainieren.',
                  'können den Körper in Bewegungsabläufen im richtigen Moment anspannen und entspannen.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's3t2',
        name: 'BS.3 - Darstellen und Tanzen',
        subTopics: [
          {
            _id: 's3t2st0',
            name: 'BS.3.A - Körperwahrnehmung',
            competences: [
              {
                _id: 's3t2st0c0',
                name: '1. Die Schülerinnen und Schüler können ihren Körper wahrnehmen, gezielt steuern und sich in der Bewegungsausführung korrigieren.',
                subCompetences: [
                  'können auf die Qualität der Bewegung und auf die Körperhaltung achten (Wie stehe ich? Wie fühlt sich die Bewegung an?).',
                  'können sich in der Bewegungsausführung spüren und korrigieren.',
                  'können ein Verständnis für den Zusammenhang von Steuerung und Bewegungsqualität entwickeln.',
                ],
              },
            ],
          },
          {
            _id: 's3t2st1',
            name: 'BS.3.B - Darstellen und Gestalten',
            competences: [
              {
                _id: 's3t2st1c0',
                name: '1. Die Schülerinnen und Schüler können sich mit dem Körper und mit Materialien ausdrücken, eine Bewegungsfolge choreografieren und präsentieren.',
                subCompetences: [
                  'können eine Bewegungsfolge nach den Kriterien Raum, Zeit und Energie variieren und gestalten.',
                  'können eine Bewegungsfolge choreografieren und präsentieren.',
                  'können eine Folge von Bewegungskunststücken ausführen (mit drei Bällen jonglieren).',
                  'können eine Folge von Bewegungskunststücken choreografieren und präsentieren (z.B. mit Musik).',
                  'können Bewegungskunststücke vermitteln.',
                ],
              },
            ],
          },
          {
            _id: 's3t2st2',
            name: 'BS.3.C - Tanzen',
            competences: [
              {
                _id: 's3t2st2c0',
                name: '1. Die Schülerinnen und Schüler können Bewegungsmuster erkennen, Bewegungsfolgen und Tänze zu Musik rhythmisch gestalten und wiedergeben. Sie gehen respektvoll miteinander um.',
                subCompetences: [
                  'können verschiedene Taktarten und Musikstile rhythmisch interpretieren.',
                  'können die Struktur der Musik erkennen und dazu eine eigene Bewegungsfolge erarbeiten.',
                  "können Bewegungsmuster aus verschiedenen Tanzstilen erkennen und tanzen (z.B. Streetdance, Rock'n'Roll, Standardtänze).",
                  'können sich Tanzchoreographien einprägen und präsentieren.',
                  'können den Körper als Ausdrucks-, Darstellungs- und Kommunikationsmittel einsetzen (z.B. Improvisationstanz).',
                  'können in Gestaltungsprozessen respektvoll miteinander umgehen.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's3t3',
        name: 'BS.4 - Spielen',
        subTopics: [
          {
            _id: 's3t3st0',
            name: 'BS.4.A - Bewegungsspiele',
            competences: [
              {
                _id: 's3t3st0c0',
                name: '1. Die Schülerinnen und Schüler können Spiele spielen, weiterentwickeln und erfinden, indem sie gemeinsam Vereinbarungen treffen und einhalten.',
                subCompetences: [
                  'können faires Verhalten und Regelübertretungen bei sich und anderen erkennen und signalisieren.',
                  'können Spiele weiterentwickeln, erfinden (z.B. Spielidee, Regeln, Material), selbstständig und fair spielen.',
                  'können Konflikte im Spiel konstruktiv bearbeiten und bewältigen.',
                ],
              },
            ],
          },
          {
            _id: 's3t3st1',
            name: 'BS.4.B - Sportspiele',
            competences: [
              {
                _id: 's3t3st1c0',
                name: '1. Die Schülerinnen und Schüler können technische und taktische Handlungsmuster in verschiedenen Sportspielen anwenden. Sie kennen die Regeln, können selbstständig und fair spielen und Emotionen reflektieren.',
                subCompetences: [
                  'können in vereinfachten Sportspielen (z.B. bzgl. Regeln, Team- und Feldgrösse) den Ball oder das Spielobjekt annehmen und abspielen.',
                  'können in Sportspielen den Ball oder das Spielobjekt situationsgerecht annehmen und abspielen (z.B. Basketball, Handball, Fussball, Unihockey, Volleyball, Badminton, Ultimate).',
                  'können den Ball oder das Spielobjekt in Sportspielen kontrolliert führen.',
                  'können den Ball oder das Spielobjekt dribbeln und dabei Täuschungen einsetzen.',
                  'können trotz gegnerischer Beeinflussung ein Ziel treffen.',
                  'können sich in der Abwehr richtig positionieren (z.B. Personendeckung) und den freien Raum verteidigen.',
                  'können taktische Handlungsmuster in Sportspielen anwenden (z.B. Doppelpass, 2 gegen 1, sich sinnvoll positionieren).',
                  'können Spielsituationen analysieren und Lösungen finden.',
                  'können wichtige Regeln der Sportspiele erklären, selbstständig und fair spielen.',
                  'können Konflikte im Spiel bearbeiten und bewältigen.',
                  'können Emotionen kontrollieren (z.B. Schiedsrichterentscheide akzeptieren).',
                  'können Emotionen selbstständig reflektieren (z.B. Umgang mit Aggressivität).',
                  'können bewusst mit Emotionen umgehen.',
                ],
              },
            ],
          },
          {
            _id: 's3t3st2',
            name: 'BS.4.C - Kampfspiele',
            competences: [
              {
                _id: 's3t3st2c0',
                name: '1. Die Schülerinnen und Schüler können gewandt und mit Strategie fair kämpfen.',
                subCompetences: [
                  'können rund und rückwärts abrollen, um Verletzungen zu vermeiden.',
                  'können Kraft und Strategie im Kampfspiel gezielt einsetzen (z.B. offensiv: das Gegenüber in Bedrängnis bringen; defensiv: sich dem Gegenüber entziehen).',
                  'können gefährliche Aktionen nennen und verzichten auf deren Anwendung (z.B. Hebelgriffe, Würgen).',
                  'können ohne Schiedsrichter fair kämpfen, ohne das Gegenüber zu verletzen.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's3t4',
        name: 'BS.5 - Gleiten, Rollen, Fahren',
        subTopics: [
          {
            _id: 's3t4st0',
            name: 'no_sub_topic',
            competences: [
              {
                _id: 's3t4st0c0',
                name: '1. Die Schülerinnen und Schüler können verantwortungsbewusst auf verschiedenen Unterlagen gleiten, rollen und fahren.',
                subCompetences: [
                  'können sich auf einem Rollgerät situationsangepasst fortbewegen (z.B. Inlineskates, Skateboard, Fahrrad).',
                  'können Kernbewegungen (Drehen, Beugen/Strecken, Kippen/Knicken) auf gleitenden Geräten ausführen.',
                  'können Kernbewegungen (Drehen, Beugen/Strecken, Kippen/Knicken) auf gleitenden Geräten variieren (z.B. rückwärts fahren).',
                  'können Gefahrensituationen beurteilen und angepasst handeln.',
                  'können Strategien anwenden, um Gefahrensituationen zu vermeiden und wissen, wie sie im Notfall handeln.',
                  'können der Natur, den anderen und sich selbst gegenüber verantwortungsbewusst handeln.',
                ],
              },
            ],
          },
        ],
      },
      {
        _id: 's3t5',
        name: 'BS.6 - Bewegen im Wasser',
        subTopics: [
          {
            _id: 's3t5st0',
            name: 'BS.6.A - Schwimmen',
            competences: [
              {
                _id: 's3t5st0c0',
                name: '1. Die Schülerinnen und Schüler können sicher schwimmen. Sie kennen technische Merkmale verschiedener Schwimmtechniken und wenden sie an.',
                subCompetences: [
                  'können die Kernbewegungen beim Brustgleichschlag anwenden.',
                  'können wichtige Merkmale je einer Wechselschlag- und Gleichschlagtechnik nennen und auf einer Strecke von 50m anwenden.',
                  'können in frei gewählter Technik 100m schwimmen.',
                  'können eine lange Strecke in freier Technik schwimmen (z.B. Schwimme dein Alter in Minuten).',
                  'können wichtige Merkmale verschiedener Schwimmtechniken nennen und anwenden.',
                  'können Techniken aus anderen Schwimmsportarten anwenden (z.B. Synchronschwimmen, Wasserball).',
                ],
              },
            ],
          },
          {
            _id: 's3t5st1',
            name: 'BS.6.B - Ins Wasser springen und Tauchen',
            competences: [
              {
                _id: 's3t5st1c0',
                name: '1. Die Schülerinnen und Schüler können fuss- und kopfwärts ins Wasser springen und tauchen.',
                subCompetences: [
                  'können eine kurze Strecke mit wenigen Zügen tauchen.',
                  'können kopfwärts ins tiefe Wasser springen und tiefer als die Körpergrösse abtauchen.',
                  'können verschiedene Sprünge aus unterschiedlicher Höhe ausführen.',
                  'können beim Tauchen in die Tiefe den Druckausgleich anwenden.',
                ],
              },
            ],
          },
          {
            _id: 's3t5st2',
            name: 'BS.6.C - Sicherheit im Wasser',
            competences: [
              {
                _id: 's3t5st2c0',
                name: '1. Die Schülerinnen und Schüler können eine Situation im, am und auf dem Wasser bezüglich Sicherheit einschätzen und in Gefahrensituationen verantwortungsbewusst handeln.',
                subCompetences: [
                  'können in Gefahrensituationen verantwortungsbewusst handeln.',
                  'können andere auf das Einhalten von Bade- und Tauchregeln aufmerksam machen.',
                  'können sich selbst und anderen gegenüber verantwortungsbewusst handeln.',
                  'können Ertrinkungsursachen nennen.',
                  'können Notsituationen erkennen und sinnvolle Massnahmen ergreifen.',
                  'können grundlegende Techniken des Rettens (z.B. Nacken- und Nackenstirngriff) anwenden.',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's4',
    name: 'Deutsch',
    topics: [
      {
        _id: 's4t0',
        name: 'D.1 - Hören',
        competences: [
          {
            _id: 's4t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können Laute, Silben, Stimmen, Geräusche und Töne wahrnehmen, einordnen und vergleichen. Sie können ihren rezeptiven Wortschatz aktivieren, um das Gehörte angemessen schnell zu verstehen.',
            subCompetences: [
              'können unterschiedliche Sprachregister aufgrund des Wortschatzes erkennen (z.B. Fachsprachen, Jugendsprachen, Sportsprachen).',
              'können Wörter und Wendungen in unterschiedlichen Situationen verstehen, sie Sprachregistern zuordnen und so ihren rezeptiven Wortschatz differenzieren.',
            ],
          },
          {
            _id: 's4t0st-1c1',
            name: '1. Die Schülerinnen und Schüler können wichtige Informationen aus Hörtexten entnehmen.',
            subCompetences: [
              'können komplexere, mehrteilige Aufträge verstehen und ausführen.',
              'können längeren Theaterstücken, Filmen und Hörspielen folgen.',
              'können die Bedeutung von unbekannten Wörtern erfragen oder mit geeigneten Hilfsmitteln erschliessen und differenzieren damit ihren rezeptiven Wortschatz aus.',
              'können fehlende Informationen (z.B. bei einem Vortrag, Fernsehsendung) selbstständig erkennen, erfragen oder mit geeigneten Hilfsmitteln erschliessen.',
              'können ein gezieltes Hörverständnis verschiedener Hörtexte aufbauen, um das Wichtigste zusammenzufassen (z.B. Bericht, Vortrag, Theaterstück).',
            ],
          },
          {
            _id: 's4t0st-1c2',
            name: '1. Die Schülerinnen und Schüler können Gesprächen folgen und ihre Aufmerksamkeit zeigen.',
            subCompetences: [
              'können in Aushandlungs- oder Konfliktsituationen das Gesprächsverhalten der anderen einschätzen und angemessen reagieren.',
              'können in Diskussionen und Debatten das Gesprächsverhalten und die darin liegende Strategie der anderen einschätzen, um mit eigenen Beiträgen angemessen reagieren zu können.',
              'können im Gespräch gezielt nachfragen, um eine Begründung einzufordern.',
              'können sich in einem Gespräch mit unbekannten Erwachsenen (in einem Vorstellungsgespräch, Schnupperlehre) auf die Person und die Situation einstellen.',
              'können in Konfliktsituationen die eigenen und die Emotionen der anderen wahrnehmen und im Gespräch thematisieren.',
              'können verschiedene Gesprächsbeiträge so zusammenfassen, dass die wesentlichen Elemente des ganzen Gesprächs deutlicher werden.',
              'können nonverbale und paraverbale Signale im Gespräch bewusst einsetzen, um die eigene Absicht durchzusetzen.',
            ],
          },
          {
            _id: 's4t0st-1c3',
            name: '1. Die Schülerinnen und Schüler können ihr Hörverhalten und ihr Hörinteresse reflektieren.',
            subCompetences: [
              'können mithilfe von Leitfragen das eigene Verständnis und den Aussage egehalt des Gesagten beurteilen.',
              'können mithilfe von Leitfragen beschreiben, wo sie beim Zuhören Probleme hatten und wie sie ihre Hörstrategien anpassen könnten (z.B. Notizen machen).',
              'können mit Unterstützung beschreiben, was ihnen das Zuhören erleichtert (z.B. sich in Bezug auf Thema, Person, Gesprächssituation vorbereiten, nachfragen).',
              'können unter Anleitung das eigene Hör- bzw. Gesprächsverhalten reflektieren, um daraus fürs nächste Gespräch Schlussfolgerungen zu ziehen.',
              'können darüber nachdenken, wie sie einen Hörtext, Film oder Redebeitrag verstanden haben und welche Informationen für ihr Ziel besonders relevant sind.',
              'können ihr Verständnis eines Redebeitrags mit Bezug auf das Gehörte begründen.',
              'können über die unterschiedliche Aussagekraft von vorgebrachten Argumenten nachdenken.',
            ],
          },
        ],
      },
      {
        _id: 's4t1',
        name: 'D.2 - Lesen',
        competences: [
          {
            _id: 's4t1st-1c0',
            name: '1. Die Schülerinnen und Schüler verfügen über Grundfertigkeiten des Lesens. Sie können ihren rezeptiven Wortschatz aktivieren, um das Gelesene schnell zu verstehen.',
            subCompetences: [
              'verfügen über ein Lesetem   mpo, das dem Textverstehen dient.',
              'können einen geübten Text flüssig, mit angemessener Intonation und verständlich vorlesen.',
              'können Wörter und Wendungen in unterschiedlichen Texten verstehen, sie Sprachregistern zuordnen (z.B. Fachsprache) und so ihren rezeptiven Wortschatz differenzieren.',
            ],
          },
          {
            _id: 's4t1st-1c1',
            name: '1. Die Schülerinnen und Schüler können wichtige Informationen aus Sachtexten entnehmen.',
            subCompetences: [
              'könn nen unter Anleitung Informationen aus übersichtlichen Grafiken, Diagrammen und Tabellen entnehmen.',
              'können Sachtexte im Rahmen einer Recherche beschaffen (z.B. im Internet, in der Bibliothek) und die darin enthaltenen Informationen mithilfe von Leitfragen für weitere Arbeiten nutzen (z.B. Referat).',
              'können Informationen aus unterschiedlichen Sachtexten unter Anleitung verarbeiten (z.B. Stichwortliste, Mindmap, Zeitstrahl).',
              'können wesentliche Informationen aus diskontinuierlichen Sachtexten für den eigenen Wissensaufbau entnehmen, indem sie auch Zusammenhänge zwischen Text und Abbildungen herstellen (z.B. Artikel aus Internet, Anleitung).',
              'können einen übersichtlich strukturierten Text als Ganzes verstehen sowie zentrale Elemente erkennen und mit der eigenen Lebenswelt in Verbindung bringen (z.B. Artikel aus Jugendzeitschrift).',
              'können mit Unterstützung längere diskontinuierliche Sachtexte überblicken und sich im Text orientieren.',
              'können mit Unterstützung die Bedeutung von unbekannten Wörtern aus dem Kontext oder mit geeigneten Hilfsmitteln (z.B. Wörterbuch, Sachbuch, Internet) erschliessen und differenzieren damit ihren rezeptiven Wortschatz aus.',
              'können Informationen aus unterschiedlichen Sachtexten verarbeiten (z.B. Stichwortliste weiterführen, Mindmap ergänzen, Zeitstrahl bezeichnen).',
              'können das Angebot einer Bibliothek nutzen und bei Bedarf Unterstützung selbstständig anfordern (z.B. für die Berufsfindung).',
              'können sich eine eigene Meinung zu Aussagen und Wertvorstellungen aus Texten bilden und diese präsentieren.',
              'können Sachtexte aus dem Internet auf ihre Vertrauenswürdigkeit kritisch hinterfragen.',
            ],
          },
          {
            _id: 's4t1st-1c2',
            name: '1. Die Schülerinnen und Schüler können literarische Texte lesen und verstehen.',
            subCompetences: [
              'können mit U Unterstützung typische Eigenschaften wie gerecht und ungerecht und Absichten der Figuren erschliessen, auch wenn diese nicht explizit erwähnt sind.',
              'können ihr Leseinteresse beschreiben, entsprechend Bücher auswählen und selbstständig lesen.',
              'können mit Unterstützung implizite Informationen aus Geschichten verstehen, insbesondere Absichten und Eigenschaften von Figuren.',
              'können den für sie bedeutsamen Kerngedanken eines Gedichts formulieren.',
              'können ihren Wortschatz mithilfe der eigenen Lektüre differenzieren.',
              'können ihr Textverständnis zeigen, indem sie einen Text gestaltend vorlesen, sodass die Stimmung und Stimmungswechsel, die Figuren deutlich werden.',
              'können das Angebot einer Bibliothek nutzen und bei Bedarf selbstständig Unterstützung anfordern.',
              'können sich eine Meinung zu einem Text bilden und diese begründen.',
              'können Eigenschaften, Stimmungen und Absichten der Figuren erschliessen und erklären, auch wenn diese nicht explizit erwähnt sind.',
            ],
          },
          {
            _id: 's4t1st-1c3',
            name: '1. Die Schülerinnen und Schüler können ihr Leseverhalten und ihre Leseinteressen reflektieren.',
            subCompetences: [
              'können unter Anleitung beschreiben, auf welche Weise sie eine vorgegebene Lesestrategie angewendet haben und wie sie diese verbessern könnten.',
              'können mithilfe von Rückfragen beschreiben, wieso beim Textverstehen Probleme aufgetaucht sind und welche Schlüsse sie daraus ziehen.',
              'können sich darüber austauschen, welche Leseinteressen sie haben, und können ihre Lektürewahl begründen.',
              'können erläutern, warum sie welche Lesestrategie gewählt haben.',
              'können beschreiben, wo beim Textverstehen Probleme aufgetaucht sind und wie sie ihre Lesestrategien anpassen könnten.',
              'können darüber nachdenken, wie sie einen Text verstanden haben und welche Informationen für ihr Leseziel (z.B. Informationen für eine Präsentation) besonders relevant sind.',
              'können ihr Textverstehen mit Bezug auf den Text begründen und sich mit anderen über Gelesenes selbstständig austauschen.',
            ],
          },
        ],
      },
      {
        _id: 's4t2',
        name: 'D.3 - Sprechen',
        competences: [
          {
            _id: 's4t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können ihre Sprechmotorik, Artikulation, Stimmführung angemessen nutzen. Sie können ihren produktiven Wortsch  hatz und Satzmuster aktivieren, um angemessen flüssig zu sprechen.',
            subCompetences: [
              'können Standardsprache flüssig sprechen, wobei diese mundartlich und erstsprachlich gefärbt sein darf.',
              'können das Zusammenspiel von Verbbalem, Nonverbalem und Paraverbalem zielorientiert einsetzen (z.B. Vorstellungsgespräch).',
              'können ihr Sprechtempo und die Sprechweise der Situation angemessen steuern.',
              'können Wörter, Wendungen und Satzmuster in für sie neuen Situationen angemessen verwenden.',
              'können der Hochlautung nahe Standardsprache sprechen, wobei diese leicht mundartlich und erstsprachlich gefärbt sein kann.',
              'können ihr Sprechtempo und ihre Stimmführung gezielt variieren.',
            ],
          },
          {
            _id: 's4t2st-1c1',
            name: '1. Die Schülerinnen und Schüler können sich in monologischen Situationen angemessen und verständlich ausdrücken.',
            subCompetences: [
              'können mit Unterstützung Sachthemen in Büche  ern und im Internet recherchieren, auswählen, strukturieren und ihr Wissen präsentieren (z.B. Sachvortrag, Beschreibung, Bericht, Podcast).',
              'können mithilfe von Stichworten und Notizen eine Präsentation strukturieren.',
              'können sich in der Standardsprache weitgehend sicher ausdrücken, wobei einzelne erstsprachliche und mundartliche Elemente vorkommen können.',
              'können eine Geschichte adressatenorientiert (nach-)erzählen und mit der Stimme gestalten (z.B. eigenes Erlebnis, aus einem Buch, einem Film).',
              'können Arbeitsergebnisse und Sachthemen der Klasse strukturiert präsentieren und die wesentlichen Aspekte hervorheben sowie dabei Medien ziel- und adressatenorientiert nutzen.',
              'können sich in der Standardsprache gewandt und sicher ausdrücken, wobei nur selten störende Fehlleistungen auftreten.',
              'können eine Präsentation mit geeigneten sprachlichen Mitteln (z.B. rhetorische Frage, Wiederholungen, Stimme) und angemessenem Medieneinsatz gestalten.',
            ],
          },
          {
            _id: 's4t2st-1c2',
            name: '1. Die Schülerinnen und Schüler können sich aktiv an einem Dialog beteiligen',
            subCompetences: [
              'können in Konsens- und Konf fliktgesprächen ihre eigene Meinung in Mundart und Standardsprache zum Ausdruck bringen und von sich aus mit einem Argument stützen.',
              'können zu einfachen Themen und in kurzen Gesprächen die Moderation übernehmen (z.B. Gruppenarbeit eröffnen, Klassenrat).',
              'können im Gespräch auf vorhergehende Aussagen Bezug nehmen.',
              'kennen wichtige Aspekte eines Vorstellungsgesprächs (z.B. Ablauf, Auftreten, Gesprächsregeln) und können diese in einem gespielten Vorstellungsgespräch anwenden.',
              'können mithilfe von Leitfragen ein Vorstellungsgespräch so vorbereiten, dass sie sich zielorientiert ausdrücken (z.B. Betriebs-, Berufskenntnisse, eigene Interessen).',
              'können in Mundart und Standardsprache Gesprächsbeiträge und Argumente aufgreifen und ihre eigenen Argumente darauf beziehen.',
              'können sich selbstständig an Gesprächsregeln halten und nötigenfalls erweitern und modifizieren bzw. im Gespräch thematisieren (z.B. sich vor dem Reden melden, zu den anderen gerichtet sprechen).',
              'können sich in einem gespielten Vorstellungsgespräch überzeugend präsentieren und Antworten auf unerwartete Fragen finden.',
              'können ein Gespräch moderieren (vorbereiten, durchführen, auswerten).',
              'können mit ihren Beiträgen ein Gespräch aufrechterhalten und zielorientiert lenken.',
              'können sich an einem Gespräch mit unterschiedlichen Gesprächspartner/innen eigenständig und adressatengerecht beteiligen (Peers, Erwachsene, vertraut/unvertraut).',
              'können eine Diskussion selbstständig vorbereiten und leiten.',
              'können das Wichtige von Gesprächsbeiträgen zusammenfassen, um das Gespräch zu strukturieren.',
              'können in Debatten argumentieren und einen Perspektivenwechsel vollziehen.',
              'können ein Gespräch mit unbekannten Personen eröffnen.',
            ],
          },
          {
            _id: 's4t2st-1c3',
            name: '1. Die Schülerinnen und Schüler können i ihr Sprech-, Präsentations- und Gesprächsverhalten reflektieren.',
            subCompetences: [
              'können mithilfe von Leitfragen über die Gesprächsleitung einer Gruppenarbeit nachdenken und Verbesserungsvorschläge machen.',
              'können unter Anleitung darüber nachdenken, in welcher Art und Weise sie selber den Gesprächsverlauf beeinflusst haben.',
              'können mithilfe von Rückfragen beschreiben, welche Vorgehensweisen oder Sprechstrategien sie angewendet haben, um ihre Meinung zu vertreten.',
              'können mithilfe von Kriterien eine eigene Präsentation beurteilen.',
              'können über die gewählten Gesprächsformen nachdenken und über deren Angemessenheit sprechen (z.B. Mundart-Standard-Wechsel, Höflichkeit, Jugendsprache).',
              'können mithilfe von Leitfragen beschreiben, wo sie im Gespräch oder bei einer Präsentation Probleme beim Sprechen oder Erklären hatten.',
              'können mithilfe von Leitfragen über ein Gespräch, seinen Verlauf und seine Wirkung nachdenken, sich darüber austauschen und daraus Schlüsse für nächste Gespräche ziehen.',
              'können über die unterschiedliche Aussagekraft von eigenen Argumenten nachdenken.',
            ],
          },
        ],
      },
      {
        _id: 's4t3',
        name: 'D.4 - Schreiben',
        competences: [
          {
            _id: 's4t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können in einer persönlichen Handschrift leserlich und geläufig schreiben und die Tastatur geläufig nutzen. Sie entwicke eln eine ausreichende Schreibflüssigkeit, um genügend Kapazität für die höheren Schreibprozesse zu haben. Sie können ihren produktiven Wortschatz und Satzmuster aktivieren, um flüssig formulieren und schreiben zu können. ',
            subCompetences: [
              'können in einer leserlichen, geläufigen und persönlichen Handschrift schreiben.',
              'können in angemessener Schreibflüssigkeit (Handschrift) schreiben, um genügend Kapazität für die höheren Schreibprozesse zu haben (z.B. Formulieren, Erzählfaden entwickeln).',
              'können ausreichend automatisiert (Handschrift und Tastatur) schreiben, um genügend Kapazität für die höheren Schreibprozesse zu haben (z.B. Ideen finden, planen, formulieren, überarbeiten).',
              'können den entsprechenden Wortschatz (z.B. textverknüpfende Mittel) aktivieren, um Sätze und Texte angemessen zu strukturieren.',
            ],
          },
          {
            _id: 's4t3st-1c1',
            name: '1. Die Schülerinnen und Schüler   kennen vielfältige Textmuster und können sie entsprechend ihrem Schreibziel in Bezug auf Struktur, Inhalt, Sprache und Form für die eigene Textproduktion nutzen.',
            subCompetences: [
              'kennen vielfältige Textmuster (z.B. poetissche Formen, Zusammenfassung, Interview, E- Mail, Portfolio, Plakat, Wandzeitung, Präsentationsfolien), um sie für das eigene Schreiben nutzen zu können.',
              'kennen Merkmale eines Bewerbungsschreibens und eines Lebenslaufs, um sie für das eigene Schreiben von Bewerbungen nutzen zu können.',
              'kennen vielfältige Textmuster (z.B. Erzählung, Argumentation, Zeitungsbericht, Geschäftsbrief, Blog-Beitrag, Lernjournal, Flyer, Präsentationsfolien), um sie für das eigene Schreiben nutzen zu können.',
              'kennen Formulierungsmuster, die typisch für verschiedene Textsorten sind (z.B. Geschäftsbrief vs. E-Mail vs. privater Brief), um sie für das eigene Schreiben nutzen zu können.',
              'kennen alle Teile von Bewerbungsunterlagen (Lebenslauf, Bewerbungsbrief).',
            ],
          },
          {
            _id: 's4t3st-1c2',
            name: '1. Die Schülerinnen und Schüler können ein Repertoire an angemessenen Vorgehensweisen zum Ideenfinden und Plane en aufbauen und dieses im Schreibprozess zielführend einsetzen.',
            subCompetences: [
              'zeigen die Bereitschaft, auch längere Texte immer wieder mit neuen Ideen zu ergänzen und auch bei auftauchenden Problemen den Schreibprozess  entsprechend zu planen.',
              'können Zielvorstellungen entwickeln und beschreiben, welches Schreibziel sie verfolgen.',
              'können Strategien zur Ideenfindung und Planung selbstständig so einsetzen, dass sich diese gegenseitig unterstützen.',
              'können Medien für den eigenen Lernprozess beim Ideenfinden und Planen selbstständig einsetzen (z.B. Sachbuch, Zeitschrift, Tool, soziales Netzwerk).',
              'können mit Unterstützung längere Texte und grössere Schreibprojekte mit mehreren Texten planen.',
              'können an verschiedene Adressat/innen schreiben und kooperativ planen.',
              'können das eigene Repertoire an Strategien beim Planen ihrer Texte selbstständig, situationsangemessen und auf das Schreibziel ausgerichtet einsetzen.',
            ],
          },
          {
            _id: 's4t3st-1c3',
            name: '1. Die Schülerinnen und Schüler können ihre Ideen und Gedanken in eine sinnvolle und verständliche Abfolge bringen. Sie können in einen Schre eibfluss kommen und ihre Formulierungen auf ihr Schreibziel ausrichten.',
            subCompetences: [
              'können vorgegebene Wörter als Formulierungshilfen nutzen und so ihren produktiven Wortschatz erweitern.',
              'kennen angemessene Vorgehensweisen, um Schreibblockaden zu überwinden (z.B. sich bewegen, etwas trinken, kritzeln, mit jemanden reden).',
              'können ihre Gedanken und Ideen im Text in eine verständliche und sinnvolle Abfolge bringen und eine gezielte Wirkung erzeugen.',
              'können textstrukturierende Mittel (z.B. Titel, Absätze) und textverknüpfende Mittel (z.B. Pronomen, Partikel) beim Entwerfen gezielt setzen, um den Text klarer zu strukturieren.',
              'können einzelne Mittel zur Leserführung beim Entwerfen eines längeren Textes einsetzen (z.B. Überleitung, Untertitel, Wiederaufnahme).',
              'können Vorlagen zur Strukturierung und Gestaltung von Texten verwenden.',
            ],
          },
          {
            _id: 's4t3st-1c4',
            name: '1. Die Schülerinnen und Schüler können ihren Text in Bezug auf Schreibziel und Textsortenvorgaben inhaltlich überarbeiten.',
            subCompetences: [
              'können beim Besprechen ihrer Texte auch die Leserperspektive einnehmen und bei B  Bedarf zusätzliche textstrukturierende Mittel einsetzen (z.B. Titel, Absatz, Aufzählung).',
              'können im Austausch mit anderen am Computer oder auf Papier positive Aspekte erkennen sowie Unstimmigkeiten in Bezug auf ihr Schreibziel und Textsortenvorgaben feststellen und mit Hilfsmitteln Alternativen finden (z.B. Wörterbuch, Internet).',
              'können einzelne dieser Überarbeitungsprozesse selbstständig ausführen, wenn sie dabei Punkt für Punkt vorgehen.',
              'können Bewerbungsunterlagen mit Unterstützung (z.B. Lehrperson, Textbausteine) inhaltlich auf ihre Bewerbungssituation anpassen.',
              'können einzelne Überarbeitungsprozesse am Computer und auf Papier selbstständig ausführen, reflektieren und zielführende Strategien für das inhaltliche Überarbeiten finden.',
              'können in Überarbeitungsprozessen Mittel zur Leserführung gezielt einsetzen, um den Text leserfreundlicher zu gestalten (z.B. Überleitung, Wiederaufnahme).',
            ],
          },
          {
            _id: 's4t3st-1c5',
            name: '1. Die Schülerinnen und Schüler können ihren Text in Bezug auf Rechtschreibung und Grammatik überarbeiten.',
            subCompetences: [
              'können einfache Rechtschreibprobleme erke  ennen und eine passende Lösungsstrategie wählen (z.B. Stamm erkennen, Analogie suchen, Regelwissen aktivieren, nachschlagen).',
              'können am Computer Korrekturprogramme angemessen einsetzen.',
              'können im Austausch mit anderen Unkorrektheiten in Wörtern und Sätzen feststellen und korrigieren. Sie beachten dabei folgende Regeln: Grossschreibung von abgeleiteten Nomen mit häufigen Nachmorphemen (z.B. Frei-heit, Entdeck-ung).',
              'können Texte sprachformal überarbeiten. Sie beachten dabei folgende Regeln inklusive wichtiger Ausnahmen: Wortstammregel, Doppelkonsonantenregel, Grossschreibung von konkreten und abstrakten Nomen sowie abgeleitete Nomen mit Nachmorphemen, Komma zwischen leicht erkennbaren Verbgruppen.',
              'können Wortschreibungen kritisch hinterfragen und mit dem Schul-Wörterbuch oder mit Nachfragen klären.',
              'können Bewerbungsunterlagen mit Unterstützung (z.B. Lehrperson, Textbausteine) durch mehrfaches Überarbeiten fehlerfrei herstellen.',
              'können selbstständig auf Papier oder am Computer ihre Texte sprachformal überarbeiten.',
            ],
          },
          {
            _id: 's4t3st-1c6',
            name: '1. Die Schülerinnen und Schüler können üb  ber ihren Schreibprozess und ihre Schreibprodukte nachdenken und deren Qualität einschätzen.',
            subCompetences: [
              'können die nötige Ausdauer aufbringen, um über ihre Texte und ihr Schreiben nachzudenken.',
              'können im Austausch mit anderen das eigene Schreibziel reflektieren und zur Schreibaufgabe in Bezug setzen.',
              'können Möglichkeiten und Grenzen eines Korrekturprogramms reflektieren und erkennen mögliche Schwierigkeiten (z.B. Gross-/Kleinschreibung; Schreibungen akzeptieren und im Wörterbuch aufnehmen).',
              'können im Austausch mit anderen mithilfe von Kriterien einzelne Qualitäten ihres Textes besprechen, einschätzen und reflektieren und über die Qualität der Alternativen nachdenken.',
              'können wirkungsvolle und gelungene Textstellen identifizieren, beschreiben und daraus für ihr Schreiben Konsequenzen benennen.',
              'können ihre Schreibsituation und ihr Vorgehen beim Schreiben reflektieren und mit dem Vorgehen anderer vergleichen.',
              'können im Austausch mit anderen über ihre Texte ihr Repertoire an Schreibstrategien reflektieren und ausbauen.',
              'können allein oder im Gespräch die kommunikative und ästhetische Wirkung und Qualitäten ihrer Texte mithilfe von Kriterien differenziert einschätzen.',
            ],
          },
        ],
      },
      {
        _id: 's4t4',
        name: 'D.5 - Sprache im Fokus',
        competences: [
          {
            _id: 's4t4st-1c0',
            name: '1. Die Schülerinnen und Schüler   können Sprache erforschen und Sprachen vergleichen.',
            subCompetences: [
              'können selbstständig Ersatz-, Verschiebe-, Erweiterungs- und Weglassprobe anwenden, um Sprachstrukturen (nach formalen Kriterien) zu untersuchen.',
              'können ihr Vorgehen beim Sammeln, Auswählen und Ordnen begründen (z.B. im Vergleich von zwei Phänomenen in einer Sprache oder von einem Phänomen in zwei Sprachen) und die verschiedenen Lösungen miteinander vergleichen.',
              'können eigene Vermutungen über das untersuchte Sprachphänomen begründen, indem sie die grammatischen Proben und Begriffe zur Begründung nutzen.',
            ],
          },
          {
            _id: 's4t4st-1c1',
            name: '1. Die Schülerinnen und Schüler können den Ge ebrauch und die Wirkung von Sprache untersuchen.',
            subCompetences: [
              'können den Gebrauch von sprachlichen Mitteln untersuchen (z.B. Chat eher mündlich, Präsentation eher schriftlich, Bewerbungsschreiben und -gespräch sehr formell, kulturelle Prägung).',
              'können unter Anleitung verschiedene sprachliche Themen auch in Bezug auf mehrere Sprachen entlang von vorgegebenen Fragen untersuchen (z.B. Entwicklung der Schrift/Rechtschreibung, Sprachwandel in Bezug auf Verwendung in verschiedenen Medien).',
              'können die Vor- und Nachteile verschiedener Medien (z.B. Brief vs. Telefonat vs. SMS, Zeitungsartikel) für unterschiedliche kommunikative Funktionen reflektieren (z.B. Manipulation, technische Abhängigkeit, Medien als vierte Gewalt).',
            ],
          },
          {
            _id: 's4t4st-1c2',
            name: '1.Die Schülerinnen und Schüler können Sprachstrukturen in Wörtern und Sätzen untersuchen.',
            subCompetences: [
              'können die L Lautstruktur sowie Wort- und Satzbau in der Standardsprache und in der Mundart untersuchen und sie mit anderen Sprachen vergleichen (z.B. Verfahren der Wortbildung wie Kurzwörter, Neubildungen, unterschiedliche Morphem-Struktur in Sprachen, Pronomengebrauch in den Schulsprachen, unterschiedliche Satzverknüpfungen).',
              'können verschiedene Schreibweisen untersuchen (z.B. SMS-Schreibweise: shön vs. schön, lg, 4u) und Vor- und Nachteile beschreiben.',
              'können die Bedeutung von Rechtschreibregeln reflektieren.',
            ],
          },
          {
            _id: 's4t4st-1c3',
            name: '1. Die Schülerinnen und Schüler können Grammatikbegriffe für die Analyse von Sprachstrukturen anwenden.',
            subCompetences: [
              'kennen den Begriff Pronomen und können Pronomen in einer Liste von Pronomen nachschlagen.',
              'kennen den Begriff Partikel.',
              'können Erfahrungen mit den Begriffen: Futur und Plusquamperfekt; vier Fälle; Nominativ, Akkusativ, Dativ und Genitiv sammeln.',
              'können einfach strukturierte Sätze in einem Verbenfächer darstellen.',
              'können Präpositionen mihilfe einer reduzierten Liste benennen.',
              'können in typischen Fällen Nominativ, Akkusativ, Dativ und Genitiv mithilfe der Ersatzprobe bestimmen.',
              'können Wörter in Stamm-, Vor- und Nachmorphem zerlegen.',
              'können einen Verbenfächer bilden und die Satzglieder Nominal- und Präpositionalgruppe unterscheiden.',
              'können Nomen, Verb und Adjektiv mithilfe formaler Kriterien sowie Pronomen mithilfe der umfassenden Pronomenliste bestimmen sowie den Rest als Partikel benennen.',
              'können die Partikeln Präposition und Konjunktion in typischen Fällen bestimmen.',
              'können Präsens, Präteritum, Perfekt und Futur sowie Infinitiv und Personalform bestimmen.',
              'können Stamm-, Vor- und Nachmorphem bestimmen.',
              'können mithilfe eines Verbenfächers Satzglieder bestimmen.',
              'kennen die Begriffe Subjekt und Objekt.',
              'kennen die Begriffe Indikativ, Imperativ, Konjunktiv I und II sowie Aktiv und Passiv.',
              'können einen Verbenfächer bilden und formal die Satzglieder Nominal- und Präpositionalgruppe unterscheiden.',
              'können bei klaren Beispielen zwischen Subjekt und Objekt unterscheiden.',
              'können einfache und zusammengesetzte Sätze unterscheiden.',
            ],
          },
          {
            _id: 's4t4st-1c4',
            name: '1. Die Schülerinnen und Schüler können ihr orthografis sches Regelwissen in auf die Regel konstruierten Übungen anwenden.',
            subCompetences: [
              'können Wörter in ihre Morpheme zerlegen. Sie können dies für die Gross-Klein- Schreibung nutzen (z.B. Frei-heit, Entdeck-ung).',
              'können folgende Rechtschreibregeln in dafür konstruierten Übungen anwenden: Nomen aus Verben mit vorhergehender Präposition plus Artikel in typischen Fällen (z.B. beim Essen, nach dem Essen), Höflichkeitspronomen "Sie" in Briefen.',
              'können Strategien nutzen, um auch Wörter mit nicht-eindeutiger Laut-Buchstaben- Zuordnung im gedruckten und elektronischen Wörterbuch aufzufinden.',
              'können folgende Rechtschreibregel in dafür konstruierten Übungen anwenden: Nomen aus Adjektiven mit vorhergehendem Pronomen in typischen Fällen (z.B. alles Gute, etwas Schönes, viel Schlechtes); Komma bei infinitivischen Verbgruppen, bei Einschüben und Relativsätzen.',
            ],
          },
        ],
      },
      {
        _id: 's4t5',
        name: 'D.6 - Literatur im Fokus',
        competences: [
          {
            _id: 's4t5st-1c0',
            name: '1. Die Schülerinnen und Schüler können spielerisch und kreativ gestaltend mit literarischen Texten umgehen.',
            subCompetences: [
              'können aufgr rund von vorgegebenen literarischen Mustertexten (z.B. Gedicht) oder Tetxtanfängen (z.B. Geschichte) eigene Texte schreiben und dabei einzelne Merkmale übernehmen.',
              'können die Innensicht und Gedanken von Figuren in eindeutigen Situationen erkennen und imaginieren (z.B. szenische Darstellung, innerer Monolog).',
              'können einzelne Textteile in eine logische Abfolge bringen, um den Aufbau des literarischen Textes zu verstehen.',
              'können ihre Gedanken und Gefühle beim Lesen eines literarischen Textes reflektieren (z.B. im Lesetagebuch).',
              'können historische Informationen und Tatsachen aus der realen Welt in einem Buch finden, sie mit anderen Quellen vergleichen und darstellen (z.B. auf einem Plakat).',
              'können nach dem Muster eines literarischen Textes (z.B. Gedicht, Kurzgeschichte, Fantasy, Fotoroman) selber einen Text mit den entsprechenden Merkmalen schreiben.',
              'können eine Geschichte aus der Sicht einer einzelnen Figur darstellen, um Innensicht, Gedanken und Beweggründe des Handelns zu verstehen (z.B. Briefwechsel, Tagebuch).',
              'können detailliert mit Bezug zum Text darstellen, wie Figuren, Orte oder Handlungen der Geschichte auf sie wirken.',
            ],
          },
          {
            _id: 's4t5st-1c1',
            name: '2. Die Schülerinnen und Schüler können über literarische Texte und die Art, wie sie die Texte lesen, ein literarisches Gespräch führen. Sie reflektieren dabei, wie sie die Texte verstehen und die Texte auf sie wirken.',
            subCompetences: [
              'können im Gespräch verschiedene Bedeutungen und Verstehensweisen erkennen und sind fähig, einfachere Stellen selbstständig zu analysieren.',
              'können den anderen literarische Texte empfehlen, die ihnen gefallen. Sie können dabei ihren Lese-/Hör-/Sehgeschmack erläutern (z.B. mit Textbeispielen).',
              'können ihr Leseverhalten reflektieren: Wann und wo lesen sie was?',
              'können im Gespräch ihr Verstehen eines literarischen Textes formulieren und dieses dialogisch weiterentwickeln.',
              'können im Gespräch verschiedene Bedeutungen eines literarischen Textes erkennen und daher unterschiedliche Verstehensweisen entwickeln.',
              'können sich darauf einlassen, ihr erstes Verstehen eines literarischen Textes zu hinterfragen und zu relativieren.',
              'können erkennen, dass andere einen literarischen Text anders verstehen.',
              'können Nicht-Verstandenes erkennen, reflektieren und sind bereit, es im Gespräch zu formulieren. Sie halten die sich daraus ergebenden Ungereimtheiten und Ambivalenzen aus.',
              'können im literarischen Gespräch ihr Verstehen bzw. Nicht-Verstehen erläutern und beziehen sich dabei auf den literarischen Text.',
            ],
          },
          {
            _id: 's4t5st-1c2',
            name: '1. Die Schülerinnen und Schüler kennen einzelne Autor/innen der Kinder-, Jugend- und Erwachsenenliteratur und können Texte aus verschiedenen Kulturen lesen, hören, sehen und deren Besonderheiten erkennen und wertschätzen.',
            subCompetences: [
              'entwickeln Interesse für literarische Texte der Kinder- und Jugendliteratur aus verschiedenen Zeiten und Kulturen. Sie können diese Texte in Bezug zur eigenen Zeit und Kultur setzen.',
              'können erkennen, wie Autor/innen sprachlich gestalten. Sie können dabei unter Anleitung sprachliche Muster für ihr eigenes Schreiben nutzen (z.B. Wortwahl, Wendungen, Satzmuster) und reflektieren eigene Gestaltungsprobleme (z.B. Ideen finden, Texte überarbeiten).',
              'können über einzelne bedeutende Autor/innen der Kinder- und Jugendliteratur Informationen sammeln und dieses Wissen in Bezug zu einzelnen Texten setzen.',
              'kennen einzelne ausgewählte Texte bedeutender Vertreter/innen der deutschen Literatur.',
              'können sich mit literarischen Texten aus anderen Kulturen auseinandersetzen und unter Anleitung Unterschiede zur eigenen Kultur erkennen und diese darstellen.',
              'kennen mehrere Werke einer ausgewählten Autorin/eines ausgewählten Autors und können diese in Bezug zu deren Zeit und Kultur setzen.',
              'können literarische Texte kritisch lesen und unter Anleitung deren kulturelle Bedingtheit erkennen (z.B. eine andere Kultur, eine Person aus einer anderen Kultur/mit einer anderen Lebensweise wird stereotyp dargestellt).',
            ],
          },
          {
            _id: 's4t5st-1c3',
            name: '1. Die Schülerinnen und Schüler erfahren, erkennen und reflektieren, dass literarische Texte in Bezug auf Inhalt, Form und Sprache bewusst gestaltet sind, um eine ästhetische Wirkung zu erzielen. Sie kennen wesentliche Merkmale von Genres und literarischen Gattungen.',
            subCompetences: [
              'können unter Anleitung Unterschiede zwischen eigentlicher und übertragener Bedeutung von Aussagen erkennen.',
              'können die Figuren selbst und deren Handeln mithilfe von Kategorien wie gerecht/ungerecht beurteilen.',
              'können sich mit unvertrauten literarischen Texten auseinandersetzen (z.B. aus einer anderen Zeit, Theater, unbekanntes Filmgenre) und sich darüber austauschen.',
              'können eindeutige oder gebräuchliche inhaltliche Gestaltungsprinzipien der Texte erkennen (z.B. Elemente von Spannung, Motive).',
              'können unterschiedliche Wirkung von Fiktion und Realität in komplexeren Geschichten erklären.',
              'kennen einzelne typische inhaltliche, formale oder sprachliche Merkmale von Erzähltexten (z.B. Kurzgeschichte, Roman) und lyrischen Texten (z.B. Ballade).',
              'können typische Perspektiven von Figuren in literarischen Texten nachvollziehen.',
              'können die Sprechweise der Figuren analysieren, um die Figuren und deren Motive genauer zu erfassen.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's5',
    name: 'Englisch',
    topics: [
      {
        _id: 's5t0',
        name: 'FS2E.1 - Hören',
        competences: [
          {
            _id: 's5t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können verschiedenartige Hörtexte und Gespräche verstehen (Sachtexte, ästhetische Texte, Texte im Schulalltag, Gespräche im Kontakt mit Englisch sprechenden Personen).',
            subCompetences: [
              'können in einfachen kurzen Texten zu vertrauten Themen die Hauptinformation verstehen, wenn langsam und deutlich gesprochen wird (z.B. Geschichte).',
              'können in kurzen, einfachen und klaren Durchsagen die Hauptinformation oder Einzelinformationen verstehen (z.B. Wettervorhersage, Sportresultat).',
              'können aus kurzen Mitteilungen zu vertrauten Themen einfache Informationen entnehmen, wenn langsam und deutlich gesprochen wird (z.B. Wegbeschreibung).',
              'können in Beiträgen über vertraute Themen verstehen, worum es geht, wenn langsam und deutlich gesprochen wird (z.B. Vortrag, Reportage, Filmszene).',
              'können einfache Mitteilungen, Anweisungen und Erklärungen verstehen (z.B. Anleitung zu einem Experiment, einfache Gebrauchsanweisung), die man ihnen persönlich gibt.',
              'können in längeren Gesprächen über vertraute Themen meistens verstehen, worum es geht, wenn deutlich gesprochen wird (z.B. Interview, Telefongespräch, persönliche Begegnung).',
              'können längere Gespräche und Texte über vertraute Themen (z.B. Trendsportart, Markenartikel) in groben Zügen verstehen, wenn langsam und deutlich gesprochen wird oder wenn Passagen mehrmals gehört werden können (z.B. Hörbuch, Diskussion, Fernsehsendung).',
              'können aus längeren Texten über vertraute Themen wichtige Informationen heraushören, wenn relativ langsam und deutlich gesprochen wird (z.B. Nachricht, Interview, Vortrag).',
              'können den Inhalt von längeren Gesprächen und Texten, die sie interessieren, im Grossen und Ganzen verstehen, wenn deutlich gesprochen wird (z.B. Reportage, Diskussion, Dialog in einem Film).',
              'können detaillierte Anweisungen genau verstehen (z.B. Spielanleitung).',
              'können klare und unkompliziert aufgebaute Texte über einigermassen vertraute Themen verstehen (z.B. Präsentation, Hörbuch).',
            ],
          },
          {
            _id: 's5t0st-1c1',
            name: '2. Die Schülerinnen und Schüler können die ästhetische Wirkung von Hörtexten entdecken und beschreiben.',
            subCompetences: [
              'können in Hörtexten einzelne ästhetische Gestaltungsmittel entdecken und auf Deutsch beschreiben (z.B. Slam Poetry, Sketch).',
              'können über Hörtexte neue Welten entdecken und zu eigenen Vorlieben finden',
            ],
          },
          {
            _id: 's5t0st-1c2',
            name: '1. Die Schülerinnen und Schüler können Hörstrategien einsetzen und reflektieren. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können beurteilen, welche Hörstrategien, auch aus anderen Sprachen, für sie hilfreich sind und diese einsetzen (z.B. auf Bekanntes, Geräusche und Bilder achten, Gestik und Verhalten der Sprecherin/des Sprechers beobachten).',
              'können Hörstrategien zunehmend selbstständig einsetzen (z.B. mehrfach hören, Vorwissen aktivieren, Thema erkennen, unbekannte Wörter erschliessen, Satzbedeutung ableiten).',
            ],
          },
          {
            _id: 's5t0st-1c3',
            name: '1. Die Schülerinnen und Schüler können Inhalte aus Gesprächen und Hörtexten auf Englisch verstehen und sinngemäss ins Deutsche übertragen.',
            subCompetences: [
              'können in einem einfachen Gespräch mit einer Englisch sprechenden Person (z.B. Austauschschülerin oder -schüler) einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen verstehen und sinngemäss mündlich auf Deutsch wiedergeben (informelles Dolmetschen, z.B. Herkunft, Hobby, Interessen). Voraussetzung ist, dass diese Person deutlich spricht.',
              'können Einzelinformationen von Lautsprecherdurchsagen und Mitteilungen (z.B. Verspätungsmeldung, Hausaufgabe, Fernsehnachricht) sowie die Hauptaussagen eines kurzen Interviews verstehen und sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben. Voraussetzung ist, dass langsam und deutlich gesprochen wird und es sich um ein vertrautes Thema handelt.',
              'können längere, klar aufgebaute Gespräche und Hörtexte zu Themen des Alltagslebens verstehen und die Hauptaussagen oder Einzelinformationen sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben (z.B. Interview, Treffen mit Partnerklasse).',
              'können in einem einfachen Gespräch mit einer Englisch sprechenden Person (z.B. Austauschschülerin oder -schüler) einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen verstehen und sinngemäss mündlich auf Französisch wiedergeben (z.B. Herkunft, Hobby, Interessen). Voraussetzung ist, dass die Englisch sprechende Person deutlich spricht und bereit ist zu helfen.',
            ],
          },
        ],
      },
      {
        _id: 's5t1',
        name: 'FS2E.2 - Lesen',
        competences: [
          {
            _id: 's5t1st-1c0',
            name: '1. Die Schülerinnen und Schüler können verschiedenartige Texte lesen und NMG.2.1 verstehen (Sachtexte, ästhetische Texte, Texte im Schulalltag, Texte im Kontakt mit Englisch sprechenden Personen).',
            subCompetences: [
              'können eine kurze, klar aufgebaute Geschichte in groben Zügen verstehen, wenn das Thema vertraut ist (z.B. Handlung, wichtigste Akteure oder Figuren).',
              'können aus kurzen, klar aufgebauten Texten zu vertrauten Themen grundlegende Informationen entnehmen (z.B. Liste, Kochrezept, Portrait, Limerick).',
              'können in einfachen persönlichen Nachrichten konkrete Mitteilungen verstehen (z.B. EMail, Chat).',
              'können in klar strukturierten Texten die Hauptinformationen oder Einzelinformationen verstehen, wenn das Thema vertraut ist (z.B. Geschichte, Reportage, Vorschrift).',
              'können einfache kurze Anleitungen befolgen, wenn die Schritte illustriert sind (z.B. Experiment, Spiel, Rezept).',
              'können einfache persönliche Texte über vertraute Dinge verstehen (z.B. Brief, Blog).',
              'können unterschiedlich lange Texte zu Themen, die sie interessieren, verstehen (z.B. vereinfachter literarischer Text, Buchbesprechung, Reportage).',
              'können klar strukturierten Hinweisen wichtige Informationen entnehmen (z.B. Bedienungsanleitung).',
              'können in unkomplizierten Texten zu Themen, die sie interessieren oder zu denen sie Vorkenntnisse haben, die Hauptaussagen verstehen (z.B. Reisebericht, Briefaustausch).',
              'können Texte im Wesentlichen verstehen, wenn das Thema vertraut ist (z.B. Auszug aus einem Jugendbuch, Songtext, unkomplizierter Sachtext).',
              'können klaren schriftlichen Anleitungen folgen (z.B. Lernprojekt, Gerätebedienung, Spiel).',
              'können in einfachen argumentativen Texten die zugrunde liegende Meinung oder Haltung erkennen (z.B. Blogeintrag).',
            ],
          },
          {
            _id: 's5t1st-1c1',
            name: '2. Die Schülerinnen und Schüler können die ästhetische Wirkung von Lesetexten entdecken und beschreiben.',
            subCompetences: [
              'können in einfache, mit Bilder illustrierte kurze Texte eintauchen (z.B. Comic, illustrierte Geschichte).',
              'können in Texten ästhetische Gestaltungsmittel entdecken und auf Deutsch beschreiben (z.B. Wortspiele in einem Prosatext, Slang in einem Comic, Reime in einem Gedicht).',
              'können sich in eine Geschichte hineinversetzen, neue Welten entdecken und zu eigenen Vorlieben finden (z.B. Kriminalgeschichte, Science Fiction, Comic).',
            ],
          },
          {
            _id: 's5t1st-1c2',
            name: '1. Die Schülerinnen und Schüler können Lesestrategien einsetzen und reflektieren. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können beurteilen, welche Lesestrategien, auch aus anderen Sprachen, für sie hilfreich sind und diese einsetzen (z.B. Vorwissen aktivieren, Bilder und Titel betrachten, Thema erkennen, Bekanntes und Parallelwörter erkennen, Schlüsselwörter erkennen, Unbekanntes erschliessen, verschiedene Informationsquellen nutzen).',
              'können Lesestrategien zunehmend selbstständig einsetzen (z.B. Informationen aus der Textstruktur nutzen, Kernaussagen markieren, Thema erkennen, Bedeutungen aus dem Kontext ableiten, internationale Wörter finden).',
            ],
          },
          {
            _id: 's5t1st-1c3',
            name: '1. Die Schülerinnen und Schüler können Inhalte schriftlicher Texte auf Englisch verstehen und sinngemäss ins Deutsche übertragen.',
            subCompetences: [
              'können die Hauptaussagen oder Einzelinformationen aus einfachen, kurzen Texten verstehen und sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben (z.B. EMail, Sachtext, Liedtext). Voraussetzung ist, dass es sich um vertraute Themen handelt (z.B. Schule, Freizeit, Tiere).',
              'können längere, klar aufgebaute Texte zu Themen des Alltagslebens verstehen und die Hauptaussagen oder Einzelinformationen sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben (z.B. Internetseite, Artikel, Geschichte).',
              'können die Hauptaussagen oder Einzelinformationen aus einfachen, kurzen Texten verstehen und sinngemäss schriftlich auf Französisch wiedergeben (z.B. Sachtext, EMail). Voraussetzung ist, dass es sich um vertraute, konkrete Themen handelt.',
            ],
          },
        ],
      },
      {
        _id: 's5t2',
        name: 'FS2E.3 - Sprechen (monologisch und dialogisch)',
        competences: [
          {
            _id: 's5t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können an verschiedenen Gesprächen teilnehmen (über Sachthemen, über ästhetische Themen, im Schulalltag, mit Englisch sprechenden Personen).',
            subCompetences: [
              'können in alltäglichen Situationen mit einfachen Worten Informationen austauschen und einholen (z.B. Rollenspiel, Gruppenarbeit).',
              'können zu vertrauten Themen einfache Fragen stellen und beantworten, kurz etwas dazu sagen oder auf Gesagtes reagieren (z.B. Unterricht, Einkauf).',
              'können einfache Aussagen zu vertrauten Themen machen und darauf reagieren (z.B. etwas erklären, Verständnis prüfen).',
              'können zu alltäglichen Aktivitäten Fragen stellen und beantworten (z.B. Freizeit, Reisen, Unterricht).',
              'können ausdrücken, ob sie einverstanden sind oder lieber etwas anderes möchten (z.B. Vorschlag, Abmachung).',
              'können vertraute Personen um einen Gefallen bitten und auf Bitten reagieren (z.B. etwas ausleihen, Wunsch äussern).',
              'können zu vertrauten Themen auf einfache Art Informationen austauschen (z.B. Mode, Film, Musik).',
              'können ihre Meinung sagen und nach der Meinung von anderen fragen (z.B. Diskussion, Interview, Gruppenarbeit).',
              'können in Diskussionen oder bei Entscheidungen die eigene Haltung argumentativ einbringen, Vorschläge machen und die Meinungen anderer kurz kommentieren (z.B. Projektarbeit, Wahl der Lektüre, Streitgespräch).',
              'können einfache Telefongespräche führen.',
              'können mit Gleichaltrigen längere Gespräche über gemeinsame Interessen führen, falls diese sich um gegenseitiges Verstehen bemühen.',
              'können spontan Fragen stellen zu besonderen Ereignissen oder Erlebnissen (z.B. Ferien, Fest, Unfall).',
              'können sich in alltäglichen Situationen beschweren (z.B. defektes Produkt).',
            ],
          },
          {
            _id: 's5t2st-1c1',
            name: '1. Die Schülerinnen und Schüler können zu verschiedenen Themen und in unterschiedlichen Situationen zusammenhängend sprechen (über Sachthemen, über ästhetische Themen, über Themen und Abläufe im Schulalltag, im Kontakt mit Englisch sprechenden Personen).',
            subCompetences: [
              'können ein einfaches kurzes Gedicht vortragen (z.B. Chant, Rap).',
              'können sehr vertraute Themen in einem kurzen vorbereiteten Vortrag präsentieren (z.B. Hobby, Tiere, Musik).',
              'können Menschen, Gegenstände und Abläufe auf einfache Weise beschreiben (z.B. Aussehen, Tagesablauf, Weg).',
              'können sagen, was sie gut können, was weniger gut (z.B. Schule, Sport).',
              'können kurze Geschichten erzählen, indem sie die Ereignisse aneinanderreihen.',
              'können ihre persönlichen Meinungen, Vorlieben und Vermutungen mit einfachen Worten äussern und begründen (z.B. Musik, Buch, Regeln).',
              'können vertraute Dinge und Sachverhalte kurz beschreiben (z.B. Tier, Feiertag, Umgebung).',
              'können mit einfachen Worten alltägliche Ereignisse und persönliche Erfahrungen beschreiben und kurz begründen, was ihnen gefällt und was weniger (z.B. Ausflug, Party).',
              'können Geschichten nacherzählen und ihre Meinung dazu äussern (z.B. Film, Buch).',
              'können ihre Ansichten, Vermutungen und Pläne kurz erklären und begründen (z.B. Ausflug, Reise).',
              'können über alltägliche Themen mit einfachen Worten ihre Meinung äussern und begründen (z.B. Taschengeld).',
              'können über selbst gewählte Themen berichten (z.B. Geschichte, Ereignis).',
              'können ihre Meinung mitteilen und begründen (z.B. Berufswünsche).',
              'können detailliert erklären, wie man etwas macht, was sie selbst gut können (z.B. Arbeitsschritte bei Projektarbeit, kochen).',
              'können zu persönlichen Erlebnissen ihre Gefühle beschreiben und begründen',
            ],
          },
          {
            _id: 's5t2st-1c2',
            name: '2. Die Schülerinnen und Schüler können beim Vortragen Texte gestalten und eine ästhetische Wirkung erzielen.',
            subCompetences: [
              'können verschiedene Textformen kreativ vortragen (z.B. Liedtext, Rap, Gedicht, Lesetheater).',
              'können Texte kreativ gestalten und eine ästhetische Wirkung erzielen (z.B. Sketch, kurze Geschichte).',
              'können Texte bewusst gestalten und inszenieren und sich auf Deutsch über die Wirkung austauschen (z.B. Slam Poetry, Geschichte, Szene aus einem Theaterstück).',
            ],
          },
          {
            _id: 's5t2st-1c3',
            name: '1. Die Schülerinnen und Schüler können Strategien einsetzen und reflektieren, um das Sprechen zu steuern. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können Sprechhemmungen überwinden, bei Bedarf mit Unterstützung, und dabei Fehler als Lerngelegenheiten nutzen.',
              'können Sprechstrategien einsetzen, um eine bessere Wirkung ihrer Gesprächsbeiträge zu erzielen (z.B. um Wiederholung bitten, Umschreibungen und Stichwörter nutzen, im Selbstgespräch üben).',
              'können beurteilen, welche Sprechstrategien für sie hilfreich sind und welche sie aus anderen Sprachen übertragen können.',
              'können Sprechstrategien zunehmend selbstständig einsetzen (z.B. formelhafte Wendungen zur Gesprächssteuerung einsetzen, andere zur Beteiligung auffordern, nachfragen, um Bestätigung bitten).',
              'können einige Fehler, die beim freien Sprechen auftreten, erkennen und sich selber korrigieren.',
            ],
          },
          {
            _id: 's5t2st-1c4',
            name: '1. Die Schülerinnen und Schüler können Inhalte aus Gesprächen, Hörtexten oder schriftlichen Texten auf Deutsch sinngemäss ins Englische übertragen.',
            subCompetences: [
              'können aus einem einfachen Gespräch mit einer Deutsch sprechenden Person einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen sinngemäss auf Englisch wiedergeben (informelles Dolmetschen, z.B. Herkunft, Hobby, Interessen).',
              'können Lautsprecherdurchsagen und kurze mündliche Mitteilungen auf Deutsch mit einfachen Sätzen und Wendungen sinngemäss auf Englisch wiedergeben (z.B. Verspätungsmeldung, Wetterbericht).',
              'können die Hauptaussagen oder Einzelinformationen aus einfachen und kurzen schriftlichen Texten auf Deutsch (z.B. E-Mail, Prospekt, Veranstaltungsprogramm) sinngemäss auf Englisch wiedergeben. Voraussetzung ist, dass es sich um vertraute Themen handelt (z.B. Schule, Freizeit, Tiere).',
              'können die Hauptaussagen oder Einzelinformationen aus einem längeren, klar aufgebauten Gespräch mit einer Deutsch sprechenden Person sowie aus deutschen Hörtexten oder schriftlichen Texten (z.B. Treffen mit Partnerklasse, Geschichte, Sachtext) sinngemäss auf Englisch wiedergeben. Voraussetzung ist, dass es sich um vertraute Themen handelt.',
              'können in einer Gesprächssituation zwischen einer französischsprachigen und einer englischsprachigen Person sinngemäss vermitteln (z.B. einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen).',
            ],
          },
        ],
      },
      {
        _id: 's5t3',
        name: 'FS2E.4 - Schreiben',
        competences: [
          {
            _id: 's5t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können verschiedene Texte verfassen (Sachtexte, ästhetische Texte, Texte im Schulalltag, im schriftlichen Kontakt mit Englisch sprechenden Personen).',
            subCompetences: [
              'können mit sprachlichem Support (z.B. Chunks) einfache Geschichten beginnen oder zu Ende führen.',
              'können sich einfache Notizen machen und kurze Mitteilungen verfassen (z.B. Sachverhalt, Wegbeschreibung zu Skizze, Einladung).',
              'können mit einfachen Sätzen und Ausdrücken über vertraute Gegenstände und Personen berichten (z.B. Tagesablauf, Portrait, Aktivität).',
              'können mit einfachen Sätzen kurze Geschichten erzählen (z.B. zu einer Bildergeschichte).',
              'können in einfachen Sätzen darüber berichten, was wann und wo geschehen ist (z.B. Erlebnis).',
              'können Gleichaltrige auf einfache Weise über sich selbst oder alltägliche Dinge informieren und auf solche Informationen reagieren (z.B. Lebenslauf, Wandzeitung, Anzeige).',
              'können einfache Texte über vertraute Themen zusammenfassen und ihre Meinung dazu äussern (z.B. Buch- oder Filmbesprechung).',
              'können in einfachen zusammenhängenden Texten über ein Ereignis berichten (z.B. Reisebericht, Experiment, kultureller Anlass).',
              'können vertraute Themen mit kurzen Texten und Bildern darstellen (z.B. Poster, Blogeintrag, Schülerzeitung).',
            ],
          },
          {
            _id: 's5t3st-1c1',
            name: '2. Die Schülerinnen und Schüler können eigene Texte kreativ und spielerisch gestalten und eine ästhetische Wirkung erzielen.',
            subCompetences: [
              'können in eigenen Texten mit einfachen Gestaltungsmitteln eine ästhetische Wirkung erzielen (z.B. Gedicht, Cartoon, Bildgeschichte). ',
              'können beim kreativen Schreiben verschiedene ästhetische Gestaltungsmittel bewusst einsetzen und sich auf Deutsch über die Wirkung austauschen (z.B. Kurzgeschichte, Raptext, Werbespot).',
            ],
          },
          {
            _id: 's5t3st-1c2',
            name: '1. Die Schülerinnen und Schüler können Strategien zur Schreibunterstützung einsetzen und reflektieren. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können beurteilen, welche Schreibstrategien, auch aus anderen Sprachen, für sie hilfreich sind und diese einsetzen, um eine bessere Wirkung ihrer Texte zu erzielen (z.B. Informationen sammeln, Planungs- und Strukturierungshilfen nutzen, grammatische Übersichten und Merkblätter, Textmuster und Textverarbeitungsprogramm verwenden).',
              'können Schreibstrategien zunehmend selbstständig einsetzen (z.B. Informationen sammeln, Mindmap, Cluster erstellen, Vokabular in verschiedenen Medien suchen, Text überarbeiten und korrigieren, Wörter-, Grammatikbücher und das Internet gezielt nutzen).',
              'können einige Fehler, die beim Schreiben auftreten, erkennen und korrigieren.',
            ],
          },
          {
            _id: 's5t3st-1c3',
            name: '1. Die Schülerinnen und Schüler können Inhalte deutscher Texte sinngemäss ins Englische übertragen.',
            subCompetences: [
              'können einfache mündliche und schriftliche Mitteilungen oder Fragen auf Deutsch (z.B. Ankunftszeit, Treffpunkt, Bitte um Rückruf) in kurzen, einfachen Notizen und Nachrichten auf Englisch festhalten.',
              'können aus schriftlichen Texten auf Deutsch (z.B. Broschüre, E-Mail, Artikel in einer Zeitschrift) die wesentlichen Angaben sinngemäss auf Englisch wiedergeben.',
              'können Hauptaussagen oder Einzelinformationen aus einfachen und kurzen schriftlichen Mitteilungen in Französisch mit einfachen Sätzen und Wendungen sinngemäss auf Englisch wiedergeben. Voraussetzung ist, dass es sich um vertraute, konkrete Themen handelt.',
            ],
          },
        ],
      },
      {
        _id: 's5t4',
        name: 'FS2E.5 - Bewusstheit für Sprache',
        competences: [
          {
            _id: 's5t4st-1c0',
            name: '1. Die Schülerinnen und Schüler können ihre Aufmerksamkeit auf FS1F.5.A.1 sprachliche Vielfalt richten.',
            subCompetences: [
              'können sprachliche Vielfalt in Europa und in der Welt erkennen.',
              'können die Sprachenvielfalt in der Schweiz beschreiben.',
              'können Status und Rolle verschiedener Sprachen untereinander vergleichen (z.B. Landessprachen, Nationalsprachen, Herkunftssprachen, internationale Verkehrssprachen).',
            ],
          },
          {
            _id: 's5t4st-1c1',
            name: '2. Die Schülerinnen und Schüler können ihre Aufmerksamkeit auf sprachliche Phänomene richten.',
            subCompetences: [
              'können verschiedene Varietäten des Englischen wahrnehmen (American and British English, Standard English and dialects, written and spoken English). ',
              'können in der Fremdsprache verschiedene Register erkennen (z.B. formelle und informelle Sprache, Umgangssprache).',
              'können sprachliche Phänomene in verschiedenen Sprachen vergleichen (z.B. Herkunft von Wörtern, Lehnwörter, Internationalismen).',
            ],
          },
          {
            _id: 's5t4st-1c2',
            name: '1. Die Schülerinnen und Schüler verfügen über einen angemessenen Wortschatz, um sich mündlich und schriftlich zu äussern.',
            subCompetences: [
              'verfügen über ein genügend grosses Repertoire an Wörtern und Wendungen, das ihnen erlaubt, Texte zu allgemeineren Themen zu verfassen sowie an routinemässigen Gesprächen aktiv teilzunehmen.',
              'verfügen über ein ausreichendes Repertoire an Wörtern und Wendungen, das ihnen erlaubt, Texte zu unterschiedlichen Themen der eigenen Lebenswelt zu verfassen sowie an alltäglichen Gesprächen aktiv teilzunehmen.',
            ],
          },
          {
            _id: 's5t4st-1c3',
            name: '2. Die Schülerinnen und Schüler können Strategien und Techniken zum Wortschatzerwerb und Regeln der Wortbildung reflektieren und für ihr Lernen nutzen. Sie können dabei auf Lernerfahrungen und Kenntnisse in anderen Sprachen zurückgreifen.',
            subCompetences: [
              'können, wenn nötig mit Unterstützung, dem eigenen Lernstil angepassten Techniken zum Wortschatzerwerb auswählen (z.B. Cluster, Mindmap, Tonaufnahme).',
              'können unter Anleitung Regeln der Wortbildung (auch sprachenübergreifend) erkennen und neue Wörter und Wendungen bilden (z.B. refaire/reload, prepaid/préfabriqué, Worfamilie).',
              'können selbstständig Regeln der Wortbildung ableiten und für ihr Lernen nutzen.',
              'können verschiedene Formen von Wörterbüchern (z.B. in Papierform, elektronische, online) vergleichen und sich über deren Anwendungsmöglichkeiten austauschen.',
            ],
          },
          {
            _id: 's5t4st-1c4',
            name: '1. Die Schülerinnen und Schüler können klar und verständlich sprechen und vorlesen.',
            subCompetences: [
              'können trotz eines merklichen Akzents in der Regel verständlich sprechen und vorlesen.',
              'können sich meist so ausdrücken, dass die Aussprache gut verständlich ist und die Intonation dem Inhalt entspricht.',
            ],
          },
          {
            _id: 's5t4st-1c5',
            name: '2. Die Schülerinnen und Schüler können typische Aussprache- und Intonationsregeln der englischen Sprache verstehen.',
            subCompetences: [
              'können unter Anleitung häufig vorkommende Schriftbilder mit der korrekten Aussprache verbinden und daraus Regeln ableiten (call, tell, miss, jazz, but, bus, us, if).',
              'können durch unterschiedliche Betonung und Intonation die Wirksamkeit ihrer Aussage erkennen und steuern.',
            ],
          },
          {
            _id: 's5t4st-1c6',
            name: '1. Die Schülerinnen und Schüler können grammatische Strukturen in Texten erkennen und für das Verständnis nutzen sowie beim Sprechen und Schreiben anwenden.',
            subCompetences: [
              'können beim Sprechen und Schreiben einige einfache grammatische Strukturen verwenden, machen dabei aber noch Fehler (z.B. Konjugationsformen wichtiger Verben, Personalpronomen in Subjektstellung, einfache Frage mit Fragewort).',
              'können auf bestimmte Situationen bezogene grammatische Strukturen mit Unterstützung erkennen und für das Verständnis nutzen (z.B. Zeitangaben, Ortsangaben).',
              'können beim Sprechen und Schreiben einfache grammatische Strukturen verwenden, machen dabei aber teilweise noch Fehler (z.B. Wortfolge in einfachen Aussagesätzen und Fragen, Verben mit zwei Objekten, unregelmässige Pluralformen, häufige Präpositionen).',
              'können in Texten mit Unterstützung einfache grammatische Strukturen erkennen und für das Verständnis nutzen (z.B. Wortfolge im Satz, Frage mit Fragewort oder Intonation, Konjugationsformen).',
              'können beim Sprechen und Schreiben auch einige komplexere grammatische Strukturen ausreichend korrekt verwenden (z.B. Hilfs- und Modalverben, verschiedene Formen der Negation, Demonstrativ- und Reflexivpronomen).',
              'können in Texten auch komplexere Strukturen erkennen und für das Verständnis nutzen (z.B. Zeitform der Verben, häufige Modalverben, Konjunktionen zur Begründung, Possessiv- und Reflexivpronomen).',
            ],
          },
          {
            _id: 's5t4st-1c7',
            name: '2. Die Schülerinnen und Schüler können grammatische Strukturen verstehen und mit anderen Sprachen vergleichen.',
            subCompetences: [
              'können unter Anleitung komplexere grammatische Strukturen untersuchen, mit anderen Sprachen vergleichen und Regeln ableiten (z.B. Zeitform, einfache Konjugation).',
              'können über den Vergleich von grammatischen Strukturen verschiedener Sprachen sprachspezifische Regeln erkennen, reflektieren und für den eigenen Sprachgebrauch einschätzen (z.B. Relativpronomen und Relativsatz, unregelmässige Steigerungsform, Konditionalsatz).',
            ],
          },
          {
            _id: 's5t4st-1c8',
            name: '1. Die Schülerinnen und Schüler können angemessen korrekt schreiben.',
            subCompetences: [
              'können in kürzeren Texten zu vertrauten Themen angemessen korrekt schreiben.',
              'können häufig verwendete Formen korrekt schreiben (z.B. I am, they are). ',
              'können Texte zu allgemeinen Themen angemessen korrekt schreiben, auffällige Rechtschreibefehler sind selten.',
            ],
          },
          {
            _id: 's5t4st-1c9',
            name: '2. Die Schülerinnen und Schüler können Rechtschreibregeln der englischen Sprache reflektieren und verstehen.',
            subCompetences: [
              'können unter Anleitung häufige Rechtschreibregeln ableiten.',
              'können die Rechtschreibung überprüfen (z.B. mithilfe eines Wörterbuchs).',
            ],
          },
          {
            _id: 's5t4st-1c10',
            name: '1. Die Schülerinnen und Schüler können ihr eigenes Sprachenlernen reflektieren und planen.',
            subCompetences: [
              'können, bei Bedarf mit Unterstützung, die eigenen Fortschritte und Lernergebnisse einschätzen.',
              'können sich persönliche Ziele setzen und das eigene Lernen planen.',
              'können sich über Lernerfahrungen austauschen.',
              'können auch ausserschulische Lerngelegenheiten erkennen und nutzen (z.B. Internet, Begegnungen, Medien).',
            ],
          },
        ],
      },
      {
        _id: 's5t5',
        name: 'FS2E.6 - Kulturen im Fokus',
        competences: [
          {
            _id: 's5t5st-1c0',
            name: '1. Die Schülerinnen und Schüler kennen einige Merkmale des englischsprachigen Kulturraums sowie kulturelle Gemeinsamkeiten und Unterschiede.',
            subCompetences: [
              'wissen, dass Kenntnisse, die sie über die englischsprachigen Kulturen haben, häufig klischeehafte Aspekte beinhalten und dass in allen Kulturen vielfältige Lebens- und Verhaltensweisen nebeneinander existieren (z.B. Wohnsituation, Essensgewohnheiten, Grussverhalten).',
              'kennen kulturelle Gegebenheiten und exemplarische Kulturerzeugnisse des englischsprachigen Kulturraumes (z.B. Mode, Musik, Technik, geschichtliche Ereignisse, Regionen, Staatsform, Persönlichkeiten, Malerei, Jugendliteratur, Film).',
              'wissen, dass sowohl in der eigenen als auch in englischsprachigen Kulturen unterschiedliche Normen und Werte nebeneinander existieren (z.B. Subkulturen, Musikkulturen, Kleidungsstile, Geschlechter, Generationen).',
            ],
          },
          {
            _id: 's5t5st-1c1',
            name: '1. Die Schülerinnen und Schüler können über ihre Haltung gegenüber dem englischsprachigen Kulturraum und gegenüber kultureller Vielfalt nachdenken.',
            subCompetences: [
              'können über Zweck und Nutzen des Lernens der Fremdsprache Englisch nachdenken und diskutieren.',
              'können ihre Eindrücke in Bezug auf Kontakte mit dem englischsprachigen Kulturraum reflektieren und ihre Haltung begründen (z.B. Jugendkultur).',
              'können aufgrund der erworbenen kulturellen Erfahrungen ihre Haltung gegenüber Klischees formulieren und diskutieren.',
            ],
          },
          {
            _id: 's5t5st-1c2',
            name: '1. Die Schülerinnen und Schüler begegnen Menschen und Erzeugnissen des englischsprachigen Kulturraums virtuell und real.',
            subCompetences: [
              'können mit englischsprachigen Menschen in Kontakt treten und machen dadurch Bekanntschaft mit deren Kulturen (z.B. Brief, Text, Bild, Zeichnung, E-Mail).',
              'können in der Auseinandersetzung mit kulturellen Gegebenheiten und Kulturerzeugnissen aus dem englischsprachigen Raum die eigene Lebenswelt bewusster wahrnehmen und erkennen, dass eigene Norm- und Wertvorstellungen relativ sind (z.B. Schulsystem, geschichtliches Ereignis, Sport, Persönlichkeit).',
              'können in Austauschsituationen ihr erworbenes kulturelles Wissen beobachten, überprüfen und relativieren (z.B. durch Briefkontakt, in den Ferien, in einer realen oder virtuellen Begegnung).',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's6',
    name: 'Ethik, Religionen, Gemeinschaft mit Lebenskunde',
    topics: [
      {
        _id: 's6t0',
        name: 'ERG.1 - Existentielle Grunderfahrungen reflektieren',
        competences: [
          {
            _id: 's6t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können menschliche Grunderfahrungen beschreiben und reflektieren.',
            subCompetences: [
              'können in Erzählungen und Berichten prägende Lebenserfahrungen entdecken und interpretieren (z.B. Glück, Erfolg, Scheitern, Beziehung, Selbstbestimmung, Krankheit, Krieg).',
              'können Erfahrungen des Heranwachsens bzw. Erwachsenwerdens reflektieren (z.B. in Bezug auf Beziehungen, Abhängigkeit, Autonomie), indem sie auf Veränderungen und Entwicklungen achten.',
              'können Grenzerfahrungen betrachten (z.B. Schritte ins Unbekannte, Risikoverhalten, Gefahr, Rettung, Tod), indem sie deren Unumgänglichkeit, Fragwürdigkeit und Faszination reflektieren.',
              'können für prägende Erfahrungen Ausdrucksmöglichkeiten suchen und Worte finden für Fragen, die sie selber beschäftigen.',
            ],
          },
          {
            _id: 's6t0st-1c1',
            name: '2. Die Schülerinnen und Schüler können philosophische Fragen stellen und über sie nachdenken.',
            subCompetences: [
              'können in einfachen Texten aus verschiedenen Zeiten und Kulturen philosophische Fragen und Überlegungen entdecken (z.B. Anekdote, Erzählung, Sinnspruch).',
              'können in philosophischen Gesprächen Gedankenexperimente einsetzen (z.B. Stell dir vor,... Wenn du hättest entscheiden müssen,... Wenn du die Möglichkeit hättest,...).',
              'können in Diskussionen oder Debatten philosophische Fragen identifizieren und Begriffe klären (z.B. Inwiefern gibt es Grenzen der Toleranz? Gehört Gewalt zur Gesellschaft? Muss oder kann es Gerechtigkeit geben? Was darf man alles verbieten?). Philosophieren',
              'können Informationen und Positionen zu aktuellen gesellschaftlichen Herausforderungen und Konflikten bezüglich Interessen und Wahrheitsgehalt hinterfragen (z.B. Schutz und Verwendung von Daten, Umweltfragen, Friedenssicherung).',
            ],
          },
        ],
      },
      {
        _id: 's6t1',
        name: 'ERG.2 - Werte und Normen klären und Entscheidungen verantworten',
        competences: [
          {
            _id: 's6t1st-1c0',
            name: '1. Die Schülerinnen und Schüler können Werte und Normen erläutern, prüfen und vertreten.',
            subCompetences: [
              'können über Sinn und Nutzen gesellschaftlicher und individueller Werte und Normen nachdenken und Normen entsprechend aushandeln.   Werte, Normen, Regeln, Legitimation, Legitimität',
              'können alltägliche Situationen und gesellschaftliche Konstellationen (z.B. Jung/Alt, Arbeitschancen, Bürgerrechte und -pflichten, Gesundheitswesen) im Hinblick auf grundlegende Werte wie Gerechtigkeit, Freiheit, Verantwortung und Menschenwürde betrachten und diskutieren.   Gerechtigkeit, Freiheit, Verantwortung, Menschenwürde',
              'können an exemplarischen Beispielen nachvollziehen, wie sich Werte und Normen in ihrer Umgebung oder in der Gesellschaft wandeln.   Wertewandel, Autoritäten, Gründe, Begründungen, Generationen, Epochen',
            ],
          },
          {
            _id: 's6t1st-1c1',
            name: '2. Die Schülerinnen und Schüler können Regeln, Situationen und Handlungen hinterfragen, ethisch beurteilen und Standpunkte begründet vertreten.',
            subCompetences: [
              'können erlebte, beobachtete oder erzählte Situationen anhand der Perspektiven verschiedener Beteiligter beurteilen.',
              'können Massstäbe ethischer Beurteilung reflektieren.   Werte, Normen, religiöse Vorstellungen, Deklarationen, Instanzen',
              'können die Bedeutung des Gewissens für moralische, rechtliche, ethische Fragen und Konflikte einschätzen und respektieren.   Gewissen',
              'können im alltäglichen Handeln oder gesellschaftlichen Umfeld Benachteiligungen und Diskriminierungen erkennen und entsprechende Regeln diskutieren (z.B. Chancen, Zutritt, Ausschluss, Sprachgebrauch).   Diskriminierung, Emanzipation, Rechte, Interessen, Bedürfnisse',
              'können kontroverse Fragen diskutieren, Positionen, deren Interessen und Begründungen vergleichen und einen Standpunkt vertreten.',
            ],
          },
        ],
      },
      {
        _id: 's6t2',
        name: 'ERG.3 - Spuren und Einfluss von Religionen in Kultur und Gesellschaft erkennen',
        competences: [
          {
            _id: 's6t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können religiöse Motive im Alltag und in kulturellen Werken erkennen und einschätzen, wie Religionen in Medien dargestellt werden.',
            subCompetences: [
              'können am Ort oder auf Reisen religiöse Spuren oder religiöse Stätten identifizieren und in ihrem Kontext betrachten.   Zeichen, Symbole, Religionen',
              'können in kulturellen Werken (z.B. der Populärkultur) religiöse Motive erkennen und nach ihrer Bedeutung fragen (z.B. biblische Gestalten in Bildern, Malerei, Musik, Film, Literatur, Bauten).   Biblische Personen, Engel, Heilige, Gottesbilder',
              'können in alltäglicher Umgebung, in kulturell bedingten Lebensweisen oder Lebensstilen religiöse Aspekte identifizieren und im Kontext ihrer Verwendung deuten (z.B. Kleidung, Accessoires, Musik, Wohnen).   abstrakte, figürliche, konkrete Kunst',
              'können Medienbeiträge zu Aspekten von Religionen und Kulturen vergleichen, nach ihrem sachlichen Gehalt fragen sowie hinterfragen, wie Religionen und Kulturen in den Medien dargestellt werden.   Sachverhalte, Deutungen, Zuschreibungen',
            ],
          },
          {
            _id: 's6t2st-1c1',
            name: '2. Die Schülerinnen und Schüler können Rolle und Wirkungen von Religionen und Religionsgemeinschaften in gesellschaftlichen Zusammenhängen einschätzen.',
            subCompetences: [
              'erkunden eine soziale oder kulturelle Einrichtung (z.B. gemeinnützige Einrichtung, Schule, Friedhof, Kloster, Veranstaltung) und können anhand deren Geschichte den religiösen Hintergrund erkennen.',
              'können positive, ambivalente und negative Wirkungen von Religion einschätzen (z.B. soziale Netze, Integration, Meinungsbildung, Orientierung, Fundamentalismus).',
              'können an der Geschichte des Judentums in der Schweiz und Europa Erfahrungen religiöser und kultureller Minderheiten exemplarisch aufzeigen.   Diaspora, Identität, Toleranz, Emanzipation, Antisemitismus, Schoah/Holocaust, öffentliche Anerkennung, Zionismus',
              'können aktuelle Debatten auf religiöse bzw. weltanschauliche Standpunkte und diskriminierende Zuschreibungen untersuchen.',
            ],
          },
        ],
      },
      {
        _id: 's6t3',
        name: 'ERG.4 - Sich mit Religionen und Weltsichten auseinandersetzen',
        competences: [
          {
            _id: 's6t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können erläutern, wie Texte und Lehren in den Religionen überliefert und verwendet werden.',
            subCompetences: [
              'können exemplarische religiöse Texte mit ihrer kulturellen Herkunft erschliessen (z.B. Ursprung, Epoche, Alltagswelt).   Tora, Tenach, Bibel, Altes und Neues Testament, Evangelien, Koran, Sunna, Hadith',
              'können erläutern, wie heilige Schriften überliefert wurden und wie sie studiert und verwendet werden. mündliche Überlieferung, Handschrift, Buchdruck, Übersetzung; Schriften,Ikonographie, Rezitation, Meditation, Lesung, Auslegung',
              'können die Bedeutung zentraler Gestalten aus den Religionen anhand von Leben und Lehren sowie ihrer Darstellung und Verehrung erläutern. Die Schülerinnen und Schüler können diese aus verschiedenen Perspektiven betrachten (z.B. historisch, ästhetisch, kulturell).   Abraham: Sarah, Isaak, Hagar, Ismael; Mose: Auszug aus Ägypten, Offenbarung am Sinai; Jesus: Maria, Jünger und Jüngerinnen, Kreuz und Auferstehung; Mohammed: Chadidscha, Offenbarung des Korans, Mekka und Medina; Buddha: Ausfahrten, Erwachen',
              'können in ausgewählten religiösen Texten Vorstellungen, Auslegungen und Lehren der betreffenden Religionen erschliessen.',
            ],
          },
          {
            _id: 's6t3st-1c1',
            name: '2. Die Schülerinnen und Schüler können religiöse Praxis im lebensweltlichen Kontext erläutern.',
            subCompetences: [
              'können Gebäude verschiedener Religionen mit ihrer wesentlichen Ausstattung korrekt benennen, beschreiben (z.B. Eindrücke, Merkmale, Stil) und sachlich erläutern (z.B. Funktion, Gebrauch).   Kirche, Moschee, Synagoge, Tempel',
              'wissen, wie sie sich als Besucher/in rücksichtsvoll verhalten.',
              'können Übergangsrituale des Erwachsenwerdens in verschiedenen Religionen und Kulturen erläutern.   Bar Mizwa, Firmung, Konfirmation, Pubertätsfeste, Hochzeit',
              'können ausgewählte Gebote und Regeln verschiedener Religionen erläutern und entsprechende Auslegungen, Bräuche und Verhaltensweisen im Alltag erkennen und respektieren (z.B. Ernährung, Kleidung, Ruhezeiten).',
              'können Angehörigen verschiedener Religionen und Weltsichten begegnen und respektieren, wie sie in ihrer Lebensgestaltung Traditionen einbeziehen (z.B. Rituale in der Familie, in der Gemeinschaft).',
            ],
          },
          {
            _id: 's6t3st-1c2',
            name: '3. Die Schülerinnen und Schüler können Festtraditionen charakterisieren und kulturell einordnen.',
            subCompetences: [
              'können ihre unterschiedlichen Erfahrungen mit Festtraditionen austauschen.',
              'können an einem Beispiel beschreiben, wie sich Festtraditionen in Familie und Gesellschaft verändern und den Wandel kulturell einordnen (z.B. Generationen, Migration, Modernisierung).',
              'können Festzeiten verschiedener Religionen vergleichen (z.B. Bräuche, Symbole, Geschichten, religiöser Gehalt und Bedeutung, soziale Funktion, gesellschaftliche Bedeutung).',
              'respektieren die Bedeutung von Festzeiten für religiöse Gemeinschaften, kulturelle Minderheiten und die Gesellschaft.',
              'können die Bedeutung säkularer Gedenktage oder -jahre einschätzen und entsprechende Anlässe gemeinsam gestalten (z.B. Flüchtlingstage, Tag der Menschenrechte).',
            ],
          },
          {
            _id: 's6t3st-1c3',
            name: '4. Die Schülerinnen und Schüler können sich in der Vielfalt religiöser Traditionen und Weltanschauungen orientieren und verschiedenen Überzeugungen respektvoll begegnen.',
            subCompetences: [
              'erkunden religiöses Leben und Religionsgemeinschaften in der lokalen Umgebung (z.B. Begegnungen, Besichtigungen, Recherchen, Interviews).',
              'können Religionen und kulturelle Minderheiten mit ihren Anliegen nicht diskriminierend darstellen und verschiedene Auffassungen transparent wiedergeben.   Lehren, Interpretation/Auslegung, Statements: öffentliche und private Äusserungen',
              'können vereinnahmende Tendenzen - sowohl religiöser und weltanschaulicher Gruppen als auch des gesellschaftlichen Mainstreams - in religiösen und moralischen Fragen erkennen und aus unterschiedlichen Perspektiven betrachten.   Autonomie, Manipulation, Abhängigkeit, Ausgrenzung, Mainstream',
              'können verschiedene Auslegungen innerhalb der Religionen erkennen, der Vielfalt von Überzeugungen und religiösen Traditionen sowie den Bemühungen um Toleranz, Integration und Verständigung respektvoll begegnen.',
            ],
          },
          {
            _id: 's6t3st-1c4',
            name: '5. Die Schülerinnen und Schüler können Weltsichten und Weltdeutungen reflektieren.',
            subCompetences: [
              'können in verschiedenen Erfahrungsbereichen (z.B. individuelles Erleben, soziale Beziehungen) und Fachgebieten (z.B. Technik, Kunst, Religion, Politik, Geschichte, Biologie, Physik, Recht, Ökonomie) unterschiedliche Fragestellungen und Weltsichten erkennen.',
              'können wissenschaftliches Fragen, Forschen und Erklären von Lebensweisheit, religiöser Tradition und Überzeugung abgrenzen.   Wissen und Glauben, Weisheit',
              'können religiös sowie nicht religiös begründete und religionskritische Positionen in konkreten Situationen auf ihre Anliegen prüfen und einschätzen.   Tradition, Freiheit, Identität, Toleranz',
            ],
          },
        ],
      },
      {
        _id: 's6t4',
        name: 'ERG.5 - Ich und die Gemeinschaft - Leben und Zusammenleben gestalten',
        competences: [
          {
            _id: 's6t4st-1c0',
            name: '1. Die Schülerinnen und Schüler können eigene Ressourcen wahrnehmen, einschätzen und einbringen.',
            subCompetences: [
              'können ihre Erfahrungen und Interessen einbringen, ihre Stärken und Talente beschreiben und sich in verschiedenen Situationen (z.B. Bewerbung, neue Gruppe) entsprechend vorstellen.   Stärken, Talente, Entwicklung',
              'kennen Möglichkeiten, mit Spannungssituationen und Stress umzugehen (z.B. Pausengestaltung, Bewegung).   Erholung, Entspannung, Planungshilfen, Lerntechniken',
              'kennen Anlaufstellen für Problemsituationen (z.B. Familie, Schule, Sexualität, Belästigung, Gewalt, Sucht, Armut) und können sie bei Bedarf konsultieren.   Beratung, Therapie, Selbsthilfe',
              'können Träume und Sehnsüchte wahrnehmen, Vorstellungen ihrer Zukunft äussern und ihre Umsetzbarkeit reflektieren.',
            ],
          },
          {
            _id: 's6t4st-1c1',
            name: '2. Die Schülerinnen und Schüler können Geschlecht und Rollen reflektieren.',
            subCompetences: [
              'können Erfahrungen und Erwartungen in Bezug auf Geschlecht und Rollenverhalten in der Gruppe formulieren und respektvoll diskutieren (z.B. Bedürfnisse, Kommunikation, Gleichberechtigung).',
              'können Darstellungen von Männer- und Frauenrollen sowie Sexualität in Medien auf Schönheitsideale und Rollenerwartungen analysieren und Diskriminierungen aufgrund des Geschlechts oder der sexuellen Orientierung kritisch betrachten.',
              'kennen Faktoren, die Diskriminierung und Übergriffe begünstigen und reflektieren ihr eigenes Verhalten.   Klischee, Vorurteile, Abhängigkeit, Übergriffe',
            ],
          },
          {
            _id: 's6t4st-1c2',
            name: '3. Die Schülerinnen und Schüler können Beziehungen, Liebe und Sexualität reflektieren und ihre Verantwortung einschätzen.',
            subCompetences: [
              'reflektieren eigene Erwartungen und Ansprüche in ihrem Umfeld an Beziehungen, Freundschaften, Partnerschaft und Ehe.   Freundschaft, Partnerschaft, Ehe',
              'verbinden Sexualität mit Partnerschaft, Liebe, Respekt, Gleichwertigkeit und Gleichberechtigung und können sexuelle Orientierungen nicht diskriminierend benennen.   Hetero-, Homosexualität',
              'kennen ihre Rechte im Umgang mit Sexualität und respektieren die Rechte anderer.   Selbstbestimmung, Schutzalter, sexuelle Orientierung, Schutz vor Abhängigkeit und Übergriffen',
              'können Verhaltensweisen und ihre Auswirkungen im Bereich Sexualität kritisch beurteilen.   Risiken, Übergriffe, Missbrauch, Pornographie, Promiskuität, Prostitution',
            ],
          },
          {
            _id: 's6t4st-1c3',
            name: '4. Die Schülerinnen und Schüler können Gemeinschaft aktiv mitgestalten.',
            subCompetences: [
              'lernen auf Gefühle und Bedürfnisse zu achten, Spannungen wahrzunehmen und wo nötig auszuhalten.',
              'können Anerkennung aussprechen und Rückmeldungen wertschätzend anbringen.',
              'können Zuständigkeiten aushandeln und vereinbaren und sich verantwortlich für die Gemeinschaft engagieren (z.B. Aufgaben, Ämter, Aktivitäten planen).',
              'können vereinnahmende Einflüsse auf mögliche Ursachen analysieren und sich abgrenzen (z.B. Manipulation, Modetrends, Gruppendruck, Mobbing).',
            ],
          },
          {
            _id: 's6t4st-1c4',
            name: '5. Die Schülerinnen und Schüler können verschiedene Lebenslagen und Lebenswelten erkunden und respektieren.',
            subCompetences: [
              'können Menschen in verschiedenen Lebenslagen und Lebenswelten wahrnehmen sowie über Erfahrungen, Bedürfnisse und Werte nachdenken (z.B. berufliche, ökonomische und familiäre Situation; Krankheit, Behinderung, Asyl, Migration).',
              'können Anteil nehmen, wie Menschen mit schweren Erfahrungen und Benachteiligungen umgehen, indem sie ihre Perspektive einnehmen (z.B. Verlust, Behinderung, Krankheit, Flucht, traumatische Erfahrungen).',
              'können anhand von Beispielen Familiengeschichten in einen grösseren Zusammenhang einordnen und reflektieren, wie dies die Familienmitglieder geprägt hat (z.B. ökonomische Entwicklung, sozialer Wandel, Flucht, Migration, Erziehung, Rolle des Geschlechts, Generationen, Traditionen).',
              'können Vorurteile, Stereotypen, Feindbilder und Befürchtungen auf ihre Ursachen hin analysieren (z.B. Medien, politische Interessen, eigene Erfahrungen).',
              'können den gesellschaftlichen und politischen Umgang mit Andersdenkenden und Minderheiten diskutieren (z.B. Integration, Minoritäten, Nonkonformisten).',
            ],
          },
          {
            _id: 's6t4st-1c5',
            name: '6. Die Schülerinnen und Schüler können Anliegen einbringen, Konflikte wahrnehmen und mögliche Lösungen suchen.',
            subCompetences: [
              'können eigene Anliegen vertreten und Anliegen anderer zur Meinungsbildung und zu Entscheidungen in Gruppen einbeziehen.',
              'können mögliche Ursachen und Folgen von Aggression im alltäglichen Erleben erläutern und reflektieren.   Aggression',
              'kennen Diskussionsformen und Kommunikationsregeln (z.B. auf andere eingehen, Feedback, Nonverbales) und können diese anwenden.   Aussprache, Rollengespräch, Debatte; Kommunikationsregeln',
              'können verschiedene Wege der Konfliktbewältigung erwägen und Scheinlösungen erkennen (z.B. Schuldabwälzung, Ausweichen, Verharmlosung, Mehrheitsdiktat). lösung, Ausgleich, Mediation, Abstimmung',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's7',
    name: 'Französisch',
    topics: [
      {
        _id: 's7t0',
        name: 'FS1F.1 - Hören',
        competences: [
          {
            _id: 's7t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können verschiedenartige Hörtexte und Gespräche verstehen (Sachtexte, ästhetische Texte, Texte im Schulalltag, Gespräche im Kontakt mit Französisch sprechenden Personen).',
            subCompetences: [
              'können in Beiträgen über vertraute Themen verstehen, worum es geht, wenn langsam und deutlich gesprochen wird (z.B. Vortrag, Reportage, Filmszene).',
              'können einfache Mitteilungen, Anweisungen und Erklärungen verstehen (z.B. Anleitung zu einem Experiment, einfache Gebrauchsanweisung), die man ihnen persönlich gibt.',
              'können in längeren Gesprächen über vertraute Themen meistens verstehen, worum es geht, wenn deutlich gesprochen wird (z.B. Interview, Telefongespräch, persönliche Begegnung).',
              'können längere Gespräche und Texte über vertraute Themen (z.B. Trendsportart, Markenartikel) in groben Zügen verstehen, wenn langsam und deutlich gesprochen wird oder wenn Passagen mehrmals gehört werden können (z.B. Hörbuch, Diskussion, Fernsehsendung).',
              'können aus längeren Texten über vertraute Themen wichtige Informationen heraushören, wenn relativ langsam und deutlich gesprochen wird (z.B. Nachricht, Interview, Vortrag).',
              'können den Inhalt von längeren Gesprächen und Texten, die sie interessieren, im Grossen und Ganzen verstehen, wenn deutlich gesprochen wird (z.B. Reportage, Diskussion, Dialog in einem Film).',
              'können detaillierte Anweisungen genau verstehen (z.B. Spielanleitung).',
              'können klare und unkompliziert aufgebaute Texte über einigermassen vertraute Themen verstehen (z.B. Präsentation, Hörbuch).',
            ],
          },
          {
            _id: 's7t0st-1c1',
            name: '2. Die Schülerinnen und Schüler können die ästhetische Wirkung von Hörtexten entdecken und beschreiben.',
            subCompetences: [
              'können in Hörtexten einzelne ästhetische Gestaltungsmittel entdecken und auf Deutsch beschreiben (z.B. Slam Poetry, Sketch).',
              'können über Hörtexte neue Welten entdecken und zu eigenen Vorlieben finden.',
            ],
          },
          {
            _id: 's7t0st-1c2',
            name: '1. Die Schülerinnen und Schüler können Hörstrategien einsetzen und reflektieren. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können beurteilen, welche Hörstrategien, auch aus anderen Sprachen, für sie hilfreich sind und diese einsetzen (z.B. auf Bekanntes, Geräusche und Bilder achten, Gestik und Verhalten der Sprecherin/des Sprechers beobachten).',
              'können Hörstrategien zunehmend selbstständig einsetzen (z.B. mehrfach hören, Vorwissen aktivieren, Thema erkennen, unbekannte Wörter erschliessen, Satzbedeutung ableiten).',
            ],
          },
          {
            _id: 's7t0st-1c3',
            name: '1. Die Schülerinnen und Schüler können Inhalte von Gesprächen und Hörtexten auf Französisch verstehen und sinngemäss ins Deutsche übertragen.',
            subCompetences: [
              'können in einem einfachen Gespräch mit einer Französisch sprechenden Person (z.B. Austauschschülerin oder -schüler) einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen verstehen und sinngemäss mündlich auf Deutsch wiedergeben (z.B. Herkunft, Hobby, Interessen). Voraussetzung ist, dass diese Person deutlich spricht.',
              'können Einzelinformationen von Lautsprecherdurchsagen und Mitteilungen (z.B. Verspätungsmeldung, Hausaufgabe, Fernsehnachricht) sowie die Hauptaussagen eines kurzen Interviews verstehen und sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben. Voraussetzung ist, dass langsam und deutlich gesprochen wird und es sich um ein vertrautes Thema handelt.',
              'können längere, klar aufgebaute Gespräche und Hörtexte zu Themen des Alltagslebens verstehen und die Hauptaussagen oder Einzelinformationen sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben (z.B. Interview, Treffen mit Partnerklasse).',
              'können in einem einfachen Gespräch mit einer Französisch sprechenden Person (z.B. Austauschschülerin oder -schüler) einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen verstehen und sinngemäss mündlich auf Englisch wiedergeben (z.B. Herkunft, Hobby, Interessen). Voraussetzung ist, dass die Französisch sprechende Person deutlich spricht und bereit ist zu helfen.',
            ],
          },
        ],
      },
      {
        _id: 's7t1',
        name: 'FS1F.2 - Lesen',
        competences: [
          {
            _id: 's7t1st-1c0',
            name: '1. Die Schülerinnen und Schüler können verschiedenartige Texte lesen und verstehen (Sachtexte, ästhetische Texte, Texte im Schulalltag, Texte im Kontakt mit Französisch sprechenden Personen).',
            subCompetences: [
              'können in klar strukturierten Texten die Hauptinformationen oder Einzelinformationen verstehen, wenn das Thema vertraut ist (z.B. Geschichte, Reportage, Vorschrift).',
              'können einfache kurze Anleitungen befolgen, wenn die Schritte illustriert sind (z.B. Experiment, Spiel, Rezept).',
              'können einfache persönliche Texte über vertraute Dinge verstehen (z.B. Brief, Blog).',
              'können unterschiedlich lange Texte zu Themen, die sie interessieren, verstehen (z.B. vereinfachter literarischer Text, Buchbesprechung, Reportage).',
              'können klar strukturierten Hinweisen wichtige Informationen entnehmen (z.B. Bedienungsanleitung).',
              'können in unkomplizierten Texten zu Themen, die sie interessieren oder zu denen sie Vorkenntnisse haben, die Hauptaussagen verstehen (z.B. Reisebericht, Briefaustausch).',
              'können Texte im Wesentlichen verstehen, wenn das Thema vertraut ist (z.B. Auszug aus einem Jugendbuch, Liedtext, unkomplizierter Sachtext).',
              'können klaren schriftlichen Anleitungen folgen (z.B. Lernprojekt, Gerätebedienung, Spiel).',
              'können in einfachen argumentativen Texten die zugrunde liegende Meinung oder Haltung erkennen (z.B. Blogeintrag).',
            ],
          },
          {
            _id: 's7t1st-1c1',
            name: '2. Die Schülerinnen und Schüler können die ästhetische Wirkung von Lesetexten entdecken und beschreiben.',
            subCompetences: [
              'können in einfache, mit Bilder illustrierte kurze Texte eintauchen (z.B. Bande dessinée, illustrierte Geschichte).',
              'können in Texten ästhetische Gestaltungsmittel entdecken und auf Deutsch beschreiben (z.B. Wortspiele in einem Prosatext, Slang in einer Bande dessinée, Reime in einem Gedicht).',
              'können sich in eine Geschichte hineinversetzen, neue Welten entdecken und zu eigenen Vorlieben finden (z.B. Kriminalgeschichte, Science Fiction, Bande dessinée).',
            ],
          },
          {
            _id: 's7t1st-1c2',
            name: '1. Die Schülerinnen und Schüler können Lesestrategien einsetzen und reflektieren. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können beurteilen, welche Lesestrategien, auch aus anderen Sprachen, für sie hilfreich sind und diese einsetzen (z.B. Vorwissen aktivieren, Bilder und Titel betrachten, Thema erkennen, Bekanntes und Parallelwörter erkennen, Schlüsselwörter erkennen, Unbekanntes erschliessen, verschiedene Informationsquellen nutzen).',
              'können Lesestrategien zunehmend selbstständig einsetzen (z.B. Informationen aus der Textstruktur nutzen, Kernaussagen markieren, Thema erkennen, Bedeutungen aus dem Kontext ableiten, internationale Wörter finden).',
            ],
          },
          {
            _id: 's7t1st-1c3',
            name: '1. Die Schülerinnen und Schüler können Inhalte schriftlicher Texte auf Französisch verstehen und sinngemäss ins Deutsche übertragen.',
            subCompetences: [
              'können die Hauptaussagen oder Einzelinformationen aus einfachen, kurzen Texten verstehen und sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben (z.B. EMail, Sachtext, Liedtext). Voraussetzung ist, dass es sich um vertraute Themen handelt (z.B. Schule, Freizeit, Tiere).',
              'können längere, klar aufgebaute Texte zu Themen des Alltagslebens verstehen und die Hauptaussagen oder Einzelinformationen sinngemäss mündlich oder schriftlich auf Deutsch wiedergeben (z.B. Internetseite, Artikel, Geschichte).',
              'können die Hauptaussagen oder Einzelinformationen aus einfachen, kurzen Texten verstehen und sinngemäss schriftlich auf Englisch wiedergeben (z.B. Sachtext, E-Mail). Voraussetzung ist, dass es sich um vertraute, konkrete Themen handelt.',
            ],
          },
        ],
      },
      {
        _id: 's7t2',
        name: 'FS1F.3 - Sprechen (monologisch und dialogisch)',
        competences: [
          {
            _id: 's7t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können an verschiedenen Gesprächen teilnehmen (über Sachthemen, über ästhetische Themen, im Schulalltag, mit Französisch sprechenden Personen).',
            subCompetences: [
              'können einfache Aussagen zu vertrauten Themen machen und darauf reagieren (z.B. etwas erklären, Verständnis prüfen).',
              'können zu alltäglichen Aktivitäten Fragen stellen und beantworten (z.B. Freizeit, Reisen, Unterricht).',
              'können ausdrücken, ob sie einverstanden sind oder lieber etwas anderes möchten (z.B. Vorschlag, Abmachung).',
              'können vertraute Personen um einen Gefallen bitten und auf Bitten reagieren (z.B. etwas ausleihen, Wunsch äussern).',
              'können zu vertrauten Themen auf einfache Art Informationen austauschen (z.B. Mode, Film, Musik).',
              'können ihre Meinung sagen und nach der Meinung von anderen fragen (z.B. Diskussion, Interview, Gruppenarbeit).',
              'können einfache Telefongespräche führen.',
              'können mit Gleichaltrigen längere Gespräche über gemeinsame Interessen führen, falls diese sich um gegenseitiges Verstehen bemühen (z.B. Ferienbekanntschaft, Austauschpartner/in).',
              'können spontan Fragen stellen zu besonderen Ereignissen oder Erlebnissen (z.B. Ferien, Fest, Unfall).',
              'können in Diskussionen oder bei Entscheidungen die eigene Haltung argumentativ einbringen, Vorschläge machen und die Meinungen anderer kurz kommentieren (z.B. Projektarbeit, Wahl der Lektüre, Streitgespräch).',
              'können sich in alltäglichen Situationen beschweren (z.B. defektes Produkt).',
            ],
          },
          {
            _id: 's7t2st-1c1',
            name: '1. Die Schülerinnen und Schüler können zu verschiedenen Themen und in unterschiedlichen Situationen zusammenhängend sprechen (über Sachthemen, über ästhetische Themen, über Themen und Abläufe im Schulalltag, im Kontakt mit Französisch sprechenden Personen).',
            subCompetences: [
              'können kurze Geschichten erzählen, indem sie die Ereignisse aneinanderreihen.',
              'können ihre persönlichen Meinungen, Vorlieben und Vermutungen mit einfachen Worten äussern und begründen (z.B. Musik, Buch, Regeln).',
              'können vertraute Dinge und Sachverhalte kurz beschreiben (z.B. Tier, Feiertag, Umgebung).',
              'können mit einfachen Worten alltägliche Ereignisse und persönliche Erfahrungen beschreiben und kurz begründen, was ihnen gefällt und was weniger (z.B. Ausflug, Party).',
              'können Geschichten nacherzählen und ihre Meinung dazu äussern (z.B. Film, Buch).',
              'können ihre Ansichten, Vermutungen und Pläne kurz erklären und begründen (z.B. Ausflug, Reise).',
              'können über alltägliche Themen mit einfachen Worten ihre Meinung äussern und begründen (z.B. Taschengeld).',
              'können über selbst gewählte Themen berichten (z.B. Geschichte, Ereignis).',
              'können ihre Meinung mitteilen und begründen (z.B. Berufswünsche).',
              'können detailliert erklären, wie man etwas macht, was sie selbst gut können (z.B. Arbeitsschritte bei Projektarbeit, kochen).',
              'können zu persönlichen Erlebnissen ihre Gefühle beschreiben und begründen.',
            ],
          },
          {
            _id: 's7t2st-1c2',
            name: '2. Die Schülerinnen und Schüler können beim Vortragen Texte gestalten und eine ästhetische Wirkung erzielen.',
            subCompetences: [
              'können verschiedene Textformen kreativ vortragen (z.B. Liedtext, Rap, Chant, Gedicht, Lesetheater).',
              'können Texte kreativ gestalten und eine ästhetische Wirkung erzielen (z.B. Sketch, kurze Geschichte). ',
              'können Texte bewusst gestalten und inszenieren und sich auf Deutsch über die Wirkung austauschen (z.B. Slam Poetry, Geschichte, Szene aus einem Theaterstück).',
            ],
          },
          {
            _id: 's7t2st-1c3',
            name: '1. Die Schülerinnen und Schüler können Strategien einsetzen und reflektieren, um das Sprechen zu steuern. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können Sprechhemmungen überwinden, bei Bedarf mit Unterstützung, und dabei Fehler als Lerngelegenheiten nutzen.',
              'können Sprechstrategien einsetzen, um eine bessere Wirkung ihrer Gesprächsbeiträge zu erzielen (z.B. um Wiederholung bitten, Umschreibungen und Stichwörter nutzen, im Selbstgespräch üben).',
              'können beurteilen, welche Sprechstrategien für sie hilfreich sind und welche sie aus anderen Sprachen übertragen können.',
              'können Sprechstrategien zunehmend selbstständig einsetzen (z.B. formelhafte Wendungen zur Gesprächssteuerung einsetzen, andere zur Beteiligung auffordern, nachfragen, um Bestätigung bitten)',
              'können einige Fehler, die beim freien Sprechen auftreten, erkennen und sich selber korrigieren.',
            ],
          },
          {
            _id: 's7t2st-1c4',
            name: '1. Die Schülerinnen und Schüler können Inhalte aus Gesprächen, Hörtexten oder schriftlichen Texten auf Deutsch sinngemäss ins Französische übertragen.',
            subCompetences: [
              'können aus einem einfachen Gespräch mit einer Deutsch sprechenden Person einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen sinngemäss auf Französisch wiedergeben (z.B. Herkunft, Hobby, Interessen).',
              'können Lautsprecherdurchsagen und kurze mündliche Mitteilungen auf Deutsch mit einfachen Sätzen und Wendungen sinngemäss auf Französisch wiedergeben (z.B. Verspätungsmeldung, Wetterbericht).',
              'können die Hauptaussagen oder Einzelinformationen aus einfachen und kurzen schriftlichen Texten auf Deutsch (z.B. E-Mail, Prospekt, Veranstaltungsprogramm) sinngemäss auf Französisch wiedergeben. Voraussetzung ist, dass es sich um vertraute Themen handelt (z.B. Schule, Freizeit, Tiere).',
              'können die Hauptaussagen oder Einzelinformationen aus einem längeren, klar aufgebauten Gespräch mit einer Deutsch sprechenden Person sowie aus deutschen Hörtexten oder schriftlichen Texten (z.B. Treffen mit Partnerklasse, Geschichte, Sachtext) sinngemäss auf Französisch wiedergeben. Voraussetzung ist, dass es sich um vertraute Themen handelt.',
              'können in einer Gesprächssituation zwischen einer französischsprachigen und einer englischsprachigen Person sinngemäss vermitteln (z.B. einfache, kurze Fragen und Informationen zur Person oder zu alltäglichen Situationen).',
            ],
          },
        ],
      },
      {
        _id: 's7t3',
        name: 'FS1F.4 - Schreiben',
        competences: [
          {
            _id: 's7t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können verschiedene Texte verfassen (Sachtexte, ästhetische Texte, Texte im Schulalltag, im schriftlichen Kontakt mit Französisch sprechenden Personen).',
            subCompetences: [
              'können mit sprachlichem Support (z.B. Chunks) einfache Geschichten beginnen oder zu Ende führen.',
              'können sich einfache Notizen machen und kurze Mitteilungen verfassen (z.B. Sachverhalt, Wegbeschreibung zu Skizze, Einladung).',
              'können mit einfachen Sätzen und Ausdrücken über vertraute Gegenstände und Personen berichten (z.B. Tagesablauf, Portrait, Aktivität).',
              'können mit einfachen Sätzen kurze Geschichten erzählen (z.B. zu einer Bildergeschichte).',
              'können in einfachen Sätzen darüber berichten, was wann und wo geschehen ist (z.B. Erlebnis).',
              'können Gleichaltrige auf einfache Weise über sich selbst oder alltägliche Dinge informieren und auf solche Informationen reagieren (z.B. Lebenslauf, Wandzeitung, Anzeige).',
              'können einfache Texte über vertraute Themen zusammenfassen und ihre Meinung dazu äussern (z.B. Buch- oder Filmbesprechung).',
              'können in einfachen zusammenhängenden Texten über ein Ereignis berichten (z.B. Reisebericht, Experiment, kultureller Anlass).',
              'können vertraute Themen mit kurzen Texten und Bildern darstellen (z.B. Poster, Blogeintrag, Schülerzeitung).',
            ],
          },
          {
            _id: 's7t3st-1c1',
            name: '2. Die Schülerinnen und Schüler können eigene Texte kreativ und spielerisch gestalten und eine ästhetische Wirkung erzielen.',
            subCompetences: [
              'können in eigenen Texten mit einfachen Gestaltungsmitteln eine ästhetische Wirkung erzielen (z.B. Gedicht, Bande dessinée, Bildgeschichte).',
              'können beim kreativen Schreiben verschiedene ästhetische Gestaltungsmittel bewusst einsetzen und sich auf Deutsch über die Wirkung austauschen (z.B. Kurzgeschichte, Raptext, Werbespot).',
            ],
          },
          {
            _id: 's7t3st-1c2',
            name: '1. Die Schülerinnen und Schüler können Strategien zur Schreibunterstützung einsetzen und reflektieren. Dabei nutzen sie auch in anderen Sprachen aufgebaute Strategien.',
            subCompetences: [
              'können beurteilen, welche Schreibstrategien, auch aus anderen Sprachen, für sie hilfreich sind und diese einsetzen, um eine bessere Wirkung ihrer Texte zu erzielen (z.B. Informationen sammeln, Planungs- und Strukturierungshilfen nutzen, grammatische Übersichten und Merkblätter, Textmuster und Textverarbeitungsprogramm verwenden).',
              'können Schreibstrategien zunehmend selbstständig einsetzen (z.B. Informationen sammeln, Mindmap, Cluster erstellen, Vokabular in verschiedenen Medien suchen, Text überarbeiten und korrigieren, Wörter-, Grammatikbücher und das Internet gezielt nutzen).',
              'können einige Fehler, die beim Schreiben auftreten, erkennen und korrigieren.',
            ],
          },
          {
            _id: 's7t3st-1c3',
            name: '1. Die Schülerinnen und Schüler können Inhalte deutscher Texte sinngemäss ins Französische übertragen.',
            subCompetences: [
              'können einfache mündliche und schriftliche Mitteilungen oder Fragen auf Deutsch (z.B. Ankunftszeit, Treffpunkt, Bitte um Rückruf) in kurzen, einfachen Notizen und Nachrichten sinngemäss auf Französisch festhalten.',
              'können aus schriftlichen Texten auf Deutsch (z.B. Broschüre, E-Mail, Artikel in einer Zeitschrift) die wesentlichen Angaben sinngemäss auf Französisch wiedergeben.',
              'können Hauptaussagen oder Einzelinformationen aus einfachen und kurzen schriftlichen Mitteilungen in Englisch mit einfachen Sätzen und Wendungen sinngemäss auf Französisch wiedergeben. Voraussetzung ist, dass es sich um vertraute, konkrete Themen handelt.',
            ],
          },
        ],
      },
      {
        _id: 's7t4',
        name: 'FS1F.5 - Bewusstheit für Sprache',
        competences: [
          {
            _id: 's7t4st-1c0',
            name: '1. Die Schülerinnen und Schüler können ihre Aufmerksamkeit auf  sprachliche Vielfalt richten.',
            subCompetences: [
              'können sprachliche Vielfalt in Europa und in der Welt erkennen.',
              'können die Sprachenvielfalt in der Schweiz beschreiben.',
              'können Status und Rolle verschiedener Sprachen untereinander vergleichen (z.B. Landessprachen, Nationalsprachen, Herkunftssprachen, internationale Verkehrssprachen).',
            ],
          },
          {
            _id: 's7t4st-1c1',
            name: '2. Die Schülerinnen und Schüler können ihre Aufmerksamkeit auf sprachliche Phänomene richten.',
            subCompetences: [
              'können verschiedene Varietäten des Französischen wahrnehmen (le français dans le monde). ',
              'können in der Fremdsprache verschiedene Register erkennen (z.B. formelle und informelle Sprache, Umgangssprache).',
              'können sprachliche Phänomene in verschiedenen Sprachen vergleichen (z.B. Herkunft von Wörtern, Lehnwörter, Internationalismen).',
            ],
          },
          {
            _id: 's7t4st-1c2',
            name: '1. Die Schülerinnen und Schüler verfügen über einen angemessenen Wortschatz, um sich mündlich und schriftlich zu äussern.',
            subCompetences: [
              'verfügen über ein genügend grosses Repertoire an Wörtern und Wendungen, das ihnen erlaubt, Texte zu allgemeineren Themen zu verfassen sowie an routinemässigen Gesprächen aktiv teilzunehmen.',
              'verfügen über ein ausreichendes Repertoire an Wörtern und Wendungen, das ihnen erlaubt, Texte zu unterschiedlichen Themen der eigenen Lebenswelt zu verfassen sowie an alltäglichen Gesprächen aktiv teilzunehmen.',
            ],
          },
          {
            _id: 's7t4st-1c3',
            name: '2. Die Schülerinnen und Schüler können Strategien und Techniken zum Wortschatzerwerb und Regeln der Wortbildung reflektieren und für ihr Lernen nutzen. Sie können dabei auf Lernerfahrungen und Kenntnisse in anderen Sprachen zurückgreifen.',
            subCompetences: [
              'können, wenn nötig mit Unterstützung, dem eigenen Lernstil angepassten Techniken zum Wortschatzerwerb auswählen (z.B. Cluster, Mindmap, Tonaufnahme).',
              'können unter Anleitung Regeln der Wortbildung (auch sprachenübergreifend) erkennen und neue Wörter und Wendungen bilden (z.B. refaire/reload, prepaid/préfabriqué, Worfamilie).',
              'können selbstständig Regeln der Wortbildung ableiten und für ihr Lernen nutzen.',
              'können verschiedene Formen von Wörterbüchern (z.B. in Papierform, elektronische, online) vergleichen und sich über deren Anwendungsmöglichkeiten austauschen.',
            ],
          },
          {
            _id: 's7t4st-1c4',
            name: '1. Die Schülerinnen und Schüler können klar und verständlich sprechen und vorlesen.',
            subCompetences: [
              'können trotz eines merklichen Akzents in der Regel verständlich sprechen und vorlesen.',
              'können sich meist so ausdrücken, dass die Aussprache gut verständlich ist und die Intonation dem Inhalt entspricht.',
            ],
          },
          {
            _id: 's7t4st-1c5',
            name: '2. Die Schülerinnen und Schüler können typische Aussprache- und Intonationsregeln der französischen Sprache verstehen.',
            subCompetences: [
              'können unter Anleitung häufig vorkommende Schriftbilder mit der korrekten Aussprache verbinden und daraus Regeln ableiten (z.B. heure, professeur, directeur). ',
              'können durch unterschiedliche Betonung und Intonation die Wirksamkeit ihrer Aussage erkennen und steuern.',
            ],
          },
          {
            _id: 's7t4st-1c6',
            name: '1. Die Schülerinnen und Schüler können grammatische Strukturen in Texten erkennen und für das Verständnis nutzen sowie beim Sprechen und Schreiben anwenden.',
            subCompetences: [
              'können beim Sprechen und Schreiben einfache grammatische Strukturen verwenden, machen dabei aber teilweise noch Fehler (z.B. Wortfolge in einfachen Aussagesätzen und Fragen, Verben mit zwei Objekten, unregelmässige Pluralformen, häufige Präpositionen).',
              'können in Texten einfache grammatische Strukturen erkennen und für das Verständnis nutzen (z.B. Wortfolge im Satz, Frage mit Fragewort oder Intonation, Konjugationsformen).',
              'können beim Sprechen und Schreiben auch einige komplexere grammatische Strukturen ausreichend korrekt verwenden (z.B. Hilfs- und Modalverben, verschiedene Formen der Negation, Demonstrativ- und Reflexivpronomen).',
              'können in Texten auch komplexere Strukturen erkennen und für das Verständnis nutzen (z.B. Zeitform der Verben, häufige Modalverben, Konjunktionen zur Begründung, Possessiv- und Reflexivpronomen).',
            ],
          },
          {
            _id: 's7t4st-1c7',
            name: '2. Die Schülerinnen und Schüler können grammatische Strukturen verstehen und mit anderen Sprachen vergleichen.',
            subCompetences: [
              'können unter Anleitung komplexere grammatische Strukturen untersuchen, mit anderen Sprachen vergleichen und Regeln ableiten (z.B. Zeitform, einfache Konjugation).',
              'können über den Vergleich von grammatischen Strukturen verschiedener Sprachen sprachspezifische Regeln erkennen, reflektieren und für den eigenen Sprachgebrauch einschätzen (z.B. Relativpronomen und Relativsatz, unregelmässige Steigerungsform, Konditionalsatz).',
            ],
          },
          {
            _id: 's7t4st-1c8',
            name: '1. Die Schülerinnen und Schüler können angemessen korrekt schreiben.',
            subCompetences: [
              'können in kürzeren Texten zu vertrauten Themen angemessen korrekt schreiben.',
              "können häufig verwendete Formen korrekt schreiben (z.B. j'ai). ",
              'können Texte zu allgemeinen Themen angemessen korrekt schreiben, auffällige Rechtschreibefehler sind selten.',
            ],
          },
          {
            _id: 's7t4st-1c9',
            name: '2. Die Schülerinnen und Schüler können Rechtschreibregeln der französischen Sprache reflektieren und verstehen.',
            subCompetences: [
              'können unter Anleitung häufige Rechtschreibregeln ableiten.',
              'können die Rechtschreibung überprüfen (z.B. mithilfe eines Wörterbuchs).',
            ],
          },
          {
            _id: 's7t4st-1c10',
            name: '1. Die Schülerinnen und Schüler können ihr eigenes Sprachenlernen reflektieren und planen.',
            subCompetences: [
              'können, bei Bedarf mit Unterstützung, die eigenen Fortschritte und Lernergebnisse einschätzen.',
              'können sich persönliche Ziele setzen und das eigene Lernen planen.',
              'können sich über Lernerfahrungen austauschen.',
              'können auch ausserschulische Lerngelegenheiten erkennen und nutzen (z.B. Internet, Begegnungen, Medien).',
            ],
          },
        ],
      },
      {
        _id: 's7t5',
        name: 'FS1F.6 - Kulturen im Fokus',
        competences: [
          {
            _id: 's7t5st-1c0',
            name: '1. Die Schülerinnen und Schüler kennen einige Merkmale des französischsprachigen Kulturraums sowie kulturelle Gemeinsamkeiten und Unterschiede.',
            subCompetences: [
              'wissen, dass Kenntnisse, die sie über die französischsprachigen Kulturen haben, häufig klischeehafte Aspekte beinhalten und dass in allen Kulturen vielfältige Lebens- und Verhaltensweisen nebeneinander existieren (z.B. Wohnsituation, Essensgewohnheiten, Grussverhalten).',
              'kennen kulturelle Gegebenheiten und exemplarische Kulturerzeugnisse des französischsprachigen Kulturraumes (z.B. Mode, Musik, Technik, geschichtliche Ereignisse, Regionen, Staatsform, Persönlichkeiten, Malerei, Jugendliteratur, Film).',
              'wisssen, dass sowohl in der eigenen als auch in französischsprachigen Kulturen unterschiedliche Normen und Werte nebeneinander existieren (z.B. Subkulturen, Musikkulturen, Kleidungsstile, Geschlechter, Generationen).',
            ],
          },
          {
            _id: 's7t5st-1c1',
            name: '1. Die Schülerinnen und Schüler können über ihre Haltung gegenüber dem französischsprachigen Kulturraum und gegenüber kultureller Vielfalt nachdenken.',
            subCompetences: [
              'können über Zweck und Nutzen des Lernens der Fremdsprache Französisch nachdenken und diskutieren.',
              'können ihre Eindrücke in Bezug auf Kontakte mit dem französischsprachigen Kulturraum reflektieren und ihre Haltung begründen (z.B. Jugendkultur).',
              'können aufgrund der erworbenen kulturellen Erfahrungen ihre Haltung gegenüber Klischees formulieren und diskutieren.',
            ],
          },
          {
            _id: 's7t5st-1c2',
            name: '1. Die Schülerinnen und Schüler begegnen Menschen und Erzeugnissen des französischsprachigen Kulturraums virtuell und real.',
            subCompetences: [
              'können mit französischsprachigen Menschen in Kontakt treten und machen dadurch Bekanntschaft mit deren Kulturen (z.B. Brief, Text, Bild, Zeichnung, E-Mail).',
              'können in der Auseinandersetzung mit kulturellen Gegebenheiten und Kulturerzeugnissen aus dem französischsprachigen Raum die eigene Lebenswelt bewusster wahrnehmen und erkennen, dass eigene Norm- und Wertvorstellungen relativ sind (z.B. Schulsystem, geschichtliches Ereignis, Sport, Persönlichkeit).',
              'können in Austauschsituationen ihr erworbenes kulturelles Wissen beobachten, überprüfen und relativieren (z.B. durch Briefkontakt, in den Ferien, in einer realen oder virtuellen Begegnung).',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's9',
    name: 'Mathematik',
    topics: [
      {
        _id: 's9t0',
        name: 'MA.1 - Zahl und Variable',
        competences: [
          {
            _id: 's9t0st-1c0',
            name: '1. Die Schülerinnen und Schüler verstehen und verwenden arithmetische Begriffe und Symbole. Sie lesen und schreiben Zahlen.',
            subCompetences: [
              'verstehen und verwenden die Begriffe Gleichung, Klammer, Pr rimzahl.',
              'können die Symbole +, -, /, *, =, x2, (), ≠ verwenden und Rechner entsprechend nutzen.',
              "können Brüche (Nenner 2, 3, 4, 5, 6, 8, 10, 20, 50, 100, 1'000), Dezimalzahlen und Prozentzahlen je in die beiden anderen Schreibweisen übertragen.",
              'verstehen und verwenden die Begriffe Term, Variable, Unbekannte, hoch, Potenz, Zehnerpotenz, Vorzeichen, positive Zahlen, negative Zahlen, (Quadrat-) Wurzel.',
              'Erweiterung: verstehen und verwenden die Begriffe Basis, Exponent.',
              'können die Symbole √, ≤, ≥ verwenden und Rechner entsprechend nutzen.',
              'können Zahlen bis 1 Milliarde lesen und schreiben.',
              'können Zahlen in wissenschaftlicher Schreibweise mit positiven Exponenten lesen und schreiben (z.B. 1.32 · 108 = 132 000 000).',
              'können Potenzen mit rationaler Basis und natürlichem Exponenten lesen und schreiben.',
              'verstehen und verwenden die Begriffe natürliche Zahlen, ganze Zahlen, rationale Zahlen, Kehrwert, 3. Wurzel.',
              'können Zahlen in wissenschaftlicher Schreibweise, auch mit negativen Exponenten, lesen und schreiben.',
              'verstehen und verwenden die Begriffe reelle Zahlen, irrationale Zahlen.',
            ],
          },
          {
            _id: 's9t0st-1c1',
            name: '2. Die Schülerinnen und Schüler können flexibel zählen, Zahlen nach der Grösse ordnen und Ergebnisse überschlagen.',
            subCompetences: [
              "können Summen und Differenzen mit Dezimalzahlen überschlagen (z  z.B. 0.723 - 0.04 ≈ 0.7; 23'268 + 4'785 ≈ 28'000).",
              "können in Prozentrechnungen Ergebnisse überschlagen (z.B. 263 von 830 sind etwa 30%; 45% von 13'000 sind mehr als 5'000).",
              'Erweiterung: können Produkte und Quotienten von Dezimalzahlen überschlagen. (z.B. 0.382 : 42.8 → 0.4 : 40 = 0.4 : 4 : 10 = 0.01; 32.7 : 0.085 → 30 : 0.1 = 300 : 1 = 300).',
              'können positive und negative rationale Zahlen auf dem Zahlenstrahl ordnen.',
            ],
          },
          {
            _id: 's9t0st-1c2',
            name: '3. Die Schülerinnen und Schüler können addieren, subtrahieren, multiplizieren, dividieren und potenzieren.',
            subCompetences: [
              'können Dezimalzahlen bis 5 Wertziffern multiplizieren und die Ergebnisse überpr rüfen (im Kopf oder mit Notieren eigener Rechenwege, z.B. 308 · 52; 12 · 0,3).',
              'können Brüche mit den Nennern 2, 3, 4, 5, 6, 8, 10, 20, 50, 100 am Rechteckmodell multiplizieren.',
              "können Brüche mit den Nennern 2, 3, 4, 5, 6, 8, 10, 20, 50, 100, 1'000 als Dezimalzahlen schreiben.",
              'können bestimmen, wie oft Stammbrüche in ganzen Zahlen enthalten sind (z.B. Wie viele Male ist 1⁄5 in 2 enthalten? → 2 : 1⁄5).',
              'können Prozentrechnungen mit dem Rechner ausführen.',
              'Erweiterung: können natürliche Zahlen in Primfaktoren zerlegen.',
              'können die Grundoperationen mit rationalen Zahlen ausführen.',
              "können Wurzeln und Potenzen mit dem Rechner berechnen (z.B. 43 · 43 = 4'096; 43 + 43 = 128; 3√8000).",
              'Erweiterung: können die Grundoperationen mit gewöhnlichen Brüchen mit Variablen ausführen und mit Zahlen belegen: a/b + c/d ; a/b - c/d ; a/b . c/d  ; a: c/b : d = a/c . b/d.',
              'können Terme mit Potenzen und Quadratwurzeln umformen und berechnen (z.B. ⎷2+ ⎷2 = 2⎷2 = ⎷8 ; ⎷23.⎷3 = ⎷24 = 2⎷6 ).',
              'können Zahlen in wissenschaftlicher Schreibweise addieren, subtrahieren, multiplizieren, dividieren.',
            ],
          },
          {
            _id: 's9t0st-1c3',
            name: '4. Die Schülerinnen und Schüler können Terme vergleichen und umformen, Gleichungen lösen, Gesetze und Regeln anwenden.',
            subCompetences: [
              'können Gleichungen mit Variablen durch Einsetzen oder Umkehroperationen l lösen.',
              'können die Rechenregeln Punkt vor Strich und die Klammerregeln befolgen (z.B. 4 + 8 - 2 · 3 = 6; (4 + 8 - 2) · 3 = 30; 4 + (8 - 2) · 3 = 22).',
              'Erweiterung: können Teilbarkeitsregeln durch 3, 4, 6, 8, 9, 25, 50 nutzen und Teiler natürlicher Zahlen bestimmen.',
              'können ein Produkt mit gleichen Faktoren als Potenz schreiben und umgekehrt (z.B. 15 · 15 · 15 = 153 ; a · a · a · a = a4).',
              'können das Distributivgesetz bei Termumformungen anwenden (z.B. a · (b + c) = a · b + a · c = ab + ac).',
              'können Rechenergebnisse sinnvoll runden.',
              'Erweiterung: verstehen die Konventionen über die Notation algebraischer Terme (z.B. abc = a · b · c aber 789 ≠ 7 · 8 · 9).',
              'Erweiterung: können lineare Gleichungen mit einer Variablen mit Äquivalenzumformungen lösen (z.B. 5x + 3 = 7).',
              'Erweiterung: können Polynome addieren und subtrahieren (z.B. 3(a2 + 2b) - 2(a2 + b) = a2 + 4b).',
              'Erweiterung: können Terme ausmultiplizieren und ausklammern (Faktorzerlegung).',
              'Erweiterung: können Gleichungen sprachlich deuten (z.B. x = y + 1 → x ist um 1 grösser als y) und Textgleichungen umsetzen.',
              'Erweiterung: können Terme mit Variablen umformen bzw. sinnvoll vereinfachen (ausklammern, ausmultiplizieren, kürzen und Vorzeichenregeln).',
              'können Terme mit Variablen addieren und subtrahieren (z.B. a + 2a + b + 3b + 1⁄4 + 3⁄8 = 3a + 4b + 5⁄8).',
              'können quadratische Gleichungen durch Faktorzerlegung lösen (z.B. x2 - 4 = 0).',
              'können Terme mit Binomen umformen und dabei die binomischen Formeln anwenden (z.B. 4a2 + 12ab2 + 9b4 = (2a + 3b2)2 ).',
              'können die Rechenregeln ax.ay=a(x+y)  sowie Potenz vor Punkt vor Strich anwenden.',
              'können Bruchterme mit Binomen umformen.',
              'können Rechengesetze bei Termen mit Potenzen und Wurzeln sowie bei Zahlen in wissenschaftlicher Schreibweise befolgen.',
              'können Bruchgleichungen mit der Unbekannten im Nenner (z.B. 3/x + 2 = 4/x + 3) und Gleichungen mit einem Parameter lösen (z.B. ax + a = 7).',
              'können lineare Gleichungssysteme mit 2 Unbekannten lösen.',
            ],
          },
          {
            _id: 's9t0st-1c4',
            name: '1. Die Schülerinnen und Schüler können Zahl- und Operationsbeziehungen sowie arithmetische Muster erforschen und Erkenntnisse austauschen.',
            subCompetences: [
              'könn nen heuristische Strategien verwenden: durch Fragen die Problemstellung klären, systematisch variieren, mit vertrauten Aufgaben vergleichen, Annahmen treffen, Lösungsansätze austauschen.',
              'können Beziehungen zwischen rationalen Zahlen erforschen und beschreiben (z.B. die Abstände zwischen den Stammbrüchen 1⁄2, 1⁄3, 1⁄4, ... auf dem Zahlenstrahl; Erweiterung: das Wachstum der Quotienten bei kleiner werdenden Divisoren, 4 : 2, 4 : 1, 4 : 0.5 ...).',
              "können arithmetische Zusammenhänge durch systematisches Variieren von Zahlen, Stellenwerten und Operationen erforschen und Beobachtungen festhalten (z.B. 10 : 9 = 1 R1, 100 : 9 = 11 R1, 1'000 : 9 = ...).",
              'können heuristische Strategien verwenden: Vermutungen überprüfen, Vorwärtsarbeiten, Rückwärtsarbeiten, Rückschau halten.',
              'Erweiterung: können arithmetische Muster bilden, weiterführen, verändern und algebraisch beschreiben (z.B. 1 · 4 - 2 · 3 / 2 · 5 - 3 · 4 / 3 · 6 - 4 · 5 / ... → a · (a + 3) - (a + 1)(a + 2)).',
              'können arithmetische und algebraische Zusammenhänge erforschen, Strukturen auf andere Zahlbeispiele übertragen und Beobachtungen festhalten (z.B. 102 + 10 + 11 = 112; 112 + 11 + 12 = 122).',
              'können Zahlen, Ziffern und Operationen systematisch variieren, Beobachtungen formulieren und auf Buchstabenterme beziehen (z.B. Wann gilt: a · b · c < 100a + 10b + c? Finde Beispiele und Gegenbeispiele).',
            ],
          },
          {
            _id: 's9t0st-1c5',
            name: '2. Die Schülerinnen und Schüler können Aussagen, Vermutungen und Ergebnisse zu Zahlen und Variablen erläutern, überprüfen, begründen.',
            subCompetences: [
              'können Aussagen zu arithmetischen Gesetzmässigkeiten erforschen, begründen oder widerlegen (z.B. eine ungerade Summe entsteht durch Addition einer geraden und einer ungeraden Zahl; die Produkte vier aufeinanderfolgender Zahlen sind durch 24 teilbar).',
              'können die Anzahl Nachkommastellen bei Produkten und Quotienten von Dezimalzahlen erforschen und begründen (z.B. mit Rechner).',
              'Erweiterung: können Äquivalenzumformungen mit Kontrollrechnungen überprüfen.',
              'können algebraische Aussagen durch Einsetzen von Zahlen überprüfen (z.B. a3 + 5a ist durch 6 teilbar: 43 + 5⋅4 = 84 → 84 : 6 = 14; a2b = (a2)b  ; 26 = (22)3 = 22.3 = 43; 28 = 44; 34 = 92).',
              'können Ergebnisse durch Verallgemeinern begründen (z.B. das Quadrat einer Zahl ist um 1 grösser als das Produkt der beiden Nachbarzahlen: 4 · 4 -1 = 3 · 5 → a2 - 1 = (a - 1)(a + 1)).',
              'können Term- und Äquivalenzumformungen überprüfen.',
            ],
          },
          {
            _id: 's9t0st-1c6',
            name: '3. Die Schülerinnen und Schüler können beim Erforschen arithmetischer Muster Hilfsmittel nutzen.',
            subCompetences: [
              'können elektronische Medien beim Erforschen arithmetischer Strukturen nutzen (z.B. umwandeln von 1/11, 2/11, 3/11, ... in periodische Dezimalzahlen und die Ziffernfolge untersuchen).',
              'können mit elektronischen Medien Daten erfassen, sortieren und darstellen (Tabellenkalkulationsprogramm).',
              'können Formelsammlungen, Nachschlagewerke und das Internet zur Lösung numerischer Aufgaben sowie zur Erforschung von Strukturen nutzen.',
              'können Vorlagen in einem Tabellenkalkulationsprogramm anwenden.',
              'können mit einem Tabellenkalkulationsprogramm durch systematisches Variieren Gleichungen lösen sowie Formeln eingeben bzw. verwenden (z.B. A = 1⁄2(s·h).',
            ],
          },
          {
            _id: 's9t0st-1c7',
            name: '1. Die Schülerinnen und Schüler können Rechenwege darstellen, beschreiben, austauschen und nachvollziehen.',
            subCompetences: [
              'können Summen, Differenzen und Produkte von Brüchen und von Dezimalzahlen mit geeigneten Modellen darstellen und beschreiben (z.B. Produkt: 1⁄3 von 3⁄4 mit dem Rechteckmodell; Summe: 1⁄2 + 1⁄4 mit dem Kreismodell).',
              'können Operationen mit Zahlen und Variablen darstellen und beschreiben (z.B. 18 · 22 = (20 - 2)(20 + 2) → (a - b)(a + b) als Fläche) sowie verallgemeinern.',
              'können zwischen exakten und gerundeten Ergebnissen unterscheiden.',
              'entscheiden situativ, mit gerundeten oder exakten Werten zu operieren (z.B. ⎷2  oder 1.41).',
            ],
          },
          {
            _id: 's9t0st-1c8',
            name: '2. Die Schülerinnen und Schüler können Anzahlen, Zahlenfolgen und Terme veranschaulichen, beschreiben und verallgemeinern.',
            subCompetences: [
              'können Zahlenrätsel mathematisieren und erfinden (z.B. wenn man eine Zahl verdreifacht und um 3 vergrössert gibt es 33).',
              'können Figurenfolgen numerisch beschreiben (z.B. die Anzahl sichtbarer Seiten bei Würfeltürmen mit 1, 2, 3, 4, ... Würfeln).',
              'können Zusammenhänge zwischen Termen und Figuren beschreiben (z.B. n(n+1) als Rechteck interpretieren; Die Summe der ersten n ungeraden Zahlen als Quadrat darstellen: 1 + 3 + 5 + 7 = 4 · 4).',
              'können Terme zu Streckenlängen, Flächeninhalten und Volumen bilden und entsprechende Terme deuten.',
              'können arithmetische und algebraische Terme veranschaulichen, insbesondere mit Text, Symbolen und Skizzen (z.B. das Produkt zweier Binome, die Summe dreier aufeinanderfolgender Zahlen).',
              'können arithmetische Gesetzmässigkeiten mit Buchstabentermen verallgemeinern (z.B. 3(4 + 5) = 3 · 4 + 3 · 5 → a(b + c) = ab + ac).',
              'Erweiterung: können arithmetische Strukturen algebraisch formulieren (z.B. die Produkte 2 · 3 · 4 / 3 · 4 · 5 / 5 · 6 · 7, ... sind durch 6 teilbar → a(a + 1) · (a + 2) · 1⁄6 ist ganzzahlig).',
              'können Terme geometrisch interpretieren (z.B. a2 · b als Quader mit quadratischer Grundfläche, a · b als Rechteck mit den Seitenlängen a und b und a + b als Summe zweier Strecken).',
              'können lineare Figurenfolgen in einen Term übertragen (z.B. die Anzahl benötigte Hölzchen, um eine Reihe von n gleichseitigen Dreiecken zu legen, als 2n + 1).',
              'können Aussagen zu Zahlenfolgen und Termen numerisch belegen oder veranschaulichen (z.B. 1⁄2n(n+1) + 1⁄2(n+1)(n+2) ist eine Quadratzahl n = 1 → 1 + 3 = 4, n = 2 → 3 + 6 = 9, ... n = 6 → 21 + 28 = 49).',
              'können lineares, quadratisches und exponentielles Wachstum in Termen, Zahlenfolgen und Graphen erkennen und Unterschiede beschreiben.',
            ],
          },
        ],
      },
      {
        _id: 's9t1',
        name: 'MA.2 - Form und Raum',
        competences: [
          {
            _id: 's9t1st-1c0',
            name: '1. Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole.',
            subCompetences: [
              'verstehen und verwenden die Begriffe Koordinaten, Ansicht, Seitenansicht, Aufsicht, Vorderansicht.',
              'verstehen und verwenden die Begriffe Seitenhalbierende, Winkelhalbierende, Höhe, Lot, Grundlinie, Grundfläche, Mittelsenkrechte, Schenkel, Netz (Abwicklung), Umkreis, Inkreis, Viereck, Vieleck, Rhombus, Parallelogramm, Drachenviereck, Trapez, gleichschenklig, gleichseitig, stumpfwinklig, spitzwinklig, Punktspiegelung, Drehung, Originalpunkt, Bildpunkt, kongruent, Koordinatensystem, zweidimensional, dreidimensional.',
              'können geometrische Objekte korrekt beschriften: Punkte, Bildpunkte, Seiten und Winkel von Drei- und Vierecken.',
              'verstehen und verwenden die Begriffe x-Koordinate, y-Koordinate, x-Achse, y-Achse, Einheitsstrecke, Mantelfläche, Prisma, Zylinder.',
              'können Drei- und Vierecke nach Winkel, Parallelität, Diagonalen, Seitenlängen charakterisieren.',
              'verstehen und verwenden die Begriffe Kongruenz(-abbildung), Basis, Kegel, Prisma, Pyramide, π.',
              'verstehen und verwenden die Begriffe Tetraeder, Raumdiagonale, Körperhöhe, Seitenhöhe, Kreissektor, Scheitel, Ähnlichkeit, Hypotenuse, Kathete, Tangente, Sehne.',
              'können Körper durch ihre Eigenschaften beschreiben (Streckenlängen, Parallelität von Strecken, Winkel zwischen Strecken und Flächen, Flächeninhalt, Volumen, Raumdiagonalen, Netz, Anzahl und Form der Seitenflächen, Eckpunkte und Kanten).',
            ],
          },
          {
            _id: 's9t1st-1c1',
            name: '2. Die Schülerinnen und Schüler können Figuren und Körper abbilden, zerlegen und zusammensetzen.',
            subCompetences: [
              'können Linien und Figuren mit dem Geodreieck vergrössern, verkleinern, spiegeln und verschieben und erkennen entsprechende Abbildungen.',
              'können Figuren in Rastern um 90°, 180° (Punktspiegelung) und 270° drehen und erkennen entsprechende Abbildungen.',
              'können Figuren mit dem Geodreieck an einer Achse oder einem Punkt spiegeln, verschieben sowie mit Zirkel und Geodreieck um 90°, 180° und 270° drehen.',
              'können Figuren und Quader bei gegebenem Streckfaktor und Streckzentrum strecken.',
              'können Abbildungen im Koordinatensystem nach Anweisungen ausführen und verändern (z.B. x-Koordinaten bleiben konstant, y-Koordinaten werden verdoppelt).',
            ],
          },
          {
            _id: 's9t1st-1c2',
            name: '3. Die Schülerinnen und Schüler können Längen, Flächen und Volumen bestimmen und berechnen.',
            subCompetences: [
              'können Volumen von Quadern berechnen.',
              'können den Flächeninhalt von nicht rechteckigen Figuren in Rastern annähernd bestimmen (z.B. die Anzahl Einheitsquadrate in einem Kreis auszählen).',
              'können Vielecke und gerade Prismen zur Berechnung von Flächeninhalten und Volumen zerlegen.',
              'können den Flächeninhalt von Drei- und Vierecken berechnen.',
              'können Kantenlängen, Seitenflächen und Volumen von Quadern berechnen.',
              'können Längen und Flächeninhalte mithilfe des Satzes von Pythagoras berechnen.',
              'können bei geometrischen Berechnungen Formeln und Tabellenkalkulation verwenden.',
              'können Umfang und Flächeninhalt von Kreisen berechnen.',
              'können Kantenlängen, Flächen und Volumen an geraden Prismen und Zylindern berechnen.',
              'können Volumen beliebiger Körper schätzen durch Zerlegen oder Vergleichen mit bekannten Körpern.',
              'können Strecken, Flächen und Volumen an Pyramiden, Kegeln und Kugeln berechnen.',
              'können Winkel aufgrund von Winkelsummen, Satz von Thales, Ähnlichkeit und Kongruenz bestimmen.',
              'können Ähnlichkeiten erkennen und bei ähnlichen Figuren und Körpern Längen, Flächeninhalte und Volumen berechnen.',
            ],
          },
          {
            _id: 's9t1st-1c3',
            name: '1. Die Schülerinnen und Schüler können geometrische Beziehungen, insbesondere zwischen Längen, Flächen und Volumen, erforschen, Vermutungen formulieren und Erkenntnisse austauschen.',
            subCompetences: [
              'können beim Erforschen geometrischer Beziehungen Vermutungen formulieren, überprüfen und allenfalls neue Vermutungen formulieren.',
              'lassen sich auf Forschungsaufgaben zu Form und Raum ein (z.B. Rechtecke auf Rasterlinien zeichnen und die Anzahl Gitterpunkte auf den Diagonalen untersuchen).',
              'können den Computer zur Erforschung geometrischer Beziehungen nutzen (z.B. die Lage des Umkreismittelpunkts bei spitzwinkligen, rechtwinkligen und stumpfwinkligen Dreiecken).',
              'können geometrische Beziehungen in Vielecken - insbesondere zwischen Winkeln, Längen und Flächen - variieren, dazu Vermutungen austauschen (z.B. die Spitze in einem Dreieck parallel zur Grundlinie verschieben; Winkelbeziehungen in einem Dreiecksgitter).',
              'können dynamische Geometriesoftware zum Erforschen geometrischer Beziehungen verwenden (z.B. das Verhältnis der Teilstrecken bei Seitenhalbierenden; die Lage des Umkreismittelpunkts bei verschiedenen Dreiecken).',
              'können Winkel, Strecken und Flächen an Figuren und Körpern systematisch variieren und Vermutungen formulieren (z.B. Winkel über einer Sehne im Kreis, Verhältnis zwischen Kreisdurchmesser und Umfang).',
              'können Kantenlängen, Oberfläche oder Volumen von Körpern systematisch variieren und Zusammenhänge formulieren (z.B. Veränderung von Kantenlängen, Oberflächen und Volumen eines Quaders bei der Halbierung / Verdoppelung aller Kanten).',
              'können geometrische Probleme mit dynamischer Geometriesoftware konstruktiv lösen sowie Figuren und Zusammenhänge systematisch variieren (z.B. die Quadrate über den beiden kleineren Seiten in einem Dreieck mit dem grössten Quadrat vergleichen).',
              'können Probleme aus der kombinatorischen Geometrie untersuchen (z.B. Anzahl Raumdiagonalen in platonischen Körpern).',
            ],
          },
          {
            _id: 's9t1st-1c4',
            name: '2. Die Schülerinnen und Schüler können Aussagen und Formeln zu geometrischen Beziehungen überprüfen, mit Beispielen belegen und begründen.',
            subCompetences: [
              'können Aussagen sowie Umfang- und Flächenformeln zu Quadrat und Rechteck überprüfen und begründen oder widerlegen (z.B. in Rechtecken und Quadraten schneiden sich die Diagonalen rechtwinklig).',
              'können heuristische Strategien verwenden: planen, skizzieren, Beispiele untersuchen, vorwärts arbeiten, von einer angenommenen Lösung aus rückwärts arbeiten.',
              'können Aussagen und Flächenformeln zu Drei- und Vierecken mit Skizzen und Modellen belegen (z.B. ein Rechteck wird von den Diagonalen in vier flächengleiche Dreiecke zerlegt; der Flächeninhalt eines Rhombus ist halb so gross wie das Produkt der Diagonalenlängen).',
              'können Formeln und geometrische Eigenschaften an Beispielen erklären (z.B. Flächenformel zum Dreieck, gleiche Länge der vier Raumdiagonalen im Quader; in einem rechtwinkligen Dreieck betragen die beiden spitzen Winkel zusammen 90°).',
              'können Volumenformeln für Prismen und Pyramiden erläutern (z.B. einen Würfel durch Schnitte in Pyramiden zerlegen und deren Volumen bestimmen).',
              'können Sätze zur ebenen Geometrie mit Beispielen belegen und die Begründungen nachvollziehen (z.B. Satz von Pythagoras, Peripheriewinkelsatz, Satz von Thales).',
              'können geometrisches und algebraisches Wissen verbinden und Folgerungen ziehen (z.B. in einem rechtwinkligen, gleichschenkligen Dreieck können nicht alle Seitenlängen ganzzahlig sein).',
            ],
          },
          {
            _id: 's9t1st-1c5',
            name: '1. Die Schülerinnen und Schüler können Körper und räumliche Beziehungen darstellen.',
            subCompetences: [
              'können zusammengesetzte Körper skizzieren und beschreiben (z.B. aus Schachteln, Rollen und Prismen).',
              'können das Schrägbild, die Aufsicht, Vorderansicht und Seitenansicht von rechtwinkligen Körpern in einem Raster zeichnen (z.B. 3 versetzt angeordnete Quader).',
              'Erweiterung: können Strecken und Ebenen in Quadern und Würfeln skizzieren und zeichnen (z.B. Schnittebenen in einem Quader).',
              'Erweiterung: können am Computer Körper zeichnen bzw. darstellen.',
              'können Prismen und Pyramiden skizzieren und als Schrägbild, in der Aufsicht, Vorderansicht und Seitenansicht darstellen sowie deren Netz zeichnen.',
              'können Skizzen für massstabgetreue Modelle anfertigen oder Modelle herstellen (z.B. Netz eines Satteldaches im Massstab 1: 50).',
            ],
          },
          {
            _id: 's9t1st-1c6',
            name: '2. Die Schülerinnen und Schüler können Figuren falten, skizzieren, zeichnen und konstruieren sowie Darstellungen zur ebenen Geometrie austauschen und überprüfen.',
            subCompetences: [
              'können Faltungen, Skizzen und Zeichnungen nachvollziehen, beschreiben und überprüfen.',
              'können Winkel übertragen und Winkel mit dem Geodreieck messen.',
              'können mit dem Computer Formen zeichnen, verändern und anordnen.',
              'können in einer Programmierumgebung Befehle zum Zeichnen von Formen eingeben, verändern und die Auswirkungen beschreiben (z.B. vorwärts, links drehen, vorwärts).',
              'können Senkrechte, Winkelhalbierende und Mittelsenkrechte mit dem Geodreieck zeichnen.',
              'können Winkelhalbierende, Mittelsenkrechte und gleichseitiges Dreieck mit Zirkel und Lineal konstruieren.',
              'können am Computer Figuren zeichnen.',
              'können Figuren und geometrische Beziehungen skizzieren und Zeichnungen mit Geodreieck und Zirkel oder dynamischer Geometriesoftware ausführen (z.B. ein Parallelogramm mit a, b und ha zeichnen oder konstruieren).',
              'können geometrische Darstellungen und Konstruktionen fachsprachlich beschreiben.',
            ],
          },
          {
            _id: 's9t1st-1c7',
            name: '3. Die Schülerinnen und Schüler können sich Figuren und Körper in verschiedenen Lagen vorstellen, Veränderungen darstellen und beschreiben (Kopfgeometrie).',
            subCompetences: [
              'können Figuren und Körper in der Vorstellung drehen und schieben (z.B. Ansichten eines Körpers mit 5 bis 8 Würfeln).',
              'können Körper in der Vorstellung verändern und Ergebnisse beschreiben (z.B. alle Ecken eines Würfels in der Vorstellung abschleifen und den neuen Körper beschreiben).',
              'können Operationen im Kopf ausführen und Ergebnisse darstellen (z.B. ein Würfelgebäude mit 4 Würfeln um 90° drehen und skizzieren).',
            ],
          },
          {
            _id: 's9t1st-1c8',
            name: '4. Die Schülerinnen und Schüler können in einem Koordinatensystem die Koordinaten von Figuren und Körpern bestimmen bzw. Figuren und Körper aufgrund ihrer Koordinaten darstellen sowie Pläne lesen und zeichnen.',
            subCompetences: [
              'können einen Wohnungsplan nach Massstab zeichnen bzw. entsprechende Pläne lesen.',
              'können Wege und Lagebeziehungen skizzieren (z.B. Schulweg) bzw. entsprechende Pläne nutzen.',
              'können Lagebeziehungen von Objekten massstabgetreu in einem Koordinatensystem darstellen (z.B. den Pausenplatz).',
              'können Figuren im kartesischen Koordinatensystem darstellen (auch mit negativen und nicht ganzzahligen Koordinaten).',
              'können in einem Koordinatensystem Abstände und Flächeninhalte berechnen.',
              'können geometrische Abbildungen im Koordinatensystem darstellen (z.B. Spiegelung eines Dreiecks an der Geraden x = 2).',
            ],
          },
        ],
      },
      {
        _id: 's9t2',
        name: 'MA.3 - Grössen, Funktionen, Daten und Zufall',
        competences: [
          {
            _id: 's9t2st-1c0',
            name: '1. Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole zu Grössen, Funktionen, Daten und Zufall.',
            subCompetences: [
              'können sich an Referenzgrössen orientieren: 1 m3, 1 dm3, 1 cm3.',
              'können Vorsätze verstehen und verwenden: Mega, Giga, Tera.',
              'verstehen und verwenden die Begriffe Koordinatensystem, Währung, arithmetisches Mittel (Erweiterung: indirekte Proportionalität).',
              'können Masseinheiten und deren Abkürzungen verwenden sowie sich an Referenzgrössen orientieren: Flächenmasse (km2, ha, a, m2, dm2, cm2, mm2), Raummasse (km3, m3, dm3, cm3, mm3), Geld (CHF, €, $).',
              'verstehen und verwenden die Begriffe absolute und relative Häufigkeit, x-Koordinate, y- Koordinate, x-Achse, y-Achse, Einheitsstrecke, Wahrscheinlichkeit.',
              'können Masseinheiten und deren Abkürzungen verwenden: Geschwindigkeit (km/h, m/s, kB/s, dpi).',
              'verstehen und verwenden die Begriffe Steigung in %, Zins, Zinssatz, Kapital, Rabatt, Brutto, Netto.',
              'verstehen und verwenden die Begriffe (lineare) Funktion, sichere, mögliche, unmögliche Ereignisse, Flussdiagramm, Bit, Byte.',
              'können Vorsätze verstehen und verwenden: Mikro, Nano.',
              'können Masseinheiten und deren Abkürzungen verwenden: Dichte (kg/dm3, g/cm3).',
              'verstehen und verwenden die Begriffe exponentielles Wachstum, Fakultät.',
            ],
          },
          {
            _id: 's9t2st-1c1',
            name: '2. Die Schülerinnen und Schüler können Grössen schätzen, messen, umwandeln, runden und mit ihnen rechnen.',
            subCompetences: [
              'können Flächeninhalte und Volumen [m3] in einer geeigneten Masseinheit schätzen und in benachbarte Masseinheiten umwandeln.',
              'können Grössen absolut und relativ vergleichen (z.B. 120 Stück oder 60% bzw. 3⁄5 einer Menge).',
              'können Distanzen und Zeitdauern für Geschwindigkeitsberechnungen messen.',
              'können das System der dezimalen Masseinheiten (SI-System) nutzen und die Vorsätze Mega, Kilo, Dezi, Centi und Milli den Zehnerpotenzen zuordnen.',
              'können Berechnungen mit zusammengesetzten Masszahlen durchführen und Grössenangaben von einer Einheit in eine andere umrechnen.',
              'können Geschwindigkeiten umwandeln (z.B. von 200m/10s in 72 km/h).',
            ],
          },
          {
            _id: 's9t2st-1c2',
            name: '3. Die Schülerinnen und Schüler können funktionale Zusammenhänge beschreiben und Funktionswerte bestimmen.',
            subCompetences: [
              'können Anteile bestimmen und vergleichen (z.B. in X mit 2 Spielwarengeschäften leben 12 000 Menschen; in Y mit 8 Spielwarengeschäften leben 30 000 Menschen).',
              'können Funktionswerte aufgrund von Funktionsgraphen bestimmen.',
              'können mit indirekt proportionalen Beziehungen rechnen (z.B. Anzahl Karten je Person bei 72 Karten und x Mitspielenden).',
              'verstehen Prozentangaben als proportionale Zuordnungen und führen Prozentrechnungen aus (z.B. Wie viele Prozente sind 7 von 35 sowie wie viel sind 7% von 35?).',
              'können zu einer Funktionsgleichung Wertepaare bestimmen und in einem Koordinatensystem einzeichnen.',
              'können Streckenlängen aufgrund von Massstabangaben bestimmen und umgekehrt (z.B. auf einer Karte geeignete Routen für eine 12 km-Wanderung eintragen).',
              'können den Funktionswert zu einer gegebenen Zahl aus einer Wertetabelle, einer graphischen Darstellung und mit der Funktionsgleichung bestimmen sowie Wertepaare im Koordinatensystem einzeichnen (z.B. y = 2x + 1. Für x = 7 → y = 15).',
              'können Rechner oder geeignete Software (z.B. Tabellenkalkulation) zur Berechnung von Funktionswerten und Masszahlen benutzen.',
              'können Sachaufgaben mit Prozentangaben lösen (z.B. zu Steigung und Zins).',
              'können den Schnittpunkt zweier Geraden algebraisch und graphisch bestimmen.',
              'können zu linearen Funktionen den Funktionsgraphen zeichnen, die Steigung, den y- Achsenabschnitt und die Nullstelle bestimmen.',
            ],
          },
          {
            _id: 's9t2st-1c3',
            name: '1. Die Schülerinnen und Schüler können zu Grössenbeziehungen und funktionalen Zusammenhängen Fragen formulieren, diese erforschen sowie Ergebnisse überprüfen und begründen.',
            subCompetences: [
              'können Grössen anderer Kulturen erforschen (z.B. verschiedene Längeneinheiten im Mittelalter der deutschen Schweiz).',
              'können Experimente, Messungen und Berechnungen vergleichen (z.B. Wie genau lässt sich die Raumlänge mit Fusslängen messen?).',
              'können funktionale Zusammenhänge, insbesondere zu Preis - Leistung und Weg - Zeit, formulieren und begründen (z.B. Kauf von Getränken, die in verschiedenen Packungsgrössen angeboten werden).',
              'Erweiterung: können Parameter in Gleichungen und Formeln verändern und die Auswirkungen insbesondere mit elektronischen Hilfsmitteln untersuchen (z.B. Veränderung der monatlichen Handykosten bei teurem Abo und günstigen Gesprächstarifen).',
              'können Ergebnisse und Aussagen zu funktionalen Zusammenhängen überprüfen, insbesondere durch Interpretation von Tabellen, Graphen und Diagrammen (z.B. der Arbeitsweg mit Fahrrad und Zug von X nach Y dauert weniger lang und ist günstiger als der Weg mit dem Auto).',
              'können funktionale und statistische Zusammenhänge erforschen, dazu Fragen stellen sowie Ergebnisse vergleichen (z.B. Zusammenhang zwischen Steigung in Grad und Steigung in Prozent).',
              'können statistische Rohdaten zu sozialen, wirtschaftlichen und ökologischen Fragestellungen erforschen und Vermutungen dazu austauschen.',
            ],
          },
          {
            _id: 's9t2st-1c4',
            name: '2. Die Schülerinnen und Schüler können Sachsituationen zur Statistik, Kombinatorik und Wahrscheinlichkeit erforschen, Vermutungen formulieren und überprüfen.',
            subCompetences: [
              'können in auszählbaren Variationen und Kombinationen alle Möglichkeiten systematisch aufschreiben (z.B. Zahlen mit den Ziffern 1, 2, 3 mit und ohne Wiederholung: 123, 132, 213, 231, 312, 321, 112, 121, 211, ...).',
              'können Häufigkeiten experimentell bestimmen und Vermutungen zu deren Wahrscheinlichkeiten formulieren (z.B. Reissnagel werfen: Kopf oder Spitze unten; mit zwei Würfeln zwei gerade Zahlen oder die Summe 7 erreichen).',
              'sind bereit, sich mit unbekannten Fragestellungen zu Kombinatorik und Wahrscheinlichkeit auseinanderzusetzen.',
              'können Wahrscheinlichkeiten und statistische Angaben überprüfen und begründen (z.B. die Wahrscheinlichkeit, mit einer Münze zwei mal hintereinander Kopf zu werfen, ist 0.25; In den Voralpen besitzen relativ mehr Jugendliche einen Roller als im Mittelland).',
              'vergleichen kombinatorische Probleme, erkennen und erfinden Analogien (z.B. Handshakes bei 5 Personen ist analog zu von 5 Personen erhalten 2 einen Fünfliber).',
            ],
          },
          {
            _id: 's9t2st-1c5',
            name: '1. Die Schülerinnen und Schüler können Daten zu Statistik, Kombinatorik und Wahrscheinlichkeit erheben, ordnen, darstellen, auswerten und interpretieren.',
            subCompetences: [
              'können Daten zu Längen, Inhalten, Gewichten, Zeitdauern, Anzahlen und Preisen mit dem Computer in Diagrammen darstellen und interpretieren.',
              'können die Wahrscheinlichkeit einzelner Ereignisse vergleichen.',
              'können mehrstufige Zufallsexperimente mit Würfeln, Münzen oder Karten durchführen und mögliche Ereignisse darstellen (z.B. ein Baumdiagramm zum dreimaligen Werfen einer Münze zeichnen).',
              'Erweiterung: können Zufallsexperimente durchführen und die Wahrscheinlichkeiten ermitteln (z.B. die Wahrscheinlichkeit bestimmen, aus einem Kartenspiel 2x hintereinander die gleiche Farbe zu ziehen).',
              "Erweiterung: können Aussagen zur Wahrscheinlichkeit aus der relativen Häufigkeit eines Ereignisses ableiten (z.B. in einem Monat verspäten sich 88 von 2'750 Zügen mehr als 5 min, 57 davon mehr als 10 min).",
              'können Beziehungen zwischen verschiedenen Grössen datengestützt herstellen (z.B. Zusammenhang zwischen Laufstrecke und Sieg im Fussball).',
              'können soziale (z.B. Unfallprävention), wirtschaftliche (z.B. Zins, Rabatt, Leasing) und ökologische (z.B. Wasserverbrauch, Entsorgung) Fragestellungen bearbeiten und vergleichen Zahlenangaben absolut und relativ.',
            ],
          },
          {
            _id: 's9t2st-1c6',
            name: '2. Die Schülerinnen und Schüler können Sachsituationen mathematisieren, darstellen, berechnen sowie Ergebnisse interpretieren und überprüfen.',
            subCompetences: [
              'erkennen proportionale und lineare (Erweiterung: indirekt proportionale) Zusammenhänge in Sachsituationen (z.B. Taxipreis bei Grundtaxe und festem Preis/km).',
              "können Wertepaare sowie Funktionsgraphen im Koordinatensystem darstellen (z.B. Zwischenzeiten in 10'000 m - Läufen; Gewicht bzw. Masse und Preis von Lebensmitteln).",
              'können Alltagssituationen (z.B. Flächeninhalt eines Zimmers; Geschwindigkeit eines Autos; Benzinverbrauch) in mathematische Sprache übersetzen, die richtigen Grössen identifizieren und geeignete Masseinheiten wählen.',
              'können die Abhängigkeit zweier Grössen mit einem Funktionsgraphen darstellen sowie Graphenverläufe interpretieren (z.B. Weg - Zeit - Diagramm zu einem 400 m - Lauf).',
              'Erweiterung: können zu Wertetabellen eine geeignete Skalierung im Koordinatensystem wählen.',
              'Erweiterung: können lineare funktionale Zusammenhänge mit einem Term beschreiben (z.B. Wechselkurse).',
              'können Wertetabellen, Diagramme, Sachtexte, Terme und Graphen einander zuordnen und interpretieren.',
              'können Sachsituationen nach funktionalen, statistischen und probabilistischen Gesichtspunkten bearbeiten, angemessene Entscheidungen treffen und Lösungswege mit Wertetabellen, Diagrammen, Texten, Termen und Graphen darstellen.',
              'können Software zur graphischen Darstellung von Funktionen verwenden.',
            ],
          },
          {
            _id: 's9t2st-1c7',
            name: '3. Die Schülerinnen und Schüler können Terme, Formeln, Gleichungen und Tabellen mit Sachsituationen konkretisieren.',
            subCompetences: [
              'Erweiterung: können Buchstabenterme, Formeln und lineare Funktionsgleichungen mit Sachsituationen konkretisieren (z.B. die Funktionsgleichung y = 2x + 3 mit Preis = 2 · Anzahl + 3).',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's10',
    name: 'Medien / Informatik',
    topics: [
      {
        _id: 's10t0',
        name: 'MI.1 - Medien',
        competences: [
          {
            _id: 's10t0st-1c0',
            name: '1. Die Schülerinnen und Schüler   können sich in der physischen Umwelt sowie in medialen und virtuellen Lebensräumen orientieren und sich darin entsprechend den Gesetzen, Regeln und Wertesystemen verhalten.',
            subCompetences: [
              'können Regeln und Wertesysteme verschiedener Lebenswelten unterscheiden, reflektieren und entsprechend handeln (z.B. Netiquette, Werte in virtuellen Welten).',
              'können Chancen und Risiken der Mediennutzung benennen und Konsequenzen für das eigene Verhalten ziehen (z.B. Vernetzung, Kommunikation, Cybermobbing, Schuldenfalle, Suchtpotential).',
              'können Verflechtungen und Wechselwirkungen zwischen physischer Umwelt, medialen und virtuellen Lebensräumen erkennen und für das eigene Verhalten einbeziehen (z.B. soziale Netzwerke und ihre Konsequenzen im realen Leben).',
              'können Chancen und Risiken der zunehmenden Durchdringung des Alltags durch Medien und Informatik beschreiben (z.B. Globalisierung, Automatisierung, veränderte Berufswelt, ungleiche Möglichkeiten zum Zugang zu Information und Technologie).',
              'können Funktion und Bedeutung der Medien für Kultur, Wirtschaft und Politik beschreiben und darlegen, wie gut einzelne Medien diese Funktion erfüllen (z.B. Manipulation, technische Abhängigkeit, Medien als vierte Gewalt).',
            ],
          },
          {
            _id: 's10t0st-1c1',
            name: '2. Die Schülerinnen und Schüler können Medien und Medienbeiträge entschlüsseln,    reflektieren und nutzen.',
            subCompetences: [
              'erkennen, dass Medien und Medienbeiträge auf Individuen unterschiedlich wirken.',
              'kennen grundlegende Elemente der Bild-, Film- und Fernsehsprache und können ihre Funktion und Bedeutung in einem Medienbeitrag reflektieren.',
              'können die Absicht hinter Medienbeiträgen einschätzen (z.B. Werbung, Zeitschrift, Parteizeitung).',
              'kennen Organisations- und Finanzierungsformen von Medienangeboten und deren Konsequenzen.',
            ],
          },
          {
            _id: 's10t0st-1c2',
            name: '3. Die Schülerinnen und Schüler können Gedanken, Meinungen, Erfahrungen und Wissen in Medienbeiträge umsetzen und unter Einbezug der Gesetze, Regeln und Wertesysteme auch h veröffentlichen.',
            subCompetences: [
              'können Medien nutzen, um ihre Gedanken und ihr Wissen vor Publikum zu präsentieren und/oder zu veröffentlichen.',
              'können Wirkungen eigener Medienbeiträge einschätzen und bei der Produktion entsprechend berücksichtigen.',
              'können mit eigenen und fremden Inhalten Medienbeiträge herstellen und berücksichtigen dabei die rechtlichen Rahmenbedingungen sowie Sicherheits- und Verhaltensregeln.',
              'können allein und in Arbeitsteams mit medialen Möglichkeiten experimentieren und sich darüber austauschen.',
            ],
          },
          {
            _id: 's10t0st-1c3',
            name: '4. Die Schülerinnen und Schüler können Medien interaktiv nutzen sowie mit anderen kommunizieren n und kooperieren.',
            subCompetences: [
              'können mittels Medien kommunizieren und dabei die Sicherheits- und Verhaltensregeln befolgen.',
              'können Medien gezielt für kooperatives Lernen nutzen.',
              'können Medien zur Veröffentlichung eigener Ideen und Meinungen nutzen und das Zielpublikum zu Rückmeldungen motivieren.',
              'können kooperative Werkzeuge anpassen und für gemeinsames Arbeiten, Meinungsaustausch, Kommunikation sowie zum Publizieren einsetzen (z.B. Blog, Wiki).',
            ],
          },
          {
            _id: 's10t0st-1c4',
            name: '1. Die Schülerinnen und Schüler können Daten aus ihrer Umwelt darstellen, strukturieren und auswerten.',
            subCompetences: [
              'erkennen und verwenden Baum- und Netzstrukturen (z.B. Ordnerstruktur auf dem Computer, Stammbaum, Mindmap, Website).',
              'verstehen die Funktionsweise von fehlererkennenden und -korrigierenden Codes.',
              'können Dokumente so ablegen, dass auch andere sie wieder finden.',
              'können logische Operatoren verwenden (und, oder, nicht).',
              'können Daten in einer Datenbank strukturieren, erfassen, suchen und automatisiert auswerten.',
              'können Methoden zur Datenreplikation unterscheiden und anwenden (Backup, Synchronisation, Versionierung).',
            ],
          },
          {
            _id: 's10t0st-1c5',
            name: '2. Die Schülerinnen und Schüler können einfache Problemstellungen analysieren, mögliche Lösungsverfahren beschreiben und in Programmen umsetzen.',
            subCompetences: [
              'können selbstentdeckte Lösungswege für einfache Probleme in Form von lauffähigen und korrekten Computerprogrammen mit Schleifen, bedingten Anweisungen und Parametern formulieren.',
              'können selbstentwickelte Algorithmen in Form von lauffähigen und korrekten Computerprogrammen mit Variablen und Unterprogrammen formulieren.',
              'können verschiedene Algorithmen zur Lösung desselben Problems vergleichen und beurteilen (z.B. lineare und binäre Suche, Sortierverfahren).',
            ],
          },
          {
            _id: 's10t0st-1c6',
            name: '3. Die Schülerinnen und Schüler verstehen Aufbau und Funktionsweise von informationsverarbeitenden Systemen und können Konzepte der sicheren Datenverarbeitung anwenden.',
            subCompetences: [
              'verstehen die grundsätzliche Funktionsweise von Suchmaschinen.',
              'können lokale Geräte, lokales Netzwerk und das Internet als Speicherorte für private und öffentliche Daten unterscheiden.',
              'haben eine Vorstellung von den Leistungseinheiten informationsverarbeitender Systeme und können deren Relevanz für konkrete Anwendungen einschätzen (z.B. Speicherkapazität, Bildauflösung, Rechenkapazität, Datenübertragungsrate).',
              'kennen die wesentlichen Eingabe-, Verarbeitungs- und Ausgabeelemente von Informatiksystemen und können diese mit den entsprechenden Funktionen von Lebewesen vergleichen (Sensor, Prozessor, Aktor und Speicher).',
              'können das Internet als Infrastruktur von seinen Diensten unterscheiden (z.B. WWW, E- Mail, Internettelefonie, Soziale Netzwerke).',
              'können die Risiken unverschlüsselter Datenübermittlung und -speicherung abschätzen.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's11',
    name: 'Musik',
    topics: [
      {
        _id: 's11t0',
        name: 'MU.1 - Singen und Sprechen',
        competences: [
          {
            _id: 's11t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können sich singend in der Gruppe wahrnehmen und ihre Stimme im chorischen Singen differenziert einsetzen.',
            subCompetences: [
              'können Lieder in der Klasse oder in Gruppen üben (z.B. Ausdauer zeigen, Konzentration beibehalten) sowie Interpretationsmöglichkeiten erproben und vergleichen.',
              'können in mehrstimmigen Liedern ihre Stimme halten.',
              'können ihren spezifischen Beitrag im mehrstimmigen chorischen Singen leisten (z.B. Rhythmus, Solo, Bewegung).',
              'können ein begleitetes Lied solistisch oder in Gruppen vortragen.',
            ],
          },
          {
            _id: 's11t0st-1c1',
            name: '1. Die Schülerinnen und Schüler können ihre Stimme und deren klanglichen Ausdruck wahrnehmen, entwickeln und formen.',
            subCompetences: [
              'können zwischen Kopf- und Bruststimme unterscheiden und beide einsetzen.',
              'können die eigene Stimme im Tonumfang erweitern und kräftigen.',
              'können ihren Tonumfang erkennen und gezielt einsetzen.',
              'können Texte groovebezogen interpretieren und rappen (z.B. HipHop).',
              'können eigene Texte einem vorgegebenen Rhythmus anpassen (z.B. viertaktige Patterns).',
              'können eigene Song- und Raptexte schreiben und interpretieren.',
            ],
          },
          {
            _id: 's11t0st-1c2',
            name: '1. Die Schülerinnen und Schüler können Lieder aus verschiedenen Zeiten, Stilarten und Kulturen singen und verfügen über ein vielfältiges Repertoire.',
            subCompetences: [
              'können Beispiele aus der aktuellen Musikszene singen und ihre musikalischen Präferenzen einbringen.',
              'können Lieder aus unterschiedlichen Stilarten singen, die sprachlichen Besonderheiten FS3I.6.A.1.d berücksichtigen und den damit verbundenen Ausdruck erproben.',
              'können Singtechniken aus verschiedenen Stilarten unterscheiden und erproben (z.B. Kunstlied, Popgesang).',
              'können Lieder und exemplarische Kunstlieder aus Geschichte und Gegenwart solistisch oder chorisch interpretieren.',
            ],
          },
        ],
      },
      {
        _id: 's11t1',
        name: 'MU.2 - Hören und Sich-Orientieren',
        competences: [
          {
            _id: 's11t1st-1c0',
            name: '1. Die Schülerinnen und Schüler können ihre Umwelt und musikalische Elemente hörend wahrnehmen, differenzieren und beschreiben.',
            subCompetences: [
              'können musikalische Formen unterscheiden und hörend wiedererkennen (z.B. Rondo, Liedform).',
              'können musikalische Aspekte bewusst verfolgen und aufzeigen (z.B. Instrumentierung, Form, Interpretation).',
              'können zu einem gehörten Musikstück eigene Fragen generieren und mögliche Antworten diskutieren.',
              'können gehörte Musikabschnitte mithilfe einer Partitur musikalisch beschreiben.',
            ],
          },
          {
            _id: 's11t1st-1c1',
            name: '1. Die Schülerinnen und Schüler können Musik aus verschiedenen Zeiten, Gattungen, Stilen und Kulturräumen erkennen, zuordnen und eine offene Haltung einnehmen.',
            subCompetences: [
              'können sich mit Musik von Mitschüler/innen auseinandersetzen und deren Musikvorlieben und Musiktraditionen mit Respekt begegnen.',
              'können zu musikgeschichtlichen Werken Musikkulturen recherchieren und deren Eigenheiten hörend erkennen.',
              'können Musik bezüglich ausgewählter Merkmale in musikgeschichtliche und gesellschaftliche Bezüge einordnen (z.B. politische Musik, Singstimmen in verschiedenen Stilen).',
              'kennen einzelne Musiker/innen und Komponist/innen der Gegenwart und können deren Musik mit eigenen Fragen begegnen und besprechen (z.B. Komponist/in der Postmoderne, Musiker/in der Popszene).',
            ],
          },
          {
            _id: 's11t1st-1c2',
            name: '1. Die Schülerinnen und Schüler können verschiedene Bedeutungen, Funktionen sowie emotionale und physische Wirkungen von Musik in ihrem Umfeld, in der Gesellschaft und in den Medien erfassen.',
            subCompetences: [
              'können bei Musikbeispielen hörend Eindrücke sammeln und diese in einen Bezug zu den eigenen musikalischen Präferenzen bringen.',
              'können die Wirkung eines Musikstückes aus persönlicher Sicht darlegen und begründen.',
              'können Funktionen exemplarischer Musikbeispiele erkennen und einem gesellschaftlichen Kontext zuordnen (z.B. Disco, Filmmusik, Nationalhymne).',
              'können Atmosphären von Musikwerken und deren Wirkungsfelder differenziert wahrnehmen und dazugehörige Hintergründe erarbeiten (z.B. soziale, geschichtliche Aspekte).',
              'kennen die Folgen von intensiver Gehörbelastung (Dauer, Lautstärke) und können sowohl als Musizierende, als auch beim Musikkonsum verantwortungsvoll mit ihrem Gehör umgehen.',
            ],
          },
        ],
      },
      {
        _id: 's11t2',
        name: 'MU.3 - Bewegen und Tanzen',
        competences: [
          {
            _id: 's11t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können ihren Körper sensomotorisch differenziert wahrnehmen, einsetzen und musikbezogen reagieren. Sie können sich zu Musik im Raum und in der Gruppe orientieren.',
            subCompetences: [],
          },
          {
            _id: 's11t2st-1c1',
            name: '1. Die Schülerinnen und Schüler können ihren Körper als Ausdrucksmittel einsetzen und in Verbindung mit Materialien und Objekten zu Musik in Übereinstimmung bringen und in der Gruppe interagieren.',
            subCompetences: [
              'können mit Objekten, Kostümen und Requisiten Bewegungselemente ausformen und damit ausgewählte Musik darstellen.',
              'können in Gruppen musizieren und dazu passende Bewegungsabläufe erfinden.',
              'können Melodie und Rhythmus eines Liedes sowie Texte mit Körpersprache und -ausdruck unterstützen (z.B. Song, Sprechgesang).',
              'können zu Musikstücken vorgegebene Bewegungsabläufe übernehmen, variieren sowie Improvisationen in Gruppen entwickeln.',
            ],
          },
          {
            _id: 's11t2st-1c2',
            name: '1. Die Schülerinnen und Schüler können ihre Bewegungen koordiniert der Musik anpassen. Sie verfügen über ein Repertoire an Tänzen aus unterschiedlichen Zeiten, Kulturen und Stilen.',
            subCompetences: [
              'können zu Musik aus verschiedenen Ländern unterschiedliche Rollen tanzen (z.B. Kreis-, Volks-, Folkloretanz).',
              'können ungewohnte Taktarten und Taktwechsel in Schrittkombinationen ausführen (z.B. 5-er, 7-er, Wechsel 3/4-6/8).',
              'können Funktionen des Tanzes und der dazugehörenden Musik in verschiedenen gesellschaftlichen Situationen erkennen (z.B. Paartanz, sakraler Tanz, Jugendkultur).',
              'können Bewegungs- und Tanzausschnitte und charakteristische Tanzfiguren in musikalischen Projekten einsetzen (z.B. in einem Musical).',
            ],
          },
        ],
      },
      {
        _id: 's11t3',
        name: 'MU.4 - Musizieren',
        competences: [
          {
            _id: 's11t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können sich als Musizierende wahrnehmen und mit Instrumenten sowie Körperperkussion in ein Ensemble einfügen.',
            subCompetences: [
              'üben einfache Klassenarrangements und können dabei Interpretationsmöglichkeiten ausprobieren, vergleichen und ihre Vorstellung realisieren (z.B. ein Stück lustig, traurig, schleppend, gehetzt spielen).',
              'können ausgewählte Rhythmus- und Melodiepatterns (z.B. aus verschiedenen Kulturen, Epochen und Stilen) spielen und deren Besonderheit erkennen.',
              'können nach Improvisationsvorlagen in der Gruppe musizieren (z.B. Harmoniefolge, Bluestonleiter, Pentatonik).',
              'können Musik aus verschiedenen Kulturen, Epochen und Stilen im Klassenarrangement spielen.',
              'können Elemente aus Musikstilen adaptieren oder verfremden.',
            ],
          },
          {
            _id: 's11t3st-1c1',
            name: '1. Die Schülerinnen und Schüler können Instrumente, Klangquellen und elektronische Medien erkunden, damit experimentieren, improvisieren und nach Vorlagen spielen.',
            subCompetences: [
              'können musikalische Impressionen zu Stimmungen und Emotionen erfinden, spielen und Gegensätze herausarbeiten (z.B. heiter/bedrohlich, Glück/Trauer).',
              'können zu Begriffen musikalische Spannungsverläufe entwickeln und spielen und dabei verschiedene Artikulationen anwenden (z.B. wachsen, fliegen).',
              'können Pattern und Ostinati anwenden und verändern (z.B. Improvisationsmuster).',
              'können schriftliche Darstellungen umsetzen (z.B. Partiturausschnitt, Tabulatur, Akkordbezeichnung) und als Vorlage für eigene Ideen verwenden.',
              'können Instrumente der aktuellen Musikszene ausprobieren und Erfahrungen im Umgang und Spiel mit diesen Instrumenten sammeln.',
              'kennen ausgewählte Musiksoftware und können diese erkunden, testen und für musikalische Aufgaben einsetzen.',
              'können Klänge aus ihrer Umwelt elektronisch aufnehmen, verändern und damit musikalisch experimentieren und anwenden.',
              'können ein Klangarrangement mit Instrumenten und elektronischen Klangquellen umsetzen.',
            ],
          },
          {
            _id: 's11t3st-1c2',
            name: '1. Die Schülerinnen und Schüler kennen unterschiedliche Musikinstrumente und können verschiedene Arten der Klangerzeugung unterscheiden und deren Gesetzmässigkeiten erkennen.',
            subCompetences: [
              'können einzelne Instrumente der aktuellen Musikszene (z.B. Pop, Elektro, zeitgenössische Musik) unterscheiden und erkennen.',
              'können Schallwellen, Obertöne, Klangfärbungen und akustische Phänomene hörend verstehen und kommentieren.',
              'können die Möglichkeiten der elektronischen Verstärkung und -bearbeitung erkennen und anwenden (z.B. Verstärkung der Singstimme mit Mikrofon).',
              'können in einem notierten Musikstück (z.B. Partitur) Instrumente erkennen und beschreiben.',
            ],
          },
        ],
      },
      {
        _id: 's11t4',
        name: 'MU.5 - Gestaltungsprozesse',
        competences: [
          {
            _id: 's11t4st-1c0',
            name: '1. Die Schülerinnen und Schüler können Themen und Eindrücke aus ihrer Lebenswelt alleine und in Gruppen zu einer eigenen Musik formen und darstellen.',
            subCompetences: [
              'können zu musikalischen Fragestellungen kreative Lösungen finden (z.B. Wie klingt die Musik der Grosseltern? Wie klingt eine Filmszene, ein Sportanlass?).',
              'können eine musikalische Collage zu einem aktuellen Thema entwickeln und produzieren (z.B. aus ihrem Interessensbereich, Thema aus der Gesellschaft).',
              'können in der Gruppe eine Performance oder einen Videoclip zu einem Thema produzieren und vertonen.',
            ],
          },
          {
            _id: 's11t4st-1c1',
            name: '1. Die Schülerinnen und Schüler können zu bestehender Musik unterschiedliche Darstellungsformen entwickeln.',
            subCompetences: [
              'können Episoden aus einem Musiktheater in eine szenische Darstellung bringen.',
              'können musikalische Vorbilder und deren Performances erkunden und in persönlicher Weise adaptieren.',
              'können zu Musik Assoziationen bilden, eine thematische Auswahl treffen (z.B. Liebe, Protest, Macht) und diese in Musik und andere Medien umsetzen.',
              'können aus einem gewählten Musikstil eine kurze Reproduktion oder Improvisation entwickeln und zeigen.',
            ],
          },
          {
            _id: 's11t4st-1c2',
            name: '1. Die Schülerinnen und Schüler können ihre musikalischen Fähigkeiten präsentieren.',
            subCompetences: [
              'können musikalischen Präsentationen von sich selber und ihren Mitschüler/innen kritisch und gleichzeitig wertschätzend begegnen.',
              'können den Wert von Vorbereitung und Übung in einem Projekt erkennen und Einsatz und Leistungen von Projektmitwirkenden wertschätzen.',
              'können Zusammenhänge zwischen Bühnenpräsenz, Bühnentechnik und der Qualität der musikalischen Darbietung erkennen und benennen.',
              'können ihre instrumentalen, tänzerischen und stimmlichen Fähigkeiten vor Publikum oder auf der Bühne präsentieren.',
            ],
          },
        ],
      },
      {
        _id: 's11t5',
        name: 'MU.6 - Praxis des musikalischen Wissens',
        competences: [
          {
            _id: 's11t5st-1c0',
            name: '1. Die Schülerinnen und Schüler können rhythmische, melodische und harmonische Elemente erkennen, benennen und anwenden.',
            subCompetences: [
              'können rhythmische Motive mit Triolen und ternären Rhythmen lesen und wiedergeben.',
              'können Rhythmen aus punktierten Noten und Synkopen klatschen und spielen.',
              'können gleichzeitig zwei Rhythmen üben und spielen (z.B. Bodypercussion).',
              'können rhythmische Sequenzen und zusammengesetzte Taktarten mit Stimme, Bewegung und Instrumenten umsetzen (z.B. 7/8, 5/8).',
              'können die Beziehung zwischen Dur- und paralleler Molltonleiter erkennen (z.B. C-Dur und a-Moll).',
              'können weitere Tonsysteme singend erleben und vergleichen (z.B. Blues-Tonleiter).',
              'können Intervalle mit Liedanfängen in Verbindung bringen und umgekehrt.',
              'kennen spezielle Tonsysteme (z.B. Kirchentonarten, Zwölftonmusik).',
              'können die harmonische Funktion der drei Hauptstufen anwenden.',
              'können grosse und kleine Terz und Quinte im Zusammenklang erkennen und anwenden (Dreiklang).',
              'können die leitereigenen Dreiklänge der Durtonleiter bestimmen und anwenden.',
              'können den Septakkord erkennen und anwenden.',
            ],
          },
          {
            _id: 's11t5st-1c1',
            name: '1. Die Schülerinnen und Schüler können die traditionelle Musiknotation sowohl lesend als auch schreibend anwenden und kennen grafische Formen der Musikdarstellung.',
            subCompetences: [
              'können die chromatische Tonleiter notieren.',
              'kennen weitere Symbole der traditionellen und grafischen Musiknotation (z.B. Dynamik, Artikulation).',
              'können eine Einzelstimme in mehrstimmigen Notenbildern hörend verfolgen (z.B. in einer Partitur).',
              'können musikalische Ideen mittels Notenschrift kommunizieren.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's12',
    name: 'Natur und Technik mit Physik, Chemie, Biologie',
    topics: [
      {
        _id: 's12t0',
        name: 'NMG.1 - Identität, Körper, Gesundheit - sich kennen und sich Sorge tragen',
        competences: [
          {
            _id: 's12t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können sich und andere wahrnehmen und beschreiben.',
            subCompetences: [
              'können von ihrem bisherigen Leben erzählen und dabei Veränderungen und Gleichbleibendes erkennen.',
              'können Vorstellungen für ihre Zukunft entwickeln und davon erzählen (z.B. Schulwahl, Berufswunsch, Hobbys, Lebensweise).',
            ],
          },
          {
            _id: 's12t0st-1c1',
            name: '2. Die Schülerinnen und Schüler können Mitverantwortung für Gesundheit und Wohlbefinden übernehmen und können sich vor Gefahren schützen.',
            subCompetences: [
              'können Merkmale von Abhängigkeiten und Sucht beschreiben und Möglichkeiten der Prävention erkennen.',
            ],
          },
          {
            _id: 's12t0st-1c2',
            name: '3. Die Schülerinnen und Schüler können Zusammenhänge von Ernährung und Wohlbefinden erkennen und erläutern.',
            subCompetences: [
              'können Merkmale zum sachgerechten Umgang mit Lebensmitteln beschreiben (z.B. Hygiene, Haltbarkeit, Lagerung, Konservierung).',
            ],
          },
          {
            _id: 's12t0st-1c3',
            name: '4. Die Schülerinnen und Schüler können den Aufbau des eigenen Körpers beschreiben und Funktionen von ausgewählten Organen erklären.',
            subCompetences: [
              'können Grundlagen für die Gesunderhaltung des Körpers nennen und entsprechend handeln.   Körperfunktionen: Beweglichkeit, Gleichgewicht, Kraft, Ausdauer',
            ],
          },
          {
            _id: 's12t0st-1c4',
            name: '5. Die Schülerinnen und Schüler können Wachstum und Entwicklung des menschlichen Körpers wahrnehmen und verstehen.',
            subCompetences: [
              'können unter Anleitung die Qualität von ausgewählten Informationsquellen zu Sexualität vergleichen und einschätzen.',
              'kennen psychische Veränderungen in der Pubertät (z.B. verstärkte Scham und Befangenheit, veränderte Einstellung zum eigenen Körper, erwachendes sexuelles Interesse) und wissen, dass diese zur normalen Entwicklung gehören.',
            ],
          },
          {
            _id: 's12t0st-1c5',
            name: '6. Die Schülerinnen und Schüler können Geschlecht und Rollen reflektieren.',
            subCompetences: [],
          },
        ],
      },
      {
        _id: 's12t1',
        name: 'NMG.2 - Tiere, Pflanzen und Lebensräume erkunden und erhalten',
        competences: [
          {
            _id: 's12t1st-1c0',
            name: '1. Die Schülerinnen und Schüler können Tiere und Pflanzen in ihren Lebensräumen erkunden und dokumentieren sowie das Zusammenwirken beschreiben.',
            subCompetences: [
              'können zu Wechselwirkungen in Lebensräumen Informationen sammeln und schematisch darstellen (z.B. Nahrungsnetze, Räuber-Beute Beziehung).',
            ],
          },
          {
            _id: 's12t1st-1c1',
            name: '2. Die Schülerinnen und Schüler können die Bedeutung von Sonne, Luft, Wasser, Boden und Steinen für Lebewesen erkennen, darüber nachdenken und Zusammenhänge erklären.',
            subCompetences: [
              'können ausgewählten Fragen zu Einflüssen und Zusammenhängen von Naturgrundlagen auf die Lebensweise von Tieren, Pflanzen und Menschen nachgehen, Informationen dazu erschliessen, Fachpersonen befragen sowie Ergebnisse und Erkenntnisse ordnen, charakterisieren und erklären.',
            ],
          },
          {
            _id: 's12t1st-1c2',
            name: '3. Die Schülerinnen und Schüler können Wachstum, Entwicklung und Fortpflanzung bei Tieren und Pflanzen beobachten und vergleichen.',
            subCompetences: [],
          },
          {
            _id: 's12t1st-1c3',
            name: '4. Die Schülerinnen und Schüler können die Artenvielfalt von Pflanzen und Tieren erkennen und sie kategorisieren.',
            subCompetences: [
              'können gebräuchliche Ordnungssysteme nutzen (z.B. krautige/holzige Pflanzen; Insekten: Schmetterlinge, Ameisen, Heuschrecken, Libellen, Käfer, Fliegen, Wespen).',
            ],
          },
          {
            _id: 's12t1st-1c4',
            name: '5. Die Schülerinnen und Schüler können Vorstellungen zur Geschichte der Erde und der Entwicklung von Pflanzen, Tieren und Menschen entwickeln.',
            subCompetences: [
              'können Spuren der Entwicklung der Landschaft und von Lebewesen in der Wohnregion erkunden sowie diese räumlich und zeitlich einordnen (z.B. Prozess, Veränderung, Abfolge).',
            ],
          },
          {
            _id: 's12t1st-1c5',
            name: '6. Die Schülerinnen und Schüler können Einflüsse des Menschen auf die Natur einschätzen und über eine nachhaltige Entwicklung nachdenken.',
            subCompetences: [
              'können über den Nutzen von Pflanzen und Tieren für die Menschen nachdenken (ökonomisch, ästhetisch, für Gesundheit und Wohlbefinden).',
              'können zu Einflüssen des Menschen auf die Natur mögliche Folgen abschätzen, Erkenntnisse dazu ordnen und über eigene Verhaltens- und Handlungsweisen nachdenken.',
            ],
          },
        ],
      },
      {
        _id: 's12t2',
        name: 'NMG.3 - Stoffe, Energie und Bewegungen beschreiben, untersuchen und nutzen',
        competences: [
          {
            _id: 's12t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können Erfahrungen mit Bewegungen und Kräften beschreiben und einordnen.',
            subCompetences: [
              'können das Zusammenspiel von Grösse und Richtung von Kräften erkennen und an alltagsnahen Beispielen erläutern (z.B. Ziehen eines schweren Schlittens mit kurzer Schnur, Flugbahn beim Ballwurf).',
            ],
          },
          {
            _id: 's12t2st-1c1',
            name: '2. Die Schülerinnen und Schüler können die Bedeutung von Energie und Energieumwandlungen im Alltag erkennen, beschreiben und reflektiert handeln.',
            subCompetences: [
              'können energiebewusstes Verhalten beschreiben und dies begründen (z.B. elektrische Energie: Lift-Treppe, Heizung-Kleidung, Stand-by vs. Gerät ganz ausgeschaltet).',
            ],
          },
          {
            _id: 's12t2st-1c2',
            name: '3. Die Schülerinnen und Schüler können Stoffe im Alltag und in natürlicher EZ - Wahrnehmung (2) Umgebung wahrnehmen, untersuchen und ordnen.',
            subCompetences: [
              'können Eigenschaften von Stoffen mithilfe von Analogien oder einfachen Modellen erläutern und veranschaulichen (z.B. Aggregatzustände mit dem Modell der kleinsten Teilchen erklären; Magnetisierung mit dem Modell der Elementarmagnete zeigen).',
            ],
          },
          {
            _id: 's12t2st-1c3',
            name: '4. Die Schülerinnen und Schüler können Stoffe bearbeiten, verändern und nutzen.',
            subCompetences: [],
          },
        ],
      },
      {
        _id: 's12t3',
        name: 'NMG.4 - Phänomene der belebten und unbelebten Natur erforschen und erklären',
        competences: [
          {
            _id: 's12t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können Signale, Sinne und Sinnesleistungen erkennen, vergleichen und erläutern.',
            subCompetences: [
              'können Besonderheiten, Unterschiede und Zusammenhänge verschiedener Sinnesleistungen und Signale beobachten, beschreiben und erklären (z.B. Zusammenhänge zwischen riechen, sehen, schmecken; erst sieht man den Blitz, dann hört man den Donner).',
            ],
          },
          {
            _id: 's12t3st-1c1',
            name: '2. Die Schülerinnen und Schüler können akustische Phänomene vergleichen und untersuchen.',
            subCompetences: [
              'können den Zusammenhang zwischen intensiver Gehörbelastung (Dauer, Lautstärke) und Hörschäden herstellen und an konkreten Beispielen im Alltag aufzeigen.',
            ],
          },
          {
            _id: 's12t3st-1c2',
            name: '3. Die Schülerinnen und Schüler können optische Phänomene erkennen und untersuchen.',
            subCompetences: [
              'können optische Phänomene mithilfe des Modells des Lichtstrahls bzw. Lichtbündels darstellen.   Modell des Lichtstrahls bzw. Lichtbündels',
            ],
          },
          {
            _id: 's12t3st-1c3',
            name: '4. Die Schülerinnen und Schüler können Wetterphänomene beobachten, sich über Naturereignisse informieren sowie entsprechende Phänomene und Sachverhalte erklären.',
            subCompetences: [
              'können ausgewählten Fragen, Merkmalen und einfachen Zusammenhängen zu Wetter und Witterung nachgehen, Ergebnisse strukturieren und einordnen sowie Vorstellungen dazu modellartig darstellen (z.B. zu Wetterfronten, Gewitter).',
            ],
          },
          {
            _id: 's12t3st-1c4',
            name: '5. Die Schülerinnen und Schüler können Erscheinungen auf der Erde und Bewegungen von Himmelskörpern wahrnehmen, beschreiben und erklären.',
            subCompetences: [
              'können zu ausgewählten Fragen zu Erde, Himmelskörpern und Universum Informationen erschliessen, Sachverhalte untersuchen sowie Erkenntnisse zusammenstellen, ordnen und darstellen (z.B. zu Galaxien, Sternen, Sternbildern, Planeten, Kometen, zu Raum und Zeit im Universum, zu bedeutenden Astronominnen und Astronomen).',
            ],
          },
        ],
      },
      {
        _id: 's12t4',
        name: 'NMG.5 - Technische Entwicklungen und Umsetzungen erschliessen, einschätzen und anwenden',
        competences: [
          {
            _id: 's12t4st-1c0',
            name: '1. Die Schülerinnen und Schüler können Alltagsgeräte und technische Anlagen untersuchen und nachkonstruieren.',
            subCompetences: [],
          },
          {
            _id: 's12t4st-1c1',
            name: '2. Die Schülerinnen und Schüler können elektrische und magnetische Phänomene sowie deren technische Anwendungen untersuchen.',
            subCompetences: [
              'können untersuchen und darstellen, wie sich Veränderungen in Stromkreisen auswirken (z.B. schwächere Batterie, zwei statt ein Lämpchen, in Serie statt parallel).',
              'können Anwendungen von Magneten und Elektromagneten im Alltag erkennen und erklären (z.B. Kompass reagiert auf Magnetfeld der Erde, Induktionskochfeld).',
            ],
          },
          {
            _id: 's12t4st-1c2',
            name: '3. Die Schülerinnen und Schüler können Bedeutung und Folgen technischer Entwicklungen für Mensch und Umwelt einschätzen.',
            subCompetences: [
              'können angeleitet Informationen zur Bedeutung eines für die Naturwissenschaften wichtigen Geräts recherchieren und dokumentieren (z.B. Entwicklungen in der Medizin durch das Mikroskop, Veränderungen des Bildes zu Erde und Universum durch das Fernrohr).',
            ],
          },
        ],
      },
      {
        _id: 's12t5',
        name: 'NMG.6 - Arbeit, Produktion und Konsum - Situationen erschliessen',
        competences: [
          {
            _id: 's12t5st-1c0',
            name: '1. Die Schülerinnen und Schüler können unterschiedliche Arbeitsformen und Arbeitsplätze erkunden.',
            subCompetences: [
              'kennen Gründe für Erwerbslosigkeit und mögliche Folgen für den Einzelnen und die Familie (z.B. Veränderungen beruflicher Anforderungen).',
            ],
          },
          {
            _id: 's12t5st-1c1',
            name: '2. Die Schülerinnen und Schüler können Berufswelten erkunden und Berufe nach ausgewählten Kriterien beschreiben.',
            subCompetences: [],
          },
          {
            _id: 's12t5st-1c2',
            name: '3. Die Schülerinnen und Schüler können die Produktion und den Weg von Gütern beschreiben.',
            subCompetences: [
              'können Produktions- und Dienstleistungsbetriebe der nahen Umgebung erkunden und typische Abläufe und Produktionsverfahren dokumentieren (z.B. Warenströme, Produktionsverfahren, Aufgaben und Ziele des Betriebes).',
            ],
          },
          {
            _id: 's12t5st-1c3',
            name: '4. Die Schülerinnen und Schüler können Tauschbeziehungen untersuchen und einfache wirtschaftliche Regeln erkennen.',
            subCompetences: [
              'können den Handel als Bindeglied zwischen Produktion und Konsum erkennen.',
              'können an Beispielen (z.B. Besuch eines Landwirtschafts-Gewerbebetriebes, Medienbericht) einfache wirtschaftliche Regeln und Zusammenhänge erkennen (z.B. Produktionskosten, Qualität, Verkaufspreis).',
            ],
          },
          {
            _id: 's12t5st-1c4',
            name: '5. Die Schülerinnen und Schüler können Rahmenbedingungen von Konsum wahrnehmen sowie über die Verwendung von Gütern nachdenken.',
            subCompetences: [
              'können an Beispielen die Verteilung von Gütern analysieren und Gründe für die Unterschiede erkennen.   Wohlstand, Armut',
            ],
          },
        ],
      },
      {
        _id: 's12t6',
        name: 'NMG.7 - Lebensweisen und Lebensräume von Menschen erschliessen und vergleichen',
        competences: [
          {
            _id: 's12t6st-1c0',
            name: '1. Die Schülerinnen und Schüler können unterschiedliche Lebensweisen beschreiben und erkennen, was Menschen ihre Herkunft und Zugehörigkeiten bedeuten.',
            subCompetences: [],
          },
          {
            _id: 's12t6st-1c1',
            name: '2. Die Schülerinnen und Schüler können Vorstellungen zu Lebensweisen von Menschen in fernen Gebieten der Erde beschreiben, vergleichen und entwickeln.',
            subCompetences: [
              'können eigene Einschätzungen und Einstellungen zur Lebensweise von und gegenüber Bevölkerungsgruppen in fernen Gebieten der Erde bewusst machen, vergleichen und dabei Ideen entwickeln, wie man mit möglichen Stereotypen und Vorurteilen umgehen kann.',
            ],
          },
          {
            _id: 's12t6st-1c2',
            name: '3. Die Schülerinnen und Schüler können Formen des Unterwegs-Seins von Menschen, Gütern und Nachrichten erkunden sowie Nutzen und Folgen des Unterwegs-Sein für Mensch und Umwelt abschätzen.',
            subCompetences: [
              'können Ideen und Perspektiven für die Mobilität und für Formen des Unterwegs-Seins in der Zukunft entwickeln sowie mögliche Handlungsweisen überdenken und einschätzen.',
            ],
          },
          {
            _id: 's12t6st-1c3',
            name: '4. Die Schülerinnen und Schüler können Zusammenhänge und Abhängigkeiten zwischen Lebensweisen und Lebensräumen von Menschen wahrnehmen, einschätzen und sich als Teil der einen Welt einordnen.',
            subCompetences: [
              'können zu aktuellen Themen über die Situation und die Entwicklung in verschiedenen Gebieten der Erde eigene Vorstellungen und Überlegungen darlegen, Fragen stellen und Sachverhalte klären (z.B. Entwicklung der Bevölkerung, Armut, Nahrungssicherheit).',
            ],
          },
        ],
      },
      {
        _id: 's12t7',
        name: 'NMG.8 - Menschen nutzen Räume - sich orientieren und mitgestalten',
        competences: [
          {
            _id: 's12t7st-1c0',
            name: '1. Die Schülerinnen und Schüler können räumliche Merkmale, Strukturen und Situationen der natürlichen und gebauten Umwelt wahrnehmen, beschreiben und einordnen.',
            subCompetences: [
              'können sich mit Beschreibungen und Zuschreibungen zu Räumen und Bevölkerungsgruppen in der Wohnregion und in der Schweiz auseinandersetzen, sich dazu informieren, Vergleiche vornehmen sowie Aussagen überprüfen und einschätzen (z.B. Was ist typisch? Was ist anders? Zuschreibungen, Klischees, Realitäten).',
            ],
          },
          {
            _id: 's12t7st-1c1',
            name: '2. Die Schülerinnen und Schüler können die unterschiedliche Nutzung von Räumen durch Menschen erschliessen, vergleichen und einschätzen und über Beziehungen von Menschen zu Räumen nachdenken.',
            subCompetences: [
              'können in verschiedenartigen Räumen in der näheren und weiteren Umgebung erkunden und recherchieren, welche Nutzungsansprüche verschiedene Menschen haben sowie vermuten und einschätzen, welche Nutzungskonflikte dabei entstehen können (z.B. Landwirtschaft - Bauen, Wohnen - Verkehr, Freizeit/Tourismus - Naturschutz).',
            ],
          },
          {
            _id: 's12t7st-1c2',
            name: '3. Die Schülerinnen und Schüler können Veränderungen in Räumen erkennen, über Folgen von Veränderungen und die künftige Gestaltung und Entwicklung nachdenken.',
            subCompetences: [],
          },
          {
            _id: 's12t7st-1c3',
            name: '4. Die Schülerinnen und Schüler können Elemente und Merkmale von Räumen in Darstellungsmitteln auffinden sowie raumbezogene Orientierungsraster aufbauen und anwenden.',
            subCompetences: [
              'können ausgehend von Informationen zu aktuellen Ereignissen (z.B. Naturereignisse, Konflikte zwischen Bevölkerungsgruppen) räumliche Bezüge in Orientierungsmitteln auffinden und Informationen zu räumlichen Situationen einordnen.',
            ],
          },
          {
            _id: 's12t7st-1c4',
            name: '5. Die Schülerinnen und Schüler können sich in ihrer näheren und weiteren Umgebung orientieren, sicher bewegen und dabei Orientierungsmittel nutzen und anwenden.',
            subCompetences: [
              'können unterschiedliche Orientierungsmittel (z.B. Karten, Kompass, GPS) im Gelände anwenden und mithilfe von Legenden Angaben aus Orientierungsmitteln herauslesen und räumliche Situationen charakterisieren.',
            ],
          },
        ],
      },
      {
        _id: 's12t8',
        name: 'NMG.9 - Zeit, Dauer und Wandel verstehen - Geschichte und Geschichten unterscheiden',
        competences: [
          {
            _id: 's12t8st-1c0',
            name: '1. Die Schülerinnen und Schüler können Zeitbegriffe aufbauen und korrekt verwenden, Zeit als Konzept verstehen und nutzen sowie den Zeitstrahl anwenden.',
            subCompetences: [
              'können ausgewählte historische Ereignisse oder Veränderungen auf einem Zeitstrahl einordnen (z.B. Erfindung der Schrift, Bundesbrief 1291).',
            ],
          },
          {
            _id: 's12t8st-1c1',
            name: '2. Die Schülerinnen und Schüler können Dauer und Wandel bei sich sowie in der eigenen Lebenswelt und Umgebung erschliessen.',
            subCompetences: [
              'können den Wandel menschlicher Kultur in einer früheren Epoche beschreiben (z.B. von der Alt- zur Jungsteinzeit, von der Antike zum Mittelalter).   Jungsteinzeit',
            ],
          },
          {
            _id: 's12t8st-1c2',
            name: '3. Die Schülerinnen und Schüler können verstehen, wie Geschichte aus Vergangenheit rekonstruiert wird.',
            subCompetences: [
              'können verstehen, dass man ein historisches Ereignis in unterschiedlicher Weise erzählen kann (z.B. Eroberung der Waadt, Eroberung Amerikas).',
              'können verstehen, dass unterschiedliche Sichtweisen von Vergangenheit mit aktuellen Interessen in Zusammenhang stehen (z.B. Alte Eidgenossenschaft).',
            ],
          },
          {
            _id: 's12t8st-1c3',
            name: '4. Die Schülerinnen und Schüler können Geschichte und Geschichten voneinander unterscheiden.',
            subCompetences: [
              'können Kriterien geleitet Sagen und Mythen von geschichtlichen Darstellungen unterscheiden (z.B. Sagen der Schweiz).',
              'können den Gebrauch von Sagen und Mythen in der aktuellen Gegenwart kritisch reflektieren und deren Verwendung in der politischen Diskussion erkennen.',
            ],
          },
        ],
      },
      {
        _id: 's12t9',
        name: 'NMG.10 - Gemeinschaft und Gesellschaft - Zusammenleben gestalten und sich engagieren',
        competences: [
          {
            _id: 's12t9st-1c0',
            name: '1. Die Schülerinnen und Schüler können auf andere eingehen und Gemeinschaft mitgestalten.',
            subCompetences: [],
          },
          {
            _id: 's12t9st-1c1',
            name: '2. Die Schülerinnen und Schüler können Freundschaft und Beziehungen pflegen und reflektieren.',
            subCompetences: [],
          },
          {
            _id: 's12t9st-1c2',
            name: '3. Die Schülerinnen und Schüler können grundlegende Funktionen öffentlicher Institutionen verstehen.',
            subCompetences: [
              'können ausgewählte Aufgaben einer Gemeinde den Ressorts einer Gemeinde zuordnen und deren Zusammenspiel erklären (z.B. Schneeräumung, Wasserversorgung).   Ressort, Gemeinde',
              'können das Zusammenwirken von verschiedenen Teilbereichen des Staates an einem Beispiel erklären (z.B. Polizei und Gericht).',
            ],
          },
          {
            _id: 's12t9st-1c3',
            name: '4. Die Schülerinnen und Schüler können das Verhältnis von Macht und Recht in Gegenwart und Vergangenheit verstehen.',
            subCompetences: [
              'können das Entstehen von staatlichen Strukturen an einem Beispiel nachvollziehen.   Eidgenossenschaft im 13.-15. Jahrhundert',
              'können das Ineinandergreifen von Wirtschaft, Politik und Recht an einem Beispiel erkennen (z.B. Alte Eidgenossenschaft und Alpenpässe).',
            ],
          },
          {
            _id: 's12t9st-1c4',
            name: '5. Die Schülerinnen und Schüler können eigene Anliegen einbringen sowie politische Prozesse erkennen.',
            subCompetences: [
              'können Rechte und Pflichten von Individuen in unserer Gesellschaft nennen.   Schulpflicht, Kinderrechte',
            ],
          },
        ],
      },
      {
        _id: 's12t10',
        name: 'NMG.11 - Grunderfahrungen, Werte und Normen erkunden und reflektieren',
        competences: [
          {
            _id: 's12t10st-1c0',
            name: '1. Die Schülerinnen und Schüler können menschliche Grunderfahrungen beschreiben und reflektieren.',
            subCompetences: [],
          },
          {
            _id: 's12t10st-1c1',
            name: '2. Die Schülerinnen und Schüler können philosophische Fragen stellen und über sie nachdenken.',
            subCompetences: [],
          },
          {
            _id: 's12t10st-1c2',
            name: '3. Die Schülerinnen und Schüler können Werte und Normen erläutern, prüfen und vertreten.',
            subCompetences: [],
          },
          {
            _id: 's12t10st-1c3',
            name: '4. Die Schülerinnen und Schüler können Situationen und Handlungen hinterfragen, ethisch beurteilen und Standpunkte begründet vertreten.',
            subCompetences: [],
          },
        ],
      },
      {
        _id: 's12t11',
        name: 'NMG.12 - Religionen und Weltsichten begegnen',
        competences: [
          {
            _id: 's12t11st-1c0',
            name: '1. Die Schülerinnen und Schüler können religiöse Spuren in Umgebung und Alltag erkennen und erschliessen.',
            subCompetences: [
              'können in der Sprache (z.B. Ausdrücke, Redewendungen) religiöse Motive identifizieren und ihre Bedeutung erschliessen.',
            ],
          },
          {
            _id: 's12t11st-1c1',
            name: '2. Die Schülerinnen und Schüler können Inhalt, Sprachform und Gebrauch religiöser Texte erläutern.',
            subCompetences: [
              'können in Texten verschiedener Religionen religiöse Vorstellungen erkennen (z.B. Jenseitsvorstellungen, Gebote, Wunder, Gestalten).',
              'können religiöse Sprachformen erkennen und von geschichtlichen Darstellungen und naturwissenschaftlichen Erkenntnissen unterscheiden.   Schöpfungsmythen, Legenden, Gleichnisse',
            ],
          },
          {
            _id: 's12t11st-1c2',
            name: '3.Die Schülerinnen und Schüler können religiöse Praxis im lebensweltlichen Kontext beschreiben.',
            subCompetences: [
              'können Rituale und Bräuche der Religionen miteinander vergleichen und Unterschiede in der Praxis beschreiben (z.B. regionale und konfessionelle Unterschiede).',
            ],
          },
          {
            _id: 's12t11st-1c3',
            name: '4. Die Schülerinnen und Schüler können Festtraditionen charakterisieren.',
            subCompetences: [
              'können säkulare Gedenkanlässe und Feiertage beschreiben und ihre Bedeutung erläutern (z.B. Bundesfeier, Tag der Arbeit, Tag der Menschenrechte, regionale Feste).',
            ],
          },
          {
            _id: 's12t11st-1c4',
            name: '5. Die Schülerinnen und Schüler können sich in der Vielfalt religiöser Traditionen und Weltanschauungen orientieren und verschiedenen Überzeugungen respektvoll begegnen.',
            subCompetences: [
              'können Gemeinsamkeiten und Bezüge zwischen Judentum, Christentum und Islam an Beispielen erläutern.',
            ],
          },
        ],
      },
    ],
  },
  {
    _id: 's13',
    name: 'Räume, Zeiten, Gesellschaften mit Geografie, Geschichte',
    topics: [
      {
        _id: 's13t0',
        name: 'RZG.1 - Natürliche Grundlagen der Erde untersuchen',
        competences: [
          {
            _id: 's13t0st-1c0',
            name: '1. Die Schülerinnen und Schüler können die Erde als Planeten beschreiben.',
            subCompetences: [
              'können Merkmale der Erde als Planeten beschreiben.   Gestalt der Erde, Neigung der Erdachse, Rotation, Erdrevolution',
              'können Phänomene erklären, die sich aus Stellung und Bewegung der Erde im Sonnensystem ergeben.   Jahreszeiten, Tageslängen, Zeitzonen',
              'können verschiedene Weltbilder zeitlich und räumlich einordnen.   Weltbilder',
            ],
          },
          {
            _id: 's13t0st-1c1',
            name: '2. Die Schülerinnen und Schüler können Wetter und Klima analysieren.',
            subCompetences: [
              'können verschiedene Landschaftszonen beschreiben und ihnen die sie kennzeichnenden klimatischen Grundlagen (z.B. Klimadiagramme) zuordnen.   Kalte Zone, gemässigte Zone, Subtropenzone und Tropenzone; Höhenstufen; kontinentale und ozeanische Lage',
              'können Grosswetterlagen und grossräumige Windsysteme benennen und die daraus entstehenden typischen Wetterabläufe erklären.   tropische Zirkulation; europäische Grosswetterlagen: Föhn, Frontverlauf, Bise',
              'können sich über den Klimawandel informieren, Ursachen erläutern und Auswirkungen des Klimawandels auf verschiedene Regionen der Welt, insbesondere die Schweiz, einschätzen.   Treibhauseffekt; Extremereignisse: Hochwasser',
              'können die aktuelle Situation in die Klimaentwicklung einordnen sowie Beiträge zur Begrenzung des Klimawandels in der Zukunft formulieren.',
            ],
          },
          {
            _id: 's13t0st-1c2',
            name: '3. Die Schülerinnen und Schüler können Wetter und Klima analysieren.',
            subCompetences: [
              'können Naturphänomene und Naturlandschaften (z.B. Glazial-, Auen-, Vulkanlandschaft) beschreiben und deren Entstehung als Ergebnis endogener und exogener Prozesse erklären.   Plattentektonik, Erosion, Ablagerung',
              'können sich über aktuelle Naturereignisse informieren und deren Ursachen erklären.   Vulkanismus, Erdbeben, Murgang, Felssturz',
              'können die Auswirkungen von Naturereignissen auf Lebenssituationen von Menschen und auf die Umwelt benennen und einschätzen.',
              'können Naturlandschaften und Spuren von Naturereignissen an ausserschulischen Lernorten erkennen und untersuchen.',
            ],
          },
          {
            _id: 's13t0st-1c3',
            name: '4. Die Schülerinnen und Schüler können Wetter und Klima analysieren.',
            subCompetences: [
              'können für den Menschen wichtige natürliche Ressourcen (z.B. Gesteine, mineralische Rohstoffe, Wasser, Boden) und deren Nutzung nennen.   Rohstoff, Ressource',
              'können zwischen erneuerbaren und nicht-erneuerbaren Energieträgern unterscheiden (z.B. Sonnenstrahlen, Wasserkraft, Erdöl, Holz) und deren Vor- und Nachteile vergleichen. Energieträger',
              'können Auswirkungen analysieren, die durch die Gewinnung, den Abbau und die Nutzung natürlicher Ressourcen auf Mensch und Umwelt entstehen.',
              'können Probleme benennen, die sich aus dem begrenzten Vorkommen von natürlichen Ressourcen ergeben und daraus entstehende Interessenskonflikte untersuchen.',
              'reflektieren das eigene Verhalten im Hinblick auf einen nachhaltigen Umgang mit natürlichen Ressourcen.',
            ],
          },
        ],
      },
      {
        _id: 's13t1',
        name: 'RZG.2 - Lebensweisen und Lebensräume charakterisieren',
        competences: [
          {
            _id: 's13t1st-1c0',
            name: '1. Die Schülerinnen und Schüler können Bevölkerungsstrukturen und -bewegungen erkennen und einordnen.',
            subCompetences: [
              'können Bevölkerungsverteilungen und -entwicklungen in ausgewählten Regionen der Welt beschreiben und anhand von Bevölkerungsdiagrammen vergleichen.   Globales Bevölkerungswachstum',
              'können aktuelle Bevölkerungsbewegungen erkennen, diese räumlich und zeitlich strukturieren sowie Gründe für Migration erklären.   Migration in die Schweiz; wirtschaftliche, soziale, ökologische und politische Migrationsgründe',
              'können diskutieren, welche Auswirkungen Migration auf die betroffenen Personen und die Aufnahmegesellschaft hat.',
            ],
          },
          {
            _id: 's13t1st-1c1',
            name: '2. Die Schülerinnen und Schüler können Lebensweisen von Menschen in verschiedenen Lebensräumen vergleichen.',
            subCompetences: [
              'können eigene Vorstellungen von vertrauten und fremden Lebensweisen darstellen, mit anderen vergleichen und ordnen.   Mental Maps',
              'können vergangene und gegenwärtige Lebensweisen in verschiedenen Räumen untersuchen, charakterisieren und vergleichen.   Daseinsgrundfunktionen',
              'können soziale Ungleichheiten beschreiben, deren Ursachen erklären und Lebensbedingungen in verschiedenen Lebensräumen bewerten.   Armut, Hunger, Bildung',
              'können Auswirkungen von sozialen Ungleichheiten untersuchen, Massnahmen zu deren Verringerung beurteilen (z.B. Millenniumsziele, Entwicklungszusammenarbeit) und entsprechende eigene Ideen entwickeln.',
            ],
          },
          {
            _id: 's13t1st-1c2',
            name: '3. Die Schülerinnen und Schüler können die Dynamik in städtischen und ländlichen Räumen analysieren.',
            subCompetences: [
              'können ihre Vorstellungen von städtischen und ländlichen Räumen darstellen, mit anderen vergleichen und hinterfragen.',
              'können Merkmale und Funktionen von städtischen und ländlichen Räumen erkennen und vergleichen.   Zentrums-, Erholungs-, Wohnfunktion, Bevölkerungsverteilung, Nationalitäten',
              'können Entwicklungen und Veränderungen in städtischen und ländlichen Räumen untersuchen und benennen.   Agglomeration, Siedlungsentwicklung, Verstädterung, Landflucht, Push/Pullfaktoren, Segregation',
              'können Wechselwirkungen zwischen städtischen und ländlichen Räumen hinterfragen und daraus resultierende Auswirkungen auf Mensch und Umwelt ableiten.',
            ],
          },
          {
            _id: 's13t1st-1c3',
            name: '4. Die Schülerinnen und Schüler können Mobilität und Transport untersuchen.',
            subCompetences: [
              'können an Beispielen aus der Schweiz und im weltweiten Kontext die Entwicklung des Transports von Personen und Gütern, sowie die Entwicklung der Nachrichtentechnik analysieren.',
              'können die Auswirkungen von Transport und Mobilität auf Mensch, Umwelt und Raumstrukturen untersuchen und benennen.   öffentlicher Verkehr, Individualverkehr',
              'kennen Kriterien für ein nachhaltiges und sicheres Mobilitätsverhalten und können diese für die Reflexion des eigenen Mobilitätsverhaltens anwenden.',
            ],
          },
          {
            _id: 's13t1st-1c4',
            name: '5. Die Schülerinnen und Schüler können die Bedeutung des Tourismus einschätzen.',
            subCompetences: [
              'können das Verhalten von Tourist/innen beschreiben und im Vergleich mit statistischen Kennzahlen einordnen (z.B. Destinationen, Zweck, Dauer, Form, Übernachtung, Verkehrsmittel).',
              'können Formen des Tourismus am Beispiel des Schweizer Alpenraumes und des Mittelmeerraumes beschreiben sowie die wirtschaftliche Bedeutung für ausgewählte Regionen charakterisieren.   Individualtourismus, Massentourismus, sanfter Tourismus',
              'können den Einfluss touristischer Aktivitäten auf Gebirgs- und Küstenregionen einschätzen und deren Auswirkungen für Mensch und Umwelt benennen.   Winter- und Sommertourismus, Verkehr, Infrastruktur, Landschaftsveränderungen',
              'können die Anliegen des nachhaltigen Tourismus erklären und reflektieren sie in Bezug auf die eigene Feriengestaltung.',
            ],
          },
        ],
      },
      {
        _id: 's13t2',
        name: 'RZG.3 - Mensch-Umwelt-Beziehungen analysieren',
        competences: [
          {
            _id: 's13t2st-1c0',
            name: '1. Die Schülerinnen und Schüler können natürliche Systeme und deren Nutzung erforschen.',
            subCompetences: [
              'können natürliche Systeme charakterisieren und räumlich einordnen.   Regenwald, Meer, Arktis/Antarktis, Gebirge, Wüsten, Städte',
              'können Nutzungsformen natürlicher Systeme (z.B. Landwirtschaft, Fischfang, Rohstoffgewinnung, Tourismus, Besiedlung) untersuchen und den Nutzungswandel im Verlauf der Zeit beschreiben.   Kulturlandschaftswandel in der Schweiz',
              'können die Auswirkungen der Nutzung natürlicher Systeme auf das Landschaftsbild und den Verbrauch natürlicher Ressourcen ableiten.   Desertifikation, Waldrodung, Bewässerung',
              'können sich über Interessenskonflikte bei der Nutzung natürlicher Systeme informieren, diese abwägen und Eingriffe des Menschen in natürliche Systeme bewerten.',
              'können Schutzmassnahmen von natürlichen Systemen bewerten (z.B. Nationalparks, Umweltlabels, Kampagnen) und über mögliche nachhaltige Nutzungen nachdenken.',
            ],
          },
          {
            _id: 's13t2st-1c1',
            name: '2. Die Schülerinnen und Schüler können wirtschaftliche Prozesse und die Globalisierung untersuchen.',
            subCompetences: [
              'können verschiedene Wirtschaftsräume beschreiben und unterscheiden.   Agrarräume, Industrieregionen, Dienstleistungszentren',
              'können landwirtschaftliche Produktionsformen hinsichtlich ihrer Auswirkungen auf die Landschaft, den Verbrauch natürlicher Ressourcen und die Arbeitssituation der Menschen vergleichen und einschätzen sowie regionale und globale Verflechtungen erläutern.   Landwirtschaftliche Produktionsformen: Berglandwirtschaft, Plantage',
              'können die Produktion von industriellen Gütern und die Bereitstellung von Dienstleistungen hinsichtlich ihrer räumlichen und sozialen Auswirkungen untersuchen, sowie regionale und globale Verflechtungen erläutern.   Bedarf an Ressourcen wie Boden, Wasser, Arbeitskräfte',
              'können räumliche Veränderungen beschreiben, die sich aufgrund des Strukturwandels ergeben haben (z.B. Landwirtschaft - Industrie - Dienstleistung).   Umnutzung und Aufwertung ehemaliger Industriezentren; Rolle der Kommunikationsmedien',
              'setzen sich mit der nachhaltigen Produktion von Gütern auseinander und können Erkenntnisse in Bezug auf das eigene Verhalten reflektieren.',
            ],
          },
          {
            _id: 's13t2st-1c2',
            name: '3. Die Schülerinnen und Schüler können Prozesse der Raumplanung nachvollziehen.',
            subCompetences: [
              'können die gesellschaftliche Bedeutung geografischer und raumplanerischer Fragestellungen in Medien erkennen, sie auswerten und darüber diskutieren.',
              'können fachliche Grundlagen bei raumplanerischen Prozessen erarbeiten (z.B. Siedlungsraumgestaltung, Umzonung), verschiedene Positionen dazu nennen und sich eine eigene Meinung bilden.   Raumplanung, Zersiedlung, Landschaftsschutz, nachhaltige Raumentwicklung',
            ],
          },
        ],
      },
      {
        _id: 's13t3',
        name: 'RZG.4 - Sich in Räumen orientieren',
        competences: [
          {
            _id: 's13t3st-1c0',
            name: '1. Die Schülerinnen und Schüler können Orte lokalisieren.',
            subCompetences: [
              'können zu Lernsituationen passende Orte auf Karten, analogen und digitalen Globen sowie Satellitenbildern in verschiedenen Massstabsebenen einzeichnen und auffinden.   Kontinente, Ozeane, Gebirge, Länder, Ortschaften, Gewässer, Grosslandschaften',
              'können die Lage von ausgewählten Orten mithilfe von Raummerkmalen geografisch charakterisieren (z.B. am Meer, im Alpenvorland, in aridem Gebiet).',
              'können Orte in räumliche Orientierungsraster einordnen.   Gradnetz, Vegetationszonen, Plattengrenzen; Wirtschaftsräume',
            ],
          },
          {
            _id: 's13t3st-1c1',
            name: '2. Die Schülerinnen und Schüler können Karten und Orientierungsmittel auswerten.',
            subCompetences: [
              'können verschiedene Kartendarstellungen (z.B. euro- oder polzentriert, verzerrte Kartogramme) beschreiben und vergleichen.',
              'können verschiedene Karten und Orientierungsmittel zur Beantwortung von Fragestellungen nutzen und auswerten.   Orientierungsmittel: Sachtext, Bild, Blockbild, Profil, Statistik, Diagramm, Modell',
              'können Kartenskizzen und einfache Karten zeichnen.',
              'können räumliche Situationen und Problemstellungen in Modellen darstellen (z.B. Tellurium, Sandkasten, Grundwassermodell) und mithilfe einfacher Experimente untersuchen.',
            ],
          },
          {
            _id: 's13t3st-1c2',
            name: '3. Die Schülerinnen und Schüler können sich im Realraum orientieren.',
            subCompetences: [
              'können mithilfe von Karten und Orientierungsmitteln den eigenen Standort bestimmen sowie Orte und Objekte im Realraum auffinden.   Koordinaten',
              'können sich mithilfe von Orientierungsmitteln (z.B. Kompass, GPS, Rallyekarte, Verkehrsnetzplan) im Realraum fortbewegen.',
              'können einfache Kartierungen zu ausgewählten Fragestellungen im Realraum vornehmen.',
            ],
          },
        ],
      },
      {
        _id: 's13t4',
        name: 'RZG.5 - Schweiz in Tradition und Wandel verstehen',
        competences: [
          {
            _id: 's13t4st-1c0',
            name: '1. Die Schülerinnen und Schüler können Entstehung und Entwicklung der Schweiz erklären.',
            subCompetences: [
              'können wichtige Ereignisse aus Entstehung und Entwicklung der Eidgenossenschaften kurz erklären und berühmten Bildern zuordnen.   Ursprungsmythen, Eidgenossenschaften, Gegensatz Stadtorte-Landorte, Konfessionelle Spaltung',
              'können Entstehung und Entwicklung der Schweiz als Bundesstaat schildern und in einen europäischen Zusammenhang stellen.   Helvetik, Bundesstaat, Nation',
              'können zu einem wichtigen Ereignis der Schweizer Geschichte im 20. Jahrhundert Ursachen, Verlauf und Folgen aufzeigen.   Schweiz während der Zeit der Weltkriege; Landesstreik; Schweiz im Kalten Krieg, in der Hochkonjunktur; Frauenstimmrecht',
              'können zu ausgewählten Veränderungen in der Schweiz der letzten 200 Jahre selbstständig Materialien finden und damit die Veränderungen veranschaulichen (z.B. Umwelt, Alltag, Geschlecht, Migration, Religion).',
            ],
          },
          {
            _id: 's13t4st-1c1',
            name: '2. Die Schülerinnen und Schüler können aufzeigen, wie Menschen in der Schweiz durch wirtschaftliche Veränderungen geprägt werden und wie sie die Veränderungen gestalten.',
            subCompetences: [
              'können die Entwicklung der Erwerbssektoren am Beispiel der Schweiz aufzeigen und erläutern (z.B. Veränderungen der Anzahl Bauernhöfe in der Schulgemeinde, Entwicklung der Anzahl Beschäftigten in den drei Erwerbssektoren im 19. und 20. Jahrhundert in der Schweiz).   Wandel von der Agrar- zur Industrie- und zur Dienstleistungsgesellschaft; Schweiz als Auswanderungs- und Einwanderungsland',
              'können die Veränderung eines Berufs im Laufe der Zeit darstellen (z.B. mit Bild-, Textquellen).   Technischer Fortschritt',
              'können Auswirkungen von wirtschaftlichen Veränderungen auf einzelne Menschen erklären (z.B. Technisierung, Inflation, Hochkonjunktur, Energieknappheit).',
            ],
          },
          {
            _id: 's13t4st-1c2',
            name: '3. Die Schülerinnen und Schüler können das Alltagsleben von Menschen in der Schweiz in verschiedenen Jahrhunderten vergleichen.',
            subCompetences: [
              'können die Veränderungen eines Ortes im Verlaufe der Zeit dokumentieren und erklären (z.B. Schulhaus, Dorfplatz, Stadtbild, Strasse, Tal).   Schulgeschichte, Orts- und Regionalgeschichte',
              'können einzelne Aspekte des Alltagslebens aus verschiedenen Zeiten vergleichen und Ursachen von Veränderungen benennen (z.B. Wohnen, Ernährung, Freizeit).   Alltags- geschichte',
              'können einzelne Schweizerinnen und Schweizer porträtieren, die einen wichtigen Beitrag zur Entwicklung des Zusammenlebens oder der sozialen Gerechtigkeit in der Schweiz und der Welt geleistet haben (z.B. Niklaus von Flüe, Huldrych Zwingli, Guillaume-Henri Dufour, Alfred Escher, Emilie Kempin-Spyri, Henry Dunant, Marie Heim-Vögtlin, Robert Grimm, Denis de Rougemont, Henri Guisan, Gertrud Kurz, Emilie Lieberherr).   Kulturelle und religiöse Minderheiten, Gerechtigkeit, Zivilcourage',
              'können eine Quelle oder eine Darstellung zum Alltag eines Menschen in der Schweiz in einer Bibliothek oder einem Archiv finden, lesen und analysieren (z.B. zu Familie, Gesundheit, Mobilität).',
            ],
          },
        ],
      },
      {
        _id: 's13t5',
        name: 'RZG.6 - Weltgeschichtliche Kontinuitäten und Umbrüche erklären',
        competences: [
          {
            _id: 's13t5st-1c0',
            name: '1. Die Schülerinnen und Schüler können die Geschichte vom Beginn der Neuzeit bis heute in ausgewählten Längsschnitten erzählen.',
            subCompetences: [
              'können mit Materialien aufzeigen, wie sich das Bild der Welt zu Beginn der Neuzeit verändert hat (z.B. mit Karten, Bildern zu Entdeckungsreisen).   Neuzeit: Kulturbegegnungen, Weltbild',
              'können an einem geschichtlichen Umbruch der frühen Neuzeit darlegen, wie sich Denken und Leben von Menschen verändert haben.   Europäische Expansion, Reformation, Absolutismus, Aufklärung',
              'können einen groben Überblick zur Geschichte vom Beginn der Neuzeit bis heute entwickeln (z.B. mit einem einfachen Zeitstrahl, einer Tabelle mit Informationen aus verschiedenen Kontinenten).   Vergangenheit, Gegenwart, Zukunft',
              'können eine kurze historische Darstellung einer ausgewählten Region vom Beginn der Neuzeit bis heute verfassen (z.B. zum Heimatland, zum Ferienziel, zu den USA, zum Nahen Osten, zu China).',
            ],
          },
          {
            _id: 's13t5st-1c1',
            name: '2. Die Schülerinnen und Schüler können Kontinuitäten und Umbrüche im 19. Jahrhundert charakterisieren.',
            subCompetences: [
              'können Ursachen und Folgen der Französischen Revolution erklären.   Ständegesellschaft; Französische Revolution: Freiheit, Gleichheit',
              'können zu einem Aspekt der Industrialisierung verschiedene Informationen finden und miteinander vergleichen (z.B. ein Bild, eine Textquelle, ein Erlebnisbericht zur Dampfmaschine).   Industrialisierung, Soziale Frage, Kinderarbeit',
              'können mit vorgegebenen Materialien eine kurze, historisch sachgerechte Geschichte zum 19. Jahrhundert erzählen.   Imperialismus, Kolonialismus, Nationalismus',
              'können Materialien zu Erfindungen und Entdeckungen im 19. Jahrhundert erschliessen und damit Ursache, Verlauf und Wirkung der Veränderung darstellen.',
            ],
          },
          {
            _id: 's13t5st-1c2',
            name: '3. Die Schülerinnen und Schüler können ausgewählte Phänomene der Geschichte des 20. und 21. Jahrhunderts analysieren und deren Relevanz für heute erklären.',
            subCompetences: [
              'können darlegen, warum das 20. Jahrhundert als Zeitalter der Extreme bezeichnet wird.   Weltkriege, Faschismus, Kommunismus, Holocaust, Kalter Krieg, Unabhängigkeitsbewegung, Globalisierung, Bürgerkrieg, Terrorismus',
              'können die Geschichte von ausgewählten Institutionen und Menschen erzählen, die sich im 20. und 21. Jahrhundert für Freiheit, Frieden, Wohlstand, Gerechtigkeit oder Nachhaltige Entwicklung einsetzten (z.B. Bertha von Suttner, Martin Luther King, Mutter Theresa, Nelson Mandela, Mahathma Ghandi).   Humanitäres Völkerrecht, Rotes Kreuz, Flucht, Migration, Asyl',
              'können anhand vorgegebener Materialien Geschichten von Krieg betroffener Menschen aus den letzten 50 Jahren erzählen und diese in einen geschichtlichen Zusammenhang stellen.',
            ],
          },
        ],
      },
      {
        _id: 's13t6',
        name: 'RZG.7 - Geschichtskultur analysieren und nutzen',
        competences: [
          {
            _id: 's13t6st-1c0',
            name: '1. Die Schülerinnen und Schüler können sich an ausserschulischen geschichtlichen Bildungsorten zurechtfinden und sie zum Lernen nutzen.',
            subCompetences: [
              'können nach einem Museumsbesuch einen Ausstellungsgegenstand beschreiben und dazu eine Geschichte erzählen.   Museum',
              'können eine Karte relevanter Denkmäler und historisch bedeutsamer Orte in der eigenen Umgebung erstellen.   Denkmal, historischer Schauplatz, Erinnerungsort',
              'können erklären, woran ein ausgewähltes Denkmal erinnert.   Recherche',
              'können Mitschülerinnen/Mitschüler durch einen Teil eines Museums oder eines historischen Schauplatzes führen und dabei ausgewählte Gegenstände bzw. Orte erklären.',
            ],
          },
          {
            _id: 's13t6st-1c1',
            name: '2. Die Schülerinnen und Schüler können Geschichte zur Bildung und Unterhaltung nutzen.',
            subCompetences: [
              'können zu einem selber gewählten geschichtlichen Thema unterschiedliche Materialien finden, diese fachgerecht beschreiben und nach Quellenarten ordnen.   Textquelle, Bildquelle, historische Karikatur, Fotografie, historische Karte und Geschichtskarte',
              'können eine populäre Geschichtsdarstellung zu einem historischen Thema zusammenfassen und in einen historischen Zusammenhang stellen.   populäre Geschichtsdarstellung: historischer Comic, Spielfilm, historisches Jugendbuch',
              'können zu einer ausgewählten populären Geschichtsdarstellung weitere Materialien finden und diese mit der Darstellung vergleichen.   Quelle und Darstellung, Quellenkritik',
              'können erklären, wie Geschichte ihr Leben beeinflusst hat und worin für sie selber der Nutzen der Beschäftigung mit Geschichte liegt.',
            ],
          },
          {
            _id: 's13t6st-1c2',
            name: '3. Die Schülerinnen und Schüler können aus Gesprächen mit Zeitzeugen Erkenntnisse über die Vergangenheit gewinnen.',
            subCompetences: [
              'können zur Geschichte des eigenen Lebens Quellen finden und in eine Erzählung integrieren.   Biografie: Fotografien, Gegenstände, Urkunden',
              'können bei einem historischen Gegenstand darstellen, wie Menschen damit umgegangen sind und wozu er diente (z.B. altes Spinnrad, Waschbrett, Setzkasten, Dreschflegel).   historischer Gegenstand',
              'können zu einem geschichtlichen Ereignis oder Phänomen ein Zeitzeugeninterview durchführen und dokumentieren.   Zeitzeugen-Interview',
              'können ein selber durchgeführtes Zeitzeugeninterview mit anderen Quellen anreichern (z.B. mit Fotografien, Zeitungsberichten, Statistiken) und in einen geschichtlichen Zusammenhang stellen.',
            ],
          },
        ],
      },
      {
        _id: 's13t7',
        name: 'RZG.8 - Demokratie und Menschenrechte verstehen und sich dafür engagieren',
        competences: [
          {
            _id: 's13t7st-1c0',
            name: '1. Die Schülerinnen und Schüler können die Schweizer Demokratie erklären und mit anderen Systemen vergleichen.',
            subCompetences: [
              'können darlegen, wie Demokratie entstanden ist, wie sie sich weiterentwickelt hat und sich von anderen Regierungsformen unterscheidet.   Demokratie, Volkssouveränität, Machtbegrenzung, Bürgerrecht',
              'können die drei Gewalten auf Gemeinde-, Kantons- und Bundesebene unterscheiden und aufzeigen, welche Aufgaben sie lösen.   Verfassung, Gewaltenteilung, Regierung, Parlament, Gericht',
              'können wichtige Besonderheiten der Schweizer Demokratie sowie die daraus resultierenden Rechte und Pflichten erklären.   Föderalismus, Volk, Gemeinde, direkte Demokratie, Initiative, Referendum, Parteien, Verbände',
              'können zu aktuellen Problemen und Kontroversen Stellung beziehen, dabei persönliche Erfahrungen im schulischen und ausserschulischen Alltag einbeziehen und die Positionen begründen (z.B. Verhältnis von Staat und Wirtschaft, Siedlungsraumgestaltung).',
            ],
          },
          {
            _id: 's13t7st-1c1',
            name: '2. Die Schülerinnen und Schüler können die Entwicklung, Bedeutung und Bedrohung der Menschenrechte erklären.',
            subCompetences: [
              'können Kinder- und Menschenrechte erläutern.   Grundrechte, Menschenrechte, Menschenwürde',
              'können die Bedeutung von Kinder- und Menschenrechten für den eigenen Alltag und die Schulgemeinschaft erkennen und einschätzen.   Diskriminierung',
              'können historische Beispiele schildern, die zu einer besseren Durchsetzung der Kinder- und Menschenrechte geführt haben.',
            ],
          },
          {
            _id: 's13t7st-1c2',
            name: '3. Die Schülerinnen und Schüler können die Positionierung der Schweiz in Europa und der Welt wahrnehmen und beurteilen.',
            subCompetences: [
              'können ausgewählte Ziele und Anliegen sowie die Entwicklung einer internationalen Organisation beschreiben, bei der die Schweiz Mitglied ist.   UNO',
              'können Phasen der europäischen Einigung aufzählen und dabei die Position der Schweiz charakterisieren.   Neutralität; Europarat; OSZE',
              'können unterschiedliche Positionen zum Verhältnis Schweiz - Europa skizzieren und selber dazu Stellung nehmen.',
            ],
          },
        ],
      },
    ],
  },
]
