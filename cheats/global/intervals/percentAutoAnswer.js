/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) 05Konz 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/05Konz/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    const cheat = (async () => {
        let i = document.querySelector('iframe');
        window.alert = i.contentWindow.alert.bind(window);
        window.prompt = i.contentWindow.prompt.bind(window);
        let aap = null;
        if (getEventListeners(window).keydown?.find(x => (aap = x.listener.aap))) alert(`You already a percent auto answer active at ${aap}! Press ESC to stop it.`);
        else {
            function cancel(e) {
                if (e.key != "Escape") return;
                e.stopImmediatePropagation();
                e.preventDefault();
                window.removeEventListener("keydown", cancel);
                clearInterval(cancel.interval);
            }
            cancel.aap = parseFloat(prompt("What grade do you want to get from this set? (0-100)"));
            while (typeof cancel.aap != "number" || isNaN(cancel.aap)) cancel.aap = parseFloat(prompt("What grade do you want to get from this set? (0-100)\nInvalid Number"));
            cancel.aap += "%";
            window.addEventListener("keydown", cancel);
            alert("Press ESC to stop loop.");
            const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
            cancel.interval = setInterval(TARGET => {
                try {
                    const question = stateNode.state.question || stateNode.props.client.question;
                    if (stateNode.state.stage == "feedback" || stateNode.state.feedback) return document.querySelector('[class*="feedback"], [id*="feedback"]')?.firstChild?.click?.();
                    else if (document.querySelector("[class*='answerContainer']") || document.querySelector("[class*='typingAnswerWrapper']")) {
                        let correct = 0, total = 0;
                        for (let corrects in stateNode.corrects) correct += stateNode.corrects[corrects];
                        for (let incorrect in stateNode.incorrects) total += stateNode.incorrects[incorrect];
                        total += correct;
                        const yes = total == 0 || Math.abs(correct / (total + 1) - TARGET) >= Math.abs((correct + 1) / (total + 1) - TARGET);
                        if (stateNode.state.question.qType != "typing") {
                            const answerContainers = document.querySelectorAll("[class*='answerContainer']");
                            for (let i = 0; i < answerContainers.length; i++) {
                                const contains = question.correctAnswers.includes(question.answers[i]);
                                if (yes && contains || !yes && !contains) return answerContainers[i]?.click?.();
                            }
                            answerContainers[0].click();
                        } else Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(yes ? question.answers[0] : Math.random().toString(36).substring(2));
                    }
                } catch { }
            }, 100, parseFloat(cancel.aap) / 100);
        }
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/global/intervals/percentAutoAnswer.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        let _, time = 1710881112374, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1710881112374 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6")
    }
})();