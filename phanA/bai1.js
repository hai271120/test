function sapxep(a,b){ 
const g = (a,b) => {
const k = a.concat(b)
const d = a.filter((x) => b.indexOf(x) !== -1)
const j = k.filter((x) => d.indexOf(x) === -1)
console.log(j)
}
console.log(g(a,b));
}
sapxep([1,2,'a'],[1,3,'b'])