
var meritminer = require("./build/Release/meritminer");

class MeritMiner 
{
  StartMiner(workers, threads) {
    return meritminer.startMiner(workers, threads);
  }

  StopMiner() {
    return meritminer.stopMiner();
  }
  
  ConnectToStratum(url, address) {
    return meritminer.connectToStratum(url,address);
  }
  DisconnectStratum() {
    return meritminer.disconnectStratum();
  }

  IsStratumRunning() {
    return meritminer.isStratumRunning();
  }
  
  IsMinerRunning() {
    return meritminer.isMinerRunning();
  }

}

module.exports = {
  MeritMiner
}
