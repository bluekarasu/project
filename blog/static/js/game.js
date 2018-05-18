$(document).ready(function() {
// Create a function that creates the start button and initial screen
function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}
initialScreen();
//Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...
$("body").on("click", ".start-button", function(event){
  generateNOP();
	i=0;
});
//Players number
$("body").on("click", ".number1", function(event){
	players_number=1;
  generateQN();
});
$("body").on("click", ".number2", function(event){
	players_number=2;
  generateQN();
});
$("body").on("click", ".number3", function(event){
	players_number=3;
  generateQN();
});

//Question number
$("body").on("click", ".quest1", function(event){
	question_number=5;
  generateGenre();
});
$("body").on("click", ".quest2", function(event){
	question_number=10;
  generateGenre();
});
$("body").on("click", ".quest3", function(event){
	question_number=15;
  generateGenre();
});
//Category
$("body").on("click", ".genre1-button", function(event){
	category=9;
  getJsonData(9);
});
$("body").on("click", ".genre2-button", function(event){
	category=27;
  getJsonData(27);
});
$("body").on("click", ".genre3-button", function(event){
	category=11;
  getJsonData(11);
});
$("body").on("click", ".genre4-button", function(event){
	category=12;
  getJsonData(12);
});
$("body").on("click", ".genre5-button", function(event){
	category=15;
  getJsonData(15);
});
$("body").on("click", ".genre6-button", function(event){
	category=18;
  getJsonData(18);
});
$("body").on("click", ".genre7-button", function(event){
	category=19;
  getJsonData(19);
});
$("body").on("click", ".genre8-button", function(event){
	category=22;
  getJsonData(22);
});
$("body").on("click", ".genre9-button", function(event){
	category=25;
  getJsonData(25);
});
$("body").on("click", ".genre10-button", function(event){
	category=31;
  getJsonData(31);
});
$("body").on("click", ".genre11-button", function(event){
	category=27;
  getJsonData(27);
});

});


//generate question number
function generateQN(){
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block quest1' href='#' role='button'>5 Questions</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block quest2' href='#' role='button'>10 Questions</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block quest3' href='#' role='button'>15 Questions</a></p></n>";
	$(".mainArea").html(startScreen);
}
//generate Number of Players
function generateNOP(){
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block number1' href='#' role='button'>1 Player</a></p></n></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block number2' href='#' role='button'>2 Players</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block number3' href='#' role='button'>3 Players</a></p>";
	$(".mainArea").html(startScreen);
}
//generate GENRES
function generateGenre() {
	startScreen1 = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre1-button' href='#' role='button'>General Knowledge</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre2-button' href='#' role='button'>Animals</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre3-button' href='#' role='button'>Entertainment(Films)</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre4-button' href='#' role='button'>Entertainment(Music)</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre5-button' href='#' role='button'>Entertainment(Video Games)</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre6-button' href='#' role='button'>Science:Computers</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre7-button' href='#' role='button'>Science:Mathematics</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre8-button' href='#' role='button'>Geography</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre9-button' href='#' role='button'>Art</a></p></n><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block genre10-button' href='#' role='button'>Anime&Manga</a></p>";
	$(".mainArea").html(startScreen1);
}
//when there is not enough questions
function generateNE(){
	startScreen="<h2 class='text-center'>ERROR:NOT ENOUGH QUESTIONS</h2><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block' href='' role='button'>Back</a></p>";
	$(".mainArea").html(startScreen);
}

function getJsonData(category){
	var requestURL = 'https://opentdb.com/api.php?amount='+question_number+'&category='+category+'&type=boolean';
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
  	var superHeroes = request.response;
		var results=superHeroes['results'];
		var response_code=superHeroes['response_code'];
		if(response_code==1){
			generateNE();
		}else{
			i++;
			if(question_number==i){
				if(players_number==1){
					gameHTML = "<p class='text-center'>Your point:"+correct1+"</p></br><p class='correct text-center'>correct answers(Player1):"+cor1+"</p><p class='wrong text-center'>wrong answers(Player1):"+incorrect1+"</p></br></br><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block' href='' role='button'>Back</a></p>";
					$(".mainArea").html(gameHTML);
				}else if(players_number==2){
					if(correct1>correct2){
						winner="THE WINNER IS player 1";
					}else if(correct1<correct2){
						winner="THE WINNER IS player 2";
					}else{
						winner="No One Wins"
					}
					gameHTML = "<p class='text-center'>"+winner+"</br><p class='correct text-center'>correct answers(Player1):"+cor1+"</p><p class='wrong text-center'>wrong answers(Player1):"+incorrect1+"</p></br><p class='correct text-center'>correct answers(Player2):"+cor2+"</p><p class='wrong text-center'>wrong answers(Player2):"+incorrect2+"</br></br><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block' href='' role='button'>Back</a></p>";
					$(".mainArea").html(gameHTML);
				}else if(players_number==3){
					if(correct1>correct2){
						if(correct1>correct3){
							winner="THE WINNER IS Player 1";
						}else if(correct1<correct3){
							winner="THE WINNER IS Player 3";
						}else{
							winner="THE WINNER IS Player 1 and Player 3";
						}
					}else if(correct1<correct2){
						if(correct2>correct3){
							winner="THE WINNER IS Player 2";
						}else if(correct2<correct3){
							winner="THE WINNER IS Player 3";
						}else{
							winner="THE WINNER IS Player 2 and Player 3";
						}
					}else{
						if(correct1>correct3){
							winner="THE WINNER IS Player 1 and Player 2";
						}else if(correct1<correct3){
							winner="THE WINNER IS Player 3";
						}else{
							winner="THE WINNER IS Player 1 and Player 2 and Player 3";
						}
					}
					gameHTML = "<p class='text-center'>"+winner+"</br><p class='correct text-center'>correct answers(Player1):"+cor1+"</p><p class='wrong text-center'>wrong answers(Player1):"+incorrect1+"</p><p class='correct text-center'>correct answers(Player2):"+cor2+"</p><p class='wrong text-center'>wrong answers(Player2):"+incorrect2+"</br><p class='correct text-center'>correct answers(Player3):"+cor3+"</p><p class='wrong text-center'>wrong answers(Player3):"+incorrect3+"</p></br></br><p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block' href='' role='button'>Back</a></p>";
					$(".mainArea").html(gameHTML);
				}
			}else{
				Answer=results[i-1].correct_answer;
  			Question(results[i-1].question);
			}
		}
	}
}

function Question(jsonObj){
	var Question=document.createElement('h2');
	Question.textContent=jsonObj;
	if(players_number==1){
		gameHTML = "<p class='text-center'>" + Question.textContent + "</br></br></br><input type='button' id='button1' class='btn btn-success buttons' value='TRUE(Z)' onclick='button(this)'/><input type='button' id='button2' class='btn btn-danger' value='FALSE(X)' onclick='button(this)'/></br></br></br><div class='col-xs-12 col-sm-10 col-sm-offset-2 col-md-8 col-md-offset-2'><p>Player1:"+correct1+"</p></div>";
		$(".mainArea").html(gameHTML);
		return;
	}else if(players_number==2){
		gameHTML = "<p class='text-center'>" + Question.textContent + "</br></br></br><input type='button' id='button1' class='btn btn-success buttons' value='TRUE(Z)' onclick='button(this)'/><input type='button' id='button2' class='btn btn-danger' value='FALSE(X)' onclick='button(this)'/><input type='button' id='button3' class='btn btn-success' value='TRUE(?)' onclick='button(this)'/><input type='button' id='button4' class='btn btn-danger' value='FALSE(_)' onclick='button(this)'/></br></br></br><div class='col-xs-6 col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-1'><p>Player1:"+correct1+"</p></div><div class='col-xs-6 col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-1'><p>Player2:"+correct2+"</p></div>";
		$(".mainArea").html(gameHTML);
		return;
	}else if(players_number==3){
		gameHTML = "<p class='text-center'>" + Question.textContent + "</br></br></br><input type='button' id='button1' class='btn btn-success buttons' value='TRUE(Z)' onclick='button(this)'/><input type='button' id='button2' class='btn btn-danger' value='FALSE(X)' onclick='button(this)'/><input type='button' id='button3' class='btn btn-success buttons' value='TRUE(N)' onclick='button(this)'/><input type='button' id='button4' class='btn btn-danger' value='FALSE(M)' onclick='button(this)'/><input type='button' id='button5' class='btn btn-success' value='TRUE(?)' onclick='button(this)'/><input type='button' id='button6' class='btn btn-danger' value='FALSE(_)' onclick='button(this)'/></br></br></br><div class='col-xs-4 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1'><p>Player1:"+correct1+"</p></div><div class='col-xs-4 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1'><p>Player2:"+correct2+"</p></div><div class='col-xs-4 col-sm-3 col-sm-offset-1 col-md-3 col-md-offset-1'><p>Player3:"+correct3+"</p></div>";
		$(".mainArea").html(gameHTML);
		return;
	}
}

document.addEventListener('keypress', function(event) {
	if(players_number==1){
		buttonanswer="none";
		if(event.keyCode == 122) {
        id="button1";
				buttonanswer="True";
    }else if(event.keyCode == 120) {
        id="button2";
				buttonanswer="False";
    }else{
			alert("与えられたキーを押してください");
		}
		if(buttonanswer==Answer){
			correct1++;
			cor1++;
			getJsonData(category);
		}else if(buttonanswer=="none"){
		}else{
			correct1--;
			incorrect1++;
			getJsonData(category);
		}
//2 Player
	}else if(players_number==2){
		buttonanswer="none";
		if(event.keyCode == 47) {
        id="button3";
				buttonanswer="True";
				who=2;
    }
    else if(event.keyCode == 95) {
        id="button4";
				buttonanswer="False";
				who=2;
    }
		else if(event.keyCode == 122) {
        id="button1";
				buttonanswer="True";
				who=1;
    }
    else if(event.keyCode == 120) {
        id="button2";
				buttonanswer="False";
				who=1;
    }else{
			alert("与えられたキーを押してください");
		}
		if(buttonanswer==Answer){
			if(who==1){
				correct1++;
				cor1++;
			}else{
				correct2++;
				cor2++;
			}
			getJsonData(category);
		}else if(buttonanswer=="none"){
		}else{
			if(who==1){
				correct1--;
				incorrect1++;
			}else{
				correct2--;
				incorrect2++;
			}
			getJsonData(category);
		}
		//3PLAYER
	}else if(players_number==3){
		buttonanswer="none";
		if(event.keyCode == 47) {
        id="button5";
				buttonanswer="True";
				who=3;
    }else if(event.keyCode == 95) {
        id="button6";
				buttonanswer="False";
				who=3;
    }else if(event.keyCode == 122) {
        id="button1";
				buttonanswer="True";
				who=1;
    }else if(event.keyCode == 120) {
        id="button2";
				buttonanswer="False";
				who=1;
    }else if(event.keyCode == 110) {
        id="button3";
				buttonanswer="True";
				who=2;
    }else if(event.keyCode == 109) {
        id="button4";
				buttonanswer="False";
				who=2;
    }else{
			alert("与えられたキーを押してください");
		}
		if(buttonanswer==Answer){
			if(who==1){
				correct1++;
				cor1++;
			}else if(who==2){
				correct2++;
				cor2++;
			}else{
				correct3++;
				cor3++;
			}
			getJsonData(category);
		}else if(buttonanswer=="none"){
		}else{
			if(who==1){
				correct1--;
				incorrect1++;
			}else if(who==2){
				correct2--;
				incorrect2++;
			}else{
				correct3--;
				incorrect3++;
			}
			getJsonData(category);
		}
	}


});

function button(e){
	if(e.id=="button1"){
		buttonanswer="True";
		who=1;
	}else if(e.id=="button2"){
		buttonanswer="False";
		who=1;
	}else if(e.id=="button3"){
		buttonanswer="True";
		who=2;
	}else if(e.id=="button4"){
		buttonanswer="False";
		who=2;
	}else if(e.id=="button5"){
		buttonanswer="True";
		who=3;
	}else{
		buttonanswer="False";
		who=3;
	}
	if(buttonanswer==Answer){
		if(who==1){
			correct1++;
			cor1++;
		}else if(who==2){
			correct2++;
			cor2++;
		}else{
			correct3++;
			cor3++;
		}
	}else{
		if(who==1){
			correct1--;
			incorrect1++;
		}else if(who==2){
			correct2--;
			incorrect2++;
		}else{
			correct3--;
			incorrect3++;
		}
	}
	getJsonData(category);
}


var i=0;
var category;
var Answer;
var buttonanswer;
var who;
var startScreen;
var counter = 30;
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correct1 = 0;
var correct2 = 0;
var correct3 = 0;
var incorrect1 = 0;
var incorrect2 = 0;
var incorrect3 = 0;
var cor1=0;
var cor2=0;
var cor3=0;
