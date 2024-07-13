declare namespace NodeJS {
    interface Process {
        env: {
            NODE_ENV: 'development' | 'production';
            API_URL: string;
            GITHUB_ACCESS_TOKEN: string;
        };
    }
}
