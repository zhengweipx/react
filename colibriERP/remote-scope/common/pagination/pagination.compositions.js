/*
 * @Descripttion:
 * @version:
 * @Author: lqf
 * @Date: 2021-10-26 18:22:02
 * @LastEditors: lqf
 * @LastEditTime: 2021-10-29 15:19:09
 */
import CPagination from "./index";
import React, { useState } from "react";

const PaginationCommonTest = () => {
  return (
    <div className="App">
      <CPagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      ></CPagination>
    </div>
  );
};
export default PaginationCommonTest;
