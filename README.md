# README

This README would normally document whatever steps are necessary to get the
application up and running.

This application was built with a Ruby version 2.6.1 (rails version 6.0.3.5) backend serving a javascript frontend.

On the backend, there are two models - a wine model that has_many pairings and a pairing model that belongs_to a wine. There are serializer files for both models that serve json formatted and associated data. The wine model does have a field for url links that are not yet being displayed - but are in place for future development.

On the frontend, there is a service.js file that houses the three fetch statements, a wine.js and a pairing.js file that provides the forms and displays for each class respectively.



Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
