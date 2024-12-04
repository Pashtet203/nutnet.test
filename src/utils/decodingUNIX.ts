export function decodingUNIX(time:number){

    let date = new Date(time * 1000);
    return date.getHours() + ":" + date.getMinutes()


}