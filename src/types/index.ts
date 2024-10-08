export interface Env {
	DB: D1Database;
	JWT_SECRET: string;
	OPENAI_API_KEY: string;
}

export interface User {
	UserId?: number;
	email?: string;
	user_password?: string;
	analyze_requests?: number;
}
