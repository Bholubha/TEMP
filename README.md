# Add Book Unit-Test
   > ###  1. First Test for checking message of successfully adding book
There is not any production code so test got failed
![image](https://github.com/user-attachments/assets/fcd397cb-1234-4869-a591-92144747e47a)
Adding some production code for passing the failed test
![image](https://github.com/user-attachments/assets/176761b1-b75d-444f-969d-bb6a2c53005a)
   > ###  2. Test for testing presence of book in Database.
In production code there is not Book Class and also getAllBooks method is not present in Library Class so test failed.
![image](https://github.com/user-attachments/assets/928462ad-7f07-47bb-9a79-3055b613a055)
Adding code in addBook method for storing book in 'BOOKS' object of Library

![image](https://github.com/user-attachments/assets/b302b2a2-df9c-4354-b410-d714311f6f92)

   > ###  3. All information about book must provided. ( ISBN, title, author, publication_year must provided )
If any field of book is not provided then throw an error, there is no code in addBook for checking this so test failed.

![image](https://github.com/user-attachments/assets/4e26d52b-59d0-4d45-ad5b-c43f8559e120)

Add check and if any field have not value then throw an error from addBook method of AddBookHelper Class

![image](https://github.com/user-attachments/assets/4f4f640f-bf45-457e-9734-31572a0b0166)

   > ###  4. Test format of ISBN
#### add test which check that if ISBN is in valid format otherwise throw an error
