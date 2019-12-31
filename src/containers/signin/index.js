import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import CustomTable from "./CustomTable";
import ReactPaginate from "react-paginate";

const data = [
  {
    id: 1,
    personalInfo: {
      fullName: "John Doe",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 1,
    createdAt: "22.05.2019"
  },
  {
    id: 2,
    personalInfo: {
      fullName: "Nevine Acotanza",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 2,
    createdAt: "22.05.2019"
  },
  {
    id: 1,
    personalInfo: {
      fullName: "John Doe1",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 1,
    createdAt: "22.05.2019"
  },
  {
    id: 2,
    personalInfo: {
      fullName: "Nevine Acotanza1",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 2,
    createdAt: "22.05.2019"
  },
  {
    id: 1,
    personalInfo: {
      fullName: "John Doe2",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 1,
    createdAt: "22.05.2019"
  },
  {
    id: 2,
    personalInfo: {
      fullName: "Nevine Acotanza2",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 2,
    createdAt: "22.05.2019"
  },
  {
    id: 1,
    personalInfo: {
      fullName: "John Doe3",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 1,
    createdAt: "22.05.2019"
  },
  {
    id: 2,
    personalInfo: {
      fullName: "Nevine Acotanza3",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 2,
    createdAt: "22.05.2019"
  },
  {
    id: 1,
    personalInfo: {
      fullName: "John Doe4",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 1,
    createdAt: "22.05.2019"
  },
  {
    id: 2,
    personalInfo: {
      fullName: "Nevine Acotanza4",
      phone: { number: "9876543210" },
      email: "a@a.com"
    },
    userId: "1284-R",
    accountStatus: 2,
    createdAt: "22.05.2019"
  }
];

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        "personalInfo.fullName": {
          head: "User Name",
          key: ["personalInfo", "fullName"],
          populate: true,
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
        "personalInfo.phone.number": {
          head: "Contact No.",
          key: ["personalInfo", "phone", "number"],
          populate: true
        },
        accountStatus: {
          head: "Status",
          key: "accountStatus",
          status:true,
          populate: false
        },
        createdAt: {
          head: "Joining Date",
          key: "createdAt"
        }
      }
    };
  }

  columnWidth = 100;
  minColumnLength = 5;

  statusList = {
    1: "Active",
    2: "Inactive",
    3: "Expired"
  };

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

  componentDidMount() {
    this.getList(this.state.skip,this.state.limit);
  }

  getList = (skip,limit) =>{
    //handle the pagination locally without API call
    let localList= [...data];
    let filteredList=[];
    for(let item=skip;item<skip+limit;item++) {
      filteredList.push({...localList[item]});
    }
    this.setState({
      ...this.state,
      data:{
        total:this.state.data.total,
        data:[...filteredList]
      }
    })
    //else you can call API without using the above code
  }

  redirect = event => {

  };

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

  handlePageClick = data => {
    this.getList(data.selected * this.state.limit, this.state.limit);
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
          <Grid container>

            <Grid item xs={12} sm={12} style={{ paddingTop: 0 }}>
              {Object.keys(this.state.data).length ? (
                // code for the custom table component
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
              ) : null}
            </Grid>
            {/* code for pagination */}
            <Grid item xs={12} sm={12} style={{ paddingTop: 0 }}>
              <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </Grid>

          </Grid>
        </div>
      
    );
  }
}

export default (
  withStyles(
    theme => ({
      ...styles(theme)
    }),
    { withTheme: true }
  )(Users)
);
