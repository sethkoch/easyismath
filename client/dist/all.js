"use strict";angular.module("easyismath",["auth0.lock","angular-jwt","ui.router"]).run(["$rootScope","authService","lock","authManager","$window",function(e,t,r,a,u){e.authService=t,t.registerAuthenticationListener(),a.checkAuthOnRefresh(),r.interceptHash()}]);
"use strict";angular.module("easyismath").controller("MainController",["$rootScope","authService","userdata","$state","$window",function(e,t,r,o,a){e.isAuthenticated||a.localStorage.clear();var i=this;i.profile,t.getProfileDeferred().then(function(e){i.profile=e}).then(function(){r.getData(i.profile.user_id)}),i.level=function(t){o.go(e.userStuff.grade1)}}]);
"use strict";angular.module("easyismath").controller("NavbarController",["$rootScope","authService","userdata","$state","$window",function(t,a,e,r,o){var i=this;i.authService=a}]);
"use strict";angular.module("easyismath").controller("ProfileController",["$window","$rootScope",function(e,a){var l=this;l.auth0Profile=JSON.parse(e.localStorage.profile),l.name=l.auth0Profile.given_name||l.auth0Profile.nickname,l.userProfile=JSON.parse(e.localStorage.userProfile),l.medals=l.userProfile.medals,l.pete=l.medals.indexOf("Pete")!==-1||!1,l.jumbo=l.medals.indexOf("Jumbo")!==-1||!1,l.lisa=l.medals.indexOf("Lisa")!==-1||!1}]);
"use strict";angular.module("easyismath").controller("RewardController",["$window","$sce","$state",function(e,r,a){var t=this;t.rewardImage=r.trustAsHtml(e.localStorage.rewardImage),t.rewardName=e.localStorage.reward,setTimeout(function(){a.go("home")},3e3)}]);
"use strict";angular.module("easyismath").config(["$stateProvider","lockProvider","$urlRouterProvider","jwtOptionsProvider",function(e,t,l,o){l.otherwise("/home"),e.state("home",{url:"/home",templateUrl:"../../templates/main/index.html",controller:"MainController as main",css:"../../content/css.css"}).state("Penguin Troubles",{url:"/penguintroubles",templateUrl:"../../templates/missions/grade1/1penguintroubles.html",controller:"PenguinTroublesController as penguin"}).state("Level 2 : Hot, Hot Sun",{url:"/hothotsun",templateUrl:"../../templates/missions/grade1/2hothotsun.html",controller:"HotHotSunController as sun"}).state("Level 3 : New Town Blues",{url:"/newtownblues",templateUrl:"../../templates/missions/grade1/3newtownblues.html",controller:"NewTownBluesController as newtown"}).state("Level 4 : Lisa and Jumbo Play",{url:"/lisaandjumboplay",templateUrl:"../../templates/missions/grade1/4lisaandjumboplay.html",controller:"LisaAndJumboPlayController as lisa"}).state("profile",{url:"/profile",templateUrl:"../../templates/profile.html",controller:"ProfileController as profile"}).state("reward",{url:"/reward",templateUrl:"../../templates/reward.html",controller:"RewardController as reward"}),t.init({clientID:"PPAP5SR3NyoW8oXgSg9fI3DZ38lCcA3o",domain:"easyismath.auth0.com"}),o.config({tokenGetter:function(){return localStorage.getItem("id_token")}})}]);
"use strict";!function(){angular.module("easyismath").controller("PenguinTroublesController",["$sce","$http","tools","$rootScope","oneone","$window","$state",function(t,e,r,n,u,a,o){function s(){return i().then(function(){c.currentButtonText=t.trustAsHtml(c.quizData.buttonText[c.counter]),c.currentText=t.trustAsHtml(c.quizData.data[c.counter]),c.currentImage=t.trustAsHtml(c.quizData.images[c.counter])})}function i(){return r.getData("/api/gradeonemissionone").then(function(t){return c.quizData=t,c.quizData})}var c=this;c.counter=0,c.answer="",c.penguinsSaved=0,c.currentButtonText,c.currentText,c.currentImage,c.quizData,n.isAuthenticated||o.go("home"),JSON.parse(a.localStorage.userProfile).medals.indexOf("Pete")!==-1&&o.go("home"),s(),n.lastPictureNumber=0,n.answerCompare,c.clicked=function(){c.quizData.images.length;return c.counter++,c.counter<2?(c.currentButtonText=t.trustAsHtml(c.quizData.buttonText[c.counter]),c.currentText=t.trustAsHtml(c.quizData.data[c.counter]),void(c.currentImage=t.trustAsHtml(c.quizData.images[c.counter]))):(c.counter>1&&(c.currentButtonText=t.trustAsHtml("Answer"),c.currentText=t.trustAsHtml("Quick, count the penguins! <br> We need to know how many boats to get.<br>  Get 8 points to win!"),c.currentImage=t.trustAsHtml(r.getImage(c.quizData.images,2)),Number(c.answer)===c.quizData.questionAnswers[n.answerCompare]&&(c.penguinsSaved++,c.answer=""),n.answerCompare=n.lastPictureNumber,c.answer=""),void(8===c.penguinsSaved&&(c.currentText=t.trustAsHtml("You did it, you saved the penguins!"),c.currentImage=t.trustAsHtml(c.quizData.images[0]),u.rewardMedal(JSON.parse(a.localStorage.profile).user_id,"Pete","Level 2 : Hot, Hot Sun","400"))))}}])}();
"use strict";!function(){angular.module("easyismath").factory("oneone",["$http","$state","$rootScope","$sce","$window",function(e,t,r,a,o){function n(r,a,n,i){o.localStorage.reward="Pete",o.localStorage.rewardImage="<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/1-1rewardpetebear.png' class='img-responsive' style='max-height:460px' />",e.post("/api/rewardmedal",{userid:r,medal:a,level:n,points:i}).then(function(e){setTimeout(function(){t.go("reward")},2500)})}return{rewardMedal:n}}])}();
"use strict";!function(){angular.module("easyismath").controller("HotHotSunController",["$rootScope","onetwo","$sce","$scope","$window","$state","tools",function(t,e,o,a,r,n,s){function i(){return c().then(function(){u.image=o.trustAsHtml(u.hardData.images[0]),u.text=o.trustAsHtml(u.hardData.text[0]),u.button=o.trustAsHtml(u.hardData.button[0])})}function c(){return s.getData("/api/gradeonemissiontwo").then(function(t){return u.hardData=t,u.hardData})}t.isAuthenticated||n.go("home"),JSON.parse(r.localStorage.userProfile).medals.indexOf("Pete")===-1&&n.go("home"),JSON.parse(r.localStorage.userProfile).medals.indexOf("Jumbo")!==-1&&n.go("home");var u=this;u.hardData,u.image,u.text,u.button,u.clicked1=e.firstClick,u.clicked2=e.nextClick,u.counter=1,u.problems=!1,u.answer,u.correctAnswer,u.score=0,i()}])}();
"use strict";!function(){angular.module("easyismath").factory("onetwo",["$http","$state","$rootScope","$sce","$window","$timeout","tools",function(t,s,r,e,i,a,o){function n(){if(this.counter>3)return o.setReward("Jumbo","<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-2/1-2jumbo.png' class='img-responsive' style='max-height:460px' />"),void o.saveReward("Jumbo","Level 3 : New Town Blues",800);if(this.counter>2){this.problems=!0,this.button=e.trustAsHtml(this.hardData.button[2]);var t=o.randomTwoNumAdd(5);return this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,void this.counter++}return this.counter>1?(this.text=e.trustAsHtml(this.hardData.text[this.counter]),void this.counter++):(this.image=e.trustAsHtml(this.hardData.images[this.counter]),this.text=e.trustAsHtml(this.hardData.text[this.counter]),this.button=e.trustAsHtml(this.hardData.button[this.counter]),c=this,void this.counter++)}function h(){if(20===this.score)return void u();this.correctAnswer===Number(this.answer)&&(this.score++,c.image=e.trustAsHtml(c.hardData.images[4]),a(m,500)),this.correctAnswer!==Number(this.answer)&&(this.image=e.trustAsHtml(this.hardData.images[5]),a(m,500));var t=o.randomTwoNumAdd(5);this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,this.answer=""}function u(){c.problems=!1,c.image=e.trustAsHtml(c.hardData.images[2]),c.text=e.trustAsHtml(c.hardData.text[3]),c.button=e.trustAsHtml(c.hardData.button[3])}function m(){c.image=e.trustAsHtml(c.hardData.images[1])}return{firstClick:n,nextClick:h};var c}])}();
"use strict";!function(){angular.module("easyismath").controller("NewTownBluesController",["$rootScope","onethree","$sce","$scope","$window","$state","tools",function(t,e,a,o,r,n,s){function i(){return c().then(function(){l.image=a.trustAsHtml(l.hardData.images[0]),l.text=a.trustAsHtml(l.hardData.text[0]),l.button=a.trustAsHtml(l.hardData.button[0])})}function c(){return s.getData("/api/gradeonemissionthree").then(function(t){return l.hardData=t,l.hardData})}t.isAuthenticated||n.go("home"),JSON.parse(r.localStorage.userProfile).medals.indexOf("Jumbo")===-1&&n.go("home"),JSON.parse(r.localStorage.userProfile).medals.indexOf("Lisa")!==-1&&n.go("home");var l=this;l.hardData,l.image,l.text,l.button,l.clicked1=e.firstClick,l.clicked2=e.nextClick,l.counter=1,l.problems=!1,l.answer,l.correctAnswer,l.score=0,i()}])}();
"use strict";!function(){angular.module("easyismath").factory("onethree",["$http","$state","$rootScope","$sce","$window","$timeout","tools",function(t,s,r,e,i,a,n){function o(){if(this.counter>3)return n.setReward("Lisa","<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3lisa.png' class='img-responsive' style='max-height:460px' />"),void n.saveReward("Lisa","Level 4 : Lisa and Jumbo Play",1200);if(this.counter>2){this.problems=!0,this.button=e.trustAsHtml(this.hardData.button[2]);var t=n.randomTwoNumAdd(5);return this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,void this.counter++}return this.counter>1?(this.text=e.trustAsHtml(this.hardData.text[this.counter]),void this.counter++):(this.image=e.trustAsHtml(this.hardData.images[this.counter]),this.text=e.trustAsHtml(this.hardData.text[this.counter]),this.button=e.trustAsHtml(this.hardData.button[this.counter]),c=this,void this.counter++)}function h(){if(20===this.score)return void u();this.correctAnswer===Number(this.answer)&&(this.score++,c.image=e.trustAsHtml(c.hardData.images[4]),a(m,500)),this.correctAnswer!==Number(this.answer)&&(this.image=e.trustAsHtml(this.hardData.images[5]),a(m,500));var t=n.randomTwoNumAdd(5);this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,this.answer=""}function u(){c.problems=!1,c.image=e.trustAsHtml(c.hardData.images[2]),c.text=e.trustAsHtml(c.hardData.text[3]),c.button=e.trustAsHtml(c.hardData.button[3])}function m(){c.image=e.trustAsHtml(c.hardData.images[1])}return{firstClick:o,nextClick:h};var c}])}();
"use strict";!function(){angular.module("easyismath").controller("LisaAndJumboPlayController",["$rootScope","onethree","$sce","$scope","$window","$state","tools",function(t,e,a,r,o,n,s){function i(){return c().then(function(){l.image=a.trustAsHtml(l.hardData.images[0]),l.text=a.trustAsHtml(l.hardData.text[0]),l.button=a.trustAsHtml(l.hardData.button[0])})}function c(){return s.getData("/api/gradeonemissionfour").then(function(t){return l.hardData=t,l.hardData})}t.isAuthenticated||n.go("home"),JSON.parse(o.localStorage.userProfile).medals.indexOf("Lisa")===-1&&n.go("home"),JSON.parse(o.localStorage.userProfile).medals.indexOf("Sarah")!==-1&&n.go("home");var l=this;l.hardData,l.image,l.text,l.button,l.clicked1=e.firstClick,l.clicked2=e.nextClick,l.counter=1,l.problems=!1,l.answer,l.correctAnswer,l.score=0,i()}])}();
"use strict";!function(){angular.module("easyismath").factory("onethree",["$http","$state","$rootScope","$sce","$window","$timeout","tools",function(t,s,r,e,i,a,n){function o(){if(this.counter>3)return n.setReward("Lisa","<img src='https://d37rhhh8kt1fi0.cloudfront.net/img/grade1/1-3/1-3lisa.png' class='img-responsive' style='max-height:460px' />"),void n.saveReward("Lisa","Level 4 : Lisa and Jumbo Play",1200);if(this.counter>2){this.problems=!0,this.button=e.trustAsHtml(this.hardData.button[2]);var t=n.randomTwoNumAdd(5);return this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,void this.counter++}return this.counter>1?(this.text=e.trustAsHtml(this.hardData.text[this.counter]),void this.counter++):(this.image=e.trustAsHtml(this.hardData.images[this.counter]),this.text=e.trustAsHtml(this.hardData.text[this.counter]),this.button=e.trustAsHtml(this.hardData.button[this.counter]),c=this,void this.counter++)}function h(){if(20===this.score)return void u();this.correctAnswer===Number(this.answer)&&(this.score++,c.image=e.trustAsHtml(c.hardData.images[4]),a(m,500)),this.correctAnswer!==Number(this.answer)&&(this.image=e.trustAsHtml(this.hardData.images[5]),a(m,500));var t=n.randomTwoNumAdd(5);this.text=e.trustAsHtml(t.none+" + "+t.ntwo+" = "),this.correctAnswer=t.answer,this.answer=""}function u(){c.problems=!1,c.image=e.trustAsHtml(c.hardData.images[2]),c.text=e.trustAsHtml(c.hardData.text[3]),c.button=e.trustAsHtml(c.hardData.button[3])}function m(){c.image=e.trustAsHtml(c.hardData.images[1])}return{firstClick:o,nextClick:h};var c}])}();
"use strict";angular.module("easyismath").factory("tools",["$state","$rootScope","$http","$sce","$window",function(t,r,e,o,a){var n=function(t){return Math.floor(Math.random()*t)},u=function(t){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=t.length-o,u=function(){for(var u=n(a);u===r.lastPictureNumber;)u=n(a);r.lastPictureNumber=u,e=t.slice(o)[u]};return u(),e},c=function(t){var r=Math.floor(Math.random()*t),e=Math.floor(Math.random()*t),o=r+e;return{none:r,ntwo:e,answer:o}},l=function(t){function r(t){return t.data}function o(t){console.log(t)}return e.post(t,{}).then(r).catch(o)},i=function(t,r){a.localStorage.reward=t,a.localStorage.rewardImage=r},d=function(r,o,n){e.post("/api/rewardmedal",{userid:JSON.parse(a.localStorage.profile).user_id,medal:r,level:o,points:n}).then(function(r){t.go("reward")})};return{getRandomNumber:n,getImage:u,randomTwoNumAdd:c,getData:l,setReward:i,saveReward:d}}]);
"use strict";!function(){function e(e,t,o,r){function n(){return c.promise}function i(){t.show()}function a(){localStorage.removeItem("id_token"),localStorage.removeItem("profile"),localStorage.removeItem("userProfile"),r.userStuff="",o.unauthenticate()}function l(){t.on("authenticated",function(e){t.getProfile(e.idToken,function(e,t){return e?console.log(e):(localStorage.setItem("profile",JSON.stringify(t)),void c.resolve(t))}),localStorage.setItem("id_token",e.idToken),o.authenticate()})}var u=JSON.parse(localStorage.getItem("profile"))||null,c=e.defer();return u&&c.resolve(u),{login:i,logout:a,registerAuthenticationListener:l,getProfileDeferred:n}}angular.module("easyismath").service("authService",e),e.$inject=["$q","lock","authManager","$rootScope"]}();
"use strict";angular.module("easyismath").factory("userdata",["$http","$rootScope","$window",function(t,a,e){var i=function(i){t.post("api/data",{id:i}).then(function(t){a.userStuff=t.data,a.isAuthenticated&&e.localStorage.setItem("userProfile",JSON.stringify(t.data))})};return{getData:i}}]);