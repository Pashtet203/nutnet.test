export type TCityList = {
    country: string,
    lat: number,
    local_names:{
        ru: string
    } | undefined,
    lon:string,
    name: string,
    state:string
}