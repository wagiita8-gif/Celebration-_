 let count=0

    const el=document.getElementById("num");
    const card = document.getElementById("celebration-card");
const typing = document.getElementById("typing");
    
    const timer=setInterval(()=>{
      count+=1;

      el.textContent=count;
      if (count>=21){
        clearInterval(timer);
        document.getElementById("num").style.display="none";
        document.getElementById("celebrate-btn").style.display="block";
        document.getElementById("glow").style.display="none";
        document.getElementById("celebration-card").style.display="none";
      }
    },1000);

    function showCelebrationcard(){
      document.getElementById("celebrate-btn").style.display="none";
    
      document.getElementById("bgMusic").play();
      document.getElementById("glow").style.display="none";
      document.getElementById("celebration-card").style.display="flex";
    
typewriter();
    }
    const letter=`
   Birthday girl! 🎉🥳<br>

---

My Dearest Mercy,<br><br>

Happy Birthday to the most amazing soul I know! 💖
<br>
On this special day, I just want you to know how much light you bring into this world, and everyone's life,friends ,family,e.t.c. Your laugh is literally my favorite sound, your kindness is real🙂, and your heart? The purest ever.
<br><br>
I pray this new chapter brings you everything you've been wishing for. More money, more love, more peace, more glow and a good bf(mmh😏). You deserve it all and more. May God protect you, bless your education, and keep that beautiful smile on your face forever.
<br><br>
Thank you for being you — sweet, crazy, loving, real. Never change, okay?
<br><br>
Enjoy your day to the fullest today, eat cake for me too! 🎂✨
<br><br>
Enjoy your day😉, birthday queen! 👑💞
<br>
Yours,<br>
Your Bestie 😘`;


      let index=0;

    function typewriter() {
    if (index < letter.length) {

        if (letter.substring(index, index + 4) === "<br>") {
            typing.innerHTML += "<br>";
            index += 4;
        } else {
            typing.innerHTML += letter.charAt(index);
            index++;
        }

        card.scrollTop = card.scrollHeight;
        setTimeout(typewriter, 60);
    }
}

