import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useConnect,
  useContractWrite,
  useSigner,
  metamaskWallet,
} from "@thirdweb-dev/react";
import { ethers, Wallet } from "ethers";
import { useEffect } from "react";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x95a749732A31483C6d34398F21bF81a529A0275C"
  );

  const signer = useSigner();
  const address = useAddress();

  useEffect(() => {
    console.log("Address:", address);
    console.log("Signer:", signer);
  }, [address, signer]);

  // const signer = useSigner(); // Ensure the signer is properly obtained
  // const address = useAddress();
  const connectWithMetamask = useConnect();
  const connect = useConnect();
  const metamaskConfig = metamaskWallet();

  console.log(signer);

  const { mutateAsync: createInsurance } = useContractWrite(
    contract,
    "createInsurance"
  );

  const { mutateAsync: claimInsuranceContract } = useContractWrite(
    contract,
    "claimInsurance"
  );

  const publishInsurance = async (form) => {
    const wallet = await connect(metamaskConfig);
    console.log("connected to ", wallet);
    try {
      if (!signer) throw new Error("Signer is required");

      const data = await createInsurance({
        args: [
          form._vehicleDetails,
          ethers.utils.parseUnits(form._premium, 18),
          ethers.utils.parseUnits(form._insuredAmount, 18),
        ],
        signer,
      });
      console.log("Insurance created successfully:", data);
    } catch (error) {
      console.log("Failed to create insurance:", error);
    }
  };

  const claimInsurance = async (id, vehicleDetails) => {
    try {
      if (!signer) throw new Error("Signer is required");

      const data = await claimInsuranceContract({
        args: [id, vehicleDetails],
        signer,
      });
      console.log("Claim success", data);
    } catch (error) {
      console.log("Claim failure", error);
    }
  };

  const withdrawFunds = async () => {
    try {
      if (!address) {
        await connectWithMetamask();
      }
      if (!contract) {
        throw new Error("Contract is not available");
      }
      if (!signer) throw new Error("Signer is required");

      const data = await contract.call("withdrawFunds", { signer });
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
