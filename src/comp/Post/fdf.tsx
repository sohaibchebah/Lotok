// // MyContext.tsx
// const MyContext = React.createContext<any>({});

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

// // SomeComponent.tsx
// import MyContext, { MyContextProvider } from "./MyContext";

// const SomeComponent: React.FC = () => {
//   const { data, setData } = useContext(MyContext);

//   return (
//     <div>
//       <p>Data from Context: {data.message}</p>
//       <button onClick={() => setData({ message: "Updated Data" })}>
//         Update Data
//       </button>
//     </div>
//   );
// };

// // App.tsx
// import SomeComponent from "./SomeComponent";
// import MyContextProvider from "./MyContext";

// const App: React.FC = () => {
//   return (
//     <MyContextProvider>
//       <SomeComponent />
//     </MyContextProvider>
//   );
// };

// export default App;
