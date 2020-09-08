const normalise = (phrase) => {
    return phrase
        .replace(/[^a-z|\s-]/gi, "")
        .split(/\s|-/)
        .filter(Boolean);
};

export const parse = (phrase) => {
    const words = normalise(phrase);

    return words.map(([letter]) => letter.toUpperCase()).join("");
};
