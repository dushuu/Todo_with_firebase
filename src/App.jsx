import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppLayout from "./layout/Applayout/AppLayout";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Approutes from "./Router/Approutes";
import { UiContextProvider } from "./UiContext";
import Modal from "./components/Modal/Modal";
import ToastMessage from "./components/ToastMessage/ToastMessage";

function App() {
  return (
    <>
      <BrowserRouter>
        <UiContextProvider>
          <Approutes />
          <Modal />
          <ToastMessage />
        </UiContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
