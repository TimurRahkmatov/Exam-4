import resolvers from "./resolvers";

import fs from "fs"
import { resolve } from "path"


const schema = fs.readFileSync(resolve("src", "modules", "Restaurant/schema.gql"), "utf-8")


export default {
    resolvers: resolvers,
    typeDefs: schema
}
