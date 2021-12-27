import React from 'react';
const Function_Component=()=> {
  return (
    <form name="login" className="form">
    <h1>Function Component</h1>
      Username:<input type="text" placeholder="Usrname" /><br />
      Password:<input type="text" placeholder="Password" /><br />
      <div className="center">
        <input type="Submit" value="Login" />
        <input type="Reset" value="Clear" />
      </div>
    </form>
  );
};
// function Function_Component() {
//   return (
//     <form name="login" className="form">
//       <h1>Function Component</h1>
//       Username:<input type="text" placeholder="Usrname" /><br />
//       Password:<input type="text" placeholder="Password" /><br />
//       <div className="center">
//         <input type="Submit" value="Login" />
//         <input type="Reset" value="Clear" />
//       </div>
//     </form>
//   );
// }
  
  export default Function_Component;


