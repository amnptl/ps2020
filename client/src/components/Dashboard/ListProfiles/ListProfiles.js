import React, { useState } from "react";
import "./styles.css";

import { UserOutlined } from "@ant-design/icons";

export default function ListProfiles() {
  const [name, setName] = useState("John");
  const [email, setEmail] = useState("John@test.com");
  const [address, Address] = useState("Eg Address H, eg");
  const [phno, setPhno] = useState("Phone Number");
  return (
    <div className="container">
      <div id="profile">
        <h3 className="text-danger"> Profile List</h3>
        <table class="table table-striped  table-hover text-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>addrr</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>addrr</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>Bird</td>
              <td>@address</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
