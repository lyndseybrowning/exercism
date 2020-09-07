export const transform = (data) => {
    return Object.keys(data).reduce((etl, point) => {
        const score = Number(point);

        data[point].forEach((letter) => {
            etl[letter.toLowerCase()] = score;
        });

        return etl;
    }, {});
};
