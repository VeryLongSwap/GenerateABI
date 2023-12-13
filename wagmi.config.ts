import { defineConfig } from '@wagmi/cli'
import { erc20ABI } from 'wagmi'
import { etherscan } from '@wagmi/cli/plugins'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json' assert { type: "json" };
import QuoterV2 from '@uniswap/v3-periphery/artifacts/contracts/lens/QuoterV2.sol/QuoterV2.json' assert { type: "json" };
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json' assert { type: "json" };
import SwapRouter from '@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json' assert { type: "json" };
import NonfungiblePositionManager from '@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json' assert { type: "json" };

export default defineConfig({
  out: './src/generated.ts',
  contracts: [
    {
      abi: IUniswapV3PoolABI.abi,
      name: 'IUniswapV3Pool',
    },
    {
      abi: Quoter.abi,
      name: 'Quoter',
    },
    {
      abi: SwapRouter.abi,
      name: 'SwapRouter',
    },
    {
      abi: QuoterV2.abi,
      name: 'QuoterV2',
    },
    {
      abi: NonfungiblePositionManager.abi,
      name: 'NonfungiblePositionManager',
    },
    {
      name: 'erc20',
      abi: erc20ABI,
    },
  ]
})