var shield = document.createElement("div");
shield.className = "shield";
shield.style.width = "100px";
shield.style.height = "100px";
shield.style.border = "1px solid black";
document.body.appendChild(shield);

var text = document.createElement("h1");
text.textContent = "This is a shield";
shield.appendChild(text);
return true;
}
}