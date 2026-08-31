GAMEZONE - HOW TO IMPORT YOUR OWN GAMES

1. Unzip this folder.
2. Put each HTML game inside the "games" folder.
   Example:
   games/
     football-game/
       index.html
       other-files...

3. Open games.js and add an entry:

{
  name: "Football Game",
  category: "Sports",
  icon: "🏈",
  path: "games/football-game/index.html"
}

4. Save games.js.
5. Open index.html to use the website.

IMPORTANT:
- Games should be HTML/JavaScript browser games.
- Keep all files a game needs inside that game's folder.
- Some browser security rules can stop certain features when opening index.html directly from your computer.
  If that happens, run the folder through a local web server or upload it to a web host.

Included demo games:
- Neon Dodger
- Block Jumper
