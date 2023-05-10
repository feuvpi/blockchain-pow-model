const Blockchain = require("./blockchain");

// -- initializing new blockchain
let bitcoin = new Blockchain();

console.log(bitcoin)
// -- creating new transction
bitcoin.createNewTransaction(
    "500",
    "1Ay9UJFvizGHcduzbyW7zvguqjZfezmYwW",
    "1FRJZR5QAurEFanTiMxNK9gRircAhyGmGw"

);

console.log(bitcoin)

bitcoin.createNewBlock();

console.log(bitcoin)

bitcoin.createNewTransaction(
    "760",
    "1BwD4c69UqWf8rg5PmUQPCmZEEtQE6xSQH",
    "1F1JUBJRN4M2dLyoRZimgcb1YW2r1ExWXc"

);

bitcoin.createNewBlock();

console.log(bitcoin.chain[2].transactions)