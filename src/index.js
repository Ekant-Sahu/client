import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateContextProvider } from "./context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const activeChain = ChainId.Sepolia; // Or the chain you are using

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain="sepolia"
      clientId="217e8c21192caa43a13b30f510eba127"
    >
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
