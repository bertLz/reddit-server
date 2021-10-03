import { MikroORM } from "@mikro-orm/core"
import { Post } from "./entities/Post";
import mikroConf from "./mikro-orm.config"

const main = async () => {
    const orm = await MikroORM.init(mikroConf);
    await orm.getMigrator().up();
    const post = orm.em.create(Post, { title: 'my first post', last: "mcc" })
    await orm.em.persistAndFlush(post)

    const posts = await orm.em.find(Post, {});
    console.log(posts);

}

main().catch((err) => {
    console.error(err);

})
