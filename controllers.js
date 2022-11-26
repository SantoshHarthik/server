const books= require('./models/books')


exports.home= async(req,res)=>{
    console.log('hello');
}

exports.getbooks= async(req,res)=>{
    try {
        const allbooks=await books.find()
        res.send(allbooks)
    } catch (error) {
        res.send(error)
    }
}

exports.postbook= async(req,res)=>{
    try {
        const allbooks= await books.create(req.body)
    // res.status(200).redirect('/')
    } catch (error) {
        console.log(error);
        res.send(error)   
    }
}

exports.getbyid= async(req,res)=>{
    try {
        const {id}= req.params
        const book=await books.findById(id)
        res.send(book)
    } catch (error) {
        res.send(error)       
    }
}

exports.deleteall=async(req,res)=>{
    try {
        await books.deleteMany()
        res.send('deleted all')
    } catch (error) {
        res.send(error)        
    }
}

exports.deletebook=async(req,res)=>{
    const id = req.params.id;
    let book;
    try {
      book = await books.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
}

exports.updatebook= async(req,res)=>{
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
      book = await books.findByIdAndUpdate(id, {
        name,
        author,
        description,
        price,
        available,
        image,
      });
      book = await book.save();
    } catch (err) {
      console.log(err);
    }
    if (!book) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ book });
}