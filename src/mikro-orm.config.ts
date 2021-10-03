import { PROD } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post],
    dbName: "reddit",
    user: 'bertLz',
    type: 'postgresql',
    debug: !PROD
} as Parameters<typeof MikroORM.init>[0];

