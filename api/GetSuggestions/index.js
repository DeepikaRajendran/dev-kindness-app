const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const database = client.database(process.env.DATABASE_NAME);
const container = database.container('kindness');

module.exports = async function (context, req) {
    const { resources } = await container.items.query('SELECT * from c').fetchAll();
    context.res = {
        body: resources
    };
}