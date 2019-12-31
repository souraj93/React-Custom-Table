# React-Custom-Table
If you want to display table data as well as sort, paginate the table data here is the solution.You can also show/ hide a column using this.You don't have to fetch all the table data at a time. You can use the pagination to fetch small number of lists at a time. 

#### Calling child component from the parent component
```
<CustomTable
     rows={this.state.data}
     headerFormat={this.state.headerFormat}
     sort={this.handleSortClick}
     visibleColumns={this.state.visibleColumns}
     redirect={this.redirect}
     handleColumnVisibilityChange={
        this.handleColumnVisibilityChange
     }
     statusList={this.statusList}
/>
```

**Note:** Here Material-ui and react-paginate dependencies are used for the design purpose and pagination respectively. You can also use other pagination plugin if you want.
Please ensure you have added the index.css content in your css file.
```
.table-header-wrapper {
  -webkit-box-shadow: -8px 13px 8px -14px rgba(216, 216, 216, 0.75);
  -moz-box-shadow: -8px 13px 8px -14px rgba(216, 216, 216, 0.75);
  box-shadow: -8px 13px 8px -14px rgba(216, 216, 216, 0.75);
}

.table-header-wrapper th {
  padding: 10px 18px 5px;
  line-height: 20px;
  font-weight: bold;
}

.custom-table-body {
  border-top: 1px solid #ccc;
}

//for pagination only
.pagination {
  list-style: none;
  text-align: right;
}

.pagination li {
  display: inline-block;
  background-color: #fff;
  color: #eb5c00;
  padding: 0;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
}

.pagination li:hover {
  background: #eb5c00;
  color: #fff;
}

.pagination .disabled,
.pagination .disabled:hover {
  background-color: #f1f0f0;
  color: #a5a5a5;
  cursor: default;
}

.pagination .previous {
  border-radius: 3px;
}

.pagination .active {
  background-color: #eb5c00;
  color: #fff;
}

.pagination a {
  padding: 8px 13px;
  display: block;
  font-size: 14px;
}

.pagination a:focus {
  outline: none;
}
```


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

#### Props options
Here are the list of options you can send via props to the table component. 

1. If you want to hide the dropdown of the column heading list which is used to show or hide a column then you have to send **hideColumnDropdown** props to true. By default its value is false.

2. You have to send the **visibleColumns** props which is an array which consists with the values (only those column head which you want to display initially) of the head field of the headerFormat option. Make sure you initialize the **visibleColumns** to the state of the parent component.
```
visibleColumns: [
       "User Name",
       "Email",
       "User Id",
       "Status"
]
```
3. You need to send the **handleColumnVisibilityChange** function as a props to the child component. The function is used to handle the column visibility by selecting the column heading from the dropdown of column headings. Also, the table width will be handled by selecting a column from the dropdown. The functionality of the function is as follows:
```
handleColumnVisibilityChange = event => {
   let newState = { ...this.state };
   if (event.target.value.length > this.minColumnLength) {
     document.getElementById("custom_table").style.width =
       document.getElementById("custom_table").clientWidth +
       this.columnWidth +
       "px";
   } else {
     document.getElementById("custom_table").style.width = "1000px";
   }
   newState.visibleColumns = event.target.value;
   this.setState(newState);
 };
```
4. You need to send the **sort** function as props to the child component which is used to handle the sorting within the columns. By default, multisort option is available in the table. You can also set the single sort by changing the logic in the following function.
```
handleSortClick = (option, header, index) => {
   let newState = {
     ...this.state
   };
   newState.headerFormat[header].option.forEach(element => {
     element.isActive = false;
   });
   newState.headerFormat[header].option[index].isActive = true;
  
   this.setState(newState);
   //After the above code you can call API to get the sorted data
 };
```
5. **HeaderFormat** is the main props by which the table is created. I have already discussed different types of header format options above. Keep in mind, headerFormat must be set in the state of the parent component.  Here is a full example of it.
```
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
```
6. You have to send **rows** props for the data object. Keep in mind that, data object must be set in the state initially and data object should be as follows:
```
data: {
       total: 10, // this is the total number of items present for the list i.e. total number of users present in the database
       data: [] //this is the data array for the rows of the table
}
```
7. You have to send **redirect** function which is used to redirect to the details page from the list page when the user clicks on any of the row of the list respective details will be fetched to this function of the parent component and you can redirect according to your need from this function.
```
redirect = data => {
 this.props.history.push(`/user-details/${data.id}`);
 };
```
8. If you want to display status as we discussed in the status section you have to send the **statusList** config object.
```
statusList = {
   1: "Active",
   2: "Inactive",
   3: "Expired"
 };
```

#### How to run
Just download or clone the repository in your terminal. Go inside **React-Custom-Table** folder in the terminal. Type **npm install** to install the dependencies. After that, type the command **npm start or num run start**.
