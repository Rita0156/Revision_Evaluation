
let search=document.getElementById("search");
let searchcont=document.getElementById("search-cont");
let id;
async function deBouncing(func,delay){
    if(id){
        clearTimeout(id)
    }
      id= setTimeout(()=>{
          func
      },delay)
}

async function main(q){
    try{
       let req=await fetch(`https://www.omdbapi.com/?s=${q}&apikey=d806bd70`)
       let data= await req.json()
       return data
    }
    
    catch(error){
         console.log(error);
    }
}
//main()

async function searchMovie(){
    let query=search.value;
     let res=await main(query)

     console.log(res,"res");
     appendTitle(res.Search)


}
function appendTitle(movies){
    searchcont.innerHTML=null
    if(movies==undefined){
        return false
    }
  movies.forEach(element => {
    let p=document.createElement("p")
    p.innerText=element.Title
    searchcont.append(p)
  });
}
function appendMovieData(movies){
    searchcont.innerHTML=null
    if(movies==undefined){
        return false
    }
  movies.forEach(element => {
     let div=document.createElement("div")
    let p=document.createElement("h2")
    let img=document.createElement("img")
    let det=document.createElement("button")
    p.innerText=element.Title
    //searchcont.append(p)
  });
}