const SHA256 = require("sha256");

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


      generateHash(previousBlockHash, timestamp, pendingTranscations){
        let hash = "";
        let nonde = 0;

        while(hash.substring(0,3) != "000"){
            nonce++;
            hash = SHA256(
                previousBlockHash +
                timestamp + 
                JSON.stringify(pendingTranscations) +
                nonce
            ).toString();

            return { hash, nonce };
        }
        
      }


};





