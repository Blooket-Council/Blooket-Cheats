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
    const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        if (stateNode.state.stage == "prize") {
            stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
                if (players == null) return;
                players = Object.entries(players);
                let most = 0, max = 0, index = -1;
                for (let i = 0; i < players.length; i++)
                    if (players[i][0] != stateNode.props.client.name && players[i][1] > most)
                        most = players[i][1];
                for (let i = 0; i < stateNode.state.choices.length; i++) {
                    const choice = stateNode.state.choices[i];
                    let value = stateNode.state.gold;
                    if (choice.type == "gold")
                        value = stateNode.state.gold + choice.val || stateNode.state.gold;
                    else if (choice.type == "multiply" || choice.type == "divide")
                        value = Math.round(stateNode.state.gold * choice.val) || stateNode.state.gold;
                    else if (choice.type == "swap")
                        value = most || stateNode.state.gold;
                    else if (choice.type == "take")
                        value = stateNode.state.gold + most * choice.val || stateNode.state.gold;
                    if ((value || 0) <= max) continue;
                    max = value;
                    index = i + 1;
                }
                document.querySelector("div[class*='choice" + index + "']")?.click();
            });
        }
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/005Konz/Blooket-Cheats/main/autoupdate/timestamps/gold/autoChooseOnce.png?" + Date.now();
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
        let _, time = 1716689127566, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1716689127566 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();