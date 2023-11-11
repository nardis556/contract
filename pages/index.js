import { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  Input,
  Textarea,
  Button,
  VStack,
  Box,
  useToast,
  Select,
} from "@chakra-ui/react";

export default function Home() {
  const [contractAddress, setContractAddress] = useState("");
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [connectionMethod, setConnectionMethod] = useState("");
  const [rpcUrl, setRpcUrl] = useState("https://rpc-devnet-idex.hardfork.dev");
  const [privateKey, setPrivateKey] = useState("");
  const [abi, setAbi] = useState("");
  const [parsedAbi, setParsedAbi] = useState([]);
  const [functionNames, setFunctionNames] = useState([]);
  const [selectedFunction, setSelectedFunction] = useState(null);
  const [functionArgs, setFunctionArgs] = useState([]);
  const [isMetaMaskAvailable, setIsMetaMaskAvailable] = useState(false);
  const [rpcResponse, setRpcResponse] = useState(null);

  const toast = useToast();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      setIsMetaMaskAvailable(true);
    } else {
      setIsMetaMaskAvailable(false);
    }
  }, []);

  const showToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  const quickToast = (title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };

  const handleAbiInput = (abiString) => {
    setAbi(abiString);
    try {
      const parsed = JSON.parse(abiString);
      setParsedAbi(parsed);
      const functions = parsed
        .filter((item) => item.type === "function")
        .map((func) => func.name);
      setFunctionNames(functions);
    } catch (error) {
      console.error("Error parsing ABI:", error);
      setFunctionNames([]);
    }
  };

  const connectMetaMask = async () => {
    if (!isMetaMaskAvailable) {
      quickToast("Error", "MetaMask is not available", "error");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnectionMethod("metamask");
      setIsMetaMaskConnected(true);
      quickToast("Success", "Connected with MetaMask", "success");
    } catch (error) {
      console.error("MetaMask connection failed:", error);
      quickToast("Connection failed!", error.message, "error");
    }
  };

  const handlePrivateKeyChange = (e) => {
    setPrivateKey(e.target.value);
    setConnectionMethod("privateKey");
  };

  const handleFunctionSelect = (funcName) => {
    const func = parsedAbi.find(
      (item) => item.type === "function" && item.name === funcName
    );
    setSelectedFunction(func);
    setFunctionArgs(Array(func.inputs.length).fill(""));
  };

  const handleInputChange = (event, index) => {
    const newArgs = [...functionArgs];
    newArgs[index] = event.target.value;
    setFunctionArgs(newArgs);
  };

  const renderFunctionInputs = () => {
    return selectedFunction?.inputs.map((input, index) => (
      <Input
        key={index}
        placeholder={`${input.type} ${input.name}`}
        onChange={(e) => handleInputChange(e, index)}
      />
    ));
  };

  const disconnectWallet = () => {
    setIsMetaMaskConnected(false);
    setConnectionMethod("");
    setPrivateKey("");
  };

  const clearRpcResponse = () => {
    setRpcResponse(null);
  };

  const renderRpcResponse = () => {
    if (!rpcResponse) return null;

    return (
      <Box mt={4} p={3} bg="gray.700" borderRadius="md">
        <pre>{JSON.stringify(rpcResponse, null, 2)}</pre>
        <Box display="flex" justifyContent="center" mt={2}>
          <Button colorScheme="red" onClick={clearRpcResponse}>
            Clear Response
          </Button>
        </Box>
      </Box>
    );
  };

  const handleContractInteraction = async () => {
    if (!selectedFunction) {
      showToast("Error", "No function selected", "error");
      return;
    }

    try {
      let provider, wallet;

      if (connectionMethod === "metamask") {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        wallet = provider.getSigner();
      } else if (connectionMethod === "privateKey") {
        provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        wallet = new ethers.Wallet(privateKey, provider);
      } else {
        quickToast("Error", "No connection method selected", "error");
        return;
      }

      const contract = new ethers.Contract(contractAddress, abi, wallet);
      const tx = await contract[selectedFunction.name](...functionArgs);

      console.log(tx);
      setRpcResponse(tx);
      showToast(JSON.stringify(tx, null, 2));
    } catch (error) {
      console.error("Transaction failed:", error);
      showToast("Transaction failed!", error.message, "error");
    }
  };

  return (
    <Box display="flex" justifyContent="center" p={5}>
      <Box maxWidth="800px" width="100%">
        {" "}
        {/* Set a maximum width */}
        <VStack spacing={4}>
          {isMetaMaskAvailable && !isMetaMaskConnected && (
            <Button colorScheme="green" onClick={connectMetaMask}>
              Connect with MetaMask
            </Button>
          )}
          {!isMetaMaskConnected && (
            <Input
              placeholder="Wallet Private Key"
              onChange={handlePrivateKeyChange}
            />
          )}
          {isMetaMaskConnected && (
            <Button colorScheme="red" onClick={disconnectWallet}>
              Disconnect Wallet
            </Button>
          )}
          {/* <Input
          placeholder="23432"
          onChange={(e) => setChainId(e.target.value)}
        /> */}
          <Input
            placeholder="https://rpc-devnet-idex.hardfork.dev"
            onChange={(e) => setRpcUrl(e.target.value)}
          />
          <Input
            placeholder="Contract Address"
            onChange={(e) => setContractAddress(e.target.value)}
          />
          <Textarea
            placeholder="Contract ABI"
            onChange={(e) => handleAbiInput(e.target.value)}
          />
          <Select
            placeholder="Select Function"
            onChange={(e) => handleFunctionSelect(e.target.value)}
          >
            {functionNames.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </Select>
          {renderFunctionInputs()}
          <Button colorScheme="blue" onClick={handleContractInteraction}>
            Call Contract Function
          </Button>

          {renderRpcResponse()}
        </VStack>
      </Box>
    </Box>
  );
}
