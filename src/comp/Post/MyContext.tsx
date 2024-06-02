// // mycontext.tsx

// import React, { createContext, useState } from "react";

// // Replace 'any' with a specific type for your data
// interface MyContextValue {
//   data: Date;
//   setData: (newData: Date) => void;
// }

// const MyContext = React.createContext<MyContextValue>({
//   data: {},
//   setData: () => {},
// });

// export const MyContextProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [data, setData] = useState<any>({}); // Replace 'any' with a specific type

//   return (
//     <MyContext.Provider value={{ data, setData }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export default MyContext;
