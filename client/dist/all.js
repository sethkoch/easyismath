"use strict";angular.module("easyismath",["auth0.lock","angular-jwt","ui.router"]).run(["$rootScope","authService","lock","authManager","$window",function(e,t,r,a,u){e.authService=t,t.registerAuthenticationListener(),a.checkAuthOnRefresh(),r.interceptHash()}]);
"use strict";angular.module("easyismath").config(["$stateProvider","lockProvider","$urlRouterProvider","jwtOptionsProvider",function(e,t,l,o){l.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"../../templates/main/index.html",controller:"MainController as main",css:"../../content/css.css"}).state("Penguin Troubles",{url:"/penguintroubles",templateUrl:"../../templates/missions/grade1/1penguintroubles.html",controller:"PenguinTroublesController as penguin"}).state("Level 2 : Hot, Hot Sun",{url:"/hothotsun",templateUrl:"../../templates/missions/grade1/2hothotsun.html",controller:"HotHotSunController as sun"}).state("Level 3 : New Town Blues",{url:"/newtownblues",templateUrl:"../../templates/missions/grade1/3newtownblues.html",controller:"NewTownBluesController as newtown"}).state("profile",{url:"/profile",templateUrl:"../../templates/profile.html",controller:"ProfileController as profile"}).state("reward",{url:"/reward",templateUrl:"../../templates/reward.html",controller:"RewardController as reward"}),t.init({clientID:"PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o",domain:"easyismath.auth0.com"}),o.config({tokenGetter:function(){return localStorage.getItem("id_token")}})}]);
"use strict";angular.module("easyismath").controller("MainController",["$rootScope","authService","userdata","$state","$window",function(e,t,r,o,a){e.isAuthenticated||a.localStorage.clear();var i=this;i.profile,t.getProfileDeferred().then(function(e){i.profile=e}).then(function(){r.getData(i.profile.user_id)}),i.level=function(t){o.go(e.userStuff.grade1)}}]);
"use strict";angular.module("easyismath").controller("NavbarController",["$rootScope","authService","userdata","$state","$window",function(t,a,e,r,o){var i=this;i.authService=a}]);
"use strict";angular.module("easyismath").controller("ProfileController",["$window","$rootScope",function(e,a){var l=this;l.auth0Profile=JSON.parse(e.localStorage.profile),l.name=l.auth0Profile.given_name||l.auth0Profile.nickname,l.userProfile=JSON.parse(e.localStorage.userProfile),l.medals=l.userProfile.medals,l.pete=l.medals.indexOf("Pete")!==-1||!1,l.jumbo=l.medals.indexOf("Jumbo")!==-1||!1,l.lisa=l.medals.indexOf("Lisa")!==-1||!1}]);
"use strict";angular.module("easyismath").controller("RewardController",["$window","$sce","$state",function(e,r,a){var t=this;t.rewardImage=r.trustAsHtml(e.localStorage.rewardImage),t.rewardName=e.localStorage.reward,setTimeout(function(){a.go("home")},3e3)}]);
"use strict";!function(){angular.module("easyismath").controller("PenguinTroublesController",["$sce","$http","tools","$rootScope","oneone","$window","$state",function(t,e,r,u,n,a,s){function o(){return i().then(function(){c.currentButtonText=t.trustAsHtml(c.quizData.buttonText[c.counter]),c.currentText=t.trustAsHtml(c.quizData.data[c.counter]),c.currentImage=t.trustAsHtml(c.quizData.images[c.counter])})}function i(){return n.getData().then(function(t){return c.quizData=t,c.quizData})}var c=this;c.counter=0,c.answer="",c.penguinsSaved=0,c.currentButtonText,c.currentText,c.currentImage,c.quizData,u.isAuthenticated||s.go("home"),o(),u.lastPictureNumber=0,u.answerCompare,c.clicked=function(){c.quizData.images.length;return c.counter++,c.counter<2?(c.currentButtonText=t.trustAsHtml(c.quizData.buttonText[c.counter]),c.currentText=t.trustAsHtml(c.quizData.data[c.counter]),void(c.currentImage=t.trustAsHtml(c.quizData.images[c.counter]))):(c.counter>1&&(c.currentButtonText=t.trustAsHtml("Answer"),c.currentText=t.trustAsHtml("Quick, how many penguins are there?  Get 8 points to win!"),c.currentImage=t.trustAsHtml(r.getImage(c.quizData.images,2)),Number(c.answer)===c.quizData.questionAnswers[u.answerCompare]&&(c.penguinsSaved++,c.answer=""),u.answerCompare=u.lastPictureNumber,c.answer=""),void(8===c.penguinsSaved&&(c.currentText=t.trustAsHtml("You did it, you saved the penguins!"),c.currentImage=t.trustAsHtml(c.quizData.images[0]),n.rewardMedal(JSON.parse(a.localStorage.profile).user_id,"Pete","Level 2 : Hot, Hot Sun","400"))))}}])}();
"use strict";!function(){angular.module("easyismath").factory("oneone",["$http","$state","$rootScope","$sce","$window",function(e,t,n,o,a){function r(){function t(e){return e.data}function n(e){console.log(e)}return e.post("/api/gradeonemissionone",{}).then(t).catch(n)}function i(n,o,r,i){a.localStorage.reward="Pete",a.localStorage.rewardImage="<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1rewardpetebear.png' class='img-responsive' style='max-height:460px' />",e.post("/api/rewardmedal",{userid:n,medal:o,level:r,points:i}).then(function(e){setTimeout(function(){t.go("reward")},2500)})}return{getData:r,rewardMedal:i}}])}();
"use strict";!function(){angular.module("easyismath").controller("HotHotSunController",["$rootScope","onetwo","$sce","$scope","$window","$state",function(t,e,a,r,o,n){function s(){return c().then(function(){i.image=a.trustAsHtml(i.hardData.images[0]),i.text=a.trustAsHtml(i.hardData.text[0]),i.button=a.trustAsHtml(i.hardData.button[0])})}function c(){return e.getData().then(function(t){return i.hardData=t,i.hardData})}t.isAuthenticated||n.go("home"),JSON.parse(o.localStorage.userProfile).medals.indexOf("Pete")===-1&&n.go("home");var i=this;i.hardData,i.image,i.text,i.button,i.clicked1=e.firstClick,i.clicked2=e.nextClick,i.counter=1,i.problems=!1,i.answer,i.correctAnswer,i.score=0,s()}])}();
"use strict";!function(){angular.module("easyismath").factory("onetwo",["$http","$state","$rootScope","$sce","$window","$timeout",function(t,r,s,e,a,i){function o(){function r(t){return t.data}function s(t){console.log(t)}return t.post("/api/gradeonemissiontwo",{}).then(r).catch(s)}function n(){if(this.counter>3)return void m();if(this.counter>2){this.problems=!0,this.button=e.trustAsHtml(this.hardData.button[2]);var t=h();return this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,void this.counter++}return this.counter>1?(this.text=e.trustAsHtml(this.hardData.text[this.counter]),void this.counter++):(this.image=e.trustAsHtml(this.hardData.images[this.counter]),this.text=e.trustAsHtml(this.hardData.text[this.counter]),this.button=e.trustAsHtml(this.hardData.button[this.counter]),d=this,void this.counter++)}function u(){if(20===this.score)return void c();this.correctAnswer===Number(this.answer)&&(this.score++,d.image=e.trustAsHtml(d.hardData.images[4]),i(l,500)),this.correctAnswer!==Number(this.answer)&&(this.image=e.trustAsHtml(this.hardData.images[5]),i(l,500));var t=h();this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,this.answer=""}function h(){var t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),s=t+r;return{none:t,ntwo:r,answer:s}}function c(){d.problems=!1,d.image=e.trustAsHtml(d.hardData.images[2]),d.text=e.trustAsHtml(d.hardData.text[3]),d.button=e.trustAsHtml(d.hardData.button[3])}function m(){a.localStorage.reward="Jumbo",a.localStorage.rewardImage="<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2jumbo.png' class='img-responsive' style='max-height:460px' />",t.post("/api/rewardmedal",{userid:JSON.parse(a.localStorage.profile).user_id,medal:"Jumbo",level:"Level 3 : New Town Blues",points:800}).then(function(t){r.go("reward")})}function l(){d.image=e.trustAsHtml(d.hardData.images[1])}return{getData:o,firstClick:n,nextClick:u};var d}])}();
"use strict";!function(){angular.module("easyismath").controller("NewTownBluesController",["$rootScope","onethree","$sce","$scope","$window","$state",function(t,e,r,a,o,n){function s(){return c().then(function(){u.image=r.trustAsHtml(u.hardData.images[0]),u.text=r.trustAsHtml(u.hardData.text[0]),u.button=r.trustAsHtml(u.hardData.button[0])})}function c(){return e.getData().then(function(t){return u.hardData=t,u.hardData})}t.isAuthenticated||n.go("home"),JSON.parse(o.localStorage.userProfile).medals.indexOf("Jumbo")===-1&&n.go("home");var u=this;u.hardData,u.image,u.text,u.button,u.clicked1=e.firstClick,u.clicked2=e.nextClick,u.counter=1,u.problems=!1,u.answer,u.correctAnswer,u.score=0,s()}])}();
"use strict";!function(){angular.module("easyismath").factory("onethree",["$http","$state","$rootScope","$sce","$window","$timeout","tools",function(t,s,r,e,a,i,o){function n(){function s(t){return t.data}function r(t){console.log(t)}return t.post("/api/gradeonemissionthree",{}).then(s).catch(r)}function h(){if(this.counter>3)return void m();if(this.counter>2){this.problems=!0,this.button=e.trustAsHtml(this.hardData.button[2]);var t=o.randomTwoNumAdd(16);return this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,void this.counter++}return this.counter>1?(this.text=e.trustAsHtml(this.hardData.text[this.counter]),void this.counter++):(this.image=e.trustAsHtml(this.hardData.images[this.counter]),this.text=e.trustAsHtml(this.hardData.text[this.counter]),this.button=e.trustAsHtml(this.hardData.button[this.counter]),d=this,void this.counter++)}function u(){if(20===this.score)return void c();this.correctAnswer===Number(this.answer)&&(this.score++,d.image=e.trustAsHtml(d.hardData.images[4]),i(l,500)),this.correctAnswer!==Number(this.answer)&&(this.image=e.trustAsHtml(this.hardData.images[5]),i(l,500));var t=o.randomTwoNumAdd(16);this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,this.answer=""}function c(){d.problems=!1,d.image=e.trustAsHtml(d.hardData.images[2]),d.text=e.trustAsHtml(d.hardData.text[3]),d.button=e.trustAsHtml(d.hardData.button[3])}function m(){a.localStorage.reward="Lisa",a.localStorage.rewardImage="<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3lisa.png' class='img-responsive' style='max-height:460px' />",t.post("/api/rewardmedal",{userid:JSON.parse(a.localStorage.profile).user_id,medal:"Lisa",level:"Level 4 : Lisa and Jumbo Play",points:1200}).then(function(t){s.go("reward")})}function l(){d.image=e.trustAsHtml(d.hardData.images[1])}return{getData:n,firstClick:h,nextClick:u};var d}])}();
"use strict";angular.module("easyismath").factory("tools",["$state","$rootScope","$http","$sce",function(t,r,o,n){var a=function(t){return Math.floor(Math.random()*(t-2))},e=function(t){var o,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=t.length,u=function(){for(var u=a(e);u===r.lastPictureNumber;)u=a(e);r.lastPictureNumber=u,o=t.slice(n)[u]};return u(),o},u=function(t){var r=Math.floor(Math.random()*t),o=Math.floor(Math.random()*t),n=r+o;return{none:r,ntwo:o,answer:n}};return{getRandomNumber:a,getImage:e,randomTwoNumAdd:u}}]);
"use strict";!function(){function e(e,t,o,r){function n(){return c.promise}function i(){t.show()}function a(){localStorage.removeItem("id_token"),localStorage.removeItem("profile"),localStorage.removeItem("userProfile"),r.userStuff="",o.unauthenticate()}function l(){t.on("authenticated",function(e){t.getProfile(e.idToken,function(e,t){return e?console.log(e):(localStorage.setItem("profile",JSON.stringify(t)),void c.resolve(t))}),localStorage.setItem("id_token",e.idToken),o.authenticate()})}var u=JSON.parse(localStorage.getItem("profile"))||null,c=e.defer();return u&&c.resolve(u),{login:i,logout:a,registerAuthenticationListener:l,getProfileDeferred:n}}angular.module("easyismath").service("authService",e),e.$inject=["$q","lock","authManager","$rootScope"]}();
"use strict";angular.module("easyismath").factory("userdata",["$http","$rootScope","$window",function(t,a,e){var i=function(i){t.post("api/data",{id:i}).then(function(t){a.userStuff=t.data,a.isAuthenticated&&e.localStorage.setItem("userProfile",JSON.stringify(t.data))})};return{getData:i}}]);