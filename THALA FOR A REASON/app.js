var videoTimeout;

// Function to check the input string
function checkString() {
  var inputText = document.getElementById("inputText").value;
  if (inputText.length === 7) {
    document.getElementById("message").innerText = "WOW!! 7 letters=> THALA FOR A REASON";
    document.getElementById("backgroundVideo").style.display = "block";
    document.getElementById("backgroundAudio").style.display = "block";

    // Start playing the video and audio together
    var video = document.getElementById("backgroundVideo");
    var audio = document.getElementById("backgroundAudio");
    video.play();
    audio.play();

    // Pause the audio when video ends
    video.onended = function() {
      audio.pause();
    };

    // Stop video and audio after 60 seconds
    videoTimeout = setTimeout(function() {
      stopVideoAndAudio();
    }, 60000); // 60 seconds
  } else {
    document.getElementById("message").innerText = "Please enter a valid string of length 7.";
    document.getElementById("inputText").value = ""; // Clear the input field
    stopVideoAndAudio();
  }
}

// Function to stop video and audio
function stopVideoAndAudio() {
  clearTimeout(videoTimeout);
  var video = document.getElementById("backgroundVideo");
  var audio = document.getElementById("backgroundAudio");
  video.pause();
  audio.pause();
  document.getElementById("message").innerText = "sorry bro !! you are not a thala ..";
  document.getElementById("backgroundVideo").style.display = "none";
  document.getElementById("backgroundAudio").style.display = "none";
}
