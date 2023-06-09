const express =  require("express")
const app = express()
app.use(express.json())

function addNums(req,res){

    const a= Number(req.query.a);
    const b=Number(req.query.b);

    if (isNaN(a) || isNaN(b)){
        res.send({error: "invalid input"});
    }

    const sum=a+b;
    res.send(
        {
            "sum": sum
        }
    );
}

app.get('/addTwoNums',addNums)



function subtract(req,res){

    const a= Number(req.body.a);
    const b= Number(req.body.b);

    if (isNaN(a) || isNaN(b)){
        res.send({error: "invalid input"});
    }

    const sub=a*b;
    res.send(
        {
            "sub": sub
        }
    );
}

app.get('/sub',subtract)


// app.get('/sub',(req,res) => {
//     const a= Number(req.query.a);
//     const b=Number(req.query.b);

//     if (isNaN(a) || isNaN(b)){
//         res.send({error: "invalid input"});
//         return
//     }

//     const sub=a-b;
//     res.send({"sum": sub});
// })

const port=3001
const ip="localhost"

app.listen(port,ip,function(){
    console.log("I am listning")
})