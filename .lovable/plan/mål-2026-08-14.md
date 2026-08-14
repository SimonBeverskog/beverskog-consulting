Byt ut bild för tretåig hackspett-projektet

## Mål
Ersätt bilden i det markerade projektkortet ("Inventering av tretåig hackspett (Picoides tridactylus) och bedömning av livsmiljöer") med den uppladdade skogsbilden.

## Steg
1. Kopiera den uppladdade filen `/mnt/user-uploads/B44A4195.JPG` till `src/assets/project-woodpecker.jpg` och ersätt den befintliga bilden.
2. Kontrollera att bildformatet och filnamnet är kompatibelt med den nuvarande importen i `src/components/ProjectsSection.tsx`.
3. Ingen kodändring behövs om filnamnet behålls som `project-woodpecker.jpg`.
4. Verifiera att det nya fotot syns korrekt i projektrutnätet på förhandsvisningen.

## Tekniska detaljer
- Bilden hanteras lokalt i projektet (inte via CDN) för att säkerställa att den fungerar på den anpassade domänen `beverskog.com`, där projektet tidigare haft problem med externa tillgångar.
- Den nuvarande importen `import projectWoodpecker from "@/assets/project-woodpecker.jpg"` behålls, vilket minimerar risken för brutna referenser.
