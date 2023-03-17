
// var bg = new Audio('music.mp3');
// // bg.play();



var gameover = new Audio('gameover.mp3');

var playerX = 0
var playerO = 0


function changeTurn(e) {
    if (e !== " ") {
        if (e === "X") {
            return "O"
        }
        else {
            return "X"
        }
    }

}


var turn = "X"

let isgameover = false
for (var i = 0; i < document.querySelectorAll(".box").length; i++) {

    document.querySelectorAll(".box")[i].addEventListener("click", function () {

        if (!isgameover) {
            if (this.innerHTML != "X" && this.innerHTML != "O") {

                this.innerHTML = turn;
                turn = changeTurn(turn);
                var audioturn = new Audio('ting.mp3');
                audioturn.play();
                checkWin();
                if (!isgameover) {
                    document.querySelector(".heading2").innerHTML = "Turn for " + turn
                }

            }

        }
        else {
            document.querySelector(".heading2").innerHTML = "<p></p>"
        }

    });
}

function checkWin() {
    if (document.querySelectorAll(".box")[0].innerHTML === document.querySelectorAll(".box")[1].innerHTML && document.querySelectorAll(".box")[1].innerHTML === document.querySelectorAll(".box")[2].innerHTML && document.querySelectorAll(".box")[0].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[0].innerHTML + " won</h1>🎉🎉"
        document.querySelector(".line").style = 'transform:translate(1.7vw, 5vw);'
        document.querySelector(".line").style.width = "27vw";

        document.querySelector(".images").style.width = "200px"
        isgameover = true
        gameover.play();

        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[0].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
    else if (document.querySelectorAll(".box")[3].innerHTML === document.querySelectorAll(".box")[4].innerHTML && document.querySelectorAll(".box")[4].innerHTML === document.querySelectorAll(".box")[5].innerHTML && document.querySelectorAll(".box")[3].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[3].innerHTML + " won</h1>🎉🎉"
        document.querySelector(".images").style.width = "200px"

        isgameover = true
        document.querySelector(".line").style = "transform:translate(1.7vw, 15vw);"
        document.querySelector(".line").style.width = "27vw";
        gameover.play();
        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[3].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
    else if (document.querySelectorAll(".box")[6].innerHTML === document.querySelectorAll(".box")[7].innerHTML && document.querySelectorAll(".box")[7].innerHTML === document.querySelectorAll(".box")[8].innerHTML && document.querySelectorAll(".box")[6].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[6].innerHTML + " won</h1>🎉🎉"
        document.querySelector(".images").style.width = "200px"
        isgameover = true
        document.querySelector(".line").style = "transform: translate(1.7vw, 25vw);"
        document.querySelector(".line").style.width = "27vw";

        gameover.play();
        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[6].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
    else if (document.querySelectorAll(".box")[0].innerHTML === document.querySelectorAll(".box")[3].innerHTML && document.querySelectorAll(".box")[3].innerHTML === document.querySelectorAll(".box")[6].innerHTML && document.querySelectorAll(".box")[0].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[0].innerHTML + " won</h1>🎉🎉"
        document.querySelector(".images").style.width = "200px"
        isgameover = true
        document.querySelector(".line").style = "transform: translate(-8.5vw, 15vw) rotate(90deg);"
        document.querySelector(".line").style.width = "27vw";

        gameover.play();
        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[0].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
    else if (document.querySelectorAll(".box")[1].innerHTML === document.querySelectorAll(".box")[4].innerHTML && document.querySelectorAll(".box")[4].innerHTML === document.querySelectorAll(".box")[7].innerHTML && document.querySelectorAll(".box")[1].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[1].innerHTML + " won</h1>🎉🎉"
        document.querySelector(".images").style.width = "200px"
        isgameover = true
        document.querySelector(".line").style = "transform: translate(1.5vw, 15vw) rotate(90deg);"
        document.querySelector(".line").style.width = "27vw";

        gameover.play();
        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[1].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
    else if (document.querySelectorAll(".box")[2].innerHTML === document.querySelectorAll(".box")[5].innerHTML && document.querySelectorAll(".box")[5].innerHTML === document.querySelectorAll(".box")[8].innerHTML && document.querySelectorAll(".box")[2].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[2].innerHTML + " won</h1>🎉🎉"
        document.querySelector(".images").style.width = "200px"
        document.querySelector(".line").style = "transform: translate(11.5vw, 15vw) rotate(90deg);"
        document.querySelector(".line").style.width = "27vw";

        isgameover = true
        gameover.play();
        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[2].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
    else if (document.querySelectorAll(".box")[0].innerHTML === document.querySelectorAll(".box")[4].innerHTML && document.querySelectorAll(".box")[4].innerHTML === document.querySelectorAll(".box")[8].innerHTML && document.querySelectorAll(".box")[0].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[0].innerHTML + " won</h1>🎉🎉"
        document.querySelector(".images").style.width = "200px"
        isgameover = true
        document.querySelector(".line").style = "transform: translate(-5vw, 15vw) rotate(45deg);"
        document.querySelector(".line").style.width = "40vw";

        gameover.play();
        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[0].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
    else if (document.querySelectorAll(".box")[2].innerHTML === document.querySelectorAll(".box")[4].innerHTML && document.querySelectorAll(".box")[4].innerHTML === document.querySelectorAll(".box")[6].innerHTML && document.querySelectorAll(".box")[2].innerHTML !== "") {
        document.querySelector(".heading").innerHTML = "<h1>" + document.querySelectorAll(".box")[2].innerHTML + " won</h1>🎉🎉"

        document.querySelector(".images").style.width = "200px"
        isgameover = true
        document.querySelector(".line").style = "transform: translate(-5vw, 15vw) rotate(-45deg);"
        document.querySelector(".line").style.width = "40vw";

        gameover.play();
        document.querySelector(".heading2").innerHTML = " "
        if (document.querySelectorAll(".box")[2].innerHTML === "X") {
            playerX += 1

        } else {
            playerO += 1
        }

    }
}

document.querySelector("#reset").addEventListener("click", function () {
    for (var i = 0; i < document.querySelectorAll(".box").length; i++) {
        document.querySelectorAll(".box")[i].innerHTML = ""
    }
    turn = "X"
    isgameover = false
    document.querySelector(".line").style = "width:0vw"
    document.querySelector(".heading2").innerHTML = "Turn for " + turn
    document.querySelector(".heading").innerHTML = "<h1>Welcome to Tic Tac Toe</h1>"
    document.querySelector(".images").style.width = "0px"
    document.querySelector(".score").innerHTML = "<button class='score1'>player X score: " + playerX + "</button> <br> </br><button class='score2'>player O score: " + playerO + "</button>"
})