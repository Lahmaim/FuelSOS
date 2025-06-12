# FuelSOS
1. Nom du projet : FuelSOS

2. Côté Prestataire
Connexion

Notification de demande

Accepter / Refuser

Navigation vers l’utilisateur

Marquer la livraison comme faite

Recevoir le paiement (statut "payé")

3. Côté Admin Web
Voir liste des utilisateurs / prestataires

Valider prestataires

Consulter les demandes en cours

Supprimer comptes / gérer plaintes

4. Stack Technologique
| Composant        | Tech choisie                  |
| ---------------- | ----------------------------- |
| Mobile App       | React Native                  |
| Backend API      | Node.js + Express             |
| Base de données  | MongoDB (MongoDB Atlas)       |
| Authentification | Firebase Auth                 |
| Géolocalisation  | Google Maps API               |
| Paiement         | Stripe (test mode)            |
| Temps réel       | Socket.IO                     |
| Admin Panel      | React + TailwindCSS ou ShadCN |
| Hébergement      | Vercel / Render / Heroku      |

5. Contraintes
Déploiement fonctionnel avant fin de la 3e semaine
Optimisation mobile uniquement (pas de tablette/web utilisateur)
Sécurité minimale pour le MVP
Interface simple, claire et fonctionnelle

 Backlog Agile (Planification 3 Semaines)
 Semaine 1 – Mise en place technique & Authentification
🧩 Backlog Sprint 1

| Tâche                             | Description                       | Durée estimée |
| --------------------------------- | --------------------------------- | ------------- |
| Init projet React Native          | Setup app mobile                  | 0.5 j         |
| Setup backend Node.js + MongoDB   | Serveur Express + Mongoose        | 1 j           |
| Authentification Firebase         | Utilisateur & prestataire         | 1 j           |
| Création des modèles MongoDB      | Utilisateur, prestataire, demande | 1 j           |
| Intégration Google Maps           | Affichage de la position          | 1 j           |
| UI simple écran connexion + carte | React Native UI de base           | 1 j           |

Semaine 2 – Demande de carburant & Gestion prestataire
🧩 Backlog Sprint 2

| Tâche                              | Description                          | Durée estimée |
| ---------------------------------- | ------------------------------------ | ------------- |
| Fonction "Demander Carburant"      | Bouton + envoi des données           | 0.5 j         |
| Localiser prestataires à proximité | Backend + Maps                       | 1 j           |
| Notifications prestataires         | Socket.IO ou polling                 | 1 j           |
| Accepter / refuser une demande     | Interface prestataire                | 0.5 j         |
| Suivi en temps réel                | Prestataire → utilisateur (tracking) | 1 j           |
| Ecran de confirmation + évaluation | Interface utilisateur fin mission    | 0.5 j         |
| Design simplifié + navigation      | UI mobile fluide                     | 0.5 j         |

Semaine 3 – Paiement, admin et finalisation
🧩 Backlog Sprint 3

| Tâche                           | Description                       | Durée estimée |
| ------------------------------- | --------------------------------- | ------------- |
| Intégrer Stripe (test)          | Paiement utilisateur → plateforme | 1 j           |
| Historique des demandes         | Côté utilisateur et prestataire   | 0.5 j         |
| Interface Admin (React)         | Liste des comptes + validation    | 1 j           |
| Gestion des demandes dans admin | Affichage + suppression           | 0.5 j         |
| Test end-to-end complet         | Mobile, backend, admin            | 1 j           |
| Corrections + Déploiement       | Finalisation + docs               | 1 j           |
