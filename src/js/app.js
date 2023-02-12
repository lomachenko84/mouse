const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }

export function orderByProps(e, y) {
let arr = [];
    for (const prop in e) {
        
        let user = {
            key: prop,
            value: e[prop],
            
        }
        arr.push(user);
    }
    
    for (let i=y.length-1; i>=0; i--){
        let elem = arr.find((obj) => obj.key === y[i])
        let index = arr.indexOf(elem);
        if (index != 0 && index !=-1){
            arr.splice (index, 1);
            arr.unshift(elem);
        }
        
    }  
    return arr;
}
