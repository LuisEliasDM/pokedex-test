export class Endpoints{
    static GENERAL_URL: string = "http://ec2-18-188-194-42.us-east-2.compute.amazonaws.com:4001";
    static LOGIN_URL: string = "/api/login";
    static REGISTER_URL: string = "/api/register"
    static REFRESH_TOKEN_URL: string = "/api/refresh"
    static POKEMON_URL: string = "/mirror/pokemon"

    static getPokemonsList(limit: number, offset: number){
        return `/pokemon/?limit=${limit}&offset=${offset}`
    }

}