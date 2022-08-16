import { disconnectFromDatabase } from "./database";

const shutdownGracefully = (server: any, signals: string[]) => {
  signals.forEach((signal) => {
    process.on(signal, async () => {
      console.log(`Received ${signal}, shutting down gracefully`);
      server.close(async () => {
        console.log("Server gracefully stopped");
        //disconnect from database
        await disconnectFromDatabase();
        process.exit(0);
      });
    });
  });
};

export default shutdownGracefully;
