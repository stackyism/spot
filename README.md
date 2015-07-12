# spot using angular-seed over AngularJS framework

This application is made over the skeleton of angular-seed.

- The interactive part of the UI is based on the ng-repeat directive of angular-js. 

- Folder "js" has the controller.js which controls the controller binded html element 
which is used to parse data from json files and export it to the main page.

- It also includes app.js file where all the components like use of controllers, directives, routers are declared.

- Folder "data" consists of the table.json file which includes the name and id of table and also the information about the employee sitting on the seats on that table.

- Folder "CSS" consists of app.css which gives style to the whole page except the table element in the interacitve part.

- It also consists of table.css which gives the table and the seats its shape. It is the basically the repetitive custom element used by angular.

- Folder "images" consists of the images of the employees for the display of content in popover with hover as trigger.

- Folder "bower_components" contains the third-party libraries to be used and managed to be used as stand-alone when needed.

- Folder "partial" contains the components "pop.html" used to show a pop-up with the seated employee details and "table.html" which consists the table element used in main page "index.html".

- Drag and drop is a bit glitchy right now. 

- The menu for highlighting team members is not currently linked with the main rendering, but it can be filtered by entering the name of team or job title in the search box. For an example, write "Mobile Dev" or "HR" in the search box and it will highlight the members.

- Popup generated over the employee after searching the name is needed once to be hovered to be removed. It is a small glitch which can be removed in future versions.


Usage: 
1. Please download the folder.
2. Open terminal.
3. Go to the Folder "app".
4. Run "npm start"

"npm start" will automatically install the dependency if needed as specificed in "package.json" and it also runs "bower install" which in turn uses dependencies missing. It also initiates a local server on port 8000 (as used) using Node.

Note: Please make sure to have Node Installed. Please have interenet access for jquery library is linked online.


For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
