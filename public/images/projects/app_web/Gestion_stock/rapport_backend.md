# Rapport Backend - Gestion Stock

## 1. Présentation du projet

Ce projet est une API REST backend développée avec Spring Boot pour gérer un système de gestion de stock. Il permet de gérer :

- les produits
- les commandes
- les factures
- les utilisateurs et leurs rôles
- l’authentification basée sur JWT
- la documentation API via Swagger/OpenAPI

Le backend est pensé pour être consommé par un frontend (Angular) ou testé directement via Postman.

---

## 2. Stack technique

- Java 21
- Spring Boot 3.4.1
- Spring Web
- Spring Security
- Spring Data JPA
- Hibernate / JPA
- MySQL
- JWT (jjwt)
- Lombok
- MapStruct
- Springdoc OpenAPI / Swagger UI
- Maven

---

## 3. Structure du projet

```text
src/main/java/com/gestion/stock/gestion_stock/
├── controller/
├── dto/
├── entity/
├── mapper/
├── repository/
├── security/
├── service/
└── GestionStockApplication.java
```

### Dossiers principaux

- controller : endpoints REST
- dto : objets de transfert de données
- entity : entités JPA
- mapper : conversion DTO <-> entité
- repository : interfaces Spring Data JPA
- service : logique métier
- security : sécurité JWT et configuration Spring Security

---

## 4. Entités principales

### 4.1 Produit

Représente un produit stocké dans l’application.

Attributs :
- id
- nom
- reference
- quantiteEnStock
- prixUnitaire
- categorie

### 4.2 Commande

Représente une commande passée par un client ou un processus métier.

Attributs :
- id
- dateCommande
- statut
- total
- produits

### 4.3 Facture

Représente une facture générée à partir d’une commande.

Attributs :
- id
- numeroFacture
- dateEmission
- montantTotal
- commande

### 4.4 Utilisateur

Représente un utilisateur du système.

Attributs :
- id
- username
- password
- role

### 4.5 Role

Enumération des rôles disponibles :
- GESTIONNAIRE_STOCK
- GESTIONNAIRE_COMMANDE
- COMPTABLE
- SUPER_ADMIN

---

## 5. DTOs (Data Transfer Objects)

Les DTOs sont utilisés pour exposer les données à l’API et éviter d’exposer directement les entités.

### 5.1 ProduitDTO

Champs :
- id
- nom
- reference
- categorie
- quantiteEnStock
- prixUnitaire

### 5.2 CommandeDTO

Champs :
- id
- dateCommande
- statut
- total
- produitIds

### 5.3 FactureDTO

Champs :
- id
- numeroFacture
- dateEmission
- montantTotal
- commandeId

### 5.4 UtilisateurDTO

Champs :
- id
- username
- password
- role

### 5.5 LoginRequest

Champs :
- username
- password

---

## 6. Contrôleurs API

### 6.1 AuthController

Endpoint principal pour la connexion.

#### POST /api/auth/login

Permet à un utilisateur de se connecter et de recevoir un token JWT.

Body attendu :
```json
{
  "username": "gestionnaire1",
  "password": "motdepasse"
}
```

Réponse :
```json
{
  "token": "..."
}
```

---

### 6.2 ProduitController

Gère la gestion des produits.

#### Endpoints

- POST /api/produits : créer un produit
- GET /api/produits : lister les produits
- GET /api/produits/{id} : consulter un produit
- PUT /api/produits/{id} : modifier un produit
- DELETE /api/produits/{id} : supprimer un produit

---

### 6.3 CommandeController

Gère la gestion des commandes.

#### Endpoints

- POST /api/commandes : créer une commande
- GET /api/commandes : lister les commandes
- GET /api/commandes/{id} : consulter une commande
- PUT /api/commandes/{id} : modifier une commande
- DELETE /api/commandes/{id} : annuler une commande

---

### 6.4 FactureController

Gère la génération et la consultation des factures.

#### Endpoints

- POST /api/factures/generer/{commandeId} : générer une facture à partir d’une commande
- GET /api/factures/{numero} : obtenir une facture par son numéro

---

### 6.5 UtilisateurController

Gère la création et la consultation des utilisateurs.

#### Endpoints

- POST /api/utilisateurs : créer un utilisateur
- GET /api/utilisateurs/{username} : récupérer un utilisateur par username
- PUT /api/utilisateurs/{id} : mettre à jour un utilisateur

---

## 7. Services métier

### 7.1 ProduitService

Logique métier liée aux produits.

### 7.2 CommandeService

Logique métier liée aux commandes.

### 7.3 FactureService

Logique métier liée aux factures.

### 7.4 UtilisateurService

Logique métier liée aux utilisateurs.

---

## 8. Sécurité

La sécurité du backend repose sur Spring Security et JWT.

### 8.1 Authentification

Les utilisateurs se connectent via `/api/auth/login`.

### 8.2 Autorisation

Les accès sont définis selon les rôles :

- Produits : GESTIONNAIRE_STOCK, SUPER_ADMIN
- Commandes : GESTIONNAIRE_COMMANDE, COMPTABLE, SUPER_ADMIN
- Factures : COMPTABLE, SUPER_ADMIN

### 8.3 JWT

Le backend génère un token JWT après connexion.

Le token doit être envoyé dans l’en-tête :
```http
Authorization: Bearer <token>
```

### 8.4 Filtre JWT

Le filtre `JwtAuthenticationFilter` intercepte les requêtes et vérifie la présence et la validité du token.

---

## 9. Documentation API

Le projet intègre Swagger/OpenAPI via Springdoc.

### URL Swagger

```text
http://localhost:8080/swagger-ui/index.html
```

### URL OpenAPI JSON

```text
http://localhost:8080/v3/api-docs
```

---

## 10. Configuration applicative

Le fichier de configuration principal est :

- src/main/resources/application.properties

### Configuration principale

- URL de la base de données MySQL
- nom d’utilisateur et mot de passe
- mode de mise à jour de la base `update`
- logs de sécurité activés

---

## 11. Exemples de données

### Utilisateur gestionnaire

```json
{
  "username": "gestionnaire1",
  "password": "motdepasse",
  "role": "GESTIONNAIRE_STOCK"
}
```

### Utilisateur comptable

```json
{
  "username": "comptable_chef",
  "password": "password123",
  "role": "COMPTABLE"
}
```

### Utilisateur super admin

```json
{
  "username": "admin",
  "password": "password123",
  "role": "SUPER_ADMIN"
}
```

---

## 12. Lancement du projet

### Prérequis

- Java 21 installé
- MySQL installé et en cours d’exécution
- base `gestion_stock` créée

### Commande de lancement

```bash
./mvnw spring-boot:run
```

### Vérification du démarrage

Le projet démarre sur :
```text
http://localhost:8080
```

---

## 13. Points importants à retenir

- L’authentification se fait via JWT
- Les utilisateurs doivent avoir un rôle valide
- Les endpoints sensibles nécessitent un token valide
- Swagger est accessible après démarrage de l’application
- Les DTOs sont utilisés pour éviter l’exposition directe des entités

---

## 14. Conclusion

Ce backend fournit une base solide pour la gestion d’un système de stock avec :

- gestion des produits
- gestion des commandes
- génération de factures
- sécurité par JWT
- documentation API

Il est prêt à être consommé par un frontend ou testé via Postman/Swagger.
