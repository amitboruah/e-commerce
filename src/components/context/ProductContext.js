import { createContext , useState} from "react";

export const ProductContext = createContext(({}))

const ProdCont =( {children})=>{
  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState([]);

//   console.log("loggin from context",login);

    return (
        <>
        <ProductContext.Provider value={{ cart, setCart , login ,setLogin }}>
            {children}
        </ProductContext.Provider>
        </>
    )
}
export default ProdCont