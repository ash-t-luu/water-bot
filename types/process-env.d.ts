export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            DISCORD_TOKEN: string;
            CLIENT_ID: string;
            GUILD_ID: string;
            WEBHOOK_ID: string;
            WEBHOOK_TOKEN: string;
            J_ID: string;
            A_ID: string;
            CHANNEL_ID: string;
        }
    }
}