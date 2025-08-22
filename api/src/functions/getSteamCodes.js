const { app } = require('@azure/functions');

app.http('getSteamCodes', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Read codes from environment variables
        const codes = [
            process.env.STEAM_CODE_1,
            process.env.STEAM_CODE_2,
            process.env.STEAM_CODE_3
        ];

        return {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ codes })
        };
    }
});
