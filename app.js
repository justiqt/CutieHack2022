console.log("value from input:", value);
$(document).ready(function(){
    var key ='AIzaSyAk2bozrinb9FcOtn-sKepnFjDssN2tl3o';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
    //var playlistId = 'PLDIoUOhQQPlXr63I_vwF9GD8sAKh77dWU';
    // var options ={
    //     part: 'snippet',
    //     key:key,
    //     maxResults:20,
    //     playlistId:playlistId,
    // }
    // loadVids();
    // function loadVids(){
    //    $.getJson(URL, options, function(data){
    //         console.log(data);
    //         var id=data.items[0].snippet.resourceId.videoId;
    //         mainVid();
    //    } )
    // }
    
    function mainVid(id){
        $('#video').html(`
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/${id}" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>  
        `);
    }
    mainVid(songID);

});

var userURL="";
var temp;
function songInput(){
    temp = document.getElementById('songName').value;
    userURL=temp;
    alert("retrieving video with url: "+ userURL);
}

var songID=userURL.substring(20,userURL.length-1);
var equalPos = 0;
for (var i = 0; i < userURL.length-1; ++i) {

    if(userURL.charAt(i) == "=") {
        equalPos = i+1;
        break;
    }
}
var songID = userURL.substring(equalPos, userURL.length-1);
alert(equalPos);

