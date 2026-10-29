# Images de couverture du blog

Dépose ici les photos de couverture des articles. Le système les utilise
automatiquement (carte de liste, hero de l'article, aperçu OpenGraph/Twitter).

## Comment ça marche

1. Dépose une image dans ce dossier, par ex. `best-beaches-tenerife.jpg`.
2. Dans `src/lib/blog/posts.ts`, ajoute le champ `image` à l'article concerné :

   ```ts
   {
     slug: 'best-beaches-tenerife',
     // ...
     image: '/images/blog/best-beaches-tenerife.jpg',
   }
   ```

Tant qu'un article n'a pas de champ `image`, c'est le dégradé (`gradient`)
qui s'affiche — rien ne casse.

## Recommandations

- **Format** : JPG ou WebP, ratio ~21:9 (bannière large), idéalement 1600×686 px
  ou plus. Pour un rendu OpenGraph propre sur les réseaux, 1200×630 px convient aussi.
- **Poids** : < 300 Ko par image (compresser avec squoosh.app ou équivalent).
- **Licence** : uniquement des photos dont tu possèdes les droits (tes propres
  photos, ou banques libres de droits type Unsplash/Pexels en respectant leur licence).
- **Nommage** : reprends exactement le `slug` de l'article pour t'y retrouver.
