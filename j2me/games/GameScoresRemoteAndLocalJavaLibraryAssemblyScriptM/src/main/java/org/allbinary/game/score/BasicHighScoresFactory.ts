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
// package org.allbinary.game.score
// import org.allbinary.thread.ARunnable
// import org.allbinary.game.BasicHighScoresGameInfoFactory
// import org.allbinary.game.GameInfo
// import org.allbinary.game.GameType
// import org.allbinary.game.GameTypeFactory
// import org.allbinary.game.score.remote.RemoteHighScores
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.system.SoftwareInformation
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.thread.SecondaryThreadPool

@global export class BasicHighScoresFactory extends HighScoresBase {

    jclassName(): string {
        return "org.allbinary.game.score.BasicHighScoresFactory";
    }
    logUtil: LogUtil | null = null;
    abeClientInformation: AbeClientInformationInterface | null = null;
    softwareInformation: SoftwareInformation | null = null;
    highScoresArray: StaticArray<HighScores | null> | null = null;
    TOP: string | null = null;
    SCORES: string | null = null;
    PERSONAL_HIGH_SCORES: string | null = null;
    WORLD_TOP_SCORES: string | null = null;
    FETCH: string | null = null;

    jfields_BasicHighScoresFactory(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    this.highScoresArray = new StaticArray<HighScores | null>(2);
    this.TOP = "Top";
    this.SCORES = "Scores";
    this.PERSONAL_HIGH_SCORES = "Personal Top Scores";
    this.WORLD_TOP_SCORES = "World Top Scores";
    this.FETCH = "fetchHighScores";
    }
    

    jinit_BasicHighScoresFactory_2(abeClientInformation: AbeClientInformationInterface | null, softwareInformation: SoftwareInformation | null): BasicHighScoresFactory {
        super.jinit_HighScoresBase_0();
        this.jfields_BasicHighScoresFactory();
        this.abeClientInformation = abeClientInformation;
        this.softwareInformation = softwareInformation;
        return this;
    }
    

    fetchHighScores(gameInfo: GameInfo | null, highScoresResultsListener: HighScoresResultsListener | null): void {
        this.logUtil!.putF("Getting Remote/Local HighScores", this, this.FETCH); if (JThrowable.pending !== null) return;
        this.fetchHighScoresPreload(gameInfo, highScoresResultsListener, true); if (JThrowable.pending !== null) return;
    }
    

    fetchHighScoresPreload(gameInfo: GameInfo | null, highScoresResultsListener: HighScoresResultsListener | null, preload: bool): void {
        SecondaryThreadPool.getInstance()!.runTask(changetype<ARunnable | null>(0) /* Java anonymous class: not converted
            

            run(): void {
                let logUtil: LogUtil | null = LogUtil.getInstance();
                do {
                    logUtil!.putF(this.commonStrings!.START, this, this.FETCH);
                    this.highScoresArray![0] = RecordStoreHighScores.getInstance6(this.abeClientInformation, gameInfo, this.TOP, this.PERSONAL_HIGH_SCORES, this.SCORES, new ScoreComparator().jinit_ScoreComparator_1(true));
                    let gameType: GameType | null = gameInfo!.getGameType();
                    let gameTypeFactory: GameTypeFactory | null = GameTypeFactory.getInstance();
                    let gameInfo2: GameInfo | null = gameInfo;
                    if (gameType == gameTypeFactory!.SINGLE_PLAYER || gameType == gameTypeFactory!.BOT) {
                        gameInfo2 = BasicHighScoresGameInfoFactory.getInstance()!.SINGLE_PLAYER_SERVER;
                    } else if (gameType == gameTypeFactory!.MULTI_PLAYER) {
                        gameInfo2 = BasicHighScoresGameInfoFactory.getInstance()!.MULTI_PLAYER_SERVER;
                    }
                    this.highScoresArray![1] = RemoteHighScores.getInstancePreload(this.abeClientInformation, this.softwareInformation, gameInfo2, this.WORLD_TOP_SCORES, this.SCORES, BooleanFactory.getInstance()!.FALSE, preload);
                    logUtil!.putF(this.commonStrings!.END, this, this.FETCH);
                    LastFetchHighScoresFactory.getInstance()!.highScoresArray = this.highScoresArray;
                    highScoresResultsListener!.setHighScoresArray(this.highScoresArray);
                } while (false); if (JThrowable.pending != null) {
                    let e: JException | null = changetype<JException | null>(JThrowable.take());
                    logUtil!.put(this.commonStrings!.EXCEPTION, this, this.FETCH, e);
                } if (JThrowable.pending !== null) return;
            } */); if (JThrowable.pending !== null) return;
    }
    

    createHighScoresHelper(): HighScoresHelperBaseInterface | null {
        return new HighScoresHelper2().jinit_HighScoresHelper2_0();
    }
    

    static loaded(index2: i32): bool {
        if (index2 >= 0) {
            return true;
        }
        return false;
    }
}

