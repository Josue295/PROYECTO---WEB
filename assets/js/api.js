/* import API_KEY from "./keys.js" ; */

const topartist=document.getElementById("top-billboard")
const topSongs = document.getElementById("top-songs")
const section = document.getElementById("section")

const body = document.getElementById("ranking-spotify")

let btn_update = document.getElementById("btnUpdate")

let songs = JSON.parse(localStorage.getItem("song"))|| [];
localStorage.setItem("song", JSON.stringify(songs))

class Song {
    constructor(spotifyID, imgSong, rank, nameSong, songArtist) {
    this.spotifyID = spotifyID;
    this.imgSong = imgSong;
    this.rank = rank;
    this.nameSong = nameSong;
    this.songArtist = songArtist;
    }
}
  

async function obtenerDatos(){
    
    
    const url_artist = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ca9ec6ea20mshdf1efa1038c649ap1cb8abjsn724afbfeb208',
        'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
    };

    const url_song = 'https://spotify81.p.rapidapi.com/top_200_tracks?country=GLOBAL';
    


    let s = 1;
    /* try {
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
    } */

    try {
        const response = await fetch(url_song, options);
        const result = await response.json();
        console.log(result)
        
            result.forEach((post) => {
                if(s<=100){

                    let spotifyID = post.trackMetadata.trackUri;
                    let imgSong = post.trackMetadata.displayImageUri;
                    let rank = post.chartEntryData.currentRank;
                    let nameSong = post.trackMetadata.trackName;
                    let songArtist = post.trackMetadata.artists[0].name;
                    
                    let songNew = new Song(spotifyID, imgSong, rank, nameSong, songArtist)

                    songs.push(songNew);
                    localStorage.setItem("song", JSON.stringify(songs));
                
                        
            }s++;
            
            });
        
        } catch (error) {
        console.log(error);
        }
    
};

function crearSongs (){

    let i = 0;

    songs.forEach((cancion) => {
    if(i<20){
    topSongs.innerHTML +=`
    
    <div class="song-rank">
    <a href="#reproductor" class="episode" data-spotify-id="${cancion.spotifyID}">
        <img class="portada" src="${cancion.imgSong}">
        <p></p>
      </a>
      <p class="rank">Ranking: ${cancion.rank}</p>
      <h1 class="song">${cancion.nameSong}</h1>
      <h3 class="song-artist">${cancion.songArtist}</h3>
    </div>
    `
    }i++
    })

    

      
}

btn_update.addEventListener(("click"), () => {

    const firstime = Date.now();
    
    let timeLocal = JSON.parse(localStorage.getItem("FirstTime"))
    if(timeLocal == null){
        console.log("Guarda por primera vez")
        localStorage.setItem("FirstTime", firstime)
        obtenerDatos();
    }else{
        verifTime();
    }

});

const verifTime = () =>{
    const timeNow = Date.now();
    let TimeFirst = JSON.parse(localStorage.getItem("FirstTime"))
    TimeFirst += 604800000

    if(timeNow > TimeFirst){    
        localStorage.setItem("FirstTime", timeNow)
        console.log("Apto para actualizar")
        obtenerDatos();
    }else{
        console.log("No apto")
        const Toast = Swal.mixin({
            background: 'rgb(32, 32, 32)',
            color: 'white',
            toast: true,
            position: 'bottom',
            width: '800px',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
            })
          
          Toast.fire({
            icon: 'success',
            title: 'Ranking Actualizado'
          })
    }
}

crearSongs();
