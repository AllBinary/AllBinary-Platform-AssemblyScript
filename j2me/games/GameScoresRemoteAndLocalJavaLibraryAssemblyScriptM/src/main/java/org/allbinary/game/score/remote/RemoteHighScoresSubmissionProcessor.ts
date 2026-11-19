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
// import org.allbinary.game.GameInfoData
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.game.score.HighScore
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.system.security.crypt.jcehelper.NoCrypt
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.HashtableUtil

@global export class RemoteHighScoresSubmissionProcessor extends JObject implements RemoteHighScoresSubmissionProcessorInterface {

    jclassName(): string {
        return "org.allbinary.game.score.remote.RemoteHighScoresSubmissionProcessor";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    noCrypt: NoCrypt | null = null;

    jfields_RemoteHighScoresSubmissionProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.noCrypt = new NoCrypt().jinit_NoCrypt_0();
    }
    

    jinit_RemoteHighScoresSubmissionProcessor_0(): RemoteHighScoresSubmissionProcessor {
        super.jinit_JObject_0();
        this.jfields_RemoteHighScoresSubmissionProcessor();
        return this;
    }
    

    process(remoteHighScores: RemoteHighScores | null, abeClientInformation: AbeClientInformationInterface | null, highScore: HighScore | null): void {
        do {
            this.logUtil!.putF("Begin Remote HighScores Submission", this, this.commonStrings!.PROCESS); if (JThrowable.pending !== null) break;
            let gameInfoData: GameInfoData | null = GameInfoData.getInstance(); if (JThrowable.pending !== null) break;
            let hashtable: ABHashtable | null = abeClientInformation!.toHashtable(); if (JThrowable.pending !== null) break;
            HashtableUtil.getInstance()!.putAll(highScore!.getGameInfo()!.toHashtable(), hashtable); if (JThrowable.pending !== null) break;
            hashtable!.put(RemoteHighScoresData.getInstance()!.CUSTOMER_USER_NAME, "None"); if (JThrowable.pending !== null) break;
            hashtable!.put(RemoteHighScoresData.getInstance()!.DISPLAY_NAME, highScore!.getName()); if (JThrowable.pending !== null) break;
            hashtable!.put(gameInfoData!.SOFTWARE_INFORMATION, JObject.jtoString(remoteHighScores!.getSoftwareInformation())); if (JThrowable.pending !== null) break;
            hashtable!.put(remoteHighScores!.ASCENDING, JObject.jtoString(remoteHighScores!.getAscending())); if (JThrowable.pending !== null) break;
            let displayInfoSingleton: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) break;
            hashtable!.put(displayInfoSingleton!.ORIENTATION, BooleanFactory.getInstance()!.toStringb(displayInfoSingleton!.isPortrait())); if (JThrowable.pending !== null) break;
            hashtable!.put(RemoteHighScoresData.getInstance()!.GAME_CONFIGURATION, JObject.jtoString(GameConfigurationCentral.getInstance())); if (JThrowable.pending !== null) break;
            hashtable!.put(RemoteHighScoresData.getInstance()!.SCORE, JLong.toString1(highScore!.getScore())); if (JThrowable.pending !== null) break;
            if (XmlRpcAbeClient.isOnline) {
                let resultHashtable: ABHashtable | null = changetype<ABHashtable | null>(new XmlRpcRemoteHighScoresClient().jinit_XmlRpcRemoteHighScoresClient_3(abeClientInformation, "highscoresubmissionservicessl.php", "HighScoreSubmissionService.process")!.get_2(hashtable, this.noCrypt)); if (JThrowable.pending !== null) break;
                remoteHighScores!.update(resultHashtable); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.PROCESS, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

