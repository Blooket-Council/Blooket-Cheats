/**
 * @license AGPL-3.0
 * Blooket Cheats
 * Copyright (C) 2023-present 05Konz
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Source: https://github.com/Blooket-Council/Blooket-Cheats 05konz994@gmail.com
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    let iframe = document.querySelector("iframe");
    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.style.display = "none";
        document.body.append(iframe);
    }
    /* By CryptoDude3 */
    if (window.fetch.call.toString() == 'function call() { [native code] }') {
        const call = window.fetch.call;
        window.fetch.call = function () {
            if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
        }
    }
    const timeProcessed = 1730769910781;
    let latestProcess = -1;
    const cheat = (async () => {
        
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        let stats = ['materials', 'people', 'happiness', 'gold'];
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
        
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/kingdom/choiceESP.png?" + Date.now();
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
        let _, time = timeProcessed, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if ((latestProcess = parseInt(time)) <= timeProcessed || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();