# Mobile phylogeny app for museum visitors

This relates to phylotastic use-case 8.  

The mobile application will enrich a visit to a zoo, museum, garden or arboretum-- any place where signage supplies species names.  It may have applications in research and education. In brief, the user passes by various exhibits and "captures" a species for the user's collection.  This could be done using QR codes supplied by the museum or zoo.  However, it is also possible to take photos of signage and then do OCR on that to get species names.  The app returns a mashup of information on a single species or a set of species. 

Considering only a single species, the following workflow creates an instant guide for any museum, zoo, garden, etc: 

 photo of signage --> name resolution --> EoL species page

When a set of species has been collected, one could 
* retrieve a phylogenetic tree for the species and display it
* create an album with names, photos, and native ranges (etc) of the species and post it to social media
* display species ranges on a world map

## Target users

* General public: 181 million annual visitors to Zoos and Aquariums (www.aza.org) 
* Educational settings: There are various ways to create a challenge or game out of this, to accompany educational field trips to a zoo or museum.  The object of the game might be to capture a certain set of species or achieve some objective, such as getting a mammal from every mammalian order, or getting a maximally phylogenetically diverse set of species. Students could be challenged to place a newly captured species on the existing tree. 
* Research: 

## Requirements analysis
* app uses on-board camera
   * ideally, links directly to camera, not involving any intermediate steps
* app obtains species name from image in real time
   * accurately, possibly with resolution options in case of ambiguity
* app returns information on single species useful to user in real time
* app returns information on sets of species useful to user in seconds.
* app provides downstream methods to share or store captured information
* app doesn't burn up your data plan 
* 

## Notes on implementation and useful resources 
* If we can find a phone-based open source ocr library -- it would be great, then we do not need to send images across network -- just text, and resolution will work faster too
* this will work better on a tablet than a phone (larger format)
* jsPhyloSVG tree viewer works for tablet
