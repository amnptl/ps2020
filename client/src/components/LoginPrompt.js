import React from "react";
import { Link } from "react-router-dom";

export default function LoginPrompt() {
  return (
    <div>
    <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Not Logged In</h5>
    <p class="card-text">Please Log in first!</p>
    <Link to="/" class="btn btn-primary m-2">Home</Link>
    <Link to="/" class="btn btn-primary m-2">Log In</Link>
  </div>
</div>
    </div>
  );
}
