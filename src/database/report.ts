import { insertUser, listUsers, closePool } from './db';

async function run() {
    try {
        await insertUser("Катя", "katya@example.com");
        await insertUser("Маша", "masha@example.com");
        await insertUser("Саша", "sasha@example.com");

        const all = await listUsers();
        console.log("Users:", all);

    } catch (err) {
        console.error("Report error:", err);
    } finally {
        await closePool();
    }
}

run();
