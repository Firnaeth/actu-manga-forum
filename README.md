# 🌸 Actu Manga World : The Ultimate Otaku Network

> Un forum communautaire rétro replongeant l'ambiance des années 2010, dédié aux passionnés d'animes, de mangas, de critiques et de fiches thématiques.

---

## ✨ Fonctionnalités principales

* **👥 Système de Membres & Authentification** : Inscription, connexion sécurisée et gestion des profils via **Supabase**.
* **📚 Mangathèque & Profils** : Espace personnel pour chaque utilisateur pour gérer sa bibliothèque de mangas et ses informations.
* **🏮 Fan Clubs Dédiés** : Sections thématiques par œuvre (ex: *Vandread*, *Bleach*, etc.) avec des bannières personnalisables, des sujets spécifiques et un système de modération.
* **🎨 Concours de Dessin & Communauté** : Espaces d'échanges, critiques de mangas, partages de créations graphiques et système de sujets/réponses dynamiques.
* **⚙️ Panneau d'Administration** : Gestion globale du site, des bannières d'en-tête et des configurations par les administrateurs et modérateurs.

---

## 🛠️ Technologies utilisées

* **Frontend** : HTML5, CSS3 (Design rétro/forum classique), JavaScript (Modules ES6).
* **Backend & Base de données** : [Supabase](https://supabase.com/) (Authentification, tables relationnelles, stockage des données).
* **Hébergement** : GitHub Pages.

---

## 📁 Structure du projet

Voici un aperçu de l'arborescence des principaux fichiers :

```text
├── index.html            # Accueil / Index du forum
├── fan-clubs.html        # Liste des Fan Clubs
├── fan-club.html         # Page dédiée à un Fan Club et ses sujets
├── topic.html            # Affichage d'un sujet et de ses réponses
├── profile.html          # Profil utilisateur & mangathèque
├── register.html         # Connexion / Inscription
├── admin-global.html     # Page d'administration du site
├── style.css             # Feuille de styles principale
└── supabase.js           # Configuration et connexion à l'API Supabase
