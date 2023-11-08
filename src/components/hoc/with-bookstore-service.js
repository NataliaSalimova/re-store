import React from 'react';
import { BookstoreServceConsumer } from '../bookstore-service-context';

const withBookstoreService = (Wrapped)=> {
    return (props)=> {
        return (
            <BookstoreServceConsumer>
                {
                    (bookstoreService)=> {
                        return (<Wrapped { ...props }
                            bookstoreService={bookstoreService}/>)
                    }
                }
            </BookstoreServceConsumer>
        )
    }
}

export default withBookstoreService;