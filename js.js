function getRandomColor(){
    var randnum = Math.random();
        var inum = 10;
        var rand1 = Math.round(randnum * (inum-1));
       /* var colors = new Array("#000", "#000", "#000", "#323232", "#666666", "#999999", "#b2b2b2", "#cccccc", "#000000"); */
        var colors = new Array("#f06060", "#eeecdb", "#aec2d0", "#236666", "#f7f7f7", "#23e3ca", "#f0fff0", "#c8e1ef", "#431f3e")
        var color = colors[rand1];
        return color;
};

function getHoverColor(){
    var randnum = Math.random();
        var inum = 10;
        var rand1 = Math.round(randnum * (inum-1));
       /* var hoverColors = new Array("#000", "#000", "#000", "#323232", "#666666", "#999999", "#b2b2b2", "#cccccc", "#000000"); */
        var hoverColors = new Array("#f06060", "#eeecdb", "#aec2d0", "#236666", "#f7f7f7", "#23e3ca", "#f0fff0", "#c8e1ef", "#431f3e")
        var hoverColor = hoverColors[rand1];
        return hoverColor;
};

function getRandomCoincidence(){
    var randnum = Math.random();
        var inum = 300;
        var rand1 = Math.round(randnum * (inum-1));
        var stories = new Array("This is Amanda. She almost crashed into you while you were jaywalking on the street.", 
                                "Here's Jay: he offered to stand behind you to give you a better view of the stage. He's the server you undertipped at the brunch joint this morning.", 
                                "Ryan was at the liquor store right after you were, and also almost bought the Belgian brew six-pack because of the package design.", 
                                "Your friend's dad went to your old high school before moving to the city you now live in.", 
                                "She lost $2.87 a week ago and you found it. You use the exact change to pay for the jar of peanut butter at the cash register during her shift.", 
                                "This is Kyle. Her grandmother lived two doors down fom you when you were a toddler, and babysat you while your parents were at work.", 
                                "Mike's sister was born in the same hospital on the same day at the time as you.", 
                                "Stephen's mom is your dermatologist.", 
                                "You just went on date with the guy who happened to be in the car next to you during the solar eclipse in Colorado.",
                                "", "", "", "", "", 
                                "", "", "", "", "",
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "",
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "",
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "",
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "",
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "", 
                                "", "", "", "", "");
        var coincidence = stories[rand1];
        return coincidence;
};
