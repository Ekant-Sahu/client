import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x95a749732A31483C6d34398F21bF81a529A0275C"
  );
  const { mutateAsync: createInsurance } = useContractWrite(
    contract,
    "createInsurance"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishInsurance = async (form) => {
    try {
      const data = await createInsurance([
        form._vehicleDetails,
        form._premium,
        form._insuredAmount,
      ]);
      console.log("success", data);
    } catch (error) {
      console.log("failure", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createInsurance: publishInsurance,
        connect,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
