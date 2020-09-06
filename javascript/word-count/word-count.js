const normalise = (string) => {
    return string
        .toLowerCase()
        .replace(/[^a-z\d\s,']/gi, "")
        .split(/\s|,/)
        .map((string) => string.replace(/'(.*?)'/g, "$1"))
        .filter(Boolean);
};

export const countWords = (sentence) => {
    const words = normalise(sentence);
    const counts = words.reduce((branches, word) => {
        const occurrences = {
            ...branches,
            [word]: branches[word] ? branches[word] + 1 : 1,
        };

        return occurrences;
    }, {});

    return counts;
};
