function open_card() {
    document.getElementById('outside').className = 'open-card';
  }
  
  function close_card() {
    document.getElementById('outside').className = '';
  }

  function playAudio() {
    let x = document.getElementById("myAudio");
    x.play();
  }

  function pauseAudio() {
    let x = document.getElementById("myAudio");
    x.pause();
  }