

export function debounce(func:(...args:any[]   ) =>any, timeout: number) {
    let lastCall = Date.now();
    let lastCallTimer: NodeJS.Timeout;
    return (...args:any[]) => {
        let previousCall = lastCall;
        lastCall = Date.now();

        if(previousCall && lastCall - previousCall <= timeout){
            clearTimeout(lastCallTimer);
        }
        lastCallTimer = setTimeout(()=> func(...args), timeout);
    }
}