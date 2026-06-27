import { createConfig } from "ponder";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
  chains: {
    testnet: {
      id: 1,
      rpc: process.env.PONDER_RPC_URL_1!,
    },
  },
  contracts: {
    ExampleContract: {
      chain: "testnet",
      abi: ExampleContractAbi,
      address: "0x084A2379c13B0a2E6adef76886Eb59e196194561",
      startBlock: 11148000,
    },
  },
});
