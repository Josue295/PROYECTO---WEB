const topartist=document.getElementById("top-billboard")
const topSongs = document.getElementById("top-songs")


  

async function obtenerDatos(){
    
    
    const url_artist = 'https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners';
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'bbe7c1af60mshb2a70bee48bdcb2p1467b9jsnc6d6bb6c5387',
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
                    console.log(s);
                    console.log(post.trackMetadata.trackName);
                topSongs.innerHTML += `
                <div class="song-rank">                 
                    <img class"portada" src="${post.trackMetadata.displayImageUri}"></p>  
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
obtenerDatos();