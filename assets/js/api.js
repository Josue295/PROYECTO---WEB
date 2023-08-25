const topartist=document.getElementById("top-billboard")
const topSongs = document.getElementById("top-songs")
const section = document.getElementById("section")

  

async function obtenerDatos(){
    
    
    const url_artist = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
    };

    const url_song = 'https://spotify81.p.rapidapi.com/top_200_tracks?country=GLOBAL';
    


    let i = 1;
    let s = 1;
    try {
    const response = await fetch(url_artist, options);
    const result = await response.json();
    console.log(result);
    
        result.forEach((post) => {
            if(i<=10){
            topartist.innerHTML += `
            <div class="position-rank">                       
                <h1 class="artist">${post.artist}</h1>
                <h3 class="rank">Ranking: ${post.rank}</h3>  
                <p class"listeners">Oyentes mensuales: ${post.monthlyListeners}</p>
            </div>
            `;
        }i++;
        });
    
    } catch (error) {
    console.log(error);
    }

    try {
        const response = await fetch(url_song, options);
        const result = await response.json();
        console.log(result)
        
            result.forEach((post) => {
                if(s<=10){
                topSongs.innerHTML += `
                <div class="song-rank">
                <a class="episode" data-spotify-id="spotify:track:5Y8F5o4lzoYFOWOPVbI5mg">                 
                    <img class"portada" src="${post.trackMetadata.displayImageUri}"></p>
                </a>  
                    <h3 class="rank">Ranking: ${post.chartEntryData.currentRank}</h3>    
                    <h1 class="song">${post.trackMetadata.trackName}</h1>
                    <h3 class="song-artist">${post.trackMetadata.artists[0].name}</h3
                </div>
                `;
                        
            }s++;
            });
        
        } catch (error) {
        console.log(error);
        }
    
}
/* obtenerDatos(); */

function crearSongs (){

    topSongs.innerHTML +=`
    
    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:4LRPiXqCikLlN15c3yImP7">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02b46f74097655d7f353caab14">
        <p></p>
      </a>
      <p class="rank">Ranking: 1</p>
      <h1 class="song">As It Was</h1>
      <h3 class="song-artist">Harry Styles</h3>
    </div>

    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:0yLdNVWF3Srea0uzk55zFn">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02f429549123dbe8552764ba1d">
        <p></p>
        </a>
        <p class="rank">Ranking: 2</p>
        <h1 class="song">Flowers</h1>
        <h3 class="song-artist">Miley Cyrus</h3>
    </div>

    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:14tflGDI5nBFdIC8f06qS3">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02e97256f1edaa792fff8788ba">
        <p></p>
        </a>
        <p class="rank">Ranking: 3</p>
        <h1 class="song">Never Surrender</h1>
        <h3 class="song-artist">Ryan Ellis</h3>
    </div>

    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:6FFMfUN4uDNDtSFzS4KsTF">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02507fcdb4667bf361828fade5">
        <p></p>
        </a>
        <p class="rank">Ranking: 4</p>
        <h1 class="song">Need - Live</h1>
        <h3 class="song-artist">Ryan Ellis</h3>
    </div>

    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:6v3KW9xbzN5yKLt9YKDYA2">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02c820f033bd82bef4355d1563">
        <p></p>
      </a>
      <p class="rank">Ranking: 5</p>
      <h1 class="song">Señorita</h1>
      <h3 class="song-artist">Shawn Mendes</h3>
    </div>

    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:1BxfuPKGuaTgP7aM0Bbdwr">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647">
        <p></p>
        </a>
        <p class="rank">Ranking: 6</p>
        <h1 class="song">Cruel Summer</h1>
        <h3 class="song-artist">Taylor Swift</h3>
    </div>

    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:3oNnzH6hmqIGIhJ1NcHlrh">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02a3cbe5aa0bcf10eb02a8c960">
        <p></p>
        </a>
        <p class="rank">Ranking: 7</p>
        <h1 class="song">CORAZÓN VACÍO</h1>
        <h3 class="song-artist">María Becerra</h3>
    </div>

    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="spotify:track:2kJwzbxV2ppxnQoYw4GLBZ">
        <img class="portada" src="https://i.scdn.co/image/ab67616d00001e02dedbec8cca43642f06533476">
        <p></p>
        </a>
        <p class="rank">Ranking: 8</p>
        <h1 class="song">If the World Was Ending</h1>
        <h3 class="song-artist">JP Saxe</h3>
    </div>
      `
}

crearSongs();