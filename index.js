async function moodReader() {
    let results = document.getElementById("results");
    let emoji =  document.getElementById("emoji");
      
    document.getElementById("results").classList.add("loader");
    const response = await fetch("https://sentim-api.herokuapp.com/api/v1/", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: document.getElementById("text").value,
        }),
    })
    const data = await response.json();

    
    if (data.result.type == "positive") {
        document.getElementById("results").style.color = "green";
        const img = document.createElement("IMG");
        img.setAttribute("src", "https://thumbs.dreamstime.com/b/emoji-face-smile-avatar-expression-emotion-emoticon-vector-illustration-emoji-laugh-happy-sunglasses-modern-smiley-face-187103503.jpg");
        img.setAttribute("width", "250");
        img.setAttribute("height", "250");
        img.setAttribute("alt", "Happy smiley");
        emoji.appendChild(img);

    }
    if (data.result.type == "negative") {
        document.getElementById("results").style.color = "red";
        const img = document.createElement("IMG");
        img.setAttribute("src", "https://previews.123rf.com/images/yayayoy/yayayoy1403/yayayoy140300005/27517277-sad-emoticon-wiping-tear.jpg");
        img.setAttribute("width", "250");
        img.setAttribute("height", "250");
        img.setAttribute("alt", "Sad smiley");
        emoji.appendChild(img);
    }
    if (data.result.type == "neutral") {
        document.getElementById("results").style.color = "grey";
        const img = document.createElement("IMG");
        img.setAttribute("src", "https://i.pinimg.com/736x/92/77/fa/9277fa888c17e22612e038133aba9e23.jpg");
        img.setAttribute("width", "250");
        img.setAttribute("height", "250");
        img.setAttribute("alt", "Dont know smiley");
        document.getElementById("emoji").appendChild(img);
    }
    if (!response.ok) {
        throw Error(data.error)
    }
    document.getElementById("results").classList.remove("loader");
   let answer = document.createTextNode ("results: " + "polarity: " + data.result.polarity + " type: " + data.result.type);

   results.appendChild(answer);

}

document.getElementById("check").addEventListener("click", moodReader)

