// Here we export some useful types and functions for interacting with the Anchor program.
import { Cluster, PublicKey } from '@solana/web3.js';
import type { Fundhive } from '../targets/types/fundhive';
import { IDL as FundhiveIDL } from '../targets/types/fundhive';

// Re-export the generated IDL and type
export { Fundhive, FundhiveIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const FUNDHIVE_PROGRAM_ID = new PublicKey(
  'Ek7wRnS7wTwVFgEGBFSBJ2GYSt2ZU7vFSei7m8rKwb1'
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
