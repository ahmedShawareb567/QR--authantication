import { createServer } from "./server";
import { dbConnection } from "./_common/database";

// LAUNCH SERVER :)
createServer();

// DATABASE INITIALIZATION
dbConnection();
