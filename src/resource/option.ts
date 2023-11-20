const whitelist: (string | undefined)[] = [
    `https://localhost:8080`,
    `https://localhost:2028`,
    undefined
];

export const corsOption = {
    origin: (origin: any, cb: any) => {
        origin && console.error('origin %o', origin);

        if (whitelist.indexOf(origin) !== -1) {
            cb(null, true);
        } else {
            cb(new Error('Not allowed by Cors'));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true,
};