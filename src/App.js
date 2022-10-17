import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ChakraProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categories/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/Item/:productId" element={<ItemDetailContainer />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
