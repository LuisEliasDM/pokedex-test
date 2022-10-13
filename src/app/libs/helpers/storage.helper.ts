export class StorageHelper{
    public static setItem(key: string, value: any){
        localStorage.setItem(key, JSON.stringify(value))
    }

    public static getItem(key: string){
        try{
            return JSON.parse(localStorage.getItem(key)!)
        }catch(error){
            return null
        }
    }

    public static setSessionStatus(sessionStatus: boolean){
        localStorage.setItem("isAuthenticated", sessionStatus.toString());
    }

    public static getSessionStatus(){
        return localStorage.getItem("isAuthenticated") === "true"
    }

    public static removeItem(item: string){
        localStorage.removeItem(item)
    }
}