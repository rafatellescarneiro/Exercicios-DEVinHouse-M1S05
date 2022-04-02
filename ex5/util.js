export function somar(...params){
    return params.reduce((acc, num) => acc + num, 0)
}