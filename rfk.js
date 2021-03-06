/*
   Copyright 2012 Michael Wooten

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var com = com || {};
com.robotfindskitten = com.robotfindskitten || {};

com.robotfindskitten.NonKittenItemNames = (function(rfk, global) {

  var nonKittenItems = [
  
   /* Vorlagen
   "60 <a href=\"http\" target=_blank>textitexti</a> ",
   "bild<a href=\"img/bild.jpg\"><img class=\"bild\" src=\"img/bild.jpg\"></a>",
   */
  
   "Nix Kitten - <a href=\"http://www.tutonaut.de/anleitung-das-persoenliche-facebook-archiv-herunterladen.html\" target=_blank>Facebook-Profil saugen!</a> ",   
   "Wieder kein Kuschelkaetzchen -  <a href=\"http://www.tutonaut.de/anleitung-verschluesselung-jedem-cloud-speicher-einrichten.html\" target=_blank>Zeit, Eure Cloud zu verschluesseln!</a> ",
   "Nicht 2 Kitten, nein kein Kitten - <a href=\"http://www.tutonaut.de/link-koennt-ihr-alles-moegliche-zaehlen.html\" target=_blank>zaehlen mit dem Tutonauten!</a> ",
   "Kitten ist nicht hier und spielt <a href=\"http://www.tutonaut.de/link-flappy-bird-trotz-rueckzug-aus-den-appstores-spielen.html\" target=_blank>Flappy Birds mit dem Tutonauten</a> ",
   "Kitten mag keine Aepfel und rennt weg - <a href=\"http://www.tutonaut.de/anleitung-akkulaufzeit-von-iphone-ipad-und-ipod-touch-verbessern.html\" target=_blank>mehr Akku-Power fuer iPod und iPhone</a> ",
   "Kitten findet Android gut und zeigt, wie Ihr <a href=\"http://www.tutonaut.de/anleitung-akkulaufzeit-von-android-smartphones-verlaengern.html\" target=_blank>Akkulaufzeit verlaengert</a> ",
   "Kitten hasst Montage und will <a href=\"http://www.tutonaut.de/anleitung-datum-wordpress-themes-einsetzen.html\" target=_blank>ein Datum in Wordpress-Posts platzieren</a> ",
   "Kitten frisst <a href=\"http://www.tutonaut.de/anleitung-tablet-oder-smartphone-als-maus-und-tastatur-am-pc-oder-mac-verwenden.html\" target=_blank>(Tablet als) Maus (nutzen)</a> ",
   "Kitten mags sauber - <a href=\"http://www.tutonaut.de/anleitung-windows-mit-ccleaner-aufraeumen.html\" target=_blank>Windows mit Ccleaner reinigen</a> ",
   "Bunt? BUNT! <a href=\"http://www.tutonaut.de/anleitung-langweilige-bilder-mit-pop-art-filter-aufpeppen.html\" target=_blank>Laaangweilige Bilder peppt Kitten mit Popart auf</a> ",
   "Kitten mag gratis - <a href=\"http://www.tutonaut.de/link-honest-android-games-spiele-ohne-versteckte-kosten-finden.html\" target=_blank>Ehrliche Gratis-Spiele fuer Android</a> ",
   "Vimiauuuu - Kitten <a href=\"http://www.tutonaut.de/anleitung-youtube-und-vimeo-videos-herunterladen.html\" target=_blank>saugt bei Youtube und Vimeo</a> ",
   "Kitten findet GEMA dooooooof - und <a href=\"http://www.tutonaut.de/link-die-youtube-sperre-fuer-gema-inhalte-umgehen.html\" target=_blank>umgeht GEMA-Sperren</a> ",
   "Miauaaaaaaargh! Kittens Router ist tot. Traurig geht Kitten <a href=\"http://www.tutonaut.de/tipp-koennt-ihr-mit-laptops-ueber-das-handy-online-gehen.html\" target=_blank>ueber das Handy online</a> ",
   "Flappy Bird! Flappy Bird! Kitten will Flappy Bird -  <a href=\"http://www.tutonaut.de/anleitung-spiele-mit-steam-home-streaming-ueberall-spielen.html\" target=_blank>gestreamt via Steam-Home-Streaming.</a> ",
   "Du hast die Waybackmachine gefunden - mach eine <a href=\"http://www.tutonaut.de/link-zeitreise-durchs-internet-mit-der-waybackmachine.html\" target=_blank>Zeitreise</a> und guck dir robot und kitten vor 15 Jahren an.",
   "Du hast schon wieder nur eine olle Anleitunge gefunden: <a href=\"http://www.tutonaut.de/anleitung-formatvorlagen-openoffice-nutzen.html\" target=_blank>Formatvorlagen in OpenOffice nutzen</a> - ohhh, wie spannend ...",
   "Nur ein Faxgeraet, kein Kitten, aber ein softes - ?? <a href=\"http://www.tutonaut.de/anleitung-mit-der-fritzbox-ohne-faxgeraet-faxe-empfangen.html\" target=_blank>Fritzbox macht Faxen</a> ",
   "Bah! Du hast Chaos gefunden. 149 Magic, 33 XP und 678 WTF -  <a href=\"http\" target=_blank>Erlege Desktop-Chaos mit geschicktem Maushieb!</a> ",
   "Wiiillll endlich Kitten finden, nicht nur  <a href=\"http://www.tutonaut.de/anleitung-verzeichnisse-openoffice-automatisch-erstellen.html\" target=_blank>automatische Verzeichnisse in OpenOffice.</a> ",
      "Ein Item namens \"Makro\" verzaubert Dich - willenlos klickst Du den <a href=\"http://www.tutonaut.de/anleitung-makros-openoffice-aufzeichnen-und-einbinden.html\" target=_blank>Makros-in-OpenOffice-Aufzeichnen-Workshop</a> an.",
   "Dies ist eine Toolbar - SIE IST SCHMUTZIG! <a href=\"http://www.tutonaut.de/anleitung-laestige-browser-toolbars-fuer-immer-loswerden.html\" target=_blank>Macht sie weg!</a> ",   
   "Yes! Yes! Yes! Nix Kitten, aber Anleitung, wie Ihr <a href=\"http://www.tutonaut.de/anleitung-iphone-und-ipad-als-leistungsstarke-videokamera-benutzen.html\" target=_blank>iPhone und iPad als lleistungsstarke Videokamera nutzt.</a> ",
   "Gefunden: Twitter-Beitraege. Anleitung: <a hrefhttp://www.tutonaut.de/anleitung-die-eigenen-twitter-beitraege-herunterladen-und-archivieren.htmlhttp\" target=_blank>Saugt sie!</a> ",
   "Unsicherer Scheisskram! Vorsicht! Lerne <a href=\"http://www.tutonaut.de/link-webseiten-auf-dem-desktop-und-smartphone-ueber-sichere-verbindung-oeffnen.html\" target=_blank>Webseiten ueber eine sichere Verbindung herzustellen.</a> ",   
   "Nur ein klitzekleines Foto. <a href=\"http://www.tutonaut.de/anleitung-fotos-mit-smilla-enlarger-fuer-den-leindwanddruck-vergroessern.html\" target=_blank>Machts gro� genug fuer Leinwanddruck!</a> ",
   "Eine Festplatte? Und noch eine? <a href=\"http://www.tutonaut.de/anleitung-mehrere-festplatten-in-apples-time-machine-nutzen.html\" target=_blank>Schraubt sie zusammen f�r Apples Time Machine</a> ",
   "Uhhh - ein peinliches Foto auf einer alten Festplatte! Mit T*** und so. Haetter der Nutzer besser den Link angeklickt:<a href=\"http://www.tutonaut.de/anleitung-festplatten-mit-dariks-boot-nuke-sicher-loeschen.html\" target=_blank>Festplatten sicher loeschen</a> ",
   "Eine ISO-Datei. <a href=\"http://www.tutonaut.de/anleitung-img-oder-iso-datei-unter-windows-8-mit-bordmitteln-brennen.html\" target=_blank>Willst Du wissen, wie man das unter Windows brennt? </a> ",
   "Hmmm? iPhoto? <a href=\"http://www.tutonaut.de/anleitung-fotos-iphoto-ein-und-ausblenden.html\" target=_blank>Mysterious Workshop</a> ",
   "Flashblocker gefunden! <a href=\"http\" target=_blank>Besser als Adblock!</a> ",
   "Altes, doofes Foto -  <a href=\"http://www.tutonaut.de/anleitung-fotos-mit-picasa-filtern-alt-aussehen-lassen.html\" target=_blank>Mmachs schoener mit Picasa.</a> ",
   "You found a Quelle -  <a href=\"http://www.tutonaut.de/anleitung-e-books-und-dokumente-aus-beliebigen-quellen-auf-den-kindle-uebertragen.html\" target=_blank>put it in le Kindle</a> ", 
	"Fucking secret information about YOU <a href=\"http://www.tutonaut.de/anleitung-sichtbarkeit-bei-google-nachtraeglich-aendern.html\" target=_blank>Google+-Sichtbarkeitn updaten</a> ",
	"Whoohoo! Du hast ein Quest-Item gefunden - dein iPhone (warum auch immer Du das wiederhaben wolltest ...). <a href=\"http://www.tutonaut.de/anleitung-verlorenes-oder-gestohlenes-iphone-oder-ipad-wiederfinden-sperren-oder-loeschen.html\" target=_blank>Aber nur, weil Du diesem Link gefolgt bist.</a> ",
	"Ne Kachel. Oh wie toll. <a href=\"http://www.tutonaut.de/tipp-kacheln-windows-8-hinzufuegen-oder-loeschen.html\" target=_blank>Lerne, sie zu verschieben - in Win 8.</a> ",
	"Ein pli, ein plu, ein Plug-in -  <a href=\"http://www.tutonaut.de/anleitung-flash-und-andere-browser-plug-ins-nur-bei-bedarf-aktivieren.html\" target=_blank>aber nur bei Bedarf aktiv!</a> ",
	"Ein klassisches Startmenue fuer Win 8 -  <a href=\"http://www.tutonaut.de/anleitung-klassisches-startmenue-in-windows-8-aktivieren.html\" target=_blank>willst Du sehen, wie das geht?</a> ",
	"Ein iPad. Vuellig nutzlos. Aber man kann es <a href=\"http://www.tutonaut.de/anleitung-ipad-als-zweiten-bildschirm-an-pc-oder-mac-benutzen.html\" target=_blank>als Zweitbildschirm nutzen.</a> ",
	"Horch was kommt von draussen rein -  <a href=\"http://www.tutonaut.de/anleitung-schnell-arbeitsspeicher-auf-dem-mac-freischaufeln.html\" target=_blank>es ist freier Speicherplatz auf dem Mac.</a> ",
	"Ein MP3? Wieso denn bloss? <a href=\"http://www.tutonaut.de/anleitung-musik-online-speichern-und-mp3s-topqualitaet-tauschen.html\" target=_blank>Online speichern, tauschen, Topqualitaet, bla.</a> ",
	"Ein Key! Ein Key! <a href=\"http://www.tutonaut.de/tipp-windows-lizenznummer-auslesen.html\" target=_blank>Der Windows-Lizenzschluessel ist ausgelesen!</a> ",
	"Nur ein Filter der Stufe 8, mit Donnerzauber <a href=\"http://www.tutonaut.de/anleitung-posteingang-thunderbird-mit-filtern-ordnen.html\" target=_blank>sortiert er Mails automatisch.</a> ",
	"Shell! Ja, Du hast Die Shell gefunden - Glueckwunsch? Wer weiss ... . Und  <a href=\"http://www.tutonaut.de/anleitung-ordner-via-kontextmenue-der-shell-oeffnen.html\" target=_blank>genau so</a> packst Du sie in das Kontextmenue.",
	"Ein Android-Phone! Juhuu! Und wenns geklaut wird, <a href=\"http://www.tutonaut.de/anleitung-verlorenes-android-smartphone-finden-sperren-oder-loeschen.html\" target=_blank>kein Problem!</a> ",
	"Ein Windows-Programm. Einsam. Allein. Kein Windows weit und breit. Was tust Du? Go north! Nein, Quatsch. <a href=\"http://www.tutonaut.de/anleitung-windows-programme-auf-dem-mac-nutzen.html\" target=_blank>Nutz es unter Linux oder Mac.</a> ",
	"Was macht eine iTunes-Bibliothek hier? Besser, <a href=\"http://www.tutonaut.de/anleitung-itunes-mediathek-sichern-und-wiederherstellen.html\" target=_blank>wir ziehen damit um.</a> ",
	"Inhalt. Jaja, banal. <a href=\"http://www.tutonaut.de/tipp-app-inhalte-unter-windows-8-teilen.html\" target=_blank>So teilt man Inhalte von Win8-Apps.</a> ",
	"Nichts. Hae? Ja, nichts gefunden. Weil Du den Workshop <a href=\"http://www.tutonaut.de/anleitung-geloeschte-fotos-auf-dem-mac-wiederherstellen.html\" target=_blank>\"Geloeschte Fotos auf dem Mac wiederherstellen\"</a> nicht angeklickt hast. ",
	"Ein Workshop, der Dich verfuehrt -  <a href=\"http://www.tutonaut.de/anleitung-ios-7-jailbreak-sicher-und-vollstaendig-entfernen.html\" target=_blank>iOS7-Jailbrake sicher entfernen</a> ",
	"Ein altes Foto. Du erschrickt. Sieht scheisse aus.  <a href=\"http://www.tutonaut.de/anleitung-wirklich-misslungene-fotos-in-gute-memes-verwandeln.html\" target=_blank>Mach ein Meme aus altem Zeugs.</a> ",
	"Ein Schritt. Wie kann man einen Schritt finden? Gar nicht.  <a href=\"http://www.tutonaut.de/anleitung-das-android-smartphone-als-schrittzaehler-nutzen.html\" target=_blank>Aber zaehlen kann man ihn - mit dem Smartphone</a> ",	
	"Ein Gegenlichtfoto. PFUI! <a href=\"http://www.tutonaut.de/anleitung-dunkle-gegenlicht-fotos-auf-dem-smartphone-korrigieren.html\" target=_blank>Korrigiers auf dem Smartphone</a> ",
	"Ein olles iPad gefunden? <a href=\"http://www.tutonaut.de/anleitung-das-ipad-als-kindle-nutzen.html\" target=_blank>Nutz es als Kindle</a> und erlange Ruhm.",
	"Du hast ein Geheimnis gefunden! <a href=\"http://www.tutonaut.de/anleitung-emails-mit-thunderbirdenigmail-verschluesseln.html\" target=_blank>Verschluessel es mit Enigmail und Thunderbird</a> ",
	"Alles! Denn 123456 ist kein Passwort! <a href=\"http://www.tutonaut.de/anleitung-ein-sicheres-und-leichtes-passwort-erstellen.html\" target=_blank>Erstelle ein sicheres Passwort.</a> ",	
	"Ein interessantes Video, das man nicht saugen kann -  <a href=\"http://www.tutonaut.de/anleitung-desktop-abfilmen-und-geschuetzte-online-videos-archivieren.html\" target=_blank>oder doch?</a> ",
	"Das Windows-8-Startmenue - und es ist Mist. <a href=\"http://www.tutonaut.de/anleitung-das-startmenue-von-windows-8-1-anpassen.html\" target=_blank>Pass es an!</a> ",
	"Ditto. Wow. Unfassbar. <a href=\"http://www.tutonaut.de/anleitung-zwischenablage-ersetzen-teil-2-einfuegen-mit-ditto.html\" target=_blank>Sowas geiles gibts wirklich?</a> ",
	"Ein obskurer Workshop - er zeigt Dir,  <a href=\"http://www.tutonaut.de/anleitung-windows-8-1-optimal-mit-der-maus-bedienen.html\" target=_blank>wie man Win 8 mit der Maus bedient ...</a> ",
	"Ein Herz - das findet sogar Kitten sueueuessssss. Upps, es sind sogar <a href=\"http://www.tutonaut.de/anleitung-fritzbox-auf-5-ghz-umstellen.html\" target=_blank>5 Hertz auf der Fritzbox</a> ",
	"iOS 7! Brrrrrrrrrrrrr, besser schnell  <a href=\"http://www.tutonaut.de/anleitung-ios-7-sicher-jailbreaken.html\" target=_blank>jailbreaken</a> ",
	"Laufendes Windows - schnell hinterher! <a href=\"http://www.tutonaut.de/anleitung-das-laufende-windows-eine-virtuelle-maschine-konvertieren.html\" target=_blank>Verbanne es in eine dunkle Dimension namens Virtual Machine</a> ",
	"Nen Telefon. So mit Android drauf. Ach, <a href=\"http://www.tutonaut.de/anleitung-komplettes-android-backup-ohne-root-erstellen.html\" target=_blank>ich koennte es ja mal backuppen, heut mal ohne root.</a> ",
	"Gaaaaaaaaaaanz viel Fotozeugs, und zwar auf dem iPhone. Und <a href=\"http://www.tutonaut.de/anleitung-fotos-und-videos-von-iphone-ipad-und-ipod-touch-auf-den-windows-pc-ueberspielen.html\" target=_blank>so spielt Ihr das auf den Windows-PC.</a> ",
	"Eine gute Idee kaiserlichen Ursprungs. 555 XP und der Kuli von Greyskull wenn Du <a href=\"http://www.tutonaut.de/anleitung-iphone-ipad-und-ipod-sicher-loeschen.html\" target=_blank>einfach alles sicher von iPhone und iPad loescht!</a> ",
	"Ein beliebiges Nexus-Geraet. <a href=\"http://www.tutonaut.de/alle-nexus-geraete-per-toolkit-rooten.html\" target=_blank>Und jetzt fix rooten!</a> ",
	"Schallplatten! Vinyl! Yeah! <a href=\"http://www.tutonaut.de/schallplatten-mit-audacity-digitalisieren-teil-2-rauschen-entfernen.html\" target=_blank>Und dennoch wollen wir sie kostenlos mit Audacity auch als MP3 haben.</a> ",
	
	"\"50 Jahre ein Kein-Kitten-Item\", by Ann Droyd.",
	"\"Lieber robot, Du hast vielleicht schon unseren 10-MILLIONEN-EURO-PREIS gewonnen!\"",
	"\"Ich bedaure den Tor, der mich fuer Kitten haelt.\"",
	"\"Kilroy was here\"",
	"Illusionskubus - Du spielt ab sofort mit Nacktmod",
	"\"Du kommst aus dem Gefaengnis frei\"-Karte",
	"Klopf. Klopf. \"Kitten ist nicht hier, Mann.\"",
	"\"Leg die Schaufel weg. Das hier ist nicht Minecraft.\"",
	"\"Hallo. Mein Name ist Wall-E, bin 24 Jahre, mag Reiten, Lesen, Schwimmen und suche Liebe\"",
	"Der Stein des Anstosses",
	"Eine Gruft - tritt ruhig ein",
	"Ein Stein, ein popeliger Stein - sieht das etwa aus wie Kitten?",
	"\"Ich glaube Kitten ist drei Reihen weiter oben\", Maryo Mysto",
	"Ein Tutonaut, pausierend vom Bloggen",
	"Wow - Du hast ein ASCII-Zeichen gefunden!",
	"\"Eine kurze Geschichte der Zeitverwschwendung\", von Mac Eroy",
	"Der magische Stein des Zeichnens. Kraefte: Layoutsprenung, Entnervung und Betextung der dritten Stufe. Er hat eine Inschrift fuer Euch - was bedeutet sie? <br>Es steht geschrieben: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
	"Der Lierumlarumloeffelstil",
	"Das Ei des DAUs",
	"Ein gelbes Pferd",
	"Vier lila Hosentraeger",
	"Der Windows-Quelltext",
	
	
	
	"Geheime Schatzkammer - traust Du Dir den Klick auf den geheimnisvollen <a href=\"http://www.ftw24.com\" target=_blank title=\"Ich verrats nicht\"> LINK</a> zu?",
	"OMG! Ein Ex-Schaaf<a href=\"img/nonascii.jpg\"><img class=\"bild\" src=\"img/nonascii.jpg\"></a>",
	"Toter Schlumpf auf Brot<a href=\"img/dead-smurf-sandwich.jpg\"><img class=\"bild\" src=\"img/dead-smurf-sandwich.jpg\"></a>",
	"Ein toller <a href=\"http://www.xkcd.com\" target=_blank>xkcd</a>-Strip - Yeah!<a href=\"http://imgs.xkcd.com/comics/incident.png\"><img class=\"bild\" src=\"http://imgs.xkcd.com/comics/incident.png\"></a>",
	
	"Kitten! Putzig, aber das falsche Kitten - weitersuchen! <a href=\"img/kitten0.jpg\"><img class=\"bild\" src=\"img/kitten0.jpg\"></a>",
	"Ohhhh ein Welpen - viel besser als Kitten.<a href=\"img/puppy.jpg\"><img class=\"bild\" src=\"img/puppy.jpg\"></a>",
	"Ein Engel - wie Kitten, wenn Du nicht weitersuchst.<a href=\"img/angle.jpg\"><img class=\"bild\" src=\"img/angle.jpg\"></a>",	
	"\"Wo ist die verdammte Katze?\"<a href=\"img/angry.jpg\"><img class=\"bild\" src=\"img/angry.jpg\"></a>",
	"Apfel.<a href=\"img/apple.jpg\"><img class=\"bild\" src=\"img/apple.jpg\"></a>",
	"ER haette Kitten schon gefunden.<a href=\"img/boy.jpg\"><img class=\"bild\" src=\"img/boy.jpg\"></a>",
	"\"Eine Frage haett ich noch ...\"<a href=\"img/columbo.jpg\"><img class=\"bild\" src=\"img/columbo.jpg\"></a>",
	"\"Ich bin doch viel suesser - find mich!\"<a href=\"img/cute.jpg\"><img class=\"bild\" src=\"img/cute.jpg\"></a>",
	"Du selbst - wenn Du Kitten gefunden hast.<a href=\"img/found.jpg\"><img class=\"bild\" src=\"img/found.jpg\"></a>",
	"Aloha!<a href=\"img/hula.jpg\"><img class=\"bild\" src=\"img/hula.jpg\"></a>",
	"\"Searchez le Kitten\"<a href=\"img/paint.jpg\"><img class=\"bild\" src=\"img/paint.jpg\"></a>",
	"Harrrrg! Hrrrg.<a href=\"img/pirate.jpg\"><img class=\"bild\" src=\"img/pirate.jpg\"></a>",
	"\"Hasse ma n Kitten?\"<a href=\"img/punk.jpg\"><img class=\"bild\" src=\"img/punk.jpg\"></a>",
	"Kitten. Kitten. Who the fuck is Kitten?<a href=\"img/puppy.jpg\"><img class=\"bild\" src=\"img/puppy.jpg\"></a>",
	"Finde endlich Kitten - oder wir heulen!<a href=\"img/sad.jpg\"><img class=\"bild\" src=\"img/sad.jpg\"></a>",
	
	

   
  /*
    "\"50 Years Among the Non-Kitten Items\", by Ann Droyd.",
	"\"Blup, blup, blup\", says the mud pot.",
	"\"Dear robot, you may have already won our 10 MILLION DOLLAR prize...\"",
	"\"I pity the fool who mistakes me for kitten!\", sez Mr. T.",
	"\"Kibo was here\"",
	"\"Kilroy was here\"",
	"\"Mail Routing and the Domain System\" by Craig Partridge.",
	"\"No!\" says the bit.",
	"\"Plexar was here\"",
	"\"Robot may not injure kitten, or, through inaction, ...\"",
	"\"Sure hope we get some rain soon,\" says Farmer Joe.",
	"\"Take a penny, leave a penny.\" You do both.",
	"\"The Theory and Practice of Oligarchical Collectivism\" by Emmanuel Goldstein.",
	"\"There is no kitten!\" cackles the old crone. You are shocked by her blasphemy.",
	"\"Topsoil's all gone, ma,\" weeps Lil' Greg.",
	"\"Yes!\" says the bit.",
	"'Twas brillig in the slivey-toves...",
	"...thingy???",
	"3.14159... Pi is all over the place here...",
	"99 bottles of beer are on a wall here.",
	"A \"Get Out of Jail Free\" card.",
	"A 100 meter long chain of jumbo paper clips.",
	"A 256 kilobyte write-only memory chip.",
	"A 540Hz tuning fork.",
	"A Gregorian date palm, its fronds gently waving.",
	"A Mentos wrapper.",
	"A Sanrio catalog.",
	"A Scooby Snack! Yay!",
	"A Swiss-Army knife. All of its appendages are out. (toothpick lost)",
	"A Texas Instruments of Destruction calculator.",
	"A baboon with a bassoon hoots angrily at you.",
	"A baby catapult and a little pile of pebbles.",
	"A badly dented high-hat cymbal lies on its side here.",
	"A ball of yarn.",
	"A bartender growls, \"No robots allowed!\"",
	"A big bass drum bearing a hole and suspicious clawmarks.",
	"A big chunk of frozen chocolate pudding.",
	"A bit of luck.",
	"A blank deposit slip.",
	"A bobolink is twittering a happy tune here.",
	"A book with \"Don't Panic\" in large friendly letters across the cover.",
	"A book: Feng Shui, Zen: the art of randomly arranging items that are not kitten.",
	"A bottle of ammonia.",
	"A bottle of distilled water.",
	"A bottle of hair tonic.",
	"A bottle of oil! Refreshing!",
	"A bottle of smelling salts.",
	"A bowl of cherries.",
	"A bowling ball with the name \"Bob\" inscribed on it.",
	"A box of brand-new nixie tubes.",
	"A box of dancing mechanical pencils. They dance! They sing!",
	"A brain cell. Oddly enough, it seems to be functioning.",
	"A breadbox that's bigger than a breadbox.",
	"A briefcase filled with spy stuff.",
	"A broken metronome sits here, its needle off to one side.",
	"A brown glass vial labeled \"tincture of iodine\".",
	"A caboodle.",
	"A camera obscura.",
	"A canister of pressurized whipped cream, sans whipped cream.",
	"A card sharp sits here, practicing his Faro shuffle. He ignores you.",
	"A cardboard box of sheet metal screws.",
	"A chain hanging from two posts reminds you of the Gateway Arch.",
	"A clay pot with grass growing it in sits here.",
	"A claymore mine.",
	"A cluster of cattails are growing here.",
	"A coat hanger hovers in thin air. Odd.",
	"A cockatoo shrieks at you.",
	"A compendium of haiku about metals.",
	"A coupon for one free steak-fish at your local family diner.",
	"A crouton.",
	"A crowd of people, and at the center, a popular misconception.",
	"A cyclops glowers angrily at you.",
	"A dangly thing.",
	"A dark-emitting diode.",
	"A dead battery.",
	"A dead click beetle.",
	"A digital clock. It's stuck at 2:17 PM.",
	"A discarded bagpipe chanter reed.",
	"A discarded pop bottle.",
	"A discarded refrigerator in a discarded refrigerator box.",
	"A discredited cosmology, relic of a bygone era.",
	"A dodecahedron bars your way.",
	"A dog dressed in a cheap suit is here.",
	"A dogcow moofs at you.",
	"A failing unit test.",
	"A family of integrals is here integrating.",
	"A featureless black monolith.",
	"A five-horned rhinoceros beetle with rings on every other horn.",
	"A flask of hydrochloric acid is here.",
	"A flyer advertising a big sale on flyers.",
	"A flyer reads, \"Please donate hydraulic fluid\"",
	"A forgotten telephone switchboard operator.",
	"A forgotten telephone switchboard.",
	"A freshly-baked pumpkin pie.",
	"A frosted pink party-cake, half eaten.",
	"A gecko clings to the ceiling here.",
	"A geyser sprays water high into the air.",
	"A giant mechanical octopus spews flames from its tentacles.",
	"A glorious fan of peacock feathers.",
	"A gold-dipped rose.",
	"A gravestone stands here. \"Izchak Miller, ascended.\"",
	"A green yo-yo.",
	"A grin.",
	"A haircut and a real job. Now you know where to get one!",
	"A hairless rat.",
	"A half empty milk carton. Or is it half full?",
	"A half-eaten cheese sandwich.",
	"A hammock stretched between a tree and a volleyball pole.",
	"A hastily scribbled note reads, \"kitten is the letter Q.\"",
	"A hedgehog. It looks like it knows something important.",
	"A helicopter has crashed here.",
	"A herd of wild coffee mugs slumbers here.",
	"A hickory stump.",
	"A historical marker showing the actual location of /dev/null.",
	"A hollow voice says \"Fool!\"",
	"A hollow voice says \"Plugh.\"",
	"A homemade Tesla coil, fully charged.",
	"A hovercraft full of eels is parked here.",
	"A huge pile of pancakes.",
	"A jar of Vegemite is playing hopscotch here.",
	"A jar of dehydrated water.",
	"A jar of lemon curd.",
	"A jar of library paste.",
	"A ketchup bottle (nearly empty).",
	"A kitten sink, for washing kitten (if only kitten liked water).",
	"A kitten source (to match the kitten sink).",
	"A large Turkish rug, worn threadbare by years of pacing.",
	"A large block of dry ice.",
	"A large blue eye floats in midair.",
	"A large coil of rope is here.",
	"A large pile of rubber bands.",
	"A large snake bars your way.",
	"A largish bath towel.",
	"A leather pouch filled with multisided dice.",
	"A little glass tub of Carmex. ($.89) Too bad you have no lips.",
	"A little teapot, short and stout.",
	"A livery stable! Get your livery!",
	"A lone, forgotten comma, sits here, sobbing.",
	"A lotus. You make an interesting pair.",
	"A magic switch.",
	"A magical... magic thing.",
	"A marijuana brownie.",
	"A mason jar lies here open. Its label reads: \"do not open!\".",
	"A meat-scented air-freshener on a string dances in the breeze.",
	"A mere collection of pixels.",
	"A model of a twin-hulled sailboat.",
	"A naked singularity. You avert your eyes.",
	"A neat pile of plastic irrigation pipe.",
	"A neural net -- maybe it's trying to recognize kitten.",
	"A nondescript box of crackers.",
	"A noun and a boat bound to the wrong verb.",
	"A number of short theatrical productions are indexed 1, 2, 3, ... n.",
	"A packet of catnip.",
	"A packet of pipe cleaners.",
	"A pair of combat boots.",
	"A pair of saloon-style doors swing slowly back and forth here.",
	"A pangolin.",
	"A parade of ants crosses your path.",
	"A parrot, kipping on its back.",
	"A passing tiger tells you a terrible tale.",
	"A patch from the Mammoth Caves.",
	"A patch of grape jelly grows here.",
	"A patch of mushrooms grows here.",
	"A pile of blood-red maple leaves. You do not have time to count them.",
	"A pile of coaxial plumbing lies here.",
	"A pile of coconuts.",
	"A pile of discarded \"no dumping\" signs.",
	"A pile of irrigation valves.",
	"A pirate joke.",
	"A pirate!",
	"A pizza, melting in the sun.",
	"A plush Chewbacca.",
	"A post hole digger is stuck in a pile of dirt here.",
	"A puddle of chocolate sauce.",
	"A puddle of mud, where the mudskippers play.",
	"A puddle of purple semi-gloss latex paint.",
	"A punch bowl, filled with punch and lemon slices.",
	"A radio hisses away.",
	"A rancid corn dog.",
	"A realistic toy kitten. Suspended high above is a large steel cage.",
	"A river of liquid nitrogen flows through here.",
	"A robot comedian performs here. You feel amused.",
	"A roll of duct tape.",
	"A roll of scratch-and-sniff stickers.",
	"A rusted safety pin.",
	"A rusted telephone booth.",
	"A rusty crowbar.",
	"A rusty melon-baller.",
	"A rusty slinky. It was such a wonderful toy!",
	"A sack of doorknobs.",
	"A sack of hammers.",
	"A sack of wet mice.",
	"A salmon hatchery? Look again. It's merely a single salmon.",
	"A saucer of milk.",
	"A scrap of parchment bears the single word, \"meow\".",
	"A scratching-post.",
	"A screwdriver.",
	"A sealed tin bearing only the word \"yummy\".",
	"A section of glowing phosphor cells sings a song of radiation to you.",
	"A set of keys to a 2001 Rolls Royce. Worthless.",
	"A sheep and a lamp, lounging beneath a myrtle tree.",
	"A sign reads \"Don't step on the Mome Raths\".",
	"A sign reads: \"Go home!\"",
	"A sign reads: \"Ignore this sign!\"",
	"A sign reads: \"No robots allowed!\"",
	"A signpost saying \"TO KITTEN\". It points in no particular direction.",
	"A singing frog. Useless.",
	"A six-wheeled robot sits lifeless, stuck in the dirt.",
	"A slightly-used smellovision set.",
	"A small box of fishing weights.",
	"A small, featureless, white cube.",
	"A smoking branding iron shaped like a 24-pin connector.",
	"A spindle, and a grindle, and a bucka-wacka-woom!",
	"A spiral-bound copy of the Necronomicon.",
	"A squirrel contentedly gnaws on a sprinkler head here.",
	"A stack of 7 inch floppies wobbles precariously.",
	"A statue of a girl holding a goose like the one in Gottingen, Germany.",
	"A steam-powered bunnytron.",
	"A stegosaurus, escaped from stegosaurusfindsrobot. It finds you.",
	"A stony meteorite.",
	"A street map of the city of Anaheim.",
	"A sub-atomic particle languishes here all alone.",
	"A sudden burst of maniaical cackling makes you feel homesick.",
	"A team of Arctic explorers is camped here.",
	"A technical university in Australia.",
	"A tetradrachm dated \"42 B.C.\"",
	"A threadbare tweed suit.",
	"A tiny robot scuttles across the floor.",
	"A tiny velvet pouch.",
	"A toenail? What good is a toenail?",
	"A toilet bowl occupies this space.",
	"A ton of feathers.",
	"A toupee.",
	"A toy zeppelin.",
	"A traffic signal. It appears to have been recently vandalized.",
	"A train of thought chugs through here.",
	"A trash compactor, compacting away.",
	"A travel-sized cyclotron.",
	"A tree with some jelly nailed to it.",
	"A tube of heat sink grease.",
	"A tube of toothpaste. Too bad you have no teeth.",
	"A tube of white lithium grease. Perfect for your robotic joints.",
	"A twist of lemon.",
	"A vacuum cleaner appears to have exploded here.",
	"A vanilla pudding pop.",
	"A vase full of artificial flowers is stuck to the floor here.",
	"A voice booms out \"Onward, kitten soldiers...\"",
	"A waffle iron is here and it's still hot.",
	"A warranted genuine Snark.",
	"A waterlogged grand piano.",
	"A willing, ripe tomato bemoans your inability to digest fruit.",
	"A wireframe model of a hot dog rotates in space here.",
	"A wondrous and intricate golden amulet. Too bad you have no neck.",
	"A zorkmid coin.",
	"Ah, the skirl of the pipes and the rustle of the silicon...",
	"Ah, the uniform of a Revolutionary-era minuteman.",
	"Air.",
	"Alien underwear.",
	"An Internet chain letter.",
	"An abandoned used-car lot.",
	"An albatross, around its own neck.",
	"An aromatherapy candle burns with healing light.",
	"An assortment of highly-nutritious vegetables.",
	"An atomic vector plotter.",
	"An authentic 1953 veeblefetzer, sadly in need of adjustment.",
	"An autographed copy of the works of Anonymous.",
	"An automated robot-disdainer. It pretends you're not there.",
	"An automated robot-doubter. It doesn't believe in you.",
	"An automated robot-hater. It frowns disapprovingly at you.",
	"An automated robot-liker. It smiles at you.",
	"An electric engraving pencil.",
	"An electric fan lies on its side here.",
	"An eminently forgettable zahir.",
	"An empty Altoids tin.",
	"An empty coaxial cable spool.",
	"An empty shopping bag. Paper or plastic?",
	"An erroneous proof of the Goldbach Conjecture.",
	"An expired transistor.",
	"An historical marker.",
	"An ice cube.",
	"An iron meteorite.",
	"An obvious metaphor for Sysiphisian futility.",
	"An old bootable business card, unfortunately cracked down the middle.",
	"An old pattern is here going on and on.",
	"An old rusty revolver.",
	"An ordinary bust of Beethoven... but why is it painted green?",
	"An oven mitt with kittens on it.",
	"An overflowing bit bucket.",
	"An overturned bottle of rainbow-colored ink.",
	"An underwater avocado.",
	"An unlicensed nuclear accelerator.",
	"An unripe orange.",
	"Another rabbit? That's three today!",
	"Bars of lard, stacked a mile high.",
	"Beef stew.",
	"Biscuits.",
	"Bits of red construction paper are scattered all about.",
	"Blod.",
	"Brass tacks.",
	"Bright copper kettles.",
	"Bronzed baby shoes.",
	"Butane!!!",
	"Carbonated Water, High Fructose Corn Syrup, Color, Phosphoric Acid, Flavors.",
	"Ceci n'est pas un chaton.",
	"Chewing gum and baling wire.",
	"Colorless green ideas sleep furiously here.",
	"Could it be... a big ugly bowling trophy?",
	"Diogenes is here, demanding whisky.",
	"Dirty socks.",
	"Ed Witten sits here, pondering string theory.",
	"Empty jewelboxes litter the landscape.",
	"Five pounds of flax.",
	"For a moment, you feel something in your hands, but it disappears!",
	"Grind 'em up, spit 'em out, they're twigs.",
	"Haphazard stacks of white uppercase letters.",
	"Haven't you touched this before?",
	"Heart of Darkness brand pistachio nuts.",
	"Heeeeeeeeeeeere's Johnny!",
	"Here is no kitten but only rock, rock and no kitten and the sandy road.",
	"Here you are, at the behest.",
	"Here you are, over the objections.",
	"Here you are, under the auspices.",
	"Hey, I bet you thought this was kitten.",
	"Hey, look, it's war. What is it good for? Absolutely nothing. Say it again.",
	"Hey, robot, leave those lists alone.",
	"Ho hum. Another synthetic a posteriori.",
	"Hydraulic fluid and jagged metal bits. You recoil from the scene of carnage.",
	"I don't know what that is, but it's not kitten.",
	"IT'S ALIVE! AH HA HA HA HA!",
	"If it's not one thing, it's another.",
	"If it's one thing, it's not another.",
	"In Soviet Russia, kitten finds you. Unfortunately, this isn't Soviet Russia.",
	"Insane laughter issues from this vibrating shipping crate.",
	"Is that an elephant's head or a winged sandal?",
	"It is -- I just feel something wonderful is about to happen.",
	"It is a cloud shaped like an ox.",
	"It is a marzipan dreadnought that appears to have melted and stuck.",
	"It is a set of wind-up chatter teeth.",
	"It is an ancient mariner, and he stoppeth one of three.",
	"It pleases you to be kind to what appears to be kitten -- but it's not!",
	"It seems to be a copy of \"A Tail of Two Kitties\".",
	"It's \"Finding kitten\", published by O'Reilly and Associates.",
	"It's \"War and Peace\" (unabridged, very small print).",
	"It's 1000 secrets the government doesn't want you to know!",
	"It's Babe Flathead's favorite bat.",
	"It's Bach's Mass in B-minor!",
	"It's Brian Kernighan.",
	"It's Death.",
	"It's Dennis Ritchie.",
	"It's Grundle, the Green Dragon.",
	"It's Jesse James's severed hand and it's still moving.",
	"It's KITT, the talking car.",
	"It's Lucy Ricardo. \"Aaaah, Ricky!\", she says.",
	"It's Mary Poppins!",
	"It's Professor Feedlebom.",
	"It's Richard Nixon's nose!",
	"It's Schrodinger's non-kitten.",
	"It's Uncle Doctor Hurkamur!",
	"It's a \"HOME ALONE 2: Lost in New York\" novelty cup.",
	"It's a Bergenholm drive.",
	"It's a Cat 5 cable.",
	"It's a DVD of \"Crouching Monkey, Hidden Kitten\", region encoded for the moon.",
	"It's a Dvorak keyboard.",
	"It's a Franklin Ebookman.",
	"It's a Java applet.",
	"It's a Linux install CD.",
	"It's a MITS Altair 8800.",
	"It's a NetBSD install CD.",
	"It's a Quaker Oatmeal tube, converted into a drum.",
	"It's a U.S. president.",
	"It's a banana! Oh, joy!",
	"It's a battery-powered brass lantern.",
	"It's a big block of ice. Something seems to be frozen inside it.",
	"It's a big smoking fish.",
	"It's a black hole. Don't fall in!",
	"It's a blob of blue goo.",
	"It's a blob of grey goo.",
	"It's a blob of red goo.",
	"It's a bottle of nail polish remover.",
	"It's a box of lox.",
	"It's a box of pinball machine parts.",
	"It's a bucket of water.",
	"It's a bug.",
	"It's a business plan for a new startup, kitten.net.",
	"It's a cardboard box full of 8-track tapes.",
	"It's a cat. Are you too late?",
	"It's a charcoal briquette, smoking away.",
	"It's a child's pull-toy.",
	"It's a clue!",
	"It's a concatenation of circumstances.",
	"It's a continental breakfast.",
	"It's a cookie shaped like a kitten.",
	"It's a copy editor, reading aloud from the Associated Press Stylebook.",
	"It's a copy of \"Zen and The Art of Robot Maintenance\".",
	"It's a copy of Knuth with the chapter on kitten-search algorithms torn out.",
	"It's a copy of the Book of Found Kittens.",
	"It's a copy of the robotfindskitten EULA.",
	"It's a dark, amphorous blob of matter.",
	"It's a fleet of mothballs.",
	"It's a fly on the wall. Hi, fly!",
	"It's a fossil trilobite.",
	"It's a fragment of an old Russian spacecraft.",
	"It's a free Dmitry Sklyarov!",
	"It's a free Jon Johansen!",
	"It's a funky beat!",
	"It's a groat coated with pocket fluff.",
	"It's a grue. Fortunately, they don't like to eat robots.",
	"It's a gun of some sort.",
	"It's a hanging chad.",
	"It's a hologram of a crashed helicopter.",
	"It's a hundred-dollar bill.",
	"It's a hyperkinetic rabbity thing.",
	"It's a large pile of crumpled notepaper.",
	"It's a left-handed smoke shifter.",
	"It's a limbo bar! How low can you go?",
	"It's a list of the zeroes of the Riemann zeta function.",
	"It's a merry-go-round (broken down).",
	"It's a mighty zombie talking about some love and prosperity.",
	"It's a model of a catamaran.",
	"It's a moment of silence.",
	"It's a mousetrap, baited with soap.",
	"It's a nameless MSX computer from Japan.",
	"It's a nasty knife.",
	"It's a perpetual immobility machine.",
	"It's a pigeon with a TCP/IP packet duct-taped to its leg.",
	"It's a pile of wine corks.",
	"It's a pool with a straw in it.",
	"It's a portable hole. A sign reads: \"Closed for the winter\".",
	"It's a prosthetic wheel, bent out of shape.",
	"It's a rapidly oscillating function.",
	"It's a recursive recursive recursive recursive recursive...",
	"It's a red staple-remover.",
	"It's a red stapler.",
	"It's a rhyton. Right on!",
	"It's a rim shot. Ba-da-boom!",
	"It's a roll of industrial-strength copper wire.",
	"It's a rotating potato.",
	"It's a rotten old shoe.",
	"It's a rousing rendition of \"O Canada.\"",
	"It's a segmentation fault. Core dumped, by the way.",
	"It's a sleeping lion.",
	"It's a solitary vacuum tube.",
	"It's a spade.",
	"It's a squad of Keystone Kops.",
	"It's a square.",
	"It's a steaming bowl of homemade gnocci.",
	"It's a stone, unturned.",
	"It's a stupid mask, fashioned after a beagle.",
	"It's a symbol. You see in it a model for all symbols everywhere.",
	"It's a synthetic a priori truth! Immanuel would be so pleased!",
	"It's a tape of '70s rock. All original hits! All original artists!",
	"It's a tribute to fishnet stockings.",
	"It's a typewriter, covered in dust.",
	"It's a universal Turing machine constructed from LEGO blocks.",
	"It's a wallet full of blank credit cards.",
	"It's a week-old baloney sandwich.",
	"It's a whirly thing of some sort.",
	"It's a zen simulation, trapped within an ASCII character.",
	"It's an altar to the horse god.",
	"It's an argon-filled vault.",
	"It's an elongated brown sack, smelling of hot peppers.",
	"It's an elvish sword of great antiquity.",
	"It's an external dependency.",
	"It's an incomplete",
	"It's an inverted billiard ball!",
	"It's an oil portrait of you, about to find kitten.",
	"It's an old Duke Ellington record.",
	"It's an unknown area code.",
	"It's another robot, more advanced in design than you but strangely immobile.",
	"It's creepy and it's kooky, mysterious and spooky. It's also somewhat ooky.",
	"It's cute like a kitten, but isn't a kitten.",
	"It's either a mirror, or another robot.",
	"It's evidence.",
	"It's just an object.",
	"It's more money than you'll ever need.",
	"It's nothing but a corrupted floppy. Coaster anyone?",
	"It's nothing in particular.",
	"It's part of a complete breakfast.",
	"It's probably nothing.",
	"It's scenery for \"Waiting for Godot\".",
	"It's skeuomorphism. Yay, skeuomorphism!",
	"It's something fizzy.",
	"It's the <blink> tag!",
	"It's the ASCII Floating Head of Seth David Schoen!",
	"It's the Brass Nodes of the Universe.",
	"It's the Capable Prune.",
	"It's the Donation of Constantine!",
	"It's the Golden Banana of Discord!",
	"It's the Maltese Falcon.",
	"It's the Queen of Hearts! \"Off with their heads!\", she shouts.",
	"It's the Super Bass-O-Matic '76! Mmm, that's good bass!",
	"It's the Tiki Room.",
	"It's the Will Rogers Highway. Who was Will Rogers, anyway?",
	"It's the amazing self-referential thing that's not kitten.",
	"It's the astounding meta-object.",
	"It's the classification of all finite simple groups.",
	"It's the constellation Pisces.",
	"It's the cork to someone's lunch.",
	"It's the crusty exoskeleton of an arthropod!",
	"It's the handheld robotfindskitten game, by Tiger.",
	"It's the horizon. Now THAT'S weird.",
	"It's the instruction manual for a previous version of this game.",
	"It's the local draft board.",
	"It's the mark of the beast!",
	"It's the missing chapter to \"A Clockwork Orange\".",
	"It's the proverbial wet blanket.",
	"It's the set of uninteresting natural numbers.",
	"It's the shock of recognition.",
	"It's the shortest distance between two points.",
	"It's the triangle leg adjacent to an angle divided by the leg opposite it.",
	"It's the whites of their eyes.",
	"It's the wrong number.",
	"It's this message, nothing more.",
	"It's wholesale, direct to you.",
	"Jacket fluff.",
	"Just a big brick wall.",
	"Just a box of backscratchers.",
	"Just a cage of white mice.",
	"Just a moldy loaf of bread.",
	"Just a monitor with the blue element burnt out.",
	"Just a pincushion.",
	"Just an autographed copy of the Kama Sutra.",
	"Just some glop of some sort.",
	"Just some old play by a Czech playwright, and you can't read Czech.",
	"Just some rusted lug nuts and an ancient hub cap.",
	"Just some spite.",
	"Just some stuff.",
	"Just some swamp gas.",
	"Just the empty husk of a locust.",
	"Just the usual gang of idiots.",
	"Keep looking and you will find kitten eventually.",
	"Lentil loaf.",
	"Long lost needle nose pliers.",
	"Look at that, it's the Crudmobile.",
	"Look out! Exclamation points!",
	"Lysine, an essential amino acid. Well, maybe not for robots.",
	"Marvin is complaining about the pain in the diodes down his left side.",
	"Mere shells cannot contain these peanuts!",
	"More grist for the mill.",
	"Mr. Hooper is here, surfing.",
	"Ne'er but a potted plant.",
	"Not kitten, just a packet of Kool-Aid(tm).",
	"Nothing but some scribbles in crayon.",
	"ONE HUNDRED THOUSAND CARPET FIBERS!!!!!",
	"Oh boy! Grub! Er, grubs.",
	"One liter of fuming nitric acid.",
	"One of the few remaining discos.",
	"Ooh, shiny!",
	"Paul Moyer's necktie.",
	"Pieces of broken clay pigeons are scattered all about.",
	"Plenty of nothing.",
	"Preoccupation with finding kitten prevents you from investigating further.",
	"Pumpkin pie spice.",
	"Quidquid Latine dictum sit, kitten non est.",
	"Rene Descarte is whistling a happy tune here.",
	"Robot should not be touching that.",
	"Run away! Run away!",
	"Seargent Duffy is here.",
	"Seven 1/4\" screws and a piece of plastic.",
	"Several hackles are here and they appear to be up.",
	"Several meters of Cat 5 cable.",
	"Sigmund Freud is here, asking about your mother.",
	"Slack!",
	"Snacky things.",
	"So, THAT's what an invisible barrier looks like!",
	"Some coconut crabs are milling about here.",
	"Some sort of electronic handheld game from the 1970s.",
	"Someone dropped a cheap ballpoint pen here.",
	"Someone dropped an expensive fountain pen here.",
	"Someone has written \"ad aerarium\" on the ground here.",
	"Someone's identity disk lies here.",
	"Something borrowed, something blue.",
	"Something is written here in the dust. You read: \"rJbotf ndQkttten\".",
	"Stimutacs.",
	"Sutro Tower is visible at some distance through the fog.",
	"TV says donuts are high in fat.",
	"Talcum powder.",
	"Tea and/or crumpets.",
	"Ten yards of avocado-green shag carpet.",
	"Thar's Mobius Dick, the convoluted whale. Arrr!",
	"That's just a charred human corpse.",
	"That's just an old tin can.",
	"The Digital Millennium Copyright Act of 1998.",
	"The Inform Designer's Manual (4th edition)",
	"The Monolith of Spam towers above you.",
	"The United States Court of Appeals for the Federal Circuit.",
	"The World's Biggest Matzoh Ball!",
	"The boom box cranks out an old Ethel Merman tune.",
	"The intermission from a 1930s silent movie.",
	"The ionosphere seems charged with meaning.",
	"The letters O and R.",
	"The man page for the UNIX 'find' command.",
	"The non-kitten item bites!",
	"The non-kitten item like this but with \"false\" and \"true\" switched is true.",
	"The non-kitten item like this but with \"true\" and \"false\" switched is false.",
	"The object pushes back at you.",
	"The pants that Curly died in.",
	"The rothe hits! The rothe hits!",
	"The rusted gates of an abandoned bemusement park.",
	"The score for a Czech composer's \"Kitten-Finding Symphony in C\".",
	"The spectre of Sherlock Holmes wills you onwards.",
	"The swampy ground around you seems to stink with disease.",
	"There are many coins here!",
	"There is a small mailbox here.",
	"There is no tea here.",
	"There's nothing here; it's just an optical illusion.",
	"There's something behind you.",
	"These aren't ordinary beans. They're magic beans!",
	"This TRS-80 III is eerily silent.",
	"This appears to be a rather large stack of trashy romance novels.",
	"This appears to be a statue of Perseus.",
	"This bouncy castle is filled with helium.",
	"This corroded robot is clutching a mitten.",
	"This drawer is full of dried out rubber stoppers.",
	"This grain elevator towers high above you.",
	"This invisible box contains a pantomime horse.",
	"This is a Lagrange point. Don't come too close now.",
	"This is a disaster area.",
	"This is a porcelain kitten-counter. 0, 0, 0, 0, 0...",
	"This is a remote control. Being a robot, you keep a wide berth.",
	"This is a tasty-looking banana creme pie.",
	"This is a television. On screen you see a robot strangely similar to yourself.",
	"This is an anagram.",
	"This is only a test of the Emergency Broadcast System.",
	"This is the forest primeval.",
	"This is the tenth key you've found so far.",
	"This is the world-famous Chain of Jockstraps.",
	"This isn't the item you're looking for.",
	"This jar of pickles expired in 1957.",
	"This jukebox has nothing but Cliff Richards albums in it.",
	"This kind of looks like kitten, but it's not.",
	"This looks like Bradley's \"Appearance and Reality\", but it's really not.",
	"This looks like a skateboarding arcade video game.",
	"This looks like an umbrella turned inside out.",
	"This looks remarkably like last Tuesday.",
	"This map is not the territory.",
	"This might be the fountain of youth, but you'll never know.",
	"This non-kitten item no verb.",
	"This non-kitten item was present in a previous version, but has been removed.",
	"This object here appears to be Louis Farrakhan's bow tie.",
	"This object is like an analogy.",
	"This particular monstrosity appears to be ENIAC.",
	"This peg-leg is stuck in a knothole!",
	"This place is called Antarctica. There is no kitten here.",
	"This seems to be junk mail addressed to the finder of the Eye of Larn.",
	"This subwoofer was blown out in 1974.",
	"This thing appears to be an ancient Roman breastplate.",
	"This tiny barbecue is spotlessly clean.",
	"This toaster strudel is riddled with bullet holes!",
	"This tomography is like, hella axial, man!",
	"This vending machine dispenses only coffee grounds.",
	"This was no boating accident!",
	"Three half-pennies and a wooden nickel.",
	"Three lizards lie here, playing Rock-Paper-Scissors.",
	"Three mismatched gloves.",
	"Tweeting birds.",
	"Two crepes, two crepes in a box.",
	"Two magnets cling to each other in the darkness.",
	"Two vast and trunkless legs of stone.",
	"Uh-oh...",
	"Vitriol.",
	"Vladimir Lenin's casket rests here.",
	"Wait! This isn't the poker chip! You've been tricked! DAMN YOU, MENDEZ!",
	"We wish you a merry kitten, and a happy New Year!",
	"Welcome back, robot.",
	"What in blazes is this?",
	"What's that blue thing doing here?",
	"Whatever it is, it's circular. Oh, it's a circle!",
	"Why are you touching this when you should be finding kitten?",
	"You can't touch that.",
	"You discover the entrance to a forgotten mine.",
	"You disturb a murder of crows.",
	"You encounter a cheap knockoff of this game: \"androidfindspuppy.\"",
	"You feel strangely unfulfilled.",
	"You find a bright shiny penny.",
	"You find a fraud scheme in which loans are used as security for other loans.",
	"You find a random assortment of dots and dashes.",
	"You find an Atari 2600 game cartridge with no label.",
	"You found kitten! No, just kidding.",
	"You found netkit! Way to go, robot!",
	"You found the marble in the oatmeal!",
	"You have new mail in /var/spool/robot",
	"You search this barrel thoroughly, but find only dried mango slices.",
	"You see a rhinestone-studded dog collar, but no dog.",
	"You see a snowflake here, melting slowly.",
	"You stumble upon Bill Gates's stand-up act.",
	"You stumble upon a digital signature.",
	"You suddenly yearn for your distant homeland.",
	"You won't believe what this is.",
	"You've discovered an enormous pile of socks.",
	"You've found a black screen filled with colorful ASCII characters.",
	"You've found a precautionary measure.",
	"You've found a speed bump.",
	"You've found the Gingerbread Man!",
	"You've found the fabled America Online disk graveyard!",
	"You've found the fish! Not that it does you much good in this game.",
	"You've found the snows of yesteryear! So that's where they all went to.",
	"Your current score: 3.",
	"Your existential dread.",
	"Your pal Floyd is here and wants to play Hucka-Bucka-Beanstalk.",
	"Your permanent record.",
	
	*/

  ];

  var NonKittenItemNames = function() {};

  NonKittenItemNames.prototype = {
    randomItem : function() {
      return nonKittenItems[Math.floor(Math.random() * nonKittenItems.length)];
    }
  };

  return NonKittenItemNames;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.ColorGenerator = (function(rfk, global) {

    var COLORS = ["red", "green", "yellow", "blue", "magenta", "cyan"];
    var ColorGenerator;

    ColorGenerator = function() {};

    ColorGenerator.prototype.randomColor = function randomColor() {
      return COLORS[Math.floor(Math.random() * COLORS.length)];
    };

    return ColorGenerator;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.CharacterGenerator = (function(rfk, global) {

    var CharacterGenerator;

    CharacterGenerator = function() {};

    CharacterGenerator.prototype.randomCharacter = function randomCharacter() {
      var exclamationIndex = "!".charCodeAt(0);
      return String.fromCharCode(Math.floor(Math.random() *
        ((126 - exclamationIndex + 1)) + exclamationIndex));
    };

    return CharacterGenerator;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Screen = (function(rfk, global) {

    var BACKGROUND_COLOR = "black";

    var Screen = function(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");

      this.context.font = "1em Courier, Monospace";
      this.context.textBaseline = "top";

      this.fontWidth = this.context.measureText("M").width;
      this.fontHeight = this.calculateHeight();
    };

    Screen.prototype.calculateHeight = function calculateHeight() {
      var heightElement = document.createElement("span");
      heightElement.style.fontFamily = "Courier, Monospace";
      heightElement.style.fontSize = "1em";
      heightElement.style.position = "absolute";
      heightElement.style.visibility = "hidden";

      heightElement.appendChild(document.createTextNode("M"));

      var body = document.getElementsByTagName("body")[0];

      body.appendChild(heightElement);

      var height = heightElement.offsetHeight;

      body.removeChild(heightElement);

      return height;
    };

    Screen.prototype.drawScreenItem = function drawScreenItem(screenItem) {
      this.context.save();

      this.context.fillStyle = screenItem.color;
      this.context.fillText(screenItem.character,
        screenItem.x * this.fontWidth,
        screenItem.y * this.fontHeight);

      this.context.restore();
    };

    Screen.prototype.clearScreen = function clearScreen() {
      this.context.save();

      this.context.fillColor = BACKGROUND_COLOR;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.context.restore();
    };

    Screen.prototype.clearScreenItem = function clearScreenItem(screenItem) {
      this.context.save();

      this.context.fillColor = BACKGROUND_COLOR;
      this.context.fillRect(screenItem.x * this.fontWidth,
                            screenItem.y * this.fontHeight,
                            this.fontWidth,
                            this.fontHeight);

      this.context.restore();
    };

    Screen.prototype.getMaxX = function getMaxX() {
      return (this.canvas.width / this.fontWidth) - 1;
    };

    Screen.prototype.getMaxY = function getMaxY() {
      return (this.canvas.height / this.fontHeight) - 1;
    };

    Screen.prototype.randomX = function randomX() {
      return Math.floor(Math.random() * this.getMaxX());
    };

    Screen.prototype.randomY = function randomY() {
      return Math.floor(Math.random() * this.getMaxY());
    };

    return Screen;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Robot = (function(rfk, global) {

  var Robot = function(screen) {

    this.screen = screen;

    this.character = "#";
    this.color = "grey";
    this.x = 0;
    this.y = 0;
  };

  Robot.prototype.move = function move(x, y) {
    this.x = x;
    this.y = y;
  };

  Robot.prototype.draw = function draw() {
    this.screen.drawScreenItem(this);
  };

  Robot.prototype.erase = function draw() {
    this.screen.clearScreenItem(this);
  };

  Robot.prototype.drawGraphic = function drawGraphic(x, y) {

    // [-]
    this.screen.drawScreenItem({"character" : "[", "color" : "blue", "x" : x, "y" : y});
    this.screen.drawScreenItem({"character" : "-", "color" : "cyan", "x" : x+1, "y" : y});
    this.screen.drawScreenItem({"character" : "]", "color" : "blue", "x" : x+2, "y" : y});

    // (+)=C
    this.screen.drawScreenItem({"character" : "(", "color" : "blue", "x" : x, "y" : y+1});
    this.screen.drawScreenItem({"character" : "+", "color" : "red", "x" : x+1, "y" : y+1});
    this.screen.drawScreenItem({"character" : ")", "color" : "blue", "x" : x+2, "y" : y+1});
    this.screen.drawScreenItem({"character" : "=", "color" : "cyan", "x" : x+3, "y" : y+1});
    this.screen.drawScreenItem({"character" : "C", "color" : "cyan", "x" : x+4, "y" : y+1});

    // | |
    this.screen.drawScreenItem({"character" : "|", "color" : "blue", "x" : x, "y" : y+2});
    this.screen.drawScreenItem({"character" : "|", "color" : "blue", "x" : x+2, "y" : y+2});

    // OOO
    this.screen.drawScreenItem({"character" : "O", "color" : "gray", "x" : x, "y" : y+3});
    this.screen.drawScreenItem({"character" : "O", "color" : "gray", "x" : x+1, "y" : y+3});
    this.screen.drawScreenItem({"character" : "O", "color" : "gray", "x" : x+2, "y" : y+3});
  };

  return Robot;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Kitten = (function(rfk, global) {

  var characterGenerator = new rfk.CharacterGenerator();
  var colorGenerator = new rfk.ColorGenerator();

  var Kitten;

  Kitten = function(screen, x, y) {
    this.screen = screen;
    this.character = characterGenerator.randomCharacter();
    this.color = colorGenerator.randomColor();
    this.x = x;
    this.y = y;
  };

  Kitten.prototype.draw = function draw() {
    this.screen.drawScreenItem(this);
  };

  Kitten.prototype.erase = function draw() {
    this.screen.clearScreenItem(this);
  };

  Kitten.prototype.drawGraphic = function drawGraphic(x, y) {
    // |\_/|
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+1, "y" : y});
    this.screen.drawScreenItem({"character" : "\\", "color" : "orange", "x" : x+2, "y" : y});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+3, "y" : y});
    this.screen.drawScreenItem({"character" : "/", "color" : "orange", "x" : x+4, "y" : y});
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+5, "y" : y});

    // |o o|__
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+1, "y" : y+1});
    this.screen.drawScreenItem({"character" : "o", "color" : "green", "x" : x+2, "y" : y+1});
    this.screen.drawScreenItem({"character" : "o", "color" : "green", "x" : x+4, "y" : y+1});
    this.screen.drawScreenItem({"character" : "|", "color" : "orange", "x" : x+5, "y" : y+1});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+6, "y" : y+1});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+7, "y" : y+1});

    // =-*-=__\
    this.screen.drawScreenItem({"character" : "=", "color" : "white", "x" : x+1, "y" : y+2});
    this.screen.drawScreenItem({"character" : "-", "color" : "white", "x" : x+2, "y" : y+2});
    this.screen.drawScreenItem({"character" : "*", "color" : "red", "x" : x+3, "y" : y+2});
    this.screen.drawScreenItem({"character" : "-", "color" : "white", "x" : x+4, "y" : y+2});
    this.screen.drawScreenItem({"character" : "=", "color" : "white", "x" : x+5, "y" : y+2});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+6, "y" : y+2});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+7, "y" : y+2});
    this.screen.drawScreenItem({"character" : "\\", "color" : "orange", "x" : x+8, "y" : y+2});

    // c_c__(___)
    this.screen.drawScreenItem({"character" : "c", "color" : "orange", "x" : x, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+1, "y" : y+3});
    this.screen.drawScreenItem({"character" : "c", "color" : "orange", "x" : x+2, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+3, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+4, "y" : y+3});
    this.screen.drawScreenItem({"character" : "(", "color" : "orange", "x" : x+5, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+6, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+7, "y" : y+3});
    this.screen.drawScreenItem({"character" : "_", "color" : "orange", "x" : x+8, "y" : y+3});
    this.screen.drawScreenItem({"character" : ")", "color" : "orange", "x" : x+9, "y" : y+3});
  };

  return Kitten;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.NonKittenItems = (function(rfk, global) {

  var characterGenerator = new rfk.CharacterGenerator();
  var colorGenerator = new rfk.ColorGenerator();
  var nonKittenItemNames = new rfk.NonKittenItemNames();

  var NonKittenItems;

  NonKittenItems = function(screen) {
    this.screen = screen;
    this.nonKittenItems = [];
  }

  NonKittenItems.prototype.initialize = function(totalNkiCount) {

    this.nonKittenItems.length = 0;

    for (var nkiCount = 0; nkiCount < totalNkiCount; nkiCount++)
    {
      var x = this.screen.randomX();
      var y = this.screen.randomY();

      if (!this.nonKittenItems[y])
      {
        this.nonKittenItems[y] = [];
      }

      while (this.nonKittenItems[y] && this.nonKittenItems[y][x])
      {
        x = this.screen.randomX();
      }

      this.nonKittenItems[y][x] = { "character" : characterGenerator.randomCharacter(),
                                    "color" : colorGenerator.randomColor(),
                                    "x" : x,
                                    "y" : y,
                                    "text" : nonKittenItemNames.randomItem()};
    }
  };

  NonKittenItems.prototype.draw = function draw() {

    for (var y in this.nonKittenItems) {

      for (var x in this.nonKittenItems[y]) {
        this.screen.drawScreenItem(this.nonKittenItems[y][x]);
      }
    }
  };

  NonKittenItems.prototype.isNkiAtLocation = function isNkiAtLocation(x, y) {
    return ((this.nonKittenItems[y]) !== undefined && (this.nonKittenItems[y][x] !== undefined));
  };

  NonKittenItems.prototype.getNkiAtLocation = function getNkiAtLocation(x, y) {
    return this.nonKittenItems[y][x];
  };

  return NonKittenItems;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Heart = (function(rfk, global) {

  var Heart;

  Heart = function(screen) {
    this.screen = screen;
  };

  Heart.prototype.drawGraphic = function drawGraphic(x, y) {
    // .::. .::.
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+1, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+2, "y" : y});
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x+3, "y" : y});
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x+5, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+6, "y" : y});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+7, "y" : y});
    this.screen.drawScreenItem({"character" : ".", "color" : "red", "x" : x+8, "y" : y});

    // :::::::::
    for (var offset = 0; offset < 9; offset++) {
      this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x + offset, "y" : y+1});
    }

    // ':::::::'
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x, "y" : y+2});
    for (offset = 1; offset < 7; offset++) {
      this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x + offset, "y" : y+2});
    }
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x + 7, "y" : y+2});

    //   ':::'
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x+2, "y" : y+3});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+3, "y" : y+3});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+4, "y" : y+3});
    this.screen.drawScreenItem({"character" : ":", "color" : "red", "x" : x+5, "y" : y+3});
    this.screen.drawScreenItem({"character" : "'", "color" : "red", "x" : x+6, "y" : y+3});
  };

  return Heart;

})(com.robotfindskitten || {}, this);

com.robotfindskitten.Game = (function(rfk, global) {

  var NKI_COUNT = 20;

  var Game;

  Game = function init(canvas, nkiElement) {
     this.screen = new rfk.Screen(canvas);
     this.nkiElement = nkiElement;

     this.robot = new rfk.Robot(this.screen);
     this.nkis = new rfk.NonKittenItems(this.screen);
     this.heart = new rfk.Heart(this.screen);

     this.startGameListeners = [];
     this.kittenFoundListeners = [];

     var self = this;

     global.addEventListener("keyup", function(e) { self.handleKeyup(e); }, false);
     global.addEventListener("keydown", function(e) { self.handleKeydown(e); }, false);

     canvas.addEventListener("touchstart", function(e) { self.handleTouchStart(e); }, false);
     canvas.addEventListener("touchmove", function(e) { self.handleTouchMove(e); }, false);
     canvas.addEventListener("touchend", function(e) { self.handleTouchEnd(e); }, false);
     canvas.addEventListener("touchcancel", function(e) { self.handleTouchEnd(e); }, false);
  };

  Game.prototype.startGame = function startGame() {
     this.screen.clearScreen();
     this.nkis.initialize(NKI_COUNT);
     this.nkis.draw();

     this.initializeRobotLocation();
     this.robot.draw();

     this.initializeKitten();
     this.kitten.draw();

     for (var i = 0; i < this.startGameListeners.length; i++) {
       this.startGameListeners[i]();
     }
  };

  Game.prototype.addStartGameListener = function addStartGameListener(startGameListener) {
    if (startGameListener && (typeof(startGameListener) === "function")) {
      this.startGameListeners.push(startGameListener);
    }
  };

  Game.prototype.addKittenFoundListener = function addKittenFoundListener(kittenFoundListener) {
    if (kittenFoundListener && (typeof(kittenFoundListener) === "function")) {
      this.kittenFoundListeners.push(kittenFoundListener);
    }
  };

  Game.prototype.initializeRobotLocation = function initializeRobotLocation() {
    var x = this.screen.randomX();
    var y = this.screen.randomY();

    while (this.nkis.isNkiAtLocation(x, y))
    {
        x = this.screen.randomX();
        y = this.screen.randomY();
    }

    this.robot.move(x, y);
  };

  Game.prototype.initializeKitten = function initializeKitten() {
    var x = this.screen.randomX();
    var y = this.screen.randomY();

    while (this.nkis.isNkiAtLocation(x, y) ||
           (this.robot.x === x && this.robot.y === y))
    {
      x = this.screen.randomX();
      y = this.screen.randomY();
    }

    this.kitten = new rfk.Kitten(this.screen, x, y);
  };

  Game.prototype.displayNki = function displayNki(nki, color) {
    this.nkiElement.innerHTML = nki;
    color = color || "white";
    this.nkiElement.style.color = color;
  };

  Game.prototype.handleKeydown = function handleKeydown(event) {

    if (this.animating) {
      return;
    }

    switch (event.keyCode) {
      case 38:  // Up arrow
      case 87:  // W
      case 75:  // K (vi)
        this.moveRobot(0, -1);
        event.preventDefault();
        break;

      case 40:  // Down arrow
      case 83:  // S
      case 74:  // J (vi)
        this.moveRobot(0, 1);
        event.preventDefault();
        break;

      case 37:  // Left arrow
      case 65:  // A
      case 72:  // H (vi)
        this.moveRobot(-1, 0);
        event.preventDefault();
        break;

      case 39:  // Right arrow
      case 68:  // D
      case 76:  // L (vi)
        this.moveRobot(1, 0);
        event.preventDefault();
        break;
    }
  };

  Game.prototype.handleKeyup = function handleKeyup(event) {
    if (event.keyCode === 27 && !this.animating) {
        this.startGame();
    }
  };

  Game.prototype.handleTouchStart = function handleTouchStart(event) {
    if (event.touches.length === 1)
    {
      this.firstX = event.touches[0].pageX;
      this.firstY = event.touches[0].pageY;
    }
  };

  Game.prototype.handleTouchMove = function handleTouchMove(event) {
    if (event.changedTouches.length === 1)
    {
      this.lastX = event.changedTouches[0].pageX;
      this.lastY = event.changedTouches[0].pageY;
      event.preventDefault();
    }
  };

  Game.prototype.handleTouchEnd = function handleTouchEnd(event) {

    var MIN_TRAVEL_DISTANCE = 10;

    var diffX = this.lastX - this.firstX;
    var diffY = this.lastY - this.firstY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > MIN_TRAVEL_DISTANCE) {
        this.moveRobot(1, 0);
      }
      else if (diffX < -MIN_TRAVEL_DISTANCE) {
        this.moveRobot(-1, 0);
      }
    }
    else
    {
      if (diffY > MIN_TRAVEL_DISTANCE) {
        this.moveRobot(0, 1);
      }
      else if (diffY < -MIN_TRAVEL_DISTANCE) {
        this.moveRobot(0, -1);
      }
    }
  };

  Game.prototype.moveRobot = function moveRobot(deltaX, deltaY) {
    var newRobotX = this.robot.x + deltaX;
    var newRobotY = this.robot.y + deltaY;

    if (((newRobotX >= 0) && (newRobotX <= this.screen.getMaxX())) &&
       ((newRobotY >= 0) && (newRobotY < this.screen.getMaxY())))
    {
      if (this.nkis.isNkiAtLocation(newRobotX, newRobotY))
      {
        var nki = this.nkis.getNkiAtLocation(newRobotX, newRobotY);
        this.displayNki(nki.text, nki.color);
      }
      else if ((this.kitten.x === newRobotX) && (this.kitten.y === newRobotY))
      {
          this.foundKitten();
      }
      else
      {
        this.robot.erase();
        this.robot.move(newRobotX, newRobotY);
        this.robot.draw();
      }
    }
  };

  Game.prototype.foundKitten = function foundKitten() {
    this.displayNki("You found kitten!!!!! Press [ESC] or 'New Game' to play again.");

    for (var i = 0; i < this.kittenFoundListeners.length; i++) {
      this.kittenFoundListeners[i]();
    }

    this.playAnimation(0);
  };

  Game.prototype.playAnimation = function playAnimation(offset) {
    if (offset !== 15) {
      this.animating = true;
      this.screen.clearScreen();

      var top = (this.screen.getMaxY() / 2) - 2;
      var self = this;

      this.robot.drawGraphic(6 + offset, top);
      this.heart.drawGraphic(this.screen.getMaxX() / 2 - 6, top);
      this.kitten.drawGraphic(this.screen.getMaxX() - 15 - offset, top);

      setTimeout(function() { self.playAnimation(offset + 1); }, 250);
    }
    else
    {
      this.animating = false;
    }
  };

  return Game;

})(com.robotfindskitten || {}, this);