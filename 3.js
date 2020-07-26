segitiga = (num) => {
    if (typeof num !== "number"){
    console.log("Data harus angka")
}{
    for (let i = num; i >= 1; i--) {
        let str = ''
        for (let j = 1; j <= i; j++) {
          str += j +''
        }
        console.log(str)
    }
    }
  }
        
segitiga(5)
    
