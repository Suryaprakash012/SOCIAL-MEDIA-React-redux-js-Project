import client from "./client"

export default async function storeInputData(data){
    const response = await client(data);
}