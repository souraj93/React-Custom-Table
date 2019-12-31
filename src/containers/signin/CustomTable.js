import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";


const styles = theme => ({
  root: {
    width: "100%",
    boxShadow: "none"
  },
  table: {
    width: "100%"
  },
  tableWrapper: {
    overflowX: "auto",
    maxWidth: "100%",
    paddingBottom: "15px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    paddingRight: "0"
  },
  header: {
    position: "relative"
  },
  sortOption: {
    position: "absolute",
    marginRight: "5px",
    fontSize: "18px"
  },
  sortUpArrow: {
    top: "50%",
    cursor: "pointer",
    transform: "translateY(-80%)"
  },
  sortBottomArrow: {
    bottom: "50%",
    cursor: "pointer",
    transform: "translateY(80%)"
  },
  headerText: {
    fontSize: "14px"
  },
  headerRow: {
    height: "20px"
  },
  filterRow: {
    height: "0px"
  },
  headerCell: {
    borderBottom: "0",
    width: "50px",
    padding: "10px 18px 20px"
  },
  filterInput: {
    width: "80%"
  },
  filterCell: {
    width: "50px",
    padding: "4px 10px 15px"
  },
  headText: {
    marginRight: "20px"
  },
  headTextGlobal: {
    display: "inline-block",
    verticalAlign: "super",
    fontWeight: "500",
    color: "#444"
  },
  filterIcon: {
    float: "right",
    cursor: "pointer",
    fontSize: "18px"
  },
  visibleColumnsSelect: {
    visibility: "hidden",
    height: 0
  },
  filterIconDiv: {
    display: "inline-block",
    verticalAlign: "top"
  },
  tableDataCell: {
    width: "200px",
    padding: "4px 10px 4px 14px",
    fontSize: "14px"
  },
  tableImageMergeCell: {
    width: "300px",
    padding: "4px 10px 4px 14px",
    fontSize: "14px",
    fontWeight: "500"
  },
  tableImageDataCell: {
    width: "11%",
    padding: "8px 10px",
    borderBottom: 0
  },
  showColumnIcon: {
    cursor: "pointer"
  },
  footerCell: {
    padding: "4px 10px"
  },
  imageItem: {
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "60px",
    backgroundSize: "contain"
  },
  colorSwitchBase: {
    color: "#EB5C00",
    "&$colorChecked": {
      color: "#EB5C00",
      "& + $colorBar": {
        backgroundColor: "#EB5C00"
      }
    }
  },
  colorBar: {},
  colorChecked: {},
  darkFont: {
    fontWeight: 500
  },
  textColor: {
    color: "#777"
  },
  toggleText: {
    display: "block",
    marginLeft: "20px",
    color: "#777"
  },
  selectForPendingStatus: {
    backgroundColor: "#d5f2e3",
    borderLeft: "10px solid #EB5C00"
  },
  avatar: {
    display: "inline-block",
    margin: "10px 5px 10px 0",
    verticalAlign: "middle"
  },
  columnControl: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "15px 0px 0",
    justifyContent: "flex-end",
    alignItems: "center",
    "& span": {
      fontSize: "13px",
      marginRight: "5px"
    }
  }
});

class CustomTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleColumnSelect() {
    document.getElementById("select_column").previousSibling.click();
  }

  formatWrappedObject(key, item) {
    var value = item;
    if (typeof key !== "string") {
      key.forEach(function (each) {
        value = value[each];
      });
    } else {
      value = value[key] || (value[key] !== 0 ? "N/A" : 0);
    }
    return value;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table} id="custom_table">
              {/* Header of the table */}
              <TableHead className="table-header-wrapper">
                {/* Row of the header */}
                <TableRow className={classes.headerRow}>
                  {/* Creating column of the header by loop */}
                  {Object.keys(this.props.headerFormat).map((header, index) => {
                    return this.props.visibleColumns.indexOf(
                      this.props.headerFormat[header].head
                    ) > -1 ? (
                        <TableCell
                          key={index}
                          className={classes.header + " " + classes.headerCell}
                        >
                          <div className={classes.headerText}>

                            {/* for header text */}
                            {/* modify styling if sort option available */}
                            {this.props.headerFormat[header].sort ? (
                              <div
                                className={
                                  classes.headText + " " + classes.headTextGlobal
                                }
                              >
                                {this.props.headerFormat[header].head}
                              </div>
                            ) : (
                                <div className={classes.headTextGlobal}>
                                  {this.props.headerFormat[header].head}
                                </div>
                              )}
                            {/* for sorting */}
                            {this.props.headerFormat[header].sort
                              ? this.props.headerFormat[header].option.map(
                                (option, index1) => {
                                  return option.isActive === false ? (
                                    option.type === -1 ? (
                                      <ExpandMore
                                        onClick={() =>
                                          this.props.sort(
                                            option,
                                            header,
                                            index1
                                          )
                                        }
                                        key={index1}
                                        className={
                                          classes.sortOption +
                                          " " +
                                          classes.sortBottomArrow
                                        }
                                      />
                                    ) : (
                                        <ExpandLess
                                          onClick={() =>
                                            this.props.sort(
                                              option,
                                              header,
                                              index1
                                            )
                                          }
                                          key={index1}
                                          className={
                                            classes.sortOption +
                                            " " +
                                            classes.sortUpArrow
                                          }
                                        />
                                      )
                                  ) : null;
                                }
                              )
                              : null}
                          </div>
                        </TableCell>
                      ) : null;
                  })}
                </TableRow>
              </TableHead>
              {/* Body of the table */}
              <TableBody className="custom-table-body">
                {/* Creating rows by loop */}
                {this.props.rows.data.map((row, ind) => {
                  return <TableRow
                    key={ind}
                    onClick={() => {
                      this.props.redirect();
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {Object.keys(this.props.headerFormat).map(
                      (header, index) => {
                        return this.props.visibleColumns.indexOf(
                          this.props.headerFormat[header].head
                        ) > -1 ? (
                            this.props.headerFormat[header].isImage ? (
                              <TableCell
                                key={index}
                                className={classes.tableImageDataCell}
                              >
                                {/* if the column is for displaying image only */}
                                <div
                                  className={classes.imageItem}
                                  style={{
                                    backgroundImage: `url(${
                                      row[this.props.headerFormat[header].key]
                                      })`
                                  }}
                                />
                              </TableCell>
                            ) : this.props.headerFormat[header].mergePhoto ? (
                              <TableCell
                                key={index}
                                className={classes.tableImageMergeCell}
                              >
                                {/* if the column is for displaying image with text */}
                                <span>
                                  <Avatar
                                    alt="user"
                                    src={row["userImage"]}
                                    className={classes.avatar}
                                  />
                                  <div
                                    style={{
                                      display: "inline-block",
                                      verticalAlign: "middle",
                                      width: "60%"
                                    }}
                                  >
                                    {row[this.props.headerFormat[header].key]}
                                  </div>
                                </span>
                              </TableCell>
                            ) : (
                                  <TableCell
                                    key={index}
                                    className={classes.tableDataCell}
                                  >
                                    {/* if the column is for displaying normal texts */}
                                    {!this.props.headerFormat[header].populate ? (
                                      this.props.headerFormat[header].status ? (
                                        <span>
                                          {/* if the column is for displaying the status with different colors */}{" "}
                                          {
                                            this.props.statusList[
                                            row[
                                            this.props.headerFormat[header].key
                                            ]
                                            ]
                                          }{" "}
                                        </span>
                                      ) : this.props.headerFormat[header].isLink ? (
                                        <span>
                                          {/* if the column is for displaying links which will redirect to new page */}
                                          <Link
                                            to={
                                              this.props.headerFormat[header]
                                                .linkTo +
                                              row[
                                              this.props.headerFormat[header]
                                                .paramName
                                              ]
                                            }
                                          >
                                            {
                                              row[
                                              this.props.headerFormat[header].key
                                              ]
                                            }
                                          </Link>
                                        </span>
                                      ) :  this.props.headerFormat[header]
                                        .isDarkColor ? (
                                                <span className={classes.darkFont}>
                                                  {/* if the column is for displaying text with bold font */}
                                                  <span>
                                                    {
                                                      row[
                                                      this.props.headerFormat[header].key
                                                      ]
                                                    }
                                                  </span>
                                                </span>
                                              )  : (
                                                  <span className={classes.textColor}>
                                                    {/* if the column is for displaying noraml text */}
                                                    {row[this.props.headerFormat[header].key]}
                                                  </span>
                                                )
                                    ) : (
                                        <span className={classes.textColor}>
                                          {/* if the column is for displaying text in wrapped object */}{" "}
                                          {this.formatWrappedObject(
                                            this.props.headerFormat[header].key,
                                            row
                                          )}{" "}
                                        </span>
                                      )}
                                  </TableCell>
                                )
                          ) : null;
                      }
                    )}
                  </TableRow>

                })}
              </TableBody>
            </Table>
          </div>
        </Paper>
        {!this.props.hideColumnDropdown ? (
          <FormControl
            className={classNames(classes.formControl, classes.columnControl)}
          >
            <Select
              multiple
              value={this.props.visibleColumns}
              onChange={this.props.handleColumnVisibilityChange}
              input={<Input id="select-multiple-checkbox" />}
              renderValue={selected => ""}
              className={classes.visibleColumnsSelect}
              id="select_column"
            >
              {Object.keys(this.props.headerFormat).map((header, index) => (
                <MenuItem
                  key={index}
                  value={this.props.headerFormat[header].head}
                >
                  <ListItemText
                    primary={this.props.headerFormat[header].head}
                  />
                </MenuItem>
              ))}
            </Select>
            <span>Visible columns</span>
            <ViewColumn
              className={classes.showColumnIcon}
              onClick={this.toggleColumnSelect}
            />
          </FormControl>
        ) : null}
      </div>
    );
  }
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomTable);
