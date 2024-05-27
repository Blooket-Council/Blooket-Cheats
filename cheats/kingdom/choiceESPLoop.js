/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) 005Konz 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/005Konz/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    let iframe = document.querySelector("iframe");
    /* By CryptoDude3 */
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const cheat = (async () => {
        setInterval(stats => {
            let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            let elements = Array.prototype.reduce.call(document.querySelectorAll('[class*=statContainer]'), (obj, container, i) => (obj[stats[i]] = container, obj), {});
            if (stateNode.state.phase == "choice") {
                Array.prototype.forEach.call(document.querySelectorAll('.choiceESP'), x => x.remove());
                Object.keys(stateNode.state.guest.yes || {}).forEach(x => {
                    if (elements[x] == null) return;
                    let element = document.createElement('div');
                    element.className = 'choiceESP';
                    element.style = 'font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;';
                    element.innerText = String(stateNode.state.guest.yes[x]);
                    elements[x].appendChild(element);
                });
                Object.keys(stateNode.state.guest.no || {}).forEach(x => {
                    if (elements[x] == null) return;
                    let element = document.createElement('div');
                    element.className = 'choiceESP';
                    element.style = 'font-size: 24px; color: darkred; font-weight: bolder;';
                    element.innerText = String(stateNode.state.guest.no[x]);
                    elements[x].appendChild(element);
                });
                Array.prototype.forEach.call(document.querySelectorAll("[class*=guestButton][role=button]"), x => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), x => x.remove())));
            }
        }, 50, ['materials', 'people', 'happiness', 'gold']);
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/005Konz/Blooket-Cheats/main/autoupdate/timestamps/kingdom/choiceESPLoop.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        let i = 0;
        while (i < data.length) {
            let char = String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let _, time = 1716769994989, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1716769994989 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();