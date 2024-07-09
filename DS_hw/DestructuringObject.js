//1.ไม่มีการใช้โครงสร้าง Destructuring Array
const book = {
    title: "Harry Plotter",
    publisher: "Wiley",
    price: 300
    }
    const bookname = book.title
    const publisher = book.publisher
    const price = book.price
    console.log(bookname)
    console.log(publisher)
    console.log(price)

//2.
const book2 = {
    title: "Harry Plotter",
    publisher: "Wiley",
    price: 300
    }
    const {title: bookname2, publisher: bkpub, price: bkprice} = book2
    console.log(bookname2)
    console.log(bkpub)
    console.log(bkprice)