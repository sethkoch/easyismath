"use strict";angular.module("easyismath").config(["$stateProvider","lockProvider","$urlRouterProvider","jwtOptionsProvider",function(e,t,o,r){e.state("home",{url:"/home",templateUrl:"../../templates/main/index.html",controller:"MainController as main",css:"../../content/css.css"}).state("Penguin Troubles",{url:"/penguintroubles",templateUrl:"../../templates/missions/grade1/1penguintroubles.html",controller:"PenguinTroublesController as penguin"}).state("profile",{url:"/profile",templateUrl:"../../templates/profile.html",controller:"ProfileController as profile"}),t.init({clientID:"PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o",domain:"easyismath.auth0.com"}),r.config({tokenGetter:function(){return localStorage.getItem("id_token")}}),o.otherwise("/home")}]);
"use strict";angular.module("easyismath",["auth0.lock","angular-jwt","ui.router"]).run(["$rootScope","authService","lock","authManager",function(e,t,r,a){e.authService=t,t.registerAuthenticationListener(),a.checkAuthOnRefresh(),r.interceptHash()}]);
"use strict";angular.module("easyismath").controller("MainController",["$rootScope","authService","userdata","$state",function(e,t,r,i){this.authService=t;var o=this;this.authService.getProfileDeferred().then(function(e){o.profile=e}).then(function(){r.getData(o.profile.user_id)}),this.level=function(t){i.go(e.userStuff.grade1)}}]);
"use strict";angular.module("easyismath").controller("ProfileController",["$window","$rootScope",function(e,o){this.auth0Profile=JSON.parse(e.localStorage.profile),this.name=this.auth0Profile.given_name,this.userProfile=JSON.parse(e.localStorage.userProfile),this.medals=this.userProfile.medals}]);
"use strict";angular.module("easyismath").controller("PenguinTroublesController",["$sce","$http","tools","$rootScope",function(t,e,s,r){var u=this;this.counter=0,this.answer="",this.penguinsSaved=0,this.currentButtonText,this.currentText,this.currentImage,this.quizData,e.post("/api/gradeonemissionone",{}).then(function(e){u.quizData=e.data,u.currentButtonText=t.trustAsHtml(u.quizData.buttonText[u.counter]),u.currentText=t.trustAsHtml(u.quizData.data[u.counter]),u.currentImage=t.trustAsHtml(u.quizData.images[u.counter])}),r.lastPictureNumber=0,r.answerCompare,this.clicked=function(){this.quizData.images.length;return this.counter++,this.counter<2?(this.currentButtonText=t.trustAsHtml(this.quizData.buttonText[this.counter]),this.currentText=t.trustAsHtml(this.quizData.data[this.counter]),void(this.currentImage=t.trustAsHtml(this.quizData.images[this.counter]))):(this.counter>1&&(this.currentButtonText=t.trustAsHtml("Answer"),this.currentText=t.trustAsHtml("Quick, how many penguins are there?"),this.currentImage=t.trustAsHtml(s.getImage(this.quizData.images,2)),Number(this.answer)===this.quizData.questionAnswers[r.answerCompare]&&(this.penguinsSaved++,this.answer=""),r.answerCompare=r.lastPictureNumber,this.answer=""),void(8===this.penguinsSaved&&(this.currentText=t.trustAsHtml("You did it, you saved the penguins!"),this.currentImage=t.trustAsHtml(this.quizData.images[0]),this.currentButtonText=t.trustAsHtml("Your Reward"))))}}]);
"use strict";angular.module("easyismath").factory("oneone",function(){return{}});
"use strict";angular.module("easyismath").factory("tools",["$state","$rootScope","$http","$sce",function(t,r,e,o){var a=function(t){return Math.floor(Math.random()*(t-2))},n=function(t){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.length,u=function(){for(var u=a(n);u===r.lastPictureNumber;)u=a(n);r.lastPictureNumber=u,e=t.slice(o)[u]};return u(),e};return{getRandomNumber:a,getImage:n}}]);
"use strict";angular.module("easyismath").factory("userdata",["$http","$rootScope","$window",function(t,a,e){var i=function(i){a.isAuthenticated&&t.post("api/data",{id:i}).then(function(t){a.userStuff=t.data,e.localStorage.setItem("userProfile",JSON.stringify(t.data))})};return{getData:i}}]);
"use strict";!function(){function e(e,t,o,n){function r(){return c.promise}function i(){t.show()}function a(){localStorage.removeItem("id_token"),localStorage.removeItem("profile"),n.userStuff="",o.unauthenticate()}function l(){t.on("authenticated",function(e){t.getProfile(e.idToken,function(e,t){return e?console.log(e):(localStorage.setItem("profile",JSON.stringify(t)),void c.resolve(t))}),localStorage.setItem("id_token",e.idToken),o.authenticate()})}var u=JSON.parse(localStorage.getItem("profile"))||null,c=e.defer();return u&&c.resolve(u),{login:i,logout:a,registerAuthenticationListener:l,getProfileDeferred:r}}angular.module("easyismath").service("authService",e),e.$inject=["$q","lock","authManager","$rootScope"]}();