var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Cursor {
    constructor(id) {
        this.blinkTime = 1000;
        this.hide = () => {
            this.element.classList.add("invisible");
            this.element.classList.remove("visible");
        };
        this.show = () => {
            this.element.classList.add("visible");
            this.element.classList.remove("invisible");
        };
        this.element = document.getElementById(id);
        this.startBlinking();
    }
    startBlinking() {
        this.blinkerInterval = setInterval(() => {
            setTimeout(this.hide, 0);
            setTimeout(this.show, this.blinkTime * 0.4);
        }, this.blinkTime);
        this.show();
    }
    stopBlinking() {
        clearInterval(this.blinkerInterval);
    }
    hasMovedHook() {
        this.stopBlinking();
        this.startBlinking();
    }
}
let charPause = { from: 50, to: 150 };
let enterPause = { from: 4000, to: 8000 };
let removePause = { from: 1000, to: 4000 };
const startTyping = ({ textId, cursorId, text = "", repetitionNumber = Infinity }) => __awaiter(this, void 0, void 0, function* () {
    let element = document.getElementById(textId);
    let remainingChars = text.split(''); //.reverse();
    let cursor = new Cursor(cursorId);
    let enterText = () => {
        return new Promise((resolver) => __awaiter(this, void 0, void 0, function* () {
            while (remainingChars.length) {
                yield enterChar(remainingChars.splice(0, 1)[0]);
            }
            setTimeout(resolver.bind(this), getRandomWaitTime(enterPause));
        }));
    };
    let enterChar = (char) => {
        return new Promise(resolver => {
            element.innerText += char;
            setTimeout(resolver.bind(this), getRandomWaitTime(charPause));
            cursor.hasMovedHook();
        });
    };
    let removeText = () => {
        return new Promise((resolver) => __awaiter(this, void 0, void 0, function* () {
            if (element.innerText.length) {
                yield removeChar(400);
            }
            while (element.innerText.length) {
                yield removeChar(40);
            }
            remainingChars.reverse();
            setTimeout(resolver.bind(this), getRandomWaitTime(removePause));
        }));
    };
    let removeChar = (waitTime = getRandomWaitTime(charPause)) => {
        return new Promise(resolver => {
            let innerText = element.innerText;
            let length = innerText.length;
            remainingChars.push(innerText.substring(length - 1, length));
            element.innerText = element.innerText.substring(0, length - 1);
            setTimeout(resolver.bind(this), waitTime);
            cursor.hasMovedHook();
        });
    };
    yield enterText();
    while (repetitionNumber--) {
        yield removeText();
        yield enterText();
    }
});
let getRandomWaitTime = (interval) => {
    return Math.random() * (interval.to - interval.from) + interval.from;
};
startTyping({ textId: "dev_text", cursorId: "dev_cursor", text: " a Developer." });
startTyping({ textId: "dev_text_2", cursorId: "dev_cursor_2" });
generic.luck
    / give;
halasiBenedek;
diamond_axe;
{
    Unbreakable: 1, AttributeModifiers;
    [{ Slot: "mainhand", AttributeName: "generic.attackDamage", Name: "generic.attackDamage", Amount: 100, Operation: 1 }, { Slot: "mainhand", AttributeName: "generic.luck", Name: "generic.luck", Amount: 1000, Operation: 0 }];
}
1;
