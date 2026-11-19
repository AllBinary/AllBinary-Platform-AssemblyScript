/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.score.remote
// import org.allbinary.game.GameInfo
// import org.allbinary.game.GameInfoData
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.system.security.crypt.jcehelper.NoCrypt
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.HashtableUtil

@global export class RemoteHighScoresProcessor extends JObject implements RemoteHighScoresProcessorInterface {

    jclassName(): string {
        return "org.allbinary.game.score.remote.RemoteHighScoresProcessor";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    noCrypt: NoCrypt | null = null;

    jfields_RemoteHighScoresProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.noCrypt = new NoCrypt().jinit_NoCrypt_0();
    }
    

    jinit_RemoteHighScoresProcessor_0(): RemoteHighScoresProcessor {
        super.jinit_JObject_0();
        this.jfields_RemoteHighScoresProcessor();
        return this;
    }
    

    process(remoteHighScores: RemoteHighScores | null, abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null): void {
        this.logUtil!.putF("Begin Remote HighScores Retrieval", this, this.commonStrings!.PROCESS); if (JThrowable.pending !== null) return;
        let gameInfoData: GameInfoData | null = GameInfoData.getInstance(); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = abeClientInformation!.toHashtable(); if (JThrowable.pending !== null) return;
        HashtableUtil.getInstance()!.putAll(gameInfo!.toHashtable(), hashtable); if (JThrowable.pending !== null) return;
        hashtable!.put(gameInfoData!.SOFTWARE_INFORMATION, JObject.jtoString(remoteHighScores!.getSoftwareInformation())); if (JThrowable.pending !== null) return;
        hashtable!.put(remoteHighScores!.ASCENDING, JObject.jtoString(remoteHighScores!.getAscending())); if (JThrowable.pending !== null) return;
        let displayInfoSingleton: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        hashtable!.put(displayInfoSingleton!.ORIENTATION, BooleanFactory.getInstance()!.toStringb(displayInfoSingleton!.isPortrait())); if (JThrowable.pending !== null) return;
        hashtable!.put(RemoteHighScoresData.getInstance()!.GAME_CONFIGURATION, JObject.jtoString(GameConfigurationCentral.getInstance())); if (JThrowable.pending !== null) return;
        if (XmlRpcAbeClient.isOnline) {
            let resultHashtable: ABHashtable | null = changetype<ABHashtable | null>(new XmlRpcRemoteHighScoresClient().jinit_XmlRpcRemoteHighScoresClient_3(abeClientInformation, "highscoresservicessl.php", "HighScoresService.process")!.get_2(hashtable, this.noCrypt)); if (JThrowable.pending !== null) return;
            remoteHighScores!.update(resultHashtable); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

