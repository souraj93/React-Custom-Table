# React-Custom-Table
If you want to display table data as well as sort, paginate, filter the table data here is the solution.You can also show/ hide a column using this.You don't have to fetch all the table data at a time. You can use the pagination to fetch small number of lists at a time. 

#### State of the parent component
```
state = {
     offset: 0,
     data: {
       total: 10,
       data: []
     },
     visibleColumns: [
       "User Name",
       "Contact No.",
       "Email",
       "User Id",
       "Status",
       "Joining Date"
     ],
     skip: 0,
     limit: 2,
     headerFormat: {
       userId: {
         head: "User Id",
         key: "userId",
         isLink:true,
         linkTo:"/web/admin/auth/riders/details/",
         paramName:"id"
       },
       fullName: {
         head: "User Name",
         key: "fullName",
         sort: true,
         option: [
           {
             type: -1,
             isActive: false
           },
           {
             type: 1,
             isActive: false
           }
         ]
       },
       "personalInfo.email": {
         head: "Email",
         key: ["personalInfo", "email"],
         populate: true
       },
       accountStatus: {
         head: "Status",
         key: "accountStatus",
         status:true
       },
       createdAt: {
         head: "Joining Date",
         key: "createdAt"
       }
     }
   };
```
This is the state of the parent component in which the data array, headerformat and visible columns need to be declared. 

#### Example of the data array

```
data = [
 {
   id: 1,
   fullName: "John Doe",
   userImage: "default image url",
   personalInfo: {
     email: "a@a.com"
   },
   userId: "1284-R",
   accountStatus: 1,
   createdAt: "22.05.2019"
 }
]
```
#### Headerformat options

Here are the different types of headerformat examples you can send to the table component. 

1. If the property name is not wrapped inside an object i.e. userId, createdAt etc. we just have to send the option as the following way:

```
userId: {
   head: "User Id",
   key: "userId"
}
```
Property name and the value of the **key** field must be same. The value of the **head** property is the header of the column.


2. If you want to make a column text clickable then you have to send the following details also:
```
userId: {
   head: "User Id",
   key: "userId",
   isLink:true,
   linkTo:"/web/admin/auth/users/details/", // routing path where to be redirected when click on the column text
   paramName:"id" //the property name from the data which is to be set as the param for the details page (if any)
}
```
So, additionally you have to provide the **isLink** property to make the column text clickable, **linkTo** property to send the routing path where to be redirected when you click on the column text, **paramName** property to send the property name from the data which is to be set as the param for the details page. For example, the routing path is **/web/admin/auth/users/details/:userId** and the userId is the value of the property id from the data array. Then set the **paramName** as **id**.

3. If you want to make a column text bold then send the property **isDarkColor** to true.
```
createdAt: {
   head: "Joining Date",
   key: "createdAt",
   isDarkColor: true
}
```
4. If you want to display a square shaped image in a column then you just have to send the **isImage** property to true.
```
profilePhoto: {
   head: "Photo",
   key: "profilePhoto",
   isImage: true
}
```

5. If you want to display an image as well as text in a column then you have to send the **mergePhoto** property to true and you have to send the value of the key property as same as the key of the text (which you want to display in the column) from the data array. Also, you have to send **userImage** property in the data array for the image to display.

```
// Header format option:
fullName: {
   head: "User",
   key: "fullName", // this is the key for the text from the data array 
   mergePhoto: true
}
// Data array
data = [
 {
   fullName: "John Doe",
   userImage: "default image url",
 }
]
```

6. If you want to display status in a column and the status is coming in the number format from the API then you can also display it using this table. You just have to send the config for the status in **statusList** object as a **props** to the component. Also, you have to send **status** property to true.
```
// Header format option:
accountStatus: {
   head: "Status",
   key: "accountStatus",
   status:true
}
// Data array
data = [
 {
   accountStatus: 1
 }
]
// Status list config (send this object as props to the component)
statusList = {
   1: "Active",
   2: "Inactive",
   3: "Expired"
};
```
7. The above five options will not work with the following option (populate property). Those options only work with the 1st option (not a wrapped data to display)
If the property is wrapped inside an object (i.e. **email** property wrapped within **personalInfo** object) within the data array then use the following way:

```
"personalInfo.email": {
   head: "Email",
   key: ["personalInfo", "email"],
   populate: true
}
```
Here you have to send the value of the **key** field as an array of property strings i.e. **["personalInfo", "email"]** and the property of the headerFormat should be property names separated with dots i.e.**personalInfo.email**. Also, make sure you have sent the **populate** field as true.

8. **Sort** option will work with both of the options (option 1 & option 7- where populate option is set as true or false) 
If you want to have sorting option in a column then you have to send the **sort** to true and you have to send **option** array. Option array is for the options for sorting (ascending and descending order)
```
fullName: {
         head: "User Name",
         key: "fullName",
         sort: true,
         option: [
           {
             type: -1,
             isActive: false
           },
           {
             type: 1,
             isActive: false
           }
         ]
}
```

