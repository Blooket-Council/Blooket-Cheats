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
    const timeProcessed = 1731294333862;
    let latestProcess = -1;
    const cheat = (async () => {
        let i = document.createElement("iframe");
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        window.prompt = i.contentWindow.prompt.bind(window);
        window.confirm = i.contentWindow.confirm.bind(window);
        i.remove();
        
        if (window.location.pathname.startsWith("/market"))
            (async () => {
                const { stateNode } = Object.values(
                    (function react(r = document.querySelector("body>div")) {
                        return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
                    })()
                )[1].children[0]._owner;
                const prices = Array.prototype.reduce.call(
                    document.querySelectorAll("[class*='packsWrapper'] > div"),
                    (a, b) => {
                        b.querySelector("[class*='blookContainer'] > img") || (a[b.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(b.querySelector("[class*='packBottom']").textContent));
                        return a;
                    },
                    {}
                );
                const box = prompt('Which box do you want to open? (ex: "Space")')
                    .split(" ")
                    .map((str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
                    .join(" ");
                const cost = prices[box];
                if (!cost) return alert("I couldn't find that box!");
        
                const canOpen = Math.floor(stateNode.state.tokens / cost);
                if (canOpen <= 0) return alert("You do not have enough tokens!");
                const amount = Math.min(canOpen, parseInt(prompt("How many boxes do you want to open?")) || 0);
        
                const alertBlooks = confirm("Would you like to show blooks as unlocking?"),
                    blooks = {},
                    now = Date.now();
        
                for (let i = 0; i < amount; i++) {
                    await stateNode.buyPack(true, box);
        
                    blooks[stateNode.state.unlockedBlook] ||= 0;
                    blooks[stateNode.state.unlockedBlook]++;
        
                    stateNode.startOpening();
                    clearTimeout(stateNode.openTimeout);
                    const rarity = stateNode.state.purchasedBlookRarity;
        
                    stateNode.setState({ canOpen: true, currentPack: "", opening: alertBlooks, doneOpening: alertBlooks, openPack: alertBlooks });
                    clearTimeout(stateNode.canOpenTimeout);
                    if (rarity == "Chroma") break;
                }
                await new Promise((r) => setTimeout(r));
                alert(
                    `(${Date.now() - now}ms) Results:\n${Object.entries(blooks)
                        .map(([blook, amount]) => `    ${blook} ${amount}`)
                        .join(`\n`)}`
                );
            })();
        else alert("This can only be ran in the Market page.");
        
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/global/spamBuyBlooks.png?" + Date.now();
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
