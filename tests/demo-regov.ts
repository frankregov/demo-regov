import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { DemoRegov } from "../target/types/demo_regov";

describe("demo-regov", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.DemoRegov as Program<DemoRegov>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
