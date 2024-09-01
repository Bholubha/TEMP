# Add Book Unit-Test
   > ###  1. First Test for checking message of successfully adding book
```javascript
   test('should return successfull message of adding book', () => {
        const message = addBookHelperInstance.addBook('978-0135166307',"Effective Java","Joshua Bloch","2018")
        // addBook should return message of type string, if book added successfully
        expect(message).toBe("Book stored successfully")
    });
```
#### There is not any production code so test got failed

![image](https://github.com/user-attachments/assets/dde5b0f6-fa47-456c-a0a2-624528926154)

#### Create Library Class and AddBookHelper Class, implement addBook method.

![image](https://github.com/user-attachments/assets/a5954cf2-a372-430c-a10b-6f6093b8d5f2)

   > ###  2. Test for testing presence of book in Database.
#### In production code there is not Book Class and also getAllBooks method is not present in Library Class so test failed.

![image](https://github.com/user-attachments/assets/1408ef36-f44d-4313-8c54-39341e242f33)

#### Adding code in addBook method for storing book in 'BOOKS' object of Library

![image](https://github.com/user-attachments/assets/10d0d97f-028f-4b47-98b1-6b903df7179a)

   > ###  3. All information about book must provided. ( ISBN, title, author, publication_year must provided )
#### If any field of book is not provided then throw an error, there is no code in addBook for checking this so test failed.

![image](https://github.com/user-attachments/assets/28991836-b766-4dd5-a358-6c74b26f33d6)

#### Add check and if any field have not value then throw an error from addBook method of AddBookHelper Class

![image](https://github.com/user-attachments/assets/74e034da-2ebd-4499-b6e6-11b1253fc959)

   > ###  4. Test format of ISBN
#### Add test which check that if ISBN is in valid format otherwise throw an error

![image](https://github.com/user-attachments/assets/19c5ab70-8525-47a0-9b63-7dfa0fd62d68)

#### Add code for validate format of ISBN

![image](https://github.com/user-attachments/assets/a56f41a7-c947-406f-a51d-e3bc74e0cc51)

   > ###  5. Test for testing copy_count field of Database which track number of same copy of book.
#### Adding two identical book in test so now copy_count should be 2 for that book.

![image](https://github.com/user-attachments/assets/3009d96e-04a0-427e-a8d6-b12da44932b6)

#### Implement logic for tracking count of same books

![image](https://github.com/user-attachments/assets/a9a9e483-efea-4822-8f03-52dc5b052876)

   > ###  6. Test for unique ISBN.
#### Should throw an error if ISBN is already present for different book

![image](https://github.com/user-attachments/assets/1d34fd07-327f-42f0-91c6-811efeb62800)

#### Add code in addBook for maintaining uniqueness of ISBN.

![image](https://github.com/user-attachments/assets/ae77494c-7d10-4c72-978b-90bc5c875203)


# Borrow Book Unit-Test
   > ###  1. Add test for checking that borrowBook should return desired Book object
```javascript
    test('should return details of book correspond to ISBN',()=>{
        addBookHelperInstance.addBook('978-0134845623',"Python Crash Course","Eric Matthes","2015")
        const response = borrowBookHelperInstance.borrowBook('978-0134845623');
        expect(response).toEqual(new Book('978-0134845623',"Python Crash Course","Eric Matthes","2015"))

    })
```
#### There is not BorrowBookHelper class in productionccode so test case fail.

![image](https://github.com/user-attachments/assets/364fc61b-ee1f-45c0-8d30-0493b473ba9d)

#### Create BorrowBookHelper and implement borrowBook Method

![image](https://github.com/user-attachments/assets/6b96cb0e-8916-43d2-a0bf-8ecae8fa7932)

   > ###  2. Add test for testing copy_count field after borrow operation
```javascript
    test('should decrement copy_count of book',()=>{
        addBookHelperInstance.addBook('978-0133379937',"Programming in C","Stephen G. Kochan","2004")
        borrowBookHelperInstance.borrowBook('978-0133379937');
        // copy_count must be zero after borrowing this book
        expect(libraryInstance.getAllBooks()['978-0133379937'].copy_count).toBe(0)
    })
```
#### There is not logic for decrement copy_count field in borrowBook Method so test fail.

![image](https://github.com/user-attachments/assets/ec78080d-81a2-492e-8a2c-f164d558721f)

#### Add logic for decrement copy_count of borrowed book.

![image](https://github.com/user-attachments/assets/43634b82-bafa-4f40-935f-8055241fc1b3)

   > ###  3. Add test that if Book is not present in Database then throw an error.

```javascript
 test('should throw an error if book is not present in Database with provided ISBN',()=>{
        expect(()=>borrowBookHelperInstance.borrowBook('978-0201616224')).toThrow('Book is not present in the database with this ISBN')
    })
```

#### There is not any check for this test in borrowBook so test fail

![image](https://github.com/user-attachments/assets/e08fc001-239a-4f88-ae6a-b9da2f1fbf5a)

#### Add check logic for Book which not present in Database

![image](https://github.com/user-attachments/assets/de7ac781-d33a-40a3-865c-be42246b55b5)

   > ###  4. Add test that if Book is currently unavailable then throw an Error.

```javascript
   test('should throw an error if book is  currently unavailable',()=>{
        addBookHelperInstance.addBook('978-0321563842',"Effective C++","Scott Meyers","2005");
        borrowBookHelperInstance.borrowBook('978-0321563842')
        expect(()=>borrowBookHelperInstance.borrowBook('978-0321563842')).toThrow('Book is currently unavailable')
    })
```

#### borrowBook not check copy_count before returning book so test fail

![image](https://github.com/user-attachments/assets/77f30de0-1359-40ae-9204-27a8fea25357)

#### Add check of copy_count before returning book.

![image](https://github.com/user-attachments/assets/99d2849e-70c8-49a3-83e0-fb10373a11d3)


