export const checkResponse = async <T>(response: Response): Promise<T> =>{
    const contentLength = response.headers.get("Content-Length");
    if(response.ok)
        return (response.status !== 204 && (contentLength === null || Number(contentLength) > 0)) ? response.json() : ""
    else return response.text().then(err=> Promise.reject(err))
}