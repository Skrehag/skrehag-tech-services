# Skrehag Tech Services

Prezentační web v češtině, sladěný s dodaným modrozeleným logem. Čisté HTML, CSS a JavaScript bez externích knihoven, sledování, formulářů a plateb.

Veřejný web: https://skrehag.github.io/skrehag-tech-services/

Kontakt: **skrehagtech@gmail.com**. Telefon a oblast působení nejsou zveřejněné. Ceny a konkrétní rozsah se domlouvají individuálně.

## Lokální náhled

Stačí Node.js 22 nebo novější, bez instalace npm balíčků.

~~~sh
node tools/serve.mjs
~~~

Náhled je na http://127.0.0.1:4173. Server zpřístupňuje pouze veřejné soubory.

## Úpravy

- index.html: obsah, e-mailové odkazy a metadata pro vyhledávání.
- styles.css: modrozelené barvy, rozložení a mobilní navigace.
- site-config.js: veřejný e-mail pro tlačítko kopírování. Při změně upravte také index.html.
- script.js: mobilní menu, aktuální rok a kopírování e-mailu.
- assets/logo-full.png a assets/logo-symbol.png: originální dodaná loga, beze změn. SVG výřezy v HTML pouze omezují průhledné okraje při zobrazení.
- sitemap.xml a robots.txt: podklady pro vyhledávače. Zařazení do výsledků vyhledávání závisí na vyhledávači.

## Kontrola a nasazení

~~~sh
node tools/check.mjs
node tools/build.mjs
~~~

Ve složce dist/ vzniknou veřejné soubory pro hosting. Workflow .github/workflows/pages.yml po každém pushi do main ověří a nasadí web na GitHub Pages. Pull requesty pouze zkontroluje.

Krátká adresa https://skrehag.github.io/ je spravovaná v samostatném repozitáři Skrehag.github.io a přesměruje na tento web. Obsah webu se upravuje pouze zde.

Do veřejného repozitáře nepatří hesla, tokeny ani zákaznické údaje.
