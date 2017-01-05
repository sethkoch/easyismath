"use strict";angular.module("easyismath",["auth0.lock","angular-jwt","ui.router"]).run(["$rootScope","authService","lock","authManager",function(e,t,r,a){e.authService=t,t.registerAuthenticationListener(),a.checkAuthOnRefresh(),r.interceptHash()}]);
"use strict";angular.module("easyismath").controller("MainController",["$rootScope","authService","userdata","$state",function(e,t,r,i){this.authService=t;var o=this;this.authService.getProfileDeferred().then(function(e){o.profile=e}).then(function(){r.getData(o.profile.user_id)}),this.level=function(t){i.go(e.userStuff.grade1)}}]);
"use strict";angular.module("easyismath").config(["$stateProvider","lockProvider","$urlRouterProvider","jwtOptionsProvider",function(e,t,o,n){e.state("home",{url:"/home",templateUrl:"../../templates/main/index.html",controller:"MainController as main",css:"../../content/css.css"}).state("Penguin Troubles",{url:"/penguintroubles",templateUrl:"../../templates/missions/grade1/1penguintroubles.html",controller:"PenguinTroublesController as penguin"}),t.init({clientID:"PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o",domain:"easyismath.auth0.com"}),n.config({tokenGetter:function(){return localStorage.getItem("id_token")}}),o.otherwise("/home")}]);
"use strict";!function(){function e(e,t,o,n){function r(){return c.promise}function i(){t.show()}function a(){localStorage.removeItem("id_token"),localStorage.removeItem("profile"),n.userStuff="",o.unauthenticate()}function l(){t.on("authenticated",function(e){t.getProfile(e.idToken,function(e,t){return e?console.log(e):(localStorage.setItem("profile",JSON.stringify(t)),void c.resolve(t))}),localStorage.setItem("id_token",e.idToken),o.authenticate()})}var u=JSON.parse(localStorage.getItem("profile"))||null,c=e.defer();return u&&c.resolve(u),{login:i,logout:a,registerAuthenticationListener:l,getProfileDeferred:r}}angular.module("easyismath").service("authService",e),e.$inject=["$q","lock","authManager","$rootScope"]}();
"use strict";angular.module("easyismath").controller("PenguinTroublesController",["$sce","$http","tools","$rootScope",function(t,e,s,r){var i=this;this.counter=0,this.answer="",this.penguinsSaved=0,this.currentButtonText,this.currentText,this.currentImage,this.quizData,e.post("/api/gradeonemissionone",{}).then(function(e){i.quizData=e.data,i.currentButtonText=t.trustAsHtml(i.quizData.buttonText[i.counter]),i.currentText=t.trustAsHtml(i.quizData.data[i.counter]),i.currentImage=t.trustAsHtml(i.quizData.images[i.counter])}),this.lastPictureNumber=0,this.pictureBefore=0,this.clicked=function(){var e=this.quizData.images.length,s=0;return this.counter++,this.counter<2?(this.currentButtonText=t.trustAsHtml(this.quizData.buttonText[this.counter]),this.currentText=t.trustAsHtml(this.quizData.data[this.counter]),void(this.currentImage=t.trustAsHtml(this.quizData.images[this.counter]))):(this.counter>1&&(this.currentButtonText=t.trustAsHtml("Answer"),this.currentText=t.trustAsHtml("Quick, how many penguins are there?"),this.getImage=function(){var t=function(){return Math.floor(Math.random()*(e-2))};for(s=t();s===this.lastPictureNumber;)s=t();return this.lastPictureNumber=s,this.quizData.images.slice(2)[s]},this.currentImage=t.trustAsHtml(this.getImage()),Number(this.answer)===this.quizData.questionAnswers[this.pictureBefore]&&(this.penguinsSaved++,this.answer="")),this.pictureBefore=this.lastPictureNumber,void(8===this.penguinsSaved&&(this.currentText=t.trustAsHtml("You did it, you saved the penguins!"),this.currentImage=t.trustAsHtml(this.quizData.images[0]),this.currentButtonText=t.trustAsHtml("Your Reward"))))}}]);
"use strict";angular.module("easyismath").factory("tools",["$state","$rootScope","$http",function(t,o,a){return{}}]);
"use strict";angular.module("easyismath").factory("userdata",["$http","$rootScope",function(t,a){var e=function(e){a.isAuthenticated&&t.post("api/data",{id:e}).then(function(t){a.userStuff=t.data})};return{getData:e}}]);