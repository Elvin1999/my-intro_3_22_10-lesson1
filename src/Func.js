import React from "react";

// export default function Func({myinfo}) {
//   const data = 100;
//   let date = new Date();
//   let ownData = "I am Func own Data";

//   return (
//     <div>
//         <h1>This is number {myinfo}</h1>
//       <h1>{ownData}</h1>
//       <h2>{data}</h2>
//       <h3>{date.getDate()}</h3>
//     </div>
//   );
// }


export default function Func(props) {
    const data = 100;
    let date = new Date();
    let ownData = "I am Func own Data";
  
    return (
      <div>
          <h1>This is number {props.myinfo}</h1>
        <h1>{ownData}</h1>
        <h2>{data}</h2>
        <h3>{date.getDate()}</h3>
      </div>
    );
  }
  