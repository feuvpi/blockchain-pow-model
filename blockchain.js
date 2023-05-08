class Blockchain {
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.pendingTranscations = [];
    }

    createGenesisBlock() {
        return {
          index: 1,
          timestamp: Date.now(),
          transactions: [],
          nonce: 0,
          hash: "hash",
          previousBlockHash: "previousBlockHash",
        };
      }



      getLastBlock(){
        return this.chain[this.chain.length-1]
      }


};





