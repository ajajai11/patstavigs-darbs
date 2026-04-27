const symbols = ["🍰","🍰","🎂","🎂","🧁","🧁","🍩","🍩"];
let shuffled = symbols.sort(() => 0.5 - Math.random());

let game = document.getElementById("game");
let statusText = document.getElementById("status");

let first = null;
let second = null;
let lock = false;
let matched = 0;

shuffled.forEach(symbol => {
    let btn = document.createElement("button");
    btn.className = "card-btn";
    btn.innerHTML = "?";

    btn.onclick = () => {
        if (lock || btn.innerHTML !== "?") return;

        btn.innerHTML = symbol;

        if (!first) {
            first = btn;
        } else {
            second = btn;
            lock = true;

            if (first.innerHTML === second.innerHTML) {
                matched += 2;
                first = null;
                second = null;
                lock = false;

                if (matched === symbols.length) {
                    statusText.innerHTML = "🎉 Tu uzvarēji!";
                }

            } else {
                setTimeout(() => {
                    first.innerHTML = "?";
                    second.innerHTML = "?";
                    first = null;
                    second = null;
                    lock = false;
                }, 700);
            }
        }
    };

    game.appendChild(btn);
});
