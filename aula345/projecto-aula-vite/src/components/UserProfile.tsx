import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState({ name: "John", age: 30 });

  function IncrementAge() {
    setUser({ ...user, age: user.age + 1 });
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={IncrementAge}>Increment Age</button>
    </div>
  );
};

export default UserProfile;