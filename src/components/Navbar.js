import React, { useState, useContext,useEffect } from "react";
import "./style/Navbar.css";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Drawer, Button, Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState(" ");
  const { cart, login, setLogin, setCart} = useContext(ProductContext);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  const getData =()=>{
    const logData = localStorage.getItem("loggedIn");
    console.log(logData)
    setLogin(logData)
  }
  console.log("login code",login)

  const logout = () => {
    let data = JSON.parse(localStorage.getItem("loggedIn"));
    if (data && data.length) {
      localStorage.removeItem("loggedIn");
      setLogin([]);
      navigate("/signin");
    }
  };

  useEffect(()=>{
    getData()
  },[])

  const handleRemove= (rData)=>{
    const remove = cart.filter((el)=>{
      return el.id !== rData.id
    })

    // const remove = cart.findIndex((el)=>el.id===rData.id)
    // const removeData = remove<0? false:cart.splice(remove,1)
    
    // console.log(removeData,"removed data")
    // console.log(rData,"cart data")
    // console.log(newCart,"new cart data")
    setCart(remove)
   
  }

  console.log(search);
  return (
    <>
      <div className="body">
        <div className="leftside">
          <span>{props.title}</span>
          <div className="link">
            <Link to="/">Home</Link>
            {login&&login.length ? (
              <button className="logoutBtn" onClick={logout}>
                Logout
              </button>
            ) : (
              <>
                <Link to="/signin">Login</Link>
                <Link to="/signup">Create account</Link>
              </>
            )}
          </div>
        </div>
        <div className="rightside">
          <input
            type="text"
            placeholder="Search... "
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <SearchOutlined />
          </button>

          {login&&login.length ? (
            <>
              <Button className="drawerBtn" onClick={showDrawer}>
                <Badge count={cart.length} size="small">
                  <ShoppingCartOutlined
                    style={{
                      fontSize: "25px",
                      color: "white",
                      paddingRight: "10px",
                    }}
                  />
                </Badge>
              </Button>
              <Drawer
                title="Items in Cart"
                placement="right"
                onClose={onClose}
                visible={visible}
              >
                {cart.map((cData, key) => {
                  return (
                    <React.Fragment key={key} className="cart">
                      <span style={{width:"80px"}}>{cData.rname}</span >
                      <button onClick={()=>handleRemove(cData)}>X</button><br/><br/>
                    </React.Fragment>
                  );
                })}
              </Drawer>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
