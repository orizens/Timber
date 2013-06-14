# Timber

Timber is a lite weight application framework for starting projects with Backbone.js &amp; Requirejs.
It's solves few challenages and take in to an assumption few repeated decisions.

## Goals
One of the goals in timber is to make the deveoper focus on the design of the application, structure and small pieces of reusable modules.

Read this [blog post about the front end architecture concepts of Timber](http://orizens.com/wp/topics/backbone-js-for-large-scale-applications-ui-architecture/).

### Timber Architecture in a Breeze

![architecture flow](http://www.websequencediagrams.com/cgi-bin/cdraw?lz=VGltYmVyIC0gRnJvbnQgRW5kIEFyY2hpdGVjdHVyZQoKCkFwcCBSb3V0ZXItPkFwcCBNb2RlbDogcgAOBSB1cGRhdGVzIG1vZGVsIHdpdGggZGVzaXJlZCB2aWV3ADkFAC0FADcGVmlldzoAPQYgdHJpZ2dlcnMgY2hhbmdlIGV2ZW50IHRvAC8KVmlldwAsDHZpZXcgd2FpdHMgZm9yICJ1c2VyIiBpbnRlcmFjdGlvbgAnDwCBJAdWaWV3AIEbDgBPDwCBWQYAIgdtYXkgdXNlAIFZCHRvAIFdBwCBXQY&s=napkin)

## Features
1. Based on open source projects: backbone, underscore, bootstrap, requirejs, jquery
2. Concise Single Page application architecture behind
3. Collection View Object
4. Base View object with reusable common used methods (render)
5. Application level events
6. Easily define module per route
7. easily define static views that persists with the application layout (i.e - you may decide that a top navigation bar stays on all application pages)
8. Keeps backbone's terminology to a minimum (in use: Model, View, Collection with CollectionView as an extension)
