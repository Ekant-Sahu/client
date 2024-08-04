import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useConnect,
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

  const { mutateAsync: claimInsuranceContract } = useContractWrite(
    contract,
    "claimInsurance"
  );

  const address = useAddress();
  const connectWithMetamask = useConnect("injected");

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

  const claimInsurance = async (id, vehicleDetails) => {
    try {
      const data = await claimInsuranceContract([id, vehicleDetails]);
      console.log("Claim success", data);
    } catch (error) {
      console.log("Claim failure", error);
    }
  };

  const withdrawFunds = async () => {
    if (!address) {
      await connectWithMetamask();
    }
    if (!contract) {
      throw new Error("Contract is not available");
    }
    try {
      const data = await contract.call("withdrawFunds");
      return data;
    } catch (error) {
      console.error("Failed to withdraw funds:", error);
      throw error;
    }
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        createInsurance: publishInsurance,
        claimInsurance,
        withdrawFunds,
        connect: connectWithMetamask,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
