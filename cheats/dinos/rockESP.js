/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) 05Konzz 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Blooket-Council/Blooket-Cheats/blob/main/LICENSE
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
        function rand(e, t) {
            const s = [];
            while (s.length < t) {
                const i = Math.random();
                let r = 0;
                let g;
                for (let o = 0; o < e.length; o++) {
                    r += e[o].rate;
                    if (r >= i) {
                        g = e[o];
                        break;
                    }
                }
                if (g && !s.includes(g)) s.push(g);
            }
            return s;
        };
        
        const exps = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
        function getExpAscii(num) {
            let res = "";
            while (num > 0) {
                res = exps[num % 10] + res;
                num = Math.floor(num / 10);
            }
            return res;
        };
        
        function shortNum(value) {
            const reg = RegExp("[^a-zA-Z 0-9]+", "g");
            let newValue = value.toString();
            if (value >= 1000) {
                const suffixes = ["", "K", "M", "B", "T"];
                const suffixNum = Math.floor(Math.floor((Math.log(value) / Math.log(10)).toPrecision(14)) / 3);
                if (suffixNum < suffixes.length) {
                    let shortValue = "";
                    for (let precision = 3; precision >= 1; precision--) {
                        shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision)).toString();
                        const dotLessShortValue = shortValue.replace(reg, "");
                        if (dotLessShortValue.length <= 3) break;
                    }
                    if (Number(shortValue) % 1 != 0) shortValue = Number(shortValue).toFixed(1);
                    newValue = shortValue + suffixes[suffixNum];
                } else {
                    let num = value;
                    let exp = 0;
                    while (num >= 100) {
                        num = Math.floor(num / 10);
                        exp += 1;
                    }
                    newValue = num / 10 + " × 10" + getExpAscii(exp + 1);
                }
            }
            return newValue;
        };
        
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const rocks = document.querySelector('[class*="rockButton"]').parentElement.children;
        
        if (!Array.prototype.every.call(rocks, element => element.querySelector('div'))) stateNode.setState({
            choices: rand([{ type: "fossil", val: 10, rate: 0.1, blook: "Amber" }, { type: "fossil", val: 25, rate: 0.1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: 0.175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: 0.175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: 0.15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: 0.125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: 0.075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: 0.025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: 0.05 }, { type: "mult", val: 2, rate: 0.025 }], 3)
        }, () => {
            Array.prototype.forEach.call(rocks, (element, index) => {
                const rock = stateNode.state.choices[index];
                if (element.querySelector('div')) element.querySelector('div').remove();
                const choice = document.createElement("div");
                choice.style.color = "white";
                choice.style.fontFamily = "Macondo";
                choice.style.fontSize = "1em";
                choice.style.display = "flex";
                choice.style.justifyContent = "center";
                choice.style.transform = "translateY(25px)";
                choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? shortNum(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                element.append(choice);
            });
        });
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/dinos/rockESP.png?" + Date.now();
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
        let _, time = 1721843505403, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1721843505403 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();