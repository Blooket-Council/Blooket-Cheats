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
    const timeProcessed = 1747005937225;
    let latestProcess = -1;
    const cheat = (async () => {
        /* Anti-Suspend By CryptoDude3 */
        if (window.fetch.call.toString() == "function call() { [native code] }") {
            const call = window.fetch.call;
            window.fetch.call = function () {
                if (!arguments[1].includes("s.blooket.com/rc")) return call.apply(this, arguments);
            };
            new Image().src = "https://gui-logger.onrender.com/gui/1?" + Date.now();
        }
        let i = document.createElement("iframe");
        document.body.append(i);
        const alert = i.contentWindow.alert.bind(window);
        const prompt = i.contentWindow.prompt.bind(window);
        const confirm = i.contentWindow.confirm.bind(window);
        i.remove();
        
        function getStateNode() {
            return Object.values(
                (function react(r = document.querySelector("body>div")) {
                    return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div"));
                })()
            )[1].children[0]._owner.stateNode;
        }
        
        const addStyles = (element, styles = {}) => Object.entries(styles).forEach(([key, value]) => (element.style[key] = value));
        let style = document.createElement("style");
        style.innerHTML = `details > summary { cursor: pointer; transition: 0.15s; list-style: none; } details > summary:hover { color: hsl(0, 0%, 50%) } details > summary::-webkit-details-marker { display: none; } details summary ~ * { animation: sweep .5s ease-in-out; } @keyframes sweep { 0%    {opacity: 0; transform: translateY(-10px)} 100%  {opacity: 1; transform: translateY(0)} } .cheat { border: none; background: hsl(0, 0%, 20%); padding: 5px; margin: 3px; width: 60%; color: hsl(0, 0%, 100%); transition: 0.2s; border-radius: 5px; cursor: pointer; } .cheat:hover { background: hsl(0, 0%, 30%); }`;
        
        const GUI = document.createElement("div");
        GUI.appendChild(style);
        addStyles(GUI, {
            width: "400px",
            background: "hsl(0, 0%, 10%)",
            borderRadius: "10px",
            position: "absolute",
            textAlign: "center",
            fontFamily: "Nunito",
            color: "white",
            overflow: "hidden",
            top: "50px",
            left: "50px",
        });
        
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        GUI.onpointerdown = (e = window.event) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onpointerup = () => {
                document.onpointerup = null;
                document.onpointermove = null;
            };
            document.onpointermove = (e) => {
                e = e || window.event;
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                GUI.style.top = GUI.offsetTop - pos2 + "px";
                GUI.style.left = GUI.offsetLeft - pos1 + "px";
            };
        };
        
        let header = document.createElement("div");
        GUI.appendChild(header);
        addStyles(header, {
            width: "100%",
            height: "35px",
            paddingTop: "2px",
            fontSize: "1.5rem",
            textAlign: "center",
        });
        header.innerHTML = `Blooket Cheats <span style="font-size: 0.75rem">v5.26.24</span>`;
        
        let close = document.createElement("button");
        header.appendChild(close);
        addStyles(close, {
            background: "red",
            height: "45px",
            width: "45px",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "-10px",
            right: "-10px",
            fontSize: "1.5rem",
            borderRadius: "10px",
            fontFamily: "Nunito",
            fontWeight: "bolder",
            paddingTop: "10px",
            paddingRight: "15px",
        });
        close.innerText = "X";
        close.onclick = () => {
            offLocationChange();
            GUI.remove();
            removeEventListener("keypress", toggleHidden);
        };
        
        let minimize = document.createElement("button");
        header.appendChild(minimize);
        addStyles(minimize, {
            background: "#444444",
            height: "45px",
            width: "45px",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            top: "-10px",
            left: "-10px",
            fontSize: "1.5rem",
            borderRadius: "10px",
            fontFamily: "Nunito",
            fontWeight: "bolder",
            paddingTop: "10px",
            paddingLeft: "15px",
        });
        minimize.innerText = "-";
        minimize.onclick = () => (bodyDiv.hidden = !bodyDiv.hidden);
        let bodyDiv = document.createElement("div");
        let body = document.createElement("div");
        bodyDiv.appendChild(body);
        GUI.appendChild(bodyDiv);
        
        body.innerHTML = `<span id="curPageEl">${getSite(true) ? `Current gamemode: ${getSite(true)}` : "No game detected"}</span><br><span>(Press E to hide)</span><br>`;
        body.style.display = "block";
        body.style.margin = "10px";
        
        document.body.append(GUI);
        
        let footer = document.createElement("div");
        bodyDiv.appendChild(footer);
        footer.style.fontSize = "0.9rem";
        footer.style.paddingBottom = "5px";
        footer.innerHTML = `<span><a target="blank" href="https://discord.gg/jHjGrrdXP6">Discord</a><br/><a target="blank" href="https://github.com/Blooket-Council/Blooket-Cheats">GitHub - 05Konzz</a></span>`;
        
        let cheats = {
            global: [
                {
                    name: "Auto Answer",
                    description: "Toggles auto answer on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const stateNode = getStateNode();
                                const Question = stateNode.state.question || stateNode.props.client.question;
                                if (stateNode.state.question.qType != "typing") {
                                    if (stateNode.state.stage != "feedback" && !stateNode.state.feedback) {
                                        let ind;
                                        for (ind = 0; ind < Question.answers.length; ind++) {
                                            let found = false;
                                            for (let j = 0; j < Question.correctAnswers.length; j++)
                                                if (Question.answers[ind] == Question.correctAnswers[j]) {
                                                    found = true;
                                                    break;
                                                }
                                            if (found) break;
                                        }
                                        document.querySelectorAll("[class*='answerContainer']")[ind].click();
                                    } else document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                                } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(Question.answers[0]);
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Highlight Answers",
                    description: "Toggles highlight answers on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const stateNode = getStateNode();
                                const Question = stateNode.state.question || stateNode.props.client.question;
                                let ind = 0;
                                while (ind < Question.answers.length) {
                                    let found = false;
                                    for (let j = 0; j < Question.correctAnswers.length; j++)
                                        if (Question.answers[ind] == Question.correctAnswers[j]) {
                                            found = true;
                                            break;
                                        }
                                    ind++;
                                    document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.backgroundColor = found ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
                                }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Subtle Highlight Answers",
                    description: "Toggles subtle highlight answers on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const stateNode = getStateNode();
                                const Question = stateNode.state.question || stateNode.props.client.question;
                                let ind = 0;
                                while (ind < Question.answers.length) {
                                    let j = 0;
                                    let found = false;
                                    while (j < Question.correctAnswers.length) {
                                        if (Question.answers[ind] == Question.correctAnswers[j]) {
                                            found = true;
                                            break;
                                        }
                                        j++;
                                    }
                                    ind++;
                                    if (found) document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.boxShadow = "unset";
                                }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Percent Auto Answer",
                    description: "Answers questions correctly or incorrectly depending on the goal grade given (Disable and re-enable to update goal)",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            const target = parseFloat(prompt("What grade do you want to get from this set? (0-100)"));
                            const stateNode = getStateNode();
                            this.data = setInterval(
                                (TARGET) => {
                                    try {
                                        const question = stateNode.state.question || stateNode.props.client.question;
                                        if (stateNode.state.stage == "feedback" || stateNode.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                                        else if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                                            let correct = 0,
                                                total = 0;
                                            for (let corrects in stateNode.corrects) correct += stateNode.corrects[corrects];
                                            for (let incorrect in stateNode.incorrects) total += stateNode.incorrects[incorrect];
                                            total += correct;
                                            const yes = total == 0 || Math.abs(correct / (total + 1) - TARGET) >= Math.abs((correct + 1) / (total + 1) - TARGET);
                                            if (stateNode.state.question.qType != "typing") {
                                                const answerContainers = document.querySelectorAll("[class*='answerContainer']");
                                                for (let i = 0; i < answerContainers.length; i++) {
                                                    const contains = question.correctAnswers.includes(question.answers[i]);
                                                    if (yes == contains) return answerContainers[i]?.click?.();
                                                }
                                                answerContainers[0].click();
                                            } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(yes ? question.answers[0] : Math.random().toString(36).substring(2));
                                        }
                                    } catch {}
                                },
                                100,
                                target / 100
                            );
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Auto Answer",
                    description: "Click the correct answer for you",
                    run: function () {
                        const stateNode = getStateNode();
                        const Question = stateNode.state.question || stateNode.props.client.question;
                        if (stateNode.state.question.qType != "typing") {
                            if (stateNode.state.stage != "feedback" && !stateNode.state.feedback) {
                                let ind;
                                for (ind = 0; ind < Question.answers.length; ind++) {
                                    let found = false;
                                    for (let j = 0; j < Question.correctAnswers.length; j++)
                                        if (Question.answers[ind] == Question.correctAnswers[j]) {
                                            found = true;
                                            break;
                                        }
                                    if (found) break;
                                }
                                document.querySelectorAll("[class*='answerContainer']")[ind].click();
                            } else document.querySelector("[class*='feedback'], [id*='feedback']").firstChild.click();
                        } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(Question.answers[0]);
                    },
                },
                {
                    name: "Highlight Answers",
                    description: "Colors answers to be red or green highlighting the correct ones",
                    run: function () {
                        const stateNode = getStateNode();
                        const Question = stateNode.state.question || stateNode.props.client.question;
                        let ind = 0;
                        while (ind < Question.answers.length) {
                            let found = false;
                            for (let j = 0; j < Question.correctAnswers.length; j++)
                                if (Question.answers[ind] == Question.correctAnswers[j]) {
                                    found = true;
                                    break;
                                }
                            ind++;
                            document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.backgroundColor = found ? "rgb(0, 207, 119)" : "rgb(189, 15, 38)";
                        }
                    },
                },
                {
                    name: "Spam Buy Blooks",
                    description: "Opens a box an amount of times",
                    run: async function () {
                        if (window.location.pathname.startsWith("/market")) {
                            const stateNode = getStateNode();
                            const prices = Array.prototype.reduce.call(
                                document.querySelectorAll("[class*='packsWrapper'] > div"),
                                (a, b) => {
                                    b.querySelector("[class*='blookContainer'] > img") || (a[b.querySelector("[class*='packImgContainer'] > img").alt] = parseInt(b.querySelector("[class*='packBottom']").textContent));
                                    return a;
                                },
                                {}
                            );
                            const box = prompt('Which box do you want to open? (ex: "Ice Monster")')
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
                        } else alert("This can only be ran in the Market page.");
                    },
                },
                {
                    name: "Host Any Gamemode",
                    description: "Change the selected gamemode on the host settings page",
                    run: function () {
                        if (location.pathname == "/host/settings") {
                            const gamemodes = ["Racing", "Classic", "Factory", "Cafe", "Defense2", "Defense", "Royale", "Gold", "Candy", "Brawl", "Hack", "Pirate", "Fish", "Dino", "Toy", "Rush"],
                                type = prompt(`Which gamemode do you want to switch to? (Case sensitive)\n${gamemodes.slice(0, gamemodes.length - 1).join(", ")} or ${gamemodes[gamemodes.length - 1]}`);
                            if (gamemodes.includes(type)) getStateNode().setState({ settings: { type } });
                            else alert("Gamemode not found, make sure you spelled and capitalized it right.");
                        } else alert("Run this script on the host settings page");
                    },
                },
                {
                    name: "Change Blook Ingame",
                    description: "Changes your blook",
                    run: function () {
                        let { props } = getStateNode();
                        props.liveGameController.setVal({ path: `c/${props.client.name}/b`, val: (props.client.blook = prompt("Blook Name: (Case Sensitive)")) });
                    },
                },
                {
                    name: "Get Daily Rewards",
                    description: "Gets max daily tokens and xp",
                    run: async function () {
                        if (!window.location.href.includes("play.blooket.com")) alert("This cheat only works on play.blooket.com, opening a new tab."), window.open("https://play.blooket.com/");
                        else {
                            const gameId = [
                                "60101da869e8c70013913b59",
                                "625db660c6842334835cb4c6",
                                "60268f8861bd520016eae038",
                                "611e6c804abdf900668699e3",
                                "60ba5ff6077eb600221b7145",
                                "642467af9b704783215c1f1b",
                                "605bd360e35779001bf57c5e",
                                "6234cc7add097ff1c9cff3bd",
                                "600b1491d42a140004d5215a",
                                "5db75fa3f1fa190017b61c0c",
                                "5fac96fe2ca0da00042b018f",
                                "600b14d8d42a140004d52165",
                                "5f88953cdb209e00046522c7",
                                "600b153ad42a140004d52172",
                                "5fe260e72a505b00040e2a11",
                                "5fe3d085a529560004cd3076",
                                "5f5fc017aee59500041a1456",
                                "608b0a5863c4f2001eed43f4",
                                "5fad491512c8620004918ace",
                                "5fc91a9b4ea2e200046bd49a",
                                "5c5d06a7deebc70017245da7",
                                "5ff767051b68750004a6fd21",
                                "5fdcacc85d465a0004b021b9",
                                "5fb7eea20bd44300045ba495",
                            ][Math.floor(Math.random() * 24)];
                            const rand = (l, h) => Math.floor(Math.random() * (h - l + 1)) + l;
                            const { t } = await fetch("https://play.blooket.com/api/playersessions/solo", {
                                body: JSON.stringify({ gameMode: "Factory", questionSetId: gameId }),
                                method: "POST",
                                credentials: "include",
                            })
                                .then((x) => x.json())
                                .catch(() => alert("There was an error creating a solo game."));
                            await fetch("https://play.blooket.com/api/playersessions/landings", {
                                body: JSON.stringify({ t }),
                                method: "POST",
                                credentials: "include",
                            }).catch(() => alert("There was an error when landing."));
                            await fetch("https://play.blooket.com/api/playersessions/questions?t=" + t, { credentials: "include" });
                            await fetch("https://play.blooket.com/api/gamequestionsets?gameId=" + gameId, { credentials: "include" });
                            await fetch("https://play.blooket.com/api/users/factorystats", {
                                body: JSON.stringify({ t, place: 1, cash: rand(10000000, 100000000), playersDefeated: 0, correctAnswers: rand(500, 2000), upgrades: rand(250, 750), blookUsed: "Chick", nameUsed: "You", mode: "Time-Solo" }),
                                method: "PUT",
                                credentials: "include",
                            }).catch(() => alert("There was an error when spoofing stats."));
                            await fetch("https://play.blooket.com/api/users/add-rewards", {
                                body: JSON.stringify({ t, addedTokens: 500, addedXp: 300 }),
                                method: "PUT",
                                credentials: "include",
                            })
                                .then((x) => x.json())
                                .then(({ dailyReward }) => alert(`Added max tokens and xp, and got ${dailyReward} daily wheel tokens!`))
                                .catch(() => alert("There was an error when adding rewards."));
                        }
                    },
                },
                {
                    name: "Use Any Blook",
                    description: "Allows you to play as any blook",
                    run: function () {
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
                        } else if (lobby) getStateNode().setState({ unlocks: { includes: () => !0 } });
                        else alert("This only works in lobbies or the dashboard blooks page.");
        
                    },
                },
                {
                    name: "Every Answer Correct",
                    description: "Sets every answer to be correct",
                    run: function () {
                        const stateNode = getStateNode();
                        for (let i = 0; i < stateNode.freeQuestions.length; i++) {
                            stateNode.freeQuestions[i].correctAnswers = stateNode.freeQuestions[i].answers;
                            stateNode.questions[i].correctAnswers = stateNode.questions[i].answers;
                            stateNode.props.client.questions[i].correctAnswers = stateNode.questions[i].answers;
                        }
                        try {
                            stateNode.forceUpdate();
                        } catch {}
                    },
                },
                {
                    name: "Subtle Highlight Answers",
                    description: "Removes the shadow from correct answers",
                    run: function () {
                        const stateNode = getStateNode();
                        const Question = stateNode.state.question || stateNode.props.client.question;
                        let ind = 0;
                        while (ind < Question.answers.length) {
                            let j = 0;
                            let found = false;
                            while (j < Question.correctAnswers.length) {
                                if (Question.answers[ind] == Question.correctAnswers[j]) {
                                    found = true;
                                    break;
                                }
                                j++;
                            }
                            ind++;
                            if (found) document.querySelector("[class*='answersHolder'] :nth-child(" + ind + ") > div").style.boxShadow = "unset";
                        }
                    },
                },
                {
                    name: "Remove Random Name",
                    description: "Allows you to put a custom name",
                    run: function () {
                        getStateNode().setState({ isRandom: false, client: { name: "" } });
                        document.querySelector('[class*="nameInput"]')?.focus?.();
                    },
                },
                {
                    name: "Sell Duplicate Blooks",
                    description: "Sell all duplicate blooks leaving you with 1 each",
                    run: async function () {
                        if (window.location.pathname.startsWith("/blooks")) {
                            if (confirm(`Are you sure you want to sell your dupes? (Legendaries and rarer will not be sold)`)) {
                                let stateNode = getStateNode();
                                let now = Date.now(),
                                    results = "";
                                for (const blook in stateNode.state.blookData)
                                    if (stateNode.state.blookData[blook] > 1) {
                                        stateNode.setState({ blook, numToSell: stateNode.state.blookData[blook] - 1 });
                                        if (!["Uncommon", "Rare", "Epic"].includes(document.querySelector("[class*='highlightedRarity']").innerText.trim())) continue;
                                        results += `    ${blook} ${stateNode.state.blookData[blook] - 1}\n`;
                                        await stateNode.sellBlook({ preventDefault: () => {} }, true);
                                    }
                                alert(`(${Date.now() - now}ms) Results:\n${results.trim()}`);
                            }
                        } else alert("This can only be ran in the Blooks page.");
                    },
                },
            ],
            gold: [
                {
                    name: "Always Triple",
                    description: "Always get triple gold",
                    type: "toggle",
                    enabled: false,
                    data: { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" },
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode._choosePrize ||= stateNode.choosePrize;
                        if (!this.enabled) {
                            this.enabled = true;
                            stateNode.choosePrize = (i) => {
                                stateNode.state.choices[i] = this.data;
                                stateNode._choosePrize(i);
                            };
                        } else {
                            this.enabled = false;
                            if (stateNode._choosePrize) stateNode.choosePrize = stateNode._choosePrize;
                        }
                    },
                },
                {
                    name: "Auto Choose",
                    description: "Automatically picks the option that would give you the most gold",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(async () => {
                                let stateNode = getStateNode();
                                if (stateNode.state.stage == "prize") {
                                    stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                                        try {
                                            if (players == null) return;
                                            players = Object.entries(players);
                                            let most = 0,
                                                max = 0,
                                                index = -1;
                                            for (let i = 0; i < players.length; i++) if (players[i][0] != stateNode.props.client.name && players[i][1] > most) most = players[i][1];
                                            for (let i = 0; i < stateNode.state.choices.length; i++) {
                                                const choice = stateNode.state.choices[i];
                                                let value = stateNode.state.gold;
                                                if (choice.type == "gold") value = stateNode.state.gold + choice.val || stateNode.state.gold;
                                                else if (choice.type == "multiply" || choice.type == "divide") value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold;
                                                else if (choice.type == "swap") value = most || stateNode.state.gold;
                                                else if (choice.type == "take") value = stateNode.state.gold + most * choice.val || stateNode.state.gold;
                                                if ((value || 0) <= max) continue;
                                                max = value;
                                                index = i + 1;
                                            }
                                            document.querySelector("div[class*='choice" + index + "']")?.click();
                                        } catch {}
                                    });
                                }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Chest ESP",
                    description: "Shows what each chest will give you",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                getStateNode().state.choices.forEach(({ text }, index) => {
                                    let chest = document.querySelector(`div[class*='choice${index + 1}']`);
                                    if (!chest || chest.querySelector("div")) return;
                                    let choice = document.createElement("div");
                                    choice.style.color = "white";
                                    choice.style.fontFamily = "Eczar";
                                    choice.style.fontSize = "2em";
                                    choice.style.display = "flex";
                                    choice.style.justifyContent = "center";
                                    choice.style.transform = "translateY(200px)";
                                    choice.innerText = text;
                                    chest.append(choice);
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Remove Bad Choices",
                    description: "Removes the chance of getting Lose 25%, Lose 50%, and Nothing",
                    run: function () {
                        let iterator = Array.prototype[Symbol.iterator];
                        Array.prototype[Symbol.iterator] = function* values() {
                            if (this[0]?.type == "gold") {
                                Array.prototype[Symbol.iterator] = iterator;
                                console.log(this);
                                for (let i = 0; i < this.length; i++) if (this[i].type == "divide" || this[i].type == "nothing") this.splice(i--, 1);
                            }
                            yield* iterator.apply(this);
                        };
        
                        getStateNode().constructor.prototype.answerNext.call({ nextReady: true, here: true, state: { correct: true }, setState() {} });
                    },
                },
                {
                    name: "Reset Players Gold",
                    description: "Sets a player's gold to 0",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.setVal({
                            path: "c/" + stateNode.props.client.name + "/tat",
                            val: prompt("Who's gold would you like to reset? (Case sensitive)") + ":swap:0",
                        });
                    },
                },
                {
                    name: "Set Gold",
                    description: "Sets amount of gold",
                    run: function () {
                        let gold = parseInt(prompt("How much gold would you like?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ gold, gold2: gold });
                        stateNode.props.liveGameController.setVal({
                            path: "c/" + stateNode.props.client.name + "/g",
                            val: gold,
                        });
                    },
                },
                {
                    name: "Set Player's Gold",
                    description: "Sets another player's gold",
                    run: function () {
                        let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();
                        let player = prompt("Who's gold would you like to set?");
                        let gold = parseInt(prompt("How much gold would you like to set?")) || 0;
                        let stateNode = getStateNode();
        
                        stateNode.props.liveGameController.setVal({
                            path: "c/" + stateNode.props.client.name + "/tat",
                            val: player + ":swap:" + gold
                        });
                    }
                },
                {
                    name: "Swap Gold",
                    description: "Swaps gold with someone",
                    run: function () {
                        const player = prompt("Who's gold would you like to swap with? (Case sensitive)");
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                            if (!players || players[player] == null) return;
                            const gold = players[player].g || 0;
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name,
                                val: {
                                    b: stateNode.props.client.blook,
                                    tat: player + ":swap:" + (stateNode.state.gold || 0),
                                    g: gold,
                                },
                            });
                            stateNode.setState({ gold, gold2: gold });
                        });
                    },
                },
            ],
            hack: [
                {
                    name: "Choice ESP",
                    description: "Shows what each choice will give you",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let chest = document.querySelector("[class*=feedbackContainer]");
                                if (chest.children.length <= 4) {
                                    let choice = document.createElement("div");
                                    choice.style.color = "white";
                                    choice.style.fontFamily = "Inconsolata,Helvetica,monospace,sans-serif";
                                    choice.style.fontSize = "2em";
                                    choice.style.display = "flex";
                                    choice.style.justifyContent = "center";
                                    choice.style.marginTop = "675px";
                                    choice.innerText = getStateNode().state.choices[0].text;
                                    chest.append(choice);
                                }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Password ESP",
                    description: "Highlights the correct password",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { state } = getStateNode();
                                if (state.stage == "hack")
                                    for (const button of document.querySelector("div[class*=buttonContainer]").children) {
                                        if (button.innerText == state.correctPassword) continue;
                                        button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                                        button.style.textShadow = "0 0 1px #f33";
                                    }
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Always Triple",
                    description: "Always get triple crypto",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval((state) => getStateNode().setState(state), 25, { choices: [{ type: "mult", val: 3, rate: 0.075, blook: "Brainy Bot", text: "Triple Crypto" }] });
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Auto Guess",
                    description: "Automatically guess the correct password",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let { state } = getStateNode();
                                if (state.stage == "hack") for (const button of document.querySelector("div[class*=buttonContainer]").children) button.innerText == state.correctPassword && button.click();
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Remove Hack",
                    description: "Removes an attacking hack",
                    run: function () {
                        getStateNode().setState({ hack: "" });
                    },
                },
                {
                    name: "Set Crypto",
                    description: "Sets crypto",
                    run: function () {
                        let amount = parseInt(prompt("How much crypto would you like?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ crypto: amount, crypto2: amount });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/cr`,
                            val: amount,
                        });
                    },
                },
                {
                    name: "Set Password",
                    description: "Sets hacking password",
                    run: function () {
                        let password = prompt("What do you want to set your password to?");
                        let stateNode = getStateNode();
                        stateNode.setState({ password });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/p`,
                            val: password,
                        });
                    },
                },
                {
                    name: "Steal Player's Crypto",
                    description: "Steals all of someone's crypto",
                    run: function () {
                        let target = prompt("Who's crypto would you like to steal?");
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                            let player;
                            if (players && (player = Object.entries(players).find((x) => x[0].toLowerCase() == target.toLowerCase()))) {
                                const cr = player[1].cr;
                                stateNode.setState({
                                    crypto: stateNode.state.crypto + cr,
                                    crypto2: stateNode.state.crypto + cr,
                                });
                                stateNode.props.liveGameController.setVal({
                                    path: "c/" + stateNode.props.client.name,
                                    val: {
                                        b: stateNode.props.client.blook,
                                        p: stateNode.state.password,
                                        cr: stateNode.state.crypto + cr,
                                        tat: player[0] + ":" + cr,
                                    },
                                });
                            }
                        });
                    },
                },
            ],
            fish: [
                {
                    name: "Remove Distractions",
                    description: "Removes distractions",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                getStateNode().setState({ party: "" });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Frenzy",
                    description: "Sets everyone to frenzy mode",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                w: stateNode.state.weight,
                                f: "Frenzy",
                                s: true,
                            },
                        });
                    },
                },
                {
                    name: "Send Distraction",
                    description: "Sends a distraction to everyone",
                    data: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"],
                    run: function () {
                        let stateNode = getStateNode();
                        const f = this.data[Math.floor(Math.random() * this.data.length)];
                        stateNode.safe = true;
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                w: stateNode.state.weight,
                                f,
                                s: true,
                            },
                        });
                        alert(`Sent a ${f} distraction`);
                    },
                },
                {
                    name: "Set Lure",
                    description: "Sets fishing lure (range 1 - 5)",
                    run: function () {
                        getStateNode().setState({ lure: Math.max(Math.min((parseInt(prompt("What would you like to set your lure to? (1 - 5)")) || 1) - 1, 4), 0) });
                    },
                },
                {
                    name: "Set Weight",
                    description: "Sets weight",
                    run: function () {
                        let weight = parseInt(prompt("How much weight would you like?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ weight, weight2: weight });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}`,
                            val: {
                                b: stateNode.props.client.blook,
                                w: weight,
                                f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)],
                            },
                        });
                    },
                },
            ],
            pirate: [
                {
                    name: "Heist ESP",
                    description: "Shows you what's under each chest during a heist",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    imgs: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                const stateNode = getStateNode();
                                if (stateNode.state.stage != "heist") return;
                                if (this.imgs == null) this.imgs = Array.prototype.map.call(Array.prototype.slice.call(document.querySelector("[class*=prizesList]").children, 1, 4), (x) => x.querySelector("img").src);
                                const esp = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.memoizedState;
                                for (const e of document.querySelectorAll("[class*=boxContent] > div")) e.remove();
                                const open = Object.values(document.querySelector("[class*=modal]"))[0].return.memoizedState.next.next.memoizedState;
                                Array.prototype.forEach.call(document.querySelector("[class*=chestsWrapper]").children, (container, i) => {
                                    const box = container.firstChild.firstChild;
                                    if (open.includes(i)) return (box.style.opacity = "");
                                    box.style.opacity = "0.5";
                                    let d = document.createElement("div");
                                    d.innerHTML = "<img src='" + this.imgs[2 - esp[i]] + "' style='max-width: 75%; max-height: 75%'></img>";
                                    d.className = "chestESP";
                                    d.style.position = "absolute";
                                    d.style.inset = "0";
                                    d.style.display = "grid";
                                    d.style.placeItems = "center";
                                    d.style.pointerEvents = "none";
                                    container.onclick = () => {
                                        d.remove();
                                        box.style.opacity = "";
                                    };
                                    container.firstChild.prepend(d);
                                });
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Max Levels",
                    description: "Maxes out all islands and your boat",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.setState({ islandLevels: new Array(stateNode.state.islandLevels.length).fill(5) }, stateNode.updateBoatLevel);
                    },
                },
                {
                    name: "Set Doubloons",
                    description: "Sets Doubloons",
                    run: function () {
                        let doubloons = parseInt(prompt("How many doubloons do you want?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ doubloons });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/d`,
                            val: doubloons,
                        });
                    },
                },
                {
                    name: "Start Heist",
                    description: "Starts a heist on someone",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
                            if (val == null) return;
                            const players = [];
                            for (const name in val) {
                                if (name != stateNode.props.client.name) players.push({ name, blook: val[name].b, doubloons: val[name].d || 0 });
                            }
                            if (players.length == 0) {
                                stateNode.questionsToAnswer = 1;
                                stateNode.randomQ();
                                return;
                            }
                            const name = prompt("Who would you like to heist? (Case sensitive, defaults to top player if no one found)");
                            let target = players.find((x) => x.name == name);
                            if (target == null) {
                                target = players[0];
                                for (let i = 1; i < players.length; i++) if (players[i].doubloons > target.doubloons) target = players[i];
                            }
                            stateNode.setState({
                                stage: "heist",
                                heistInfo: { name: target.name, blook: target.blook },
                                prizeAmount: Math.max(1000, target.doubloons),
                            });
                        });
                    },
                },
                {
                    name: "Swap Doubloons",
                    description: "Swaps Doubloons with someone",
                    run: async function () {
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
                            if (val == null) return;
                            const players = [];
                            for (const name in val) {
                                if (name != stateNode.props.client.name) players.push({ name, blook: val[name].b, doubloons: val[name].d || 0 });
                            }
                            if (players.length == 0) return alert("You're the only one here.");
                            const name = prompt("Who would you like to swap with? (Case sensitive, defaults to top player if no one found)");
                            let target = players.find((x) => x.name == name);
                            if (target == null) {
                                target = players[0];
                                for (let i = 1; i < players.length; i++) if (players[i].doubloons > target.doubloons) target = players[i];
                            }
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name,
                                val: {
                                    b: stateNode.props.client.blook,
                                    d: target.doubloons,
                                    tat: target.name + ":" + (target.doubloons - stateNode.state.doubloons),
                                },
                            });
                            stateNode.setState({ doubloons: target.doubloons });
                        });
                    },
                },
                {
                    name: "Take Doubloons",
                    description: "Takes Doubloons from someone",
                    run: async function () {
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.getDatabaseVal("c", function (val) {
                            if (val == null) return;
                            const players = [];
                            for (const name in val) {
                                if (name != stateNode.props.client.name) players.push({ name, blook: val[name].b, doubloons: val[name].d || 0 });
                            }
                            if (players.length == 0) return alert("You're the only one here.");
                            const name = prompt("Who would you like to take from? (Case sensitive, defaults to top player if no one found)");
                            let target = players.find((x) => x.name == name);
                            if (target == null) {
                                target = players[0];
                                for (let i = 1; i < players.length; i++) if (players[i].doubloons > target.doubloons) target = players[i];
                            }
                            stateNode.props.liveGameController.setVal({
                                path: "c/" + stateNode.props.client.name,
                                val: {
                                    b: stateNode.props.client.blook,
                                    d: stateNode.state.doubloons + target.doubloons,
                                    tat: target.name + ":" + target.doubloons,
                                },
                            });
                            stateNode.setState({ doubloons: stateNode.state.doubloons + target.doubloons });
                        });
                    },
                },
            ],
            defense2: [
                {
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function () {
                        getStateNode().state.towers.forEach((tower) => {
                            tower.stats.dmg = 1e6;
                            tower.stats.fireRate = 50;
                            tower.stats.ghostDetect = true;
                            tower.stats.maxTargets = 1e6;
                            tower.stats.numProjectiles &&= 100;
                            tower.stats.range = 100;
                            if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
                        });
                    },
                },
                {
                    name: "Kill Enemies",
                    description: "Kills all the enemies",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.game.current.config.sceneConfig.enemyQueue.length = 0;
                        stateNode.game.current.config.sceneConfig.physics.world.bodies.entries.forEach((x) => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                    },
                },
                {
                    name: "Set Coins",
                    description: "Sets coins",
                    run: function () {
                        getStateNode().setState({ coins: parseInt(prompt("How many coins would you like?")) || 0 });
                    },
                },
                {
                    name: "Set Health",
                    description: "Sets the amount of health you have",
                    run: function () {
                        getStateNode().setState({ health: parseInt(prompt("How much health would you like?")) || 0 });
                    },
                },
                {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function () {
                        getStateNode().setState({ round: parseInt(prompt("What round do you want to set to?")) || 0 });
                    },
                },
            ],
            brawl: [
                {
                    name: "Double Enemy XP",
                    description: "Doubles enemy XP drop value",
                    run: function () {
                        const colliders = getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter((x) => x.callbackContext?.toString?.()?.includes?.("dmgCd"));
                        for (let i = 0; i < colliders.length; i++) {
                            const enemies = colliders[i].object2;
                            let _start = enemies.classType.prototype.start;
                            enemies.classType.prototype.start = function () {
                                _start.apply(this, arguments);
                                this.val *= 2;
                            };
                            enemies.children.entries.forEach((e) => (e.val *= 2));
                        }
                    },
                },
                {
                    name: "Half Enemy Speed",
                    description: "Makes enemies move 2x slower",
                    run: function () {
                        const colliders = getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter((x) => x.callbackContext?.toString?.()?.includes?.("dmgCd"));
                        for (let i = 0; i < colliders.length; i++) {
                            const enemies = colliders[i].object2;
                            let _start = enemies.classType.prototype.start;
                            enemies.classType.prototype.start = function () {
                                _start.apply(this, arguments);
                                this.speed *= 0.5;
                            };
                            enemies.children.entries.forEach((e) => (e.speed *= 0.5));
                        }
                    },
                },
                {
                    name: "Instant Kill",
                    description: "Sets all enemies health to 1",
                    run: function () {
                        const colliders = getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter((x) => x.callbackContext?.toString?.()?.includes?.("dmgCd"));
                        for (let i = 0; i < colliders.length; i++) {
                            const enemies = colliders[i].object2;
                            let _start = enemies.classType.prototype.start;
                            enemies.classType.prototype.start = function () {
                                _start.apply(this, arguments);
                                this.hp = 1;
                            };
                            enemies.children.entries.forEach((e) => (e.hp = 1));
                        }
                    },
                },
                {
                    name: "Invincibility",
                    description: "Makes you invincible",
                    run: function () {
                        for (const collider of getStateNode().game.current.config.sceneConfig.physics.world.colliders._active.filter(
                            (x) => x.callbackContext?.toString().includes("invulnerableTime") || x.callbackContext?.toString().includes("dmgCd")
                        ))
                            collider.collideCallback = () => {};
                    },
                },
                {
                    name: "Kill Enemies",
                    description: "Kills all current enemies",
                    run: function () {
                        getStateNode().game.current.config.sceneConfig.physics.world.bodies.entries.forEach((x) => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
                    },
                },
                {
                    name: "Magnet",
                    description: "Pulls all xp towards you",
                    run: function () {
                        getStateNode()
                            .game.current.config.sceneConfig.physics.world.colliders._active.find((x) => x.collideCallback?.toString().includes("magnetTime"))
                            .collideCallback({ active: true }, { active: true, setActive() {}, setVisible() {} });
                    },
                },
                {
                    name: "Max Current Abilities",
                    description: "Maxes out all your current abilities",
                    run: function () {
                        const stateNode = getStateNode();
                        for (const [ability, level] of Object.entries(stateNode.state.abilities))
                            for (let i = 0; i < 10 - level; i++) stateNode.game.current.config.sceneConfig.game.events.emit("level up", ability, stateNode.state.abilities[ability]++);
                        stateNode.setState({
                            level: (stateNode.game.current.config.sceneConfig.level = [1, 3, 5, 10, 15, 25, 35].sort((a, b) => Math.abs(a - stateNode.state.level) - Math.abs(b - stateNode.state.level))[0] - 1),
                        });
                    },
                },
                {
                    name: "Next Level",
                    description: "Skips to the next level",
                    run: function () {
                        let stateNode = getStateNode();
                        let { object1: player, object2: xp } = stateNode.game.current.config.sceneConfig.physics.world.colliders._active.find((x) => x.collideCallback?.toString().includes('emit("xp'));
                        xp.get().spawn(player.x, player.y, ((e) => (1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100))(stateNode.state.level) - stateNode.xp);
                    },
                },
                {
                    name: "Remove Obstacles",
                    description: "Removes all rocks and obstacles",
                    run: function () {
                        getStateNode().game.current.config.sceneConfig.physics.world.bodies.entries.forEach((body) => {
                            try {
                                if (body.gameObject.frame.texture.key.includes("obstacle")) body.gameObject.destroy();
                            } catch {}
                        });
                    },
                },
                {
                    name: "Reset Health",
                    description: "Resets health and gives invincibility for 3 seconds",
                    run: function () {
                        getStateNode().game.current.events._events.respawn.fn();
                    },
                },
            ],
            dino: [
                {
                    name: "Auto Choose",
                    description: "Automatically choose the best fossil when excavating",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    rand(e, t) {
                        const s = [];
                        while (s.length < t) {
                            const i = Math.random();
                            let r = 0,
                                g = null;
                            for (let o = 0; o < e.length; o++) {
                                r += e[o].rate;
                                if (r >= i) {
                                    g = e[o];
                                    break;
                                }
                            }
                            g && !s.includes(g) && s.push(g);
                        }
                        return s;
                    },
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                try {
                                    let stateNode = getStateNode();
                                    if (stateNode.state.stage === "excavate") {
                                        stateNode.state.choices.length ||
                                            (stateNode.state.choices = this.rand(
                                                [
                                                    { type: "fossil", val: 10, rate: 0.1, blook: "Amber" },
                                                    { type: "fossil", val: 25, rate: 0.1, blook: "Dino Egg" },
                                                    { type: "fossil", val: 50, rate: 0.175, blook: "Dino Fossil" },
                                                    { type: "fossil", val: 75, rate: 0.175, blook: "Stegosaurus" },
                                                    { type: "fossil", val: 100, rate: 0.15, blook: "Velociraptor" },
                                                    { type: "fossil", val: 125, rate: 0.125, blook: "Brontosaurus" },
                                                    { type: "fossil", val: 250, rate: 0.075, blook: "Triceratops" },
                                                    { type: "fossil", val: 500, rate: 0.025, blook: "Tyrannosaurus Rex" },
                                                    { type: "mult", val: 1.5, rate: 0.05 },
                                                    { type: "mult", val: 2, rate: 0.025 },
                                                ],
                                                3
                                            ));
                                        let max = 0,
                                            index = -1;
                                        for (let i = 0; i < stateNode.state.choices.length; i++) {
                                            const { type, val } = stateNode.state.choices[i];
                                            const value = (type == "fossil" ? stateNode.state.fossils + val * stateNode.state.fossilMult : stateNode.state.fossils * val) || 0;
                                            if (value <= max && type != "mult") continue;
                                            (max = value), (index = i + 1);
                                        }
                                        document.querySelector('div[class*=rockRow] > div[role="button"]:nth-child(' + index + ")").click();
                                    }
                                } catch {}
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Rock ESP",
                    description: "Shows what is under the rocks",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: (() => {
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
                        }
                        const exps = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];
                        const getExpAscii = (num) => {
                            let res = "";
                            while (num > 0) {
                                res = exps[num % 10] + res;
                                num = ~~(num / 10);
                            }
                            return res;
                        };
        
                        function shortNum(value) {
                            let newValue = value.toString();
                            if (value >= 1000) {
                                const suffixes = ["", "K", "M", "B", "T"];
                                const suffixNum = Math.floor(Math.floor((Math.log(value) / Math.log(10)).toPrecision(14)) / 3);
                                if (suffixNum < suffixes.length) {
                                    let shortValue = "";
                                    for (let precision = 3; precision >= 1; precision--) {
                                        shortValue = parseFloat((suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision)).toString();
                                        const dotLessShortValue = shortValue.replace(/[^a-zA-Z 0-9]+/g, "");
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
                        }
                        return function () {
                            if (!this.enabled) {
                                this.enabled = true;
                                this.data = setInterval(() => {
                                    let stateNode = getStateNode();
                                    const rocks = document.querySelector('[class*="rockButton"]').parentElement.children;
        
                                    if (!Array.prototype.every.call(rocks, (element) => element.querySelector("div")))
                                        stateNode.setState(
                                            {
                                                choices: rand(
                                                    [
                                                        { type: "fossil", val: 10, rate: 0.1, blook: "Amber" },
                                                        { type: "fossil", val: 25, rate: 0.1, blook: "Dino Egg" },
                                                        { type: "fossil", val: 50, rate: 0.175, blook: "Dino Fossil" },
                                                        { type: "fossil", val: 75, rate: 0.175, blook: "Stegosaurus" },
                                                        { type: "fossil", val: 100, rate: 0.15, blook: "Velociraptor" },
                                                        { type: "fossil", val: 125, rate: 0.125, blook: "Brontosaurus" },
                                                        { type: "fossil", val: 250, rate: 0.075, blook: "Triceratops" },
                                                        { type: "fossil", val: 500, rate: 0.025, blook: "Tyrannosaurus Rex" },
                                                        { type: "mult", val: 1.5, rate: 0.05 },
                                                        { type: "mult", val: 2, rate: 0.025 },
                                                    ],
                                                    3
                                                ),
                                            },
                                            () => {
                                                Array.prototype.forEach.call(rocks, (element, index) => {
                                                    const rock = stateNode.state.choices[index];
                                                    if (element.querySelector("div")) element.querySelector("div").remove();
                                                    const choice = document.createElement("div");
                                                    choice.style.color = "white";
                                                    choice.style.fontFamily = "Macondo";
                                                    choice.style.fontSize = "1em";
                                                    choice.style.display = "flex";
                                                    choice.style.justifyContent = "center";
                                                    choice.style.transform = "translateY(25px)";
                                                    choice.innerText =
                                                        rock.type === "fossil"
                                                            ? `+${
                                                                  Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? shortNum(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)
                                                              } Fossils`
                                                            : `x${rock.val} Fossils Per Excavation`;
                                                    element.append(choice);
                                                });
                                            }
                                        );
                                }, 50);
                            } else {
                                this.enabled = false;
                                clearInterval(this.data);
                                this.data = null;
                            }
                        };
                    })(),
                },
                {
                    name: "Set Fossils",
                    description: "Sets the amount of fossils you have",
                    run: function () {
                        let fossils = parseInt(prompt("How many fossils would you like?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ fossils });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/f`,
                            val: fossils,
                        });
                    },
                },
                {
                    name: "Set Multiplier",
                    description: "Sets fossil multiplier",
                    run: function () {
                        getStateNode().stateNode.setState({ fossilMult: parseInt(prompt("What do you want your multiplier to be?")) || 0 });
                    },
                },
                {
                    name: "Stop Cheating",
                    description: "Undoes cheating so that you can't be caught",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.setState({ isCheating: false });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/ic`,
                            val: false,
                        });
                    },
                },
            ],
            royale: [
                {
                    name: "Auto Answer (Toggle)",
                    description: "Toggles auto answer on",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(() => {
                                let stateNode = getStateNode();
                                stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                            }, 50);
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Auto Answer",
                    description: "Chooses the correct answer for you",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
                    },
                },
            ],
            defense: [
                {
                    name: "Earthquake",
                    description: "Shuffles around towers",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.setState(
                            {
                                eventName: "Earthquake",
                                event: {
                                    short: "e",
                                    color: "#805500",
                                    icon: "fas fa-mountain",
                                    desc: "All of your towers get mixed up",
                                    rate: 0.02,
                                },
                                buyTowerName: "",
                                buyTower: {},
                            },
                            () => (stateNode.eventTimeout = setTimeout(() => stateNode.setState({ event: {}, eventName: "" }), 6e3))
                        );
                        stateNode.tiles.forEach((row) => row.forEach((col, i) => col == 3 && (row[i] = 0)));
                        let tiles = [];
                        for (let y = 0; y < stateNode.tiles.length; y++) for (let x = 0; x < stateNode.tiles[y].length; x++) if (stateNode.tiles[y][x] == 0) tiles.push({ x, y });
                        tiles.sort(() => Math.random() - Math.random());
                        stateNode.towers.forEach((tower) => {
                            let { x, y } = tiles.pop();
                            tower.move(x, y, stateNode.tileSize);
                            stateNode.tiles[y][x] = 3;
                        });
                    },
                },
                {
                    name: "Max Tower Stats",
                    description: "Makes all placed towers overpowered",
                    run: function () {
                        getStateNode().towers.forEach((tower) => {
                            tower.range = 100;
                            tower.fullCd = tower.cd = 0;
                            tower.damage = 1e6;
                        });
                    },
                },
                {
                    name: "Remove Ducks",
                    description: "Removes ducks",
                    run: function () {
                        let { ducks, tiles } = getStateNode();
                        ducks.forEach((x) => (tiles[x.y][x.x] = 0));
                        ducks.length = 0;
                    },
                },
                {
                    name: "Remove Enemies",
                    description: "Removes all the enemies",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.enemies = stateNode.futureEnemies = [];
                    },
                },
                {
                    name: "Remove Obstacles",
                    description: "Lets you place towers anywhere",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.tiles = stateNode.tiles.map((row) => row.fill(0));
                    },
                },
                {
                    name: "Set Damage",
                    description: "Sets damage",
                    run: function () {
                        getStateNode().dmg = parseInt(prompt("How much dmg would you like?")) || 0;
                    },
                },
                {
                    name: "Set Round",
                    description: "Sets the current round",
                    run: function () {
                        getStateNode().setState({ round: parseInt(prompt("What round do you want to set to?")) || 0 });
                    },
                },
                {
                    name: "Set Tokens",
                    description: "Sets the amount of tokens you have",
                    run: function () {
                        getStateNode().setState({ tokens: parseInt(prompt("How many tokens would you like?")) || 0 });
                    },
                },
            ],
            cafe: [
                {
                    name: "Max Items",
                    description: "Maxes out items in the shop (Only usable in the shop)",
                    run: function () {
                        if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                        else {
                            const stateNode = getStateNode();
                            stateNode.setState({ items: Object.keys(stateNode.state.items).reduce((obj, item) => ((obj[item] = 5), obj), {}) });
                        }
                    },
                },
                {
                    name: "Remove Customers",
                    description: "Skips the current customers (Not usable in the shop)",
                    run: function () {
                        const stateNode = getStateNode();
                        stateNode.state.customers.forEach((customer, i) => window.setTimeout(() => customer.blook && stateNode.removeCustomer(i, true), i * 250));
                    },
                },
                {
                    name: "Reset Abilities",
                    description: "Resets used abilities in shop (Only usable in the shop)",
                    run: function () {
                        if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
                        else {
                            const stateNode = getStateNode();
                            stateNode.setState({ abilities: Object.keys(stateNode.state.abilities).reduce((obj, item) => ((obj[item] = 5), obj), {}) });
                        }
                    },
                },
                {
                    name: "Set Cash",
                    description: "Sets cafe cash",
                    run: function () {
                        let cafeCash = parseInt(prompt("How much cash would you like?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ cafeCash });
                        stateNode.props.liveGameController.setVal({
                            path: `c/${stateNode.props.client.name}/ca`,
                            val: cafeCash,
                        });
                    },
                },
                {
                    name: "Stock Food",
                    description: "Stocks all food to 99 (Not usable in the shop)",
                    run: function () {
                        if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
                        else {
                            const stateNode = getStateNode();
                            stateNode.setState({ foods: stateNode.state.foods.map((e) => ({ ...e, stock: 99, level: 5 })) });
                        }
                    },
                },
            ],
            factory: [
                {
                    name: "Choose Blook",
                    description: "Gives you a blook",
                    data: [
                        { name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3000, 30000, 200000] },
                        { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 10000], time: [5, 4, 3, 2, 1], price: [570, 4000, 50000, 800000] },
                        { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25000, 250000], time: [15, 10, 10, 10, 5], price: [500, 9500, 160000, 4000000] },
                        { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3000, 40000], time: [3, 3, 3, 3, 3], price: [450, 4200, 70000, 1100000] },
                        { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12000], time: [3, 3, 2, 2, 2], price: [500, 6400, 45000, 500000] },
                        { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15000], time: [2, 2, 2, 2, 2], price: [550, 8200, 65000, 600000] },
                        { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8000, 80000], time: [7, 7, 7, 7, 5], price: [400, 11000, 80000, 1300000] },
                        { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11000], time: [3, 3, 3, 2, 2], price: [500, 5000, 50000, 430000] },
                        { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13000], time: [2, 2, 2, 2, 2], price: [480, 5500, 60000, 500000] },
                        { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9000], time: [3, 3, 2, 2, 1], price: [460, 6600, 70000, 730000] },
                        { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35000], time: [3, 3, 3, 3, 3], price: [750, 7200, 84000, 950000] },
                        { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7000], time: [2, 2, 2, 1, 1], price: [500, 5800, 56000, 550000] },
                        { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45000], time: [4, 4, 4, 4, 4], price: [650, 6500, 80000, 930000] },
                        { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15000, 170000], time: [10, 10, 10, 10, 10], price: [700, 8500, 110000, 1300000] },
                        { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3000], time: [1, 1, 1, 1, 1], price: [450, 4000, 35000, 250000] },
                        { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2000], time: [1, 1, 1, 1, 1], price: [350, 3500, 26000, 170000] },
                        { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 100000], time: [7, 7, 6, 5, 5], price: [550, 5500, 63000, 1600000] },
                        { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26000], time: [5, 5, 4, 4, 3], price: [520, 6500, 58000, 700000] },
                        { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3000], time: [2, 2, 1, 1, 1], price: [400, 4000, 36000, 240000] },
                        { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19000], time: [2, 2, 2, 2, 2], price: [400, 5000, 71000, 800000] },
                        { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32000, 210000] },
                        { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15000], time: [2, 2, 2, 2, 2], price: [500, 4800, 55000, 580000] },
                        { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 30000], time: [5, 4, 3, 2, 2], price: [540, 7000, 77000, 1200000] },
                        { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13000], time: [2, 2, 2, 2, 2], price: [480, 4500, 43000, 520000] },
                        { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61000, 680000] },
                        { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16000], time: [3, 3, 2, 2, 2], price: [370, 5300, 76000, 620000] },
                        { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7000], time: [2, 2, 1, 1, 1], price: [540, 5200, 66000, 550000] },
                        { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33000], time: [3, 3, 3, 3, 3], price: [400, 6500, 76000, 870000] },
                        { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33000, 230000] },
                        { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85000], time: [8, 7, 6, 5, 5], price: [630, 7000, 91000, 1400000] },
                        { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51000], time: [5, 5, 4, 4, 4], price: [550, 6200, 68000, 1000000] },
                        { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6000, 70000, 610000] },
                        { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17000], time: [3, 3, 2, 2, 2], price: [390, 6000, 70000, 610000] },
                        { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42000, 300000] },
                        { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18000], time: [4, 4, 2, 2, 2], price: [500, 5000, 63000, 700000] },
                        { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62000, 630000] },
                        { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9000], time: [1, 1, 1, 1, 1], price: [540, 5700, 65000, 690000] },
                        { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21000], time: [5, 3, 2, 2, 2], price: [530, 6500, 76000, 870000] },
                        { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58000, 590000] },
                        { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 70000], time: [5, 5, 5, 4, 4], price: [600, 7000, 80000, 1400000] },
                        { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57000, 680000] },
                        { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5000, 15000, 150000, 1500000, 10000000], time: [1, 1, 1, 1, 1], price: [800000, 9000000, 110000000, 800000000] },
                        { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18000, 60000, 40000, 4000000, 35000000], time: [3, 3, 2, 2, 2], price: [1100000, 12000000, 150000000, 1400000000] },
                        { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65000, 440000, 4600000, 4000000], time: [3, 3, 2, 2, 2], price: [1300000, 13500000, 160000000, 1600000000] },
                        { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 60000, 620000, 4400000, 38000000], time: [3, 3, 3, 2, 2], price: [1200000, 12500000, 15000000, 1500000000] },
                        { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35000, 140000, 1000000, 11000000, 110000000], time: [5, 5, 4, 4, 4], price: [1600000, 15000000, 200000000, 2300000000] },
                        { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25000, 100000, 680000, 6500000, 32000000], time: [3, 3, 2, 2, 1], price: [2000000, 21000000, 230000000, 2600000000] },
                        { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36000, 150000, 1500000, 15000000, 150000000], time: [4, 4, 4, 4, 4], price: [2300000, 24000000, 270000000, 3000000000] },
                        { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24000, 150000, 1400000, 7000000, 75000000], time: [2, 2, 2, 1, 1], price: [4500000, 45000000, 550000000, 6500000000] },
                        { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24000, 95000, 950000, 9700000, 95000000], time: [3, 3, 3, 3, 3], price: [1900000, 20000000, 230000000, 2500000000] },
                        { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75000, 400000, 6000000, 90000000, 1250000000], time: [5, 5, 5, 5, 5], price: [6000000, 95000000, 1600000000, 25000000000] },
                        { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14000, 140000, 1400000, 9000000], time: [1, 1, 1, 1, 1], price: [770000, 8300000, 98000000, 710000000] },
                        { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13000, 45000, 450000, 4500000, 50000000], time: [2, 2, 2, 2, 2], price: [1300000, 14000000, 160000000, 2000000000] },
                        { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12000, 40000, 400000, 4000000, 45000000], time: [2, 2, 2, 2, 2], price: [1200000, 12000000, 140000000, 1800000000] },
                        { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13000, 42000, 210000, 2100000, 23000000], time: [2, 2, 1, 1, 1], price: [1200000, 13000000, 150000000, 1900000000] },
                        { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23000, 87000, 620000, 7500000, 90000000], time: [4, 4, 3, 3, 3], price: [1300000, 13000000, 180000000, 2400000000] },
                        { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17000, 68000, 700000, 3500000, 35000000], time: [2, 2, 1, 1, 1], price: [2000000, 22000000, 250000000, 2800000000] },
                        { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26000, 105000, 11000000, 7700000, 72000000], time: [3, 3, 3, 2, 2], price: [2000000, 23000000, 280000000, 2900000000] },
                        { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32000, 100000, 900000, 9000000, 60000000], time: [4, 3, 3, 3, 2], price: [1800000, 19000000, 220000000, 2400000000] },
                        { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [10000, 70000, 650000, 7500000, 85000000], time: [1, 1, 1, 1, 1], price: [4200000, 42000000, 540000000, 6900000000] },
                        { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38000, 250000, 1500000, 14000000, 80000000], time: [3, 3, 2, 2, 1], price: [4800000, 48000000, 520000000, 6600000000] },
                        { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [80000, 420000, 6800000, 100000000, 1500000000], time: [5, 5, 5, 5, 5], price: [7000000, 110000000, 1800000000, 30000000000] },
                        { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15000, 45000, 600000, 6500000, 65000000], time: [3, 3, 3, 3, 3], price: [1000000, 11000000, 150000000, 1700000000] },
                        { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23000, 65000, 700000, 4500000, 20000000], time: [5, 4, 3, 2, 1], price: [950000, 13000000, 160000000, 1600000000] },
                        { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [10000, 40000, 200000, 2000000, 18000000], time: [2, 2, 1, 1, 1], price: [1400000, 14000000, 150000000, 1500000000] },
                        { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [30000, 100000, 1000000, 11000000, 85000000], time: [4, 4, 4, 4, 4], price: [1500000, 17000000, 190000000, 1700000000] },
                        { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25000, 100000, 900000, 9000000, 90000000], time: [3, 3, 3, 3, 3], price: [2000000, 21000000, 210000000, 2400000000] },
                        { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17000, 70000, 700000, 7000000, 70000000], time: [2, 2, 2, 2, 2], price: [2100000, 23000000, 250000000, 2800000000] },
                        { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [60000, 320000, 2100000, 15000000, 85000000], time: [5, 4, 3, 2, 1], price: [4800000, 46000000, 540000000, 6800000000] },
                        { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45000, 260000, 2500000, 38000000, 550000000], time: [3, 3, 2, 2, 2], price: [6500000, 100000000, 1700000000, 27000000000] },
                        { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4000, 12000, 180000, 1900000, 25000000], time: [1, 1, 1, 1, 1], price: [730000, 12000000, 130000000, 1900000000] },
                        { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16000, 65000, 650000, 4800000, 42000000], time: [3, 3, 3, 2, 2], price: [1300000, 14000000, 170000000, 1600000000] },
                        { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22000, 85000, 800000, 6200000, 65000000], time: [4, 4, 4, 3, 3], price: [1200000, 13000000, 150000000, 1700000000] },
                        { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11000, 45000, 500000, 2500000, 30000000], time: [2, 2, 2, 1, 1], price: [1400000, 15000000, 180000000, 2400000000] },
                        { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24000, 100000, 1000000, 10000000, 100000000], time: [3, 3, 3, 3, 3], price: [2000000, 22000000, 240000000, 2600000000] },
                        { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22000, 95000, 650000, 6500000, 65000000], time: [3, 3, 2, 2, 2], price: [1900000, 21000000, 230000000, 2500000000] },
                        { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [50000, 250000, 2100000, 21000000, 170000000], time: [4, 3, 3, 3, 2], price: [5000000, 46000000, 500000000, 6700000000] },
                        { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [80000, 430000, 4200000, 62000000, 1000000000], time: [5, 5, 3, 3, 3], price: [7000000, 120000000, 1900000000, 35000000000] },
                    ],
                    run: function () {
                        const stateNode = getStateNode();
                        const blook = this.data.find(function ({ name }) {
                            return name.toLowerCase() == this;
                        }, prompt("Enter blook name:").toLowerCase());
                        if (blook) {
                            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
                            stateNode.waiting = false;
                            stateNode.chooseBlook(Object.assign({}, blook));
                        } else alert("That is not a valid blook!");
                    },
                },
                {
                    name: "Free Upgrades",
                    description: "Sets upgrade prices to 0 for all current blooks",
                    run: function () {
                        const prices = [0, 0, 0, 0];
                        let stateNode = getStateNode();
                        stateNode.setState({ blooks: stateNode.state.blooks.map((blook) => ((blook.price = prices), blook)) });
                    },
                },
                {
                    name: "Max Blooks",
                    description: "Maxes out all your blooks' levels",
                    run: function () {
                        getStateNode().state.blooks.forEach((blook) => (blook.level = 4));
                    },
                },
                {
                    name: "Remove Glitches",
                    description: "Removes all enemy glitches",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.setState({
                            bits: 0,
                            ads: [],
                            hazards: [],
                            color: "",
                            lol: false,
                            joke: false,
                            slow: false,
                            dance: false,
                            glitch: "",
                            glitcherName: "",
                            glitcherBlook: "",
                        });
                        clearTimeout(stateNode.adTimeout);
                        clearInterval(stateNode.hazardInterval);
                        clearTimeout(stateNode.nightTimeout);
                        clearTimeout(stateNode.glitchTimeout);
                        clearTimeout(stateNode.lolTimeout);
                        clearTimeout(stateNode.jokeTimeout);
                        clearTimeout(stateNode.slowTimeout);
                        clearTimeout(stateNode.danceTimeout);
                        clearTimeout(stateNode.nameTimeout);
                    },
                },
                {
                    name: "Send Glitch",
                    description: "Sends a glitch to everyone else playing",
                    data: { lb: "Lunch Break", as: "Ad Spam", e37: "Error 37", nt: "Night Time", lo: "#LOL", j: "Jokester", sm: "Slow Mo", dp: "Dance Party", v: "Vortex", r: "Reverse", f: "Flip", m: "Micro" },
                    run: function () {
                        let stateNode = getStateNode();
                        let val = Object.keys(this.data)[Math.floor(Math.random() * 12)];
                        stateNode.safe = true;
                        stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        alert(`Sent a ${this.data[val]} glitch`);
                    },
                },
                {
                    name: "Set All MegaBot",
                    description: "Sets all your blooks to maxed out Mega Bots",
                    run: function () {
                        getStateNode().setState({
                            blooks: Array.from({ length: 10 }, () => ({
                                name: "Mega Bot",
                                color: "#d71f27",
                                class: "🤖",
                                rarity: "Legendary",
                                cash: [8e4, 43e4, 42e5, 62e6, 1e9],
                                time: [5, 5, 3, 3, 3],
                                price: [7e6, 12e7, 19e8, 35e9],
                                active: false,
                                level: 4,
                                bonus: 5.5,
                            })),
                        });
                    },
                },
                {
                    name: "Set Cash",
                    description: "Sets amount of cash you have",
                    run: function () {
                        getStateNode().setState({ cash: parseInt(prompt("How much cash would you like?")) || 0 });
                    },
                },
            ],
            racing: [
                {
                    name: "Instant Win",
                    description: "Instantly Wins the race",
                    run: function () {
                        const stateNode = getStateNode();
                        stateNode.setState({ progress: stateNode.state.goalAmount });
                        stateNode.props.liveGameController.setVal({
                            path: "c/" + stateNode.props.client.name + "/pr",
                            val: stateNode.state.goalAmount,
                        });
                    },
                },
                {
                    name: "Set Questions",
                    description: "Sets the number of questions left",
                    run: function () {
                        let stateNode = getStateNode();
                        let progress = stateNode.props.client.amount - (parseInt(prompt("How many questions left do you want?")) || 0);
                        stateNode.setState({ progress });
                        stateNode.props.liveGameController.setVal({
                            path: "c/" + stateNode.props.client.name + "/pr",
                            val: progress,
                        });
                    },
                },
            ],
            rush: [
                {
                    name: "Set Blooks",
                    description: "Sets amount of blooks you or your team has",
                    run: function () {
                        const numBlooks = parseInt(prompt("How many blooks do you want?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ numBlooks });
                        stateNode.props.liveGameController.setVal({
                            path: (stateNode.isTeam ? "a/" : "c/") + stateNode.props.client.name + "/bs",
                            val: numBlooks,
                        });
                    },
                },
                {
                    name: "Set Defense",
                    description: "Sets amount of defense you or your team has (Max 4)",
                    run: function () {
                        const numDefense = Math.min(parseInt(prompt("How much defense do you want? (Max 4)")) || 0, 4);
                        let stateNode = getStateNode();
                        stateNode.setState({ numDefense });
                        stateNode.props.liveGameController.setVal({
                            path: (stateNode.isTeam ? "a/" : "c/") + stateNode.props.client.name + "/d",
                            val: numDefense,
                        });
                    },
                },
            ],
            tower: [
                {
                    name: "Fill Deck",
                    description: "Fills your deck with every maxed out card and artifact (Only works on towers page)",
                    run: function () {
                        if (window.location.pathname == "/tower/map") {
                            const stateNode = getStateNode();
                            stateNode.props.tower.artifacts =
                                "Medical Kit|Fury Relic|Survival Guide|Steel Socks|Piggy Bank|Lucky Feather|Coupon|Cheese|Tasty Egg|Training Weights|Mighty Shield|Toxic Waste|Lifeline Totem|Cursed Hourglass|Band-Aid|Elder Coins|Captain's Anchor|Chess Pieces|Pink Hippo|Anorak's Wizard Cap|Dave's Doggo|Anubis' Obelisk|Farm Tractor|Magic Seedling|Just A Bone|Cozy Igloo|King's Crown|Sacred Scroll".split(
                                    "|"
                                );
                            stateNode.props.tower.cards =
                                "Chick,🌽|Chicken,🌽|Cow,🌽|Goat,🌽|Horse,🌽|Pig,🌽|Sheep,🌽|Duck,🌽|Dog,🌽|Cat,🐾|Rabbit,🐾|Goldfish,🐾|Hamster,🐾|Turtle,🐾|Kitten,🐾|Puppy,🐾|Bear,🌲|Moose,🌲|Fox,🌲|Raccoon,🌲|Squirrel,🌲|Owl,🌲|Hedgehog,🌲|Baby Penguin,❄️|Penguin,❄️|Arctic Fox,❄️|Snowy Owl,❄️|Polar Bear,❄️|Arctic Hare,❄️|Seal,❄️|Walrus,❄️|Tiger,🌴|Panther,🌴|Cockatoo,🌴|Orangutan,🌴|Anaconda,🌴|Macaw,🌴|Jaguar,🌴|Capuchin,🌴|Toucan,🌴|Parrot,🌴|Elf,⚔️|Witch,⚔️|Wizard,⚔️|Fairy,⚔️|Slime Monster,⚔️|Jester,⚔️|Dragon,⚔️|Unicorn,⚔️|Queen,⚔️|King,⚔️|Snow Globe,☃️|Holiday Gift,☃️|Hot Chocolate,☃️|Gingerbread Man,☃️|Gingerbread House,☃️|Holiday Wreath,☃️|Snowman,☃️|Santa Claus,☃️|Two of Spades,🏰|Eat Me,🏰|Drink Me,🏰|Alice,🏰|Queen of Hearts,🏰|Dormouse,🏰|White Rabbit,🏰|Cheshire Cat,🏰|Caterpillar,🏰|Mad Hatter,🏰|King of Hearts,🏰"
                                    .split("|")
                                    .map((x) => {
                                        const [blook, c] = x.split(",");
                                        return { strength: 20, charisma: 20, wisdom: 20, class: c, blook };
                                    });
                            try {
                                stateNode.props.addTowerNode();
                            } catch {}
                            stateNode.setState({ showDeck: false });
                        } else alert("You need to be on the map to run this cheat!");
                    },
                },
                {
                    name: "Max Cards",
                    description: "Maxes out all the cards in your deck",
                    run: function () {
                        if (window.location.pathname == "/tower/map") {
                            const stateNode = getStateNode();
                            stateNode.props.tower.cards.forEach((card) => {
                                card.strength = 20;
                                card.charisma = 20;
                                card.wisdom = 20;
                            });
                            try {
                                stateNode.forceUpdate();
                            } catch {}
                        } else alert("You need to be on the map to run this cheat!");
                    },
                },
                {
                    name: "Max Health",
                    description: "Fills the player's health",
                    run: function () {
                        if (window.location.pathname == "/tower/battle") getStateNode().setState({ myHealth: 100, myLife: 100 });
                        else alert("You need to be in battle to run this cheat!");
                    },
                },
                {
                    name: "Max Card Stats",
                    description: "Maxes out player's current card (Only works on attribute select page)",
                    run: function () {
                        const stateNode = getStateNode();
                        if (stateNode.state.phase !== "select") alert("You must be on the attribute selection page!");
                        else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
                    },
                },
                {
                    name: "Min Enemy Stats",
                    description: "Makes the enemy card stats all 0 (Only works on attribute select page)",
                    run: function () {
                        const stateNode = getStateNode();
                        if (stateNode.state.phase !== "select") alert("You must be on the attribute selection page!");
                        else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
                    },
                },
                {
                    name: "Set Coins",
                    description: "Try's to set amount of tower coins you have",
                    run: function () {
                        if (window.location.pathname == "/tower/battle")
                            try {
                                getStateNode().props.setTowerCoins(parseInt(prompt("How many coins would you like?")) || 0);
                            } catch {}
                        else alert("You need to be in battle to run this cheat!");
                    },
                },
            ],
            kingdom: [
                {
                    name: "Choice ESP",
                    description: "Shows you what will happen if you say Yes or No",
                    type: "toggle",
                    enabled: false,
                    data: null,
                    run: function () {
                        if (!this.enabled) {
                            this.enabled = true;
                            this.data = setInterval(
                                (stats) => {
                                    let stateNode = getStateNode();
                                    let elements = Array.prototype.reduce.call(document.querySelectorAll("[class*=statContainer]"), (obj, container, i) => ((obj[stats[i]] = container), obj), {});
                                    if (stateNode.state.phase == "choice") {
                                        Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (x) => x.remove());
                                        Object.keys(stateNode.state.guest.yes || {}).forEach((x) => {
                                            if (elements[x] == null) return;
                                            let element = document.createElement("div");
                                            element.className = "choiceESP";
                                            element.style = "font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;";
                                            element.innerText = String(stateNode.state.guest.yes[x]);
                                            elements[x].appendChild(element);
                                        });
                                        Object.keys(stateNode.state.guest.no || {}).forEach((x) => {
                                            if (elements[x] == null) return;
                                            let element = document.createElement("div");
                                            element.className = "choiceESP";
                                            element.style = "font-size: 24px; color: darkred; font-weight: bolder;";
                                            element.innerText = String(stateNode.state.guest.no[x]);
                                            elements[x].appendChild(element);
                                        });
                                        Array.prototype.forEach.call(
                                            document.querySelectorAll("[class*=guestButton][role=button]"),
                                            (x) => (x.onclick = () => Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (x) => x.remove()))
                                        );
                                    }
                                },
                                50,
                                ["materials", "people", "happiness", "gold"]
                            );
                        } else {
                            this.enabled = false;
                            clearInterval(this.data);
                            Array.prototype.forEach.call(document.querySelectorAll(".choiceESP"), (x) => x.remove());
                            this.data = null;
                        }
                    },
                },
                {
                    name: "Disable Tax Toucan",
                    description: "Tax evasion",
                    run: function () {
                        getStateNode().taxCounter = Number.MAX_VALUE;
                    },
                },
                {
                    name: "Max Stats",
                    description: "Sets all resources to the max",
                    run: function () {
                        getStateNode().setState({ materials: 100, people: 100, happiness: 100, gold: 100 });
                    },
                },
                {
                    name: "Set Guests",
                    description: "Sets the amount of guests you've seen",
                    run: function () {
                        getStateNode().setState({ guestScore: parseInt(prompt("How many guests do you want?")) || 0 });
                    },
                },
                {
                    name: "Skip Guest",
                    description: "Skips the current guest",
                    run: function () {
                        getStateNode().nextGuest();
                    },
                },
            ],
            toy: [
                {
                    name: "Remove Distractions",
                    description: "Removes all enemy distractions",
                    run: function () {
                        getStateNode().setState({ fog: !1, dusk: !1, wind: !1, plow: !1, blizzard: !1, force: !1, canada: !1, trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1] });
                    },
                },
                {
                    name: "Send Distraction",
                    description: "Sends a distraction to everyone else playing",
                    data: Object.entries({ c: "Oh Canada", b: "Blizzard", f: "Fog Spell", d: "Dark & Dusk", w: "Howling Wind", g: "Gift Time!", t: "TREES", s: "Snow Plow", fr: "Use The Force" }),
                    run: function () {
                        let [val, name] = this.data[Math.floor(Math.random() * this.data.length)];
                        let stateNode = getStateNode();
                        stateNode.safe = true;
                        stateNode.props.liveGameController.setVal({ path: `c/${stateNode.props.client.name}/tat`, val });
                        alert(`Sent a ${name} distraction`);
                    },
                },
                {
                    name: "Set Toys",
                    description: "Sets amount of toys",
                    run: function () {
                        let toys = parseInt(prompt("How many toys would you like?")) || 0;
                        let stateNode = getStateNode();
                        stateNode.setState({ toys });
                        stateNode.props.liveGameController.setVal({
                            path: "c/" + stateNode.props.client.name + "/t",
                            val: toys,
                        });
                    },
                },
                {
                    name: "Set Toys Per Question",
                    description: "Sets amount of toys per question",
                    run: function () {
                        getStateNode().setState({ toysPerQ: parseInt(prompt("How many toys per question would you like?")) || 0 });
                    },
                },
                {
                    name: "Swap Toys",
                    description: "Swaps toys with someone",
                    run: function () {
                        let stateNode = getStateNode();
                        stateNode.props.liveGameController.getDatabaseVal("c", (val) => {
                            if (val == null) return;
                            const players = [];
                            for (const name in val) {
                                if (name == stateNode.props.client.name) continue;
                                players.push({ name, blook: val[name].b, toys: val[name].t || 0 });
                            }
                            stateNode.setState(
                                {
                                    choosingPlayer: false,
                                    players,
                                    phaseTwo: true,
                                    stage: "prize",
                                    choiceObj: { type: "swap" },
                                },
                                () => setTimeout(() => stateNode.setState({ choosingPlayer: true }), 300)
                            );
                        });
                    },
                },
            ],
            flappy: [
                {
                    name: "Toggle Ghost",
                    description: "Lets you go through the pipes",
                    type: "toggle",
                    enabled: false,
                    run: function () {
                        this.enabled = !this.enabled;
                        for (const body of Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[0].current.config.sceneConfig.physics.world.bodies.entries) {
                            if (!body.gameObject.frame.texture.key.startsWith("blook")) continue;
                            body.checkCollision.none = this.enabled;
                            body.gameObject.setAlpha(this.enabled ? 0.5 : 1);
                            break;
                        }
                    },
                },
                {
                    name: "Set Score",
                    description: "Sets flappy blook score",
                    run: function () {
                        Object.values(document.querySelector("#phaser-bouncy"))[0].return.updateQueue.lastEffect.deps[1](parseInt(prompt("What do you want to set your score to?")) || 0);
                    },
                },
            ],
        }; // .map(x => [x[0], x[1].reduce((a, b) => (a[b.name] = b.run, a), {})]).reduce((a, [b, c]) => (a[b] = c, a), {});
        
        let global = document.createElement("details");
        global.innerHTML = `<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>`;
        for (let script of cheats.global) {
            let cheat = createButton(script.name);
            cheat.style.backgroundColor = script.type == "toggle" ? (script.enabled ? "#47A547" : "#A02626") : "hsl(0, 0%, 20%)";
            cheat.onclick = () => {
                try {
                    script.run();
                } finally {
                    cheat.style.backgroundColor = script.type == "toggle" ? (script.enabled ? "#47A547" : "#A02626") : "hsl(0, 0%, 20%)";
                }
            };
            global.appendChild(cheat);
        }
        global.open = false;
        global.style.paddingBottom = "10px";
        body.appendChild(global);
        
        let cheatDiv = document.createElement("div");
        body.appendChild(cheatDiv);
        
        console.log(cheats);
        const setCheats = (curPage) => {
            if (!curPage || !cheats[curPage]) return;
            for (let cheat of cheats[curPage]) {
                let button = createButton(cheat.name);
                button.style.backgroundColor = cheat.type == "toggle" ? (cheat.enabled ? "#47A547" : "#A02626") : "hsl(0, 0%, 20%)";
                button.onclick = () => {
                    try {
                        cheat.run();
                    } finally {
                        button.style.backgroundColor = cheat.type == "toggle" ? (cheat.enabled ? "#47A547" : "#A02626") : "hsl(0, 0%, 20%)";
                    }
                };
                cheatDiv.appendChild(button);
                cheatDiv.appendChild(document.createElement("br"));
            }
        };
        setTimeout(() => setCheats(getSite()), 50);
        var offLocationChange = onLocationChange((pathname) => {
            let curPage = getSite();
            curPageEl.innerText = getSite(true) ? `Current gamemode: ${getSite(true)}` : "No game detected";
            cheatDiv.innerHTML = "";
            setCheats(curPage);
        });
        
        function onLocationChange(handler) {
            let current = window.location.pathname;
            const interval = setInterval(() => {
                if (window.location.pathname == current) return;
                current = window.location.pathname;
                handler(current);
            }, 50);
            return () => clearInterval(interval);
        }
        
        function createButton(cheat) {
            let button = document.createElement("button");
            button.classList.add("cheat");
            button.innerText = cheat;
            return button;
        }
        function getSite(capitalize) {
            switch (window.location.pathname) {
                case "/play/gold":
                case "/play/gold/final":
                case "/gold/play/landing":
                    return capitalize ? "Gold Quest" : "gold";
                case "/play/hack":
                case "/play/hack/final":
                case "/hack/play/landing":
                    return capitalize ? "Crypto" : "hack";
                case "/play/fishing":
                case "/play/fishing/final":
                case "/fish/play/landing":
                    return capitalize ? "Fishing Frenzy" : "fish";
                case "/play/pirate":
                case "/play/pirate/final":
                case "/pirate/play/landing":
                    return capitalize ? "Pirate's Voyage" : "pirate";
                case "/play/defense2/load":
                case "/play/defense2":
                case "/play/defense2/final":
                case "/defense2/play/landing":
                    return capitalize ? "Tower Defense 2" : "defense2";
                case "/play/brawl/start":
                case "/play/brawl/settings":
                case "/play/brawl":
                case "/play/brawl/final":
                case "/brawl/play/landing":
                    return capitalize ? "Monster Brawl" : "brawl";
                case "/play/dino":
                case "/play/dino/final":
                case "/dino/play/landing":
                    return capitalize ? "Deceptive Dinos" : "dino";
                case "/play/battle-royale/match/preview":
                case "/play/battle-royale/question":
                case "/play/battle-royale/answer/sent":
                case "/play/battle-royale/answer/result":
                case "/play/battle-royale/match/result":
                case "/play/battle-royale/final":
                case "/royale/play/landing":
                    return capitalize ? "Battle Royale" : "royale";
                case "/defense/load":
                case "/defense":
                case "/defense/final":
                case "/defense/play/landing":
                    return capitalize ? "Tower Defense" : "defense";
                case "/cafe/load":
                case "/cafe":
                case "/cafe/shop":
                case "/cafe/final":
                case "/cafe/play/landing":
                    return capitalize ? "Cafe" : "cafe";
                case "/play/factory":
                case "/play/factory/settings":
                case "/play/factory/start":
                case "/play/factory/final":
                case "/factory/play/landing":
                    return capitalize ? "Factory" : "factory";
                case "/play/racing":
                case "/play/racing/final":
                case "/racing/play/landing":
                    return "racing";
                case "/play/rush":
                case "/play/rush/final":
                case "/rush/play/landing":
                    return capitalize ? "Blook Rush" : "rush";
                case "/play/classic/get-ready":
                case "/play/classic/question":
                case "/play/classic/answer/sent":
                case "/play/classic/answer/result":
                case "/play/classic/standings":
                case "/play/classic/final":
                case "/classic/play/landing":
                    return capitalize ? "Classic" : "classic";
                case "/tower/load":
                case "/tower/start":
                case "/tower/map":
                case "/tower/battle":
                case "/tower/rest":
                case "/tower/risk":
                case "/tower/shop":
                case "/tower/victory":
                case "/tower/final":
                case "/tower/play/landing":
                    return capitalize ? "Tower of Doom" : "tower";
                case "/kingdom/start":
                case "/kingdom":
                case "/kingdom/final":
                case "/kingdom/play/landing":
                    return capitalize ? "Crazy Kingdom" : "kingdom";
                case "/play/toy":
                case "/play/toy/final":
                case "/toy/play/landing":
                    return capitalize ? "Santa's Workshop" : "toy";
                case "/play/lobby":
                    return capitalize ? "Lobby" : "flappy";
                default:
                    return false;
            }
        }
        function toggleHidden(e) {
            e.code == "KeyE" && (GUI.hidden = !GUI.hidden);
        }
        addEventListener("keypress", toggleHidden);
        
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/Blooket-Council/Blooket-Cheats/main/autoupdate/timestamps/mobileGui.png?" + Date.now();
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