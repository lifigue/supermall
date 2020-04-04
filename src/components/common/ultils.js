export function debounce(fn,timeout){
    let timer = null
return function(...args){ 
   if(timer) clearTimeout(timer)
   timer = setTimeout(() => { 
   fn.apply(this,args)    
}, timeout);


}
}