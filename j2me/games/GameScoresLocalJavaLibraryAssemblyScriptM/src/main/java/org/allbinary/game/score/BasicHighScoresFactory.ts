// Generated Code Do Not Modify
// package org.allbinary.game.score
// import org.allbinary.game.GameInfo
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.system.SoftwareInformation
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class BasicHighScoresFactory extends HighScoresBase {

    jclassName(): string {
        return "org.allbinary.game.score.BasicHighScoresFactory";
    }
    logUtil: LogUtil | null = null;
    abeClientInformation: AbeClientInformationInterface | null = null;
    highScoresArray: StaticArray<HighScores | null> | null = null;
    TOP: string | null = null;
    SCORES: string | null = null;
    PERSONAL_HIGH_SCORES: string | null = null;
    FETCH: string | null = null;

    jfields_BasicHighScoresFactory(): void {
    this.logUtil = LogUtil.getInstance();
    
    this.highScoresArray = new StaticArray<HighScores | null>(1);
    this.TOP = "Top";
    this.SCORES = "Scores";
    this.PERSONAL_HIGH_SCORES = "Personal Top Scores";
    this.FETCH = "fetchHighScores";
    }
    

    jinit_BasicHighScoresFactory_2(abeClientInformation: AbeClientInformationInterface | null, softwareInformation: SoftwareInformation | null): BasicHighScoresFactory {
        super.jinit_HighScoresBase_0();
        this.jfields_BasicHighScoresFactory();
        this.abeClientInformation = abeClientInformation;
        return this;
    }
    

    fetchHighScores(gameInfo: GameInfo | null, highScoresResultsListener: HighScoresResultsListener | null): void {
        this.logUtil!.putF("Getting Local HighScores", this, this.FETCH); if (JThrowable.pending !== null) return;
        this.fetchHighScoresPreload(gameInfo, highScoresResultsListener, true); if (JThrowable.pending !== null) return;
    }
    

    fetchHighScoresPreload(gameInfo: GameInfo | null, highScoresResultsListener: HighScoresResultsListener | null, preload: bool): void {
        do {
            this.highScoresArray![0] = RecordStoreHighScores.getInstance6(this.abeClientInformation, gameInfo, this.TOP, this.PERSONAL_HIGH_SCORES, this.SCORES, new ScoreComparator().jinit_ScoreComparator_1(true)); if (JThrowable.pending !== null) break;
            highScoresResultsListener!.setHighScoresArray(this.highScoresArray); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.FETCH, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
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

