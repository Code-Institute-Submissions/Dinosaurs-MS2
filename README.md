
![responsiveimage](Documentation/images/ResponsiveImage.png)

Dinosaur Discoveries - Website
---
## Table of Contents

- [**About**](#About)
- [**UX**](#UX)
  - [Goals](#Goals)
  - [User Stories](#User-Stories)
  - [Styling](#Styling)
  - [Wireframes](#Wireframes)
- [**Features**](#Features)
  - [Existing Features](#Existing-Features)
  - [Features Left To Implement](#Features-Left-To-Implement)
- [**Technologies Used**](#Technologies-Used)
  - [Version Control](#Version-Control)
- [**Testing**](#Testing)
  - [Testing User Stories](#Testing-User-Stories)
  - [Responsive Testing](#Responsive-Testing)
  - [Additional Testing](#Additional-Testing)
  - [Code Validation](#Code-Validation)
- [**Deployment**](#Deployment)
  - [Live Website Link](#Live-App-Link)
  - [Repository Link](#Repository-Link)
  - [Running Code Locally](#Running-Code-Locally)
- [**Credits**](#Credits)
  - [Content](#Content)
  - [Media](#Media)
  - [Acknowledgements](#Acknowledgements)
  
---

## About

The website was created with the younger generation in mind who have a interest in dinosaurs. The aim of the site was to be fun and factual so a game could be played but also information could be found out easily about different dinosaurs.

The mission was for the site to be a one stop information centre for everything dinosaurs.

___

## UX

#### Goals

The goals of the website were:-
1. Display and work on all devices from large screen monitors, Laptops to tablets and phones.
2. Provide an interactive scoring game for dinosaurs that would challenge the users memory.
3. Provide information on dinosaurs based on the pictures in the memory game.
4. Provide a map for information of everywhere to visit locations in the UK that have dinosaurs attractions.
5. Provide a sign up page for a user to receive a monthly newsletter from dinosair discoveries.
6. The website needed to attract the user by using clear images, instructions and sounds.

---

#### User Stories

From the Designers Perspective:-
- The site needs to easy to use and navigate with it being aimed at the youunger generation.
- Thes sites colour screen and background needs to be dinosaur related but easy on the eye.
- The pictures on the site need to be clear so the user can identify the dinosaur type easily.
- The game needs to be easy to understand and play but also be a challenge based on the users memory.
- The selector on the dinosaur information page needs to be easy to use and understand.
- The map needs to be clear and concise and fill the area making it easy for the user to use.
- The sign up form needs to be easy to enter information to attract more people to dinosaur discoveries.
- Dinosaur Discoveries needs to be the goto website for everything dinosaurs.

From the users perspective:-
- I want to find the game a challenge but not too hard.
- I want to learn about different dinosaurs that existed.
- I want to see what the dinosaurs looked like.
- I want to see attractions in the UK where I can find even more about dinosaurs.
- I want to sign up to receive more information from the website.
- I want to the website to make me want to visit and play the game again.

---

### Styling

The website needed to catch the users eye straight away and be dinosaur related, after doing various research on dinosaurs, most were located either on grass land, in water or jungles. I went for a jungle background to create a darker looking theme for the website with clear white writing.

The below colour scheme was used for the menus and text.

![ColourScheme](Documentation/images/ColourScheme.png)

The font chosed was prompt because it was clear and concise. The backup font if google fonts didnt load is Sans-Serif.

The background image used for the site was a jungle background to keep with the dinosaur theme.

---

### Wireframes

Play Game - index.html - Browser - [MainBrowserHome](Documentation/Wireframes/mainpagegame-index.html.pdf)
Play Game - index.html - Tablet - [TabletHome](Documentation/Wireframes/tablet-mainpagegame-index.html.pdf)
Play Game - index.html - Mobile - [MobileHome](Documentation/Wireframes/mobile-mainpagegame-index.html.pdf)

Dino Info - dinoinfo.html - Browser - [MainBrowserDinoInfo](Documentation/Wireframes/dinoinfo.html.pdf)
Dino Info - dinoinfo.html - Tablet - [TabletDinoInfo](Documentation/Wireframes/dinoinfo.html-tablet.pdf)
Dino Info - dinoinfo.html - Mobile - [MobileDinoInfo](Documentation/Wireframes/dinoinfo.html-mobile.pdf)

Places - places.html - Browser - [MainBrowserPlaces](Documentation/Wireframes/places.html.pdf)
Places - places.html - Tablet - [TabletPlaces](Documentation/Wireframes/Tabletplaces.html.pdf)
Places - places.html - Mobile - [MobilePlaces](Documentation/Wireframes/mobile-places.html.pdf)

Sign Up - signup.html - Browser - [MainBrowserSignUp](Documentation/Wireframes/signup.html.pdf)
Sign Up - signup.html - Tablet - [TabletSignUp](Documentation/Wireframes/signup.html.pdf)
Sign Up - signup.html - Mobile - [MobileSignUp](Documentation/Wireframes/signup.html.pdf)

**Design Changes to Wireframes**
1. Background change on all pages, new cleaner background chosen for live site.
2. Star Rating added to index.html 
3. Sign Page Div Background made a RGB Clour green for better effect.

---

## Features

### Existing Features

- The navigation menu is pinned to the top, page links are grey and when hovered or the chosen page is live, these are coloured white.
- The game is a 4x4 grid which stays the same grid on all devices from large screen devices to tablets and phones.
- When a card is clicked it spins round to show a dinosaur, the user must remember where the dinosaurs are to match the pair, there is 8 Dinosaurs to match in total.
- The number of moves and matches are counted as the user turns and matches the cards.
- The star rating also updates depending on the number of moves the user takes to complete the game. 14 or less is 3 stars, 15 > 22 is two stars and more than 22 is one star.
- Sounds are played on the turn of a card and a dinosaur roar sound is made when two cards are matched.
- When all cards are matched music is played and the congratulations popup is shown to show the user how many moves and the final star rating.
- The restart button is on the page in case the user has taken more moves than they would like and they want to start again.
- The footer is pinned to the bottom of all pages. 
- The dino info page uses a dropdown selector so the user can select the dinosaur.
- The picture changes and 5 facts are shown for each dinosaur.
- All pictures for the dinosaurs match the pictures that are in the game.
- The places to visit page shows a google map with all places that are of interest to dinosaurs in the uk.
- When the user clicks on the marker it shows the name of the place.
- The sign up page is simple contact form that allows the user to sign up for the monthly newsletter by Dinosaur Discoveries.
- The signup page is linked the Email.JS to notify the website owner of interest on the website.
- When the user clicks sign up, music is played and the button changes colour to notify the user signup is completed.
- If signup is not successful then a error message will be shown.

### Features Left To Implement

- A menu to be added for Easy, Medium and Hard, this would allow to extend the grid to more cards and more dinosaurs depending on the level selected.
- Individual sounds added for each dinosaur on match. 
- Sounds added to the dino info page for each dinosaur to make the page even more interactive.
- More information and website links added to the markers on the map page to allow the user to go straight to the website for each attraction.

---

## Technologies Used

- Boostrap 4
  - Bootstrap 4 was used for the dino info page to create rows and margins.

- HTML  
  - HTML was used for the main structure of the website.

- JavaScript
  - Javascript was used for all pages to make them more interactive to the user.

- CSS
  - CSS was used to style and change sizes and positions of different items where Bootstrap couldn't be used.

- Google Chrome
  - Google Chrome Inspect and Developer tools was used for examining the website on different devices.

- Google Fonts
  - Google fonts was used for the font of the website.

- Font Awesome
  - Font Awesome was used for the icons for social media - Instagram, Twitter and Linked In.

- VS Code 
  - VS Code was used as the development tool to create all pages. Different add-ons were used in VS Code to aid my developement. These add-ons included were:-
    - Auto Close and Rename Tag - to end tags automatically.
    - Beauty - To help Beautify my coding.
    - Color Highlight - Shows the colours in your coding.
    - CSS Peek - Allows you to show the CSS Next to your HTML Code, rather than going between the two files.
    - Live Server - Allows you to see the live webpage as you code
    - Markdown Preview Enhancer - Allows you to see your markdown file as you type.
    - Prettier - Allows you to Beautify your CSS.

- Pencil
  - This allowed me to create my wireframes for the design of the website.

### Version Control

- VS Code
  - VS Code linked to the repositry in Github was used to do regular Commits from my changes and additions to the website.

- Github
  - Github was used to store the repositry online. All Adds/Commits go to this file online. 

---

## Testing

### Testing User Stories

| Test  |  Result | Extra Coding Required  |
|---|---|---|

|The site needs to easy to use and navigate with it being aimed at the younger generation|Testing navigating through pages, making the game easy to understand and play | Extra coding added to show number of matches along with moves|
|Thes sites colour screen and background needs to be dinosaur related but easy on the eye| Clear background added to the site and green colour sheme to match| Picture changed mid project to a more crisp background jungle image|
|The pictures on the site need to be clear so the user can identify the dinosaur type easily| Images made clear as they can in the game to fit the screen, bigger pictures added to the dinfo info page to show more detail, Tested the pictures on various devices| N/A|
|The game needs to be easy to understand and play but also be a challenge based on the users memory|Tested how the instructions showed on all devices and easy to see the cards on all devices, tested by pushing out toe github and testing on my iphone, ipad and macbook and also tested using inspect on google chrome on different devices | N/A|
|The selector on the dinosaur information page needs to be easy to use and understand| Tested the dropdown menu on all devices to make sure it showed ok| Added extra margins so it was showed at the top of page over the picture and facts.|
|The map needs to be clear and concise and fill the area making it easy for the user to use| Tested the map to make sure it showed clear on all devices and was easy to read the markers|N/A |
|The sign up form needs to be easy to enter information to attract more people to dinosaur discoveries| Tested the form entry on all devices and e-mails being received to the test account from E-mail JS| added less margin on mobile and tablet devices to the sign up form filled the device screen more|
|Dinosaur Discoveries needs to be the goto website for everything dinosaurs| Thorough tested the site myself and added the site on the peer-code-review on slack so other users could test| N/A|

### Responsive Testing

To check how the website runned on different devices I usedD Am-I-Responsive and Inspect in Google Chrome Developer Tools. I also pushed out the site regualr to the live area and access the link on my IPhone, Ipad and Macbook. While doing these tests I did the following:-

|  Test | Result  |  Extra Coding Required |
|---|---|---|





### Additional Testing



 ### Code Validation



 ---

## Deployment

### Live Website Link

 
The website link was created by doing the following steps.

 1. Click on Settings which is located at the top of the page.
 2. Scroll down to the GitHub pages.
 3. Click the dropdown menu under source and select the Master Branch as the source
 4. Scroll through the page to find the site link.

### Repository Link



### Running Code Locally

To run this website and code on your local device, follow the below steps.

1. Go to repository Dinosaurs-MS2 on github.
2. Click Clone or Download.
3. Download the Zip File.
4. Unzip the downloaded zip file on the local device.
5. Run the index.html file via your web browser.

---

## Credits

### Content

All Code was written by myself, I used the following to help my coding.


### Media



### Acknowledgements







