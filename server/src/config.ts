import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT ?? 4000,
    CORS_ORIGIN: process.env.CORS_ORIGIN ?? "*",
    // DB_URI: process.env.DB_URI ?? 'postgres://postgres:12345@localhost:5432/hrdb',
    // DB_URI: process.env.DB_URI ?? 'postgres://koyeb-adm:y67uAqbPRCTe@ep-lingering-rain-63477638.eu-central-1.aws.neon.tech/koyebdb',
    DB_URI: process.env.DB_URI ?? 'postgresql://NazimLeeman:ETt7GQg9xukI@ep-dawn-sun-53863901.us-east-2.aws.neon.tech/hrdb?sslmode=require',
    JWT_SECRET: process.env.JWT_SECRET ?? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6Ijk1ODE1ZWY1ZDQwZDk1MzE0M2Q4MjY4MWUxZGJjYzY0In0.e30.WzO5pZv7CMNCRGExFCSuNMGpqKkK0Dc4bJ2mdq0JrXIxsItW9l13nkb7H32G0QA0eLGreu7CE2dR6mX-AzUn5A',
    SKELETON_BE_URL: process.env.SKELETON_BE_URL ?? 'https://sak-skeleton-samiya-kazi.koyeb.app'
}

export default config;