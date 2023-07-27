import { useState } from "react";
export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method:"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            Username,
            Password,
          }),
        }
      );

      const result = await response.json();
      setToken(result.token);
      console.log(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2 class="former">Sign Up Below!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label class = "divide">
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label class = "divide">
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button id="sub-btn">Submit</button>
      </form>
    </>
  );
}