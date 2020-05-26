const { CosmosClient } = require("@azure/cosmos");
const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });
const database = client.database(process.env.DATABASE_NAME);
const container = database.container('kindness');

module.exports = async function (context, req) {
    await container.items.create(req.body);
    context.res = {
        status: 201
    };
}