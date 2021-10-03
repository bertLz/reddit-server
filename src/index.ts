import { MikroORM } from "@mikro-orm/core"
import { Post } from "./entities/Post";
import bob from "./mikro-orm.config"

const main = async () => {
    const orm = await MikroORM.init(bob);

    const post = orm.em.create(Post, { title: 'my first post' })
    await orm.em.persistAndFlush(post)
}

console.log("howdy world!");
