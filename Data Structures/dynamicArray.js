function dynamicArray(n, queries) {
    // Write your code here
    let lastAnswer = 0
    let arr = []
    let answers = []
    for(let i=0;i<n;i++){
        arr.push([])
    }
    queries.forEach((row)=>{
        let queryType = row[0]
        let x = row[1]
        let y = row[2]
        let idx = (x^lastAnswer)%n
        if(queryType==1){
            arr[idx].push(y)
        }else if(queryType==2){
            let value =  arr[idx][y%arr[idx].length]
            lastAnswer = value
            answers.push(Number(lastAnswer))
        }else{
            return
        }
    })
    return answers
}

let n = 2
let queries = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]
console.log(dynamicArray(n,queries))