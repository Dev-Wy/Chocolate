var chocolatePieces = Number(
  prompt("How many peices of chocolate would you like? ex. 3")
);
var remainder = 10 - chocolatePieces;

if (remainder === 10) {
  alert(
    "Wait, you are not one of those people who do not like chocolate are you?!?"
  );
} else if (remainder === 9) {
  alert("I knew it. You are one of those super healthy people.");
} else if (remainder === 8) {
  alert("Come on, live a little!");
} else if (remainder === 7) {
  alert("Three for you, Glen Coco. You go Glen CoCo!");
} else if (remainder === 6) {
  alert("There you go! Have a fabulous day!");
} else if (remainder === 5) {
  alert("Yeah, Treat yourself!");
} else if (remainder === 4) {
  alert("You must have had a rough morning.");
} else if (remainder === 3) {
  alert("Ok, talk me through what is reall going on.");
} else if (remainder === 2) {
  alert(`Just ${remainder} for me! Have a heart.`);
} else if (remainder === 1) {
  alert(`Only ${remainder} left. You might as well finish them all.`);
} else {
  alert("Call BetterHelp.com");
}
