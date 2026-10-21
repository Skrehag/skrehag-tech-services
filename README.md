# Skrehag tech services

První vizuální návrh webu v češtině. Čisté HTML, CSS a JavaScript, bez externích knihoven, bez sledování a bez placených služeb. Grafika je vlastní SVG. Zobrazení se přizpůsobuje mobilům i počítačům.

## Stav obsahu

**Jde o pracovní návrh.** Název a zaměření na IT servis jsou potvrzené. Konkrétní služby, město, kontakty, ceník, provozovatel, způsob předání a logo ještě nejsou dodané. Návrh neobsahuje smyšlené kontakty, reference ani ceny. Tři kategorie služeb jsou výslovně označené jako návrh.

Stránka má `noindex, nofollow` a viditelné označení návrhu. Před ostrým spuštěním potvrďte a doplňte obsah, odstraňte označení návrhu a upravte kontrolu metadat v `tools/check.mjs`. `noindex` není ochrana přístupu: zveřejněný web a veřejný repozitář jsou dostupné návštěvníkům.

## Spuštění a úpravy

Stačí Node.js 22 nebo novější. Není nutné nic instalovat pomocí npm.

```sh
node tools/serve.mjs
```

Náhled se otevře na http://127.0.0.1:4173. Samotný web funguje i otevřením `index.html` v prohlížeči.

- `index.html`: obsah a struktura stránky.
- `styles.css`: barvy, rozložení a mobilní verze.
- `site-config.js`: veřejný e-mail, telefon a místo působení. Po doplnění se zobrazí skutečné odkazy pro volání/e-mail.
- `script.js`: mobilní menu a zobrazení kontaktů.
- `assets/`: vlastní ilustrace a dočasná ikona. Značku později nahradíme dodaným logem.

Web zatím neodesílá žádný formulář a nesbírá zákaznická data. Kontaktní odkazy vzniknou až po zadání platných údajů.

## Kontrola a sestavení

```sh
node tools/check.mjs
node tools/build.mjs
```

Ve složce `dist/` jsou pouze veřejné soubory pro hosting. Kontrola hlídá odkazy na sekce, přítomnost souborů, metadata, duplicitní identifikátory a syntaxi JavaScriptu.

## GitHub

Připravený workflow `.github/workflows/pages.yml` ověří web po každém pushi do `main` a nasadí jej na GitHub Pages, pokud jsou Pages zapnuté. Pull requesty pouze zkontroluje.

1. Vytvořit repozitář `skrehag-tech-services` a nahrát tento adresář včetně složky `.github`.
2. V Settings → Pages zvolit Source → GitHub Actions.
3. Spustit workflow nebo poslat změnu do větve `main`.
4. Ověřit URL vrácenou úspěšným nasazením. Standardně má podobu `https://UZIVATEL.github.io/skrehag-tech-services/`.

Vlastní doména není potřeba. GitHub Free nabízí Pages z veřejných repozitářů.

### Rozsah hostingu

GitHub omezuje použití Pages pro provoz online podnikání, e-commerce a weby zaměřené především na obchodní transakce. Před použitím jako ostrého obchodního webu je třeba posoudit finální obsah podle [pravidel GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). Tento návrh nemá objednávky ani platby. Kód může zůstat na GitHubu i při provozu webu na jiném hostingu, například Cloudflare.

Do repozitáře nikdy nenahrávejte hesla, přístupové tokeny ani zákaznické údaje.
