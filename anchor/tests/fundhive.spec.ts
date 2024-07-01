import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair } from '@solana/web3.js';
import { Fundhive } from '../target/types/fundhive';

describe('fundhive', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.Fundhive as Program<Fundhive>;

  const fundhiveKeypair = Keypair.generate();

  it('Initialize Fundhive', async () => {
    await program.methods
      .initialize()
      .accounts({
        fundhive: fundhiveKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([fundhiveKeypair])
      .rpc();

    const currentCount = await program.account.fundhive.fetch(
      fundhiveKeypair.publicKey
    );

    expect(currentCount.count).toEqual(0);
  });

  it('Increment Fundhive', async () => {
    await program.methods
      .increment()
      .accounts({ fundhive: fundhiveKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.fundhive.fetch(
      fundhiveKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Increment Fundhive Again', async () => {
    await program.methods
      .increment()
      .accounts({ fundhive: fundhiveKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.fundhive.fetch(
      fundhiveKeypair.publicKey
    );

    expect(currentCount.count).toEqual(2);
  });

  it('Decrement Fundhive', async () => {
    await program.methods
      .decrement()
      .accounts({ fundhive: fundhiveKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.fundhive.fetch(
      fundhiveKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Set fundhive value', async () => {
    await program.methods
      .set(42)
      .accounts({ fundhive: fundhiveKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.fundhive.fetch(
      fundhiveKeypair.publicKey
    );

    expect(currentCount.count).toEqual(42);
  });

  it('Set close the fundhive account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        fundhive: fundhiveKeypair.publicKey,
      })
      .rpc();

    // The account should no longer exist, returning null.
    const userAccount = await program.account.fundhive.fetchNullable(
      fundhiveKeypair.publicKey
    );
    expect(userAccount).toBeNull();
  });
});
