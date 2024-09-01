# Add Book Unit-Test
   > ###  1. First Test for checking message of successfully adding book
#### There is not any production code so test got failed

![image](https://github.com/user-attachments/assets/dde5b0f6-fa47-456c-a0a2-624528926154)

#### Create Library Class and AddBookHelper Class, implement addBook method.

![image](https://github.com/user-attachments/assets/a5954cf2-a372-430c-a10b-6f6093b8d5f2)

   > ###  2. Test for testing presence of book in Database.
#### In production code there is not Book Class and also getAllBooks method is not present in Library Class so test failed.

![image](https://github.com/user-attachments/assets/928462ad-7f07-47bb-9a79-3055b613a055)

#### Adding code in addBook method for storing book in 'BOOKS' object of Library

![image](https://github.com/user-attachments/assets/b302b2a2-df9c-4354-b410-d714311f6f92)

   > ###  3. All information about book must provided. ( ISBN, title, author, publication_year must provided )
#### If any field of book is not provided then throw an error, there is no code in addBook for checking this so test failed.

![image](https://github.com/user-attachments/assets/4e26d52b-59d0-4d45-ad5b-c43f8559e120)

#### Add check and if any field have not value then throw an error from addBook method of AddBookHelper Class

![image](https://github.com/user-attachments/assets/4f4f640f-bf45-457e-9734-31572a0b0166)

   > ###  4. Test format of ISBN
#### Add test which check that if ISBN is in valid format otherwise throw an error

![image](https://github.com/user-attachments/assets/ccba0326-1696-4741-8dc6-d33c656a9cae)

#### Add code for validate format of ISBN

![image](https://github.com/user-attachments/assets/4fdaba5a-4947-4819-aa6c-5e84b77f310d)

   > ###  5. Test for testing copy_count field of Database which track number of same copy of book.
#### Adding two identical book in test so now copy_count should be 2 for that book.

![image](https://github.com/user-attachments/assets/87e9df6c-76e1-4977-9e0d-8f672c661d18)

#### Implement logic for tracking count of same books

![image](https://github.com/user-attachments/assets/1f63da75-bf04-48f5-9719-8da4b449fe08)

   > ###  6. Test for unique ISBN.
#### Should throw an error if ISBN is already present for different book

![image](https://github.com/user-attachments/assets/b6be9b04-1eb0-4d83-a885-93adec3fba78)

#### Add code in addBook for maintaining uniqueness of ISBN.

![image](https://github.com/user-attachments/assets/780e8add-d260-4b00-bc5f-f5597b661992)




