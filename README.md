# React-Custom-Table
If you want to display table data as well as sort, paginate, filter the table data here is the solution.You can also show/ hide a column using this.You don't have to fetch all the table data at a time. You can use the pagination to fetch small number of lists at a time. 

# State of the parent component
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

This is the state of the parent component in which the data array, headerformat and visible columns need to be declared. 
