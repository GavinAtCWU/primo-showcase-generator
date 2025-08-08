# Primo Showcase Carousel Generator


## Overview

On February 12 2024, [Ex Libris announced a Showcase widget](https://exlibrisgroup.com/announcement/announcement-new-showcase-carousel-on-ex-libris-primo/) 
for displaying books from your Primo instance in a carousel that you can display on a web page. While many people will be savy enough to follow 
[Ex Libris' instructions](https://developers.exlibrisgroup.com/blog/primo-showcase-how-to-embed/), some may find that a bit too technical to implement. 
The purpose of the **showcase-generator.js** script is to not only make this easier for non-technical people to implement, but to make it a bit quicker 
and more convenient for *everyone*. Using it to generate HTML code for the widgets is simple:

1. Search for books in your Primo instance and copy the resulting URL from your web browser.
2. Enter the URL and a title (for the widget) into the generator form.
3. Click a button to generate the HTML code for the widget. It will also display the widget.


## Files

* **discovery-showcase.bundled.js** : 
* **showcase-generator.js** :
* **index.html** : 
* **style.css** : 


## Installing

1. Follow the instructions for 
[Adding Domains for Discovery Showcase](https://knowledge.exlibrisgroup.com/Primo/Product_Documentation/020Primo_VE/Primo_VE_(English)/120Other_Configurations/Adding_Domains_for_Discovery_Showcase) 
to add domains that will have permission to embed Discovery Showcase widgets on. For example, if you want to have Discovery Showcase widgets in your 
LibGuides and your libguides are at **https://libguides.yourschool.edu**, you will need to add that domain.

2. Download this project's files to the computer you want to use the generator on. It doesn't matter if this computer is a desktop, laptop or server as 
long as it's domain is setup in step 1 above.


## Using

1. Search for items in your Primo instance that you want in your Showcase widget. You can use simple or advanced search and you can apply any facets. 
TIP: Applying facets that will produce search results with nice, graphic thumbnails (like book covers) will result in a more visually appealing 
Showcase widget. 
