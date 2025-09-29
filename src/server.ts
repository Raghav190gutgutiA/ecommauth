import app from "./app.js";
import { Config } from "./config/index.js";
import logger from "./config/logger.js";

const startServer = async () => {
    const PORT = Config.PORT;
    console.log("port", PORT);
    try {
        // await AppDataSource.initialize();
        // logger.info("Database connected successfully.");
        app.listen(PORT, () => logger.info(`Listening on port ${PORT}`));
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err.message);
            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
};
void startServer();
