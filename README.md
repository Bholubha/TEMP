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

![image](https://github.com/user-attachments/assets/780e8add-d260-4b00-bc5f-f5597b661992)




