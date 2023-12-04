import { request } from "./request";

async function getAddress(cep: string) {
    const response = await request.get(`${process.env.VIA_CEP_API}/${cep}/json/`);

    return response;   
}

export const viaCepRequest = {
    getAddress
}