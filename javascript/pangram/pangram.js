const characters = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = (sentence) => {
    const toLower = sentence.toLowerCase();

    return [...characters].every((char) => toLower.includes(char));
};
