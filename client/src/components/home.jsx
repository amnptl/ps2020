import React, { useState } from "react";
import GoogleLogin from "react-google-login";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = response => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };
  return (
    <div className="App">
      <h1>Signup with Google</h1>
      {name ? (
        <div>
          <h1>Welcome {name}</h1>
          <h3>Email: {email}</h3>
          <img src={url} alt="image not found" />
        </div>
      ) : null}
      <GoogleLogin
        clientId="689118196122-o7v1jkou1ef2omo3ls7k59rljar911g0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
