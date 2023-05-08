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


      createNewTransaction(amount, sender, recipient){
        const newTranscation = {
            amount,
            sender,
            recipient,
        };
        this.pendingTranscations.push(newTranscation);
    };

    createNewBlock(){
        const timestamp = Date.now();
        const transcations = this.pendingTranscations;
        const previousBlockHash = this.getLastBlock().hash;
        const generateHash = this.generateHash(
            previousBlockHash,
            timestamp,
            transcations
        );

        const newBlock = {
            index: this.chain.length + 1,
            timestamp,
            transcations,
            nonce: generateHash.nonce,
            hash: generateHash.hash,
            previousBlockHash,
        };

        this.pendingTranscations = [];
        this.chain.push(newBlock);

        return newBlock;
    }

}



