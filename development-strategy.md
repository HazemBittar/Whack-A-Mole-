# Whack-A-mole: Development Strategy

- The project is aim is to build simple game site using JS, HTML and CSS.
The project will be developed in a small group by using branches and project board on GitHub.


---

## 0. Repo

- Write initial, basic README
 - Create project board 
 - Assign issues according to agreed dev strategy
 - Turn on GitHub Pages

 > assigned to Hazem
---

## 1. Setup
- generate reposirty called **Whack-A-Mole-**
* Create boilerplate index.html
- Create project board

> assigned to Hazem
---

## 2. User story Title-Button 
 	
__User can see the title of the game, current  score and the button to start the game__

DOM
-	Create an element for the title
-	Create an element for the score
-	Create a button element
-	Add classes for styled elements

LISTENER 
-	Attach on `startGame` onclick event to the element button

STYLES 
-	Create styles for the title and button

> assigned to Gelila
---


## 3.	User story  create Hole & Mole  display 
__user can see where the  representative holes are__

ASSETS 
-	Add an  main game images  to `/images` 

DOM
-	Create a div element per hole with child elements to display the holes 
-	Create a container for all of the div elements
-	Add classes for styled elements

STYLES 
-	Require and apply the images
-	Create style for the holes and moles

> assigned to Gelila
---



## 4.  User Story: See Beauty 				
__A user can use a well-styled page__

STYLES 
-	Create a style for the background

> assigned to Gelila
---


## 5. User Story: GamePlay Random time 

__The user can see the moles peeping out in random time limit__

### Logic:

* create a function that gives a random amount of time from Least to most  


> assigned to Fatih
---

## 6. User Story: GamePlay Random hole

__The user can see a moles peeping out from random holes__

### Logic:

* create a function that gives a random moles in random holes 

> assigned to Fatih
---

## 7. User Story: GamePlay Peep

__A user can see the moles popping up__


### Handlers:

* Create a `peep` handler to make the moles pop-up from a radom hole in a random amount of time.

> assigned to Fatih
---
## 8. User Story: Show_score

__A user can see how many moles they have hit so far__


### Listeners:

- Attach a `click` event to the window object.

> assigned to Iyrna
---
## 9. User Story: score

__when a user click on the mole they can bonk them on the head__


### handlers:

- Create a `bonk` handler that Ensures the click is not false

ASSETS 
-	Create  shared  `variables.js`

DOM
- Require and apply the script file.

> assigned to Iyrna
---
## 9. User Story: score

__when a user click on the start button the game will start__


### handlers:

- Create a `startGame` handler that will activate the onclick event in the element button 

> assigned to Hazem
---

## 10. Documentation
_the user can see a writen development stratagy file and a README file.

> assigned to Gelila and Fatih perspectively


## Finishing Touches


- W3C code validation made
- All bugs and errors were fixed

> assigned to Iyrna

REF.
-  [makeareadme.com](https://www.makeareadme.com/)

-  [bulldogjob](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

-  [meakaakka](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)

- Validate code to check for any last mistakes

