let currentlyPlayingAudio = null;

function playAudio(audioId) {
    
    if (currentlyPlayingAudio && currentlyPlayingAudio.id !== audioId) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0; 
        
    }
    
    let audioElement = document.getElementById(audioId);
    if (audioElement) {
        audioElement.play();
        currentlyPlayingAudio = audioElement; 
    } else {
        console.error(`No audio element found with ID: ${audioId}`);
    }
}
