'use client';

import { FundhiveIDL, getFundhiveProgramId } from '@fundhive/anchor';
import { Program } from '@coral-xyz/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Cluster, Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';

export function useFundhiveProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getFundhiveProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = new Program(FundhiveIDL, programId, provider);

  const accounts = useQuery({
    queryKey: ['fundhive', 'all', { cluster }],
    queryFn: () => program.account.fundhive.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['fundhive', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods
        .initialize()
        .accounts({ fundhive: keypair.publicKey })
        .signers([keypair])
        .rpc(),
    onSuccess: (signature) => {
      transactionToast(signature);
      return accounts.refetch();
    },
    onError: () => toast.error('Failed to initialize account'),
  });

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  };
}

export function useFundhiveProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useFundhiveProgram();

  const accountQuery = useQuery({
    queryKey: ['fundhive', 'fetch', { cluster, account }],
    queryFn: () => program.account.fundhive.fetch(account),
  });

  const closeMutation = useMutation({
    mutationKey: ['fundhive', 'close', { cluster, account }],
    mutationFn: () =>
      program.methods.close().accounts({ fundhive: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accounts.refetch();
    },
  });

  const decrementMutation = useMutation({
    mutationKey: ['fundhive', 'decrement', { cluster, account }],
    mutationFn: () =>
      program.methods.decrement().accounts({ fundhive: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const incrementMutation = useMutation({
    mutationKey: ['fundhive', 'increment', { cluster, account }],
    mutationFn: () =>
      program.methods.increment().accounts({ fundhive: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const setMutation = useMutation({
    mutationKey: ['fundhive', 'set', { cluster, account }],
    mutationFn: (value: number) =>
      program.methods.set(value).accounts({ fundhive: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  };
}
