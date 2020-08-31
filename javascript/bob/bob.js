const REPLIES = {
    silence: "Fine. Be that way!",
    question: "Sure.",
    shouting: "Whoa, chill out!",
    shoutingQuestion: "Calm down, I know what I'm doing!",
    whatever: "Whatever.",
};

const REPLY_ORDER = ["silence", "shoutingQuestion", "question", "shouting"];

const responseFn = {
    silent: (message) => message === "",
    question: (message) => message[message.length - 1] === "?",
    shouting: (message) =>
        message.match(/[a-z]/i) &&
        [...message].every((m) => m === m.toUpperCase()),
};

const responses = {
    silence: responseFn.silent,
    question: responseFn.question,
    shouting: responseFn.shouting,
    shoutingQuestion: (message) =>
        responseFn.shouting(message) && responseFn.question(message),
};

export const hey = (message) => {
    const reply = REPLY_ORDER.find((reply) => responses[reply](message.trim()));

    return REPLIES[reply] || REPLIES.whatever;
};
