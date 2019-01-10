/* global $ */

// BELOW Update the songs array with four of your favorites songs.

// index: name, img, author, link, time
var songs = {
    1: ["Viva La Vida","https://images-na.ssl-images-amazon.com/images/I/9145yafeO2L._SL1500_.jpg", "Cold Play", "https://www.youtube.com/watch?v=dvgZkm1xWPE", "4:02"],
    2: ["Boulevard of Broken Dreams","https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/43558385/957dd789c649b9555985a3773f10a40f.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=9225fb021bb476daeb5ad9e71297fef9",
"Green Day", "https://www.youtube.com/watch?v=Soa3gO7tL-c", "4:47"],
    3: ["Welcome to the Black Parde", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Welcome_to_the_Black_Parade_cover.jpg/220px-Welcome_to_the_Black_Parade_cover.jpg",
"My Chemical Romance", "https://www.youtube.com/watch?v=RRKJiM9Njr8", "5:14"],
    4: ["How to Save a Life","https://images.genius.com/c3b6376b4285eee7451c117eb00da34c.1000x1000x1.jpg", "The Fray", "https://www.youtube.com/watch?v=cjVQ36NhbMk",
"4:26"],
    "Title": ["Viva La Vida", "Boulevard of Broken Dreams","Welcome to the Black Parde","How to Save a Life"],
    "Image Link": ["http://bit.ly/2SHdCAm", ]
};
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

function displaySongInfo(list){
    $("#images").append("<img src='"+list[0]+"'>");
}

