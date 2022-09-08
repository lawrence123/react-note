import React, { useState, Fragment } from "react";
function TodoList() {
  return (
    <Fragment>
      <div>
        <input />
        <button>submit</button>
      </div>

      <div>
        <ul>
          <li>learn English</li>
          <li>learn chinese</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default TodoList;
