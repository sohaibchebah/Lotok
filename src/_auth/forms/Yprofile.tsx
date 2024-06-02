import React from 'react'
import axios from 'axios';
async function userList() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/users/");
    const userdata = response.data();
    console.log(userdata);
  } catch (error) {
    console.error(error);
  }
}
const Yprofile = () => {
  return (
      <div>
          <button onClick={userList}>list</button>
    </div>
  )
}

export default Yprofile
