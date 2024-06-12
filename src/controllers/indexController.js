
module.exports ={
    index :(req, res) =>{
       
        //return res.send(products)
        return res.render('index',
            ({title : 'hola'})
    
        )
    },
  


}