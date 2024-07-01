// Here we export some useful types and functions for interacting with the Anchor program.
import { Cluster, PublicKey } from '@solana/web3.js';
import type { Fundhive } from '../target/types/fundhive';
import { IDL as FundhiveIDL } from '../target/types/fundhive';

// Re-export the generated IDL and type
export { Fundhive, FundhiveIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const FUNDHIVE_PROGRAM_ID = new PublicKey(
  '72f2NjdPWhrkZWhsqT35YUNS9QnW5Bm5VA1272auPsch'
);

// This is a helper function to get the program ID for the Fundhive program depending on the cluster.
export function getFundhiveProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return FUNDHIVE_PROGRAM_ID;
  }
}
