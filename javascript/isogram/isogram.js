const normalise = (phrase) => phrase.toLowerCase().replace(/(\s|-)/g, "");

export const isIsogram = (phrase) => {
    const normalised = normalise(phrase);

    return normalised.length === new Set([...normalised]).size;
};
