/* global $ */

// BELOW Update the songs array with four of your favorites songs.

// index: name, img, author, link, time

var songs = {
    "Title": [
        "Viva La Vida",
        "Boulevard of Broken Dreams",
        "Welcome to the Black Parde",
        "How to Save a Life",
        "Take Me Home, Country Roads"
    ],
    
    "Image Link": [
        "http://bit.ly/2SHdCAm",
        "http://bit.ly/2FozjC9",
        "http://bit.ly/2FmgG1Y",
        "http://bit.ly/2TJTeyy",
        "http://bit.ly/2MrHO08"
    ],
    
    "Artists": [
        "Cold Play",
        "Green Day",
        "My Chemical Romance",
        "The Fray",
        "John Denver"
    ],
    
    "Links": [
        "http://bit.ly/2TKVQfx",
        "http://bit.ly/2FreHZi",
        "http://bit.ly/2Fq0P1w",
        "http://bit.ly/2D4Z6Nk",
        "http://bit.ly/2Hs0IFl"
    ],
    
    "Duration": [
        "4:02",
        "4:47",
        "5:14",
        "4:26",
        "3:18"
    ]
};
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

function deleteSong(index){
    songs["Title"].splice(index, 1);
    songs["Image Link"].splice(index, 1);
    songs["Artists"].splice(index, 1);
    songs["Links"].splice(index, 1);
    songs["Duration"].splice(index, 1);
}

$(".delete").click(function(){
    var deleteindex = $("#delete").val();
    emptySongInfo();
    deleteSong(deleteindex);
    displaySongInfo();
});

function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var name = $("#song").val();
    songs["Title"].push(name);
    
    var art = $("#artist").val();
    songs["Artists"].push(art);
    
    var time = $("#length").val();
    songs["Duration"].push(time);
    
    var image = $("#image").val();
    songs["Image Link"].push(image);
    
    var link = $("#link").val();
    songs["Links"].push(link);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

function displaySongInfo(){
    songs["Image Link"].forEach(function(x){
        $("#images").append("<img src='"+x+"'>"); 
    });
    
    songs["Title"].forEach(function(x){
        $("#songs").append("<p>'"+x+"'</p>"); 
    });
    
    songs["Artists"].forEach(function(x){
        $("#artists").append("<p>'"+x+"'</p>"); 
    });
    
    songs["Duration"].forEach(function(x){
        $("#lengths").append("<p>'"+x+"'</p>"); 
    });

    songs["Links"].forEach(function(x){
        $("#links").append("<a href='"+x+"'>Listen</a>"); 
    });

}

displaySongInfo();
