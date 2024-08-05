import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateContextProvider } from "./context";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      desiredChainId={ChainId.Sepolia}
      activeChain="sepolia"
      clientId="217e8c21192caa43a13b30f510eba127"
    >
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
