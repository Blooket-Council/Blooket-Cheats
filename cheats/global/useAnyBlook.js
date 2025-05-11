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
    const timeProcessed = 1747005943585;
    let latestProcess = -1;
    const cheat = (async () => {
        let i = document.createElement("iframe");
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        const lobby = window.location.pathname.startsWith("/play/lobby"),
            dashboard = !lobby && window.location.pathname.startsWith("/blooks");
        if (dashboard) {
            let key = "konzpack",
                propCall = Object.prototype.hasOwnProperty.call;
            let webpack = webpackChunk_N_E.push([
                [key],
                { [key]: () => {} },
                function (func) {
                    Object.prototype.hasOwnProperty.call = function () {
                        Object.defineProperty(arguments[0], key, { set: () => {}, configurable: true });
                        return (Object.prototype.hasOwnProperty.call = propCall).apply(this, arguments);
                    };
                    return func;
                },
            ]);
            const blookData = webpack(4927).nK;
            const blooksHook = Object.values(document.querySelector("[class*=BlooksWrapper_content]"))[0].return.memoizedState.next;
            const showBlooks = blooksHook.memoizedState;
            const seen = {},
                userBlooks = [],
                prices = {
                    Uncommon: 5,
                    Rare: 20,
                    Epic: 75,
                    Legendary: 200,
                    Chroma: 300,
                    Unique: 350,
                    Mystical: 1000,
                };
            for (const data of blooksHook.next.memoizedState) {
                userBlooks.push(data);
                seen[data.blook] = true;
            }
            for (const blook in blookData) {
                if (blookData[blook].rarity != "Common" && !seen[blook])
                    userBlooks.push({
                        blook,
                        quantity: 1,
                        sellPrice: prices[blookData[blook].rarity],
                    });
            }
            blooksHook.next.queue.dispatch(userBlooks);
            blooksHook.queue.dispatch(!showBlooks);
            setTimeout(() => blooksHook.queue.dispatch(showBlooks), 1);
        } else if (lobby) Object.values(document.querySelector("#app>div>div"))[1].children[0]._owner.stateNode.setState({ unlocks: { includes: () => !0 } });
        else alert("This only works in lobbies or the dashboard blooks page.");
        
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/global/useAnyBlook.png?" + Date.now();
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