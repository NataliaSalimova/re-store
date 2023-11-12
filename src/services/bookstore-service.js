export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Book 1',
            author: 'Author 1',
            price: 32,
            coverImage: '/test'
        },
        {
            id: 2,
            title: 'Book 2',
            author: 'Author 2',
            price: 52,
            coverImage: '/test2'
        },
    ]
    getBooks() {
        return new Promise((resolve)=> {
            setTimeout(()=> {
                resolve(this.data)
            }, 700);
        })
    }
}