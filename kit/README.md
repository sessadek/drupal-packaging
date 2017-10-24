# Starter Kit(Aquarium)
```Je me suis inspiré de plusieurs Starter Kit (Evernote, DBM, Fullsix et Google).```
```SMACSS (Scalable and Modular Architecture for CSS): A flexible guide to developing sites small and large.```
```Voici un Starter Kit de développement frontend conçu comme point de départ pour de nouveaux projets.```
- le but de Starter Kit est d'être un point de départ pour les nouveaux projets et aussi de nous permettre de respecter les 4 objectifs 
suivant:
    - Prédictable,
    - Modulable - Réutilisable
    - Maintenable
    - Evolutif
Tant côté CSS que Javascript.

## Architecture CSS 
- Structure SCSS:
    - Base: la base pour commencer n'importe quel projet, il contiendra les fichier normalize, fonts, base, mixins, breakpoint, variables...
    - Layout: contient le système de Grid de Zurb Foundation, le style des containers...<br>
    - Modules: Ce dossier contiendra les composants de la page organiser en fichier comme header, footer, navigation, slider...
    - States: 

## Javascript
```J'ai utilisé requireJs, pour charger les fichiers et les modules Javascript, l'utilisation d'un modular script loader nous permettra ```
```d'améliorer la vitesse et la qualité de notre code.```

```Organisation des fichiers:```
- JS:
    - modules: contient nos modules. (header, slider, validate, sticky...)
    - vendor: contient les dépendances (librairies jQuery, RequireJs...).
    - main.js: contient l'appel des modules.

## Gulp (Automatisation des tâches)
```Pour l'automatisation des tâches j'ai utilisé Gulp.```
- Le Starter Kit contient les plugins Gulp suivant:
    - gulp-sass-lint: Checking the Syntax of SCSS.
    - gulp-sass: Compile Sass.
    - gulp-sourcemaps: Generating sourcemaps for easier debugging.
    - gulp-clean-css: Minify css.
    - gulp.spritesmith: Generateing Sprite image.
    - gulp-imagemin: Minify PNG, JPEG, GIF and SVG images.
    - psi: PageSpeed Insights.

## Bower
La gestion des dépendances