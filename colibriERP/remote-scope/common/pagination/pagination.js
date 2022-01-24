/*
 * @Descripttion:
 * @version:
 * @Author: lqf
 * @Date: 2021-10-26 15:03:37
 * @LastEditors: lqf
 * @LastEditTime: 2021-10-29 17:08:48
 */
import React, { Fragment } from "react";
import 'antd/dist/antd.css'; 
import "./pagination.scss";
import { Pagination } from "antd";
export default (props) => {
  return (
    <Fragment>
      <Pagination
       {...props}
      />
    </Fragment>
  );
};
