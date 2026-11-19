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
// import java.util.Enumeration
// import org.allbinary.util.BasicArrayList
// import org.allbinary.game.GameInfo
// import org.allbinary.game.score.HighScore
// import org.allbinary.game.score.HighScores
// import org.allbinary.game.score.RemoteErrorHighScoresSingletonFactory
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.SoftwareInformation
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.EnumerationUtil

@global export class RemoteHighScores extends HighScores {

    jclassName(): string {
        return "org.allbinary.game.score.remote.RemoteHighScores";
    }
    @lazy static jv_hashTable: ABHashtable | null = null;
    @lazy static js_hashTable: bool = false;
    static get hashTable(): ABHashtable | null {
        if (!RemoteHighScores.js_hashTable) {
            RemoteHighScores.js_hashTable = true;
            RemoteHighScores.jv_hashTable = StdUtil.getInstance()!.createHashtable();
        }
        return RemoteHighScores.jv_hashTable;
    }
    static set hashTable(value: ABHashtable | null) {
        RemoteHighScores.js_hashTable = true;
        RemoteHighScores.jv_hashTable = value;
    }
    logUtil: LogUtil | null = null;
    enumerationUtil: EnumerationUtil | null = null;
    abeClientInformation: AbeClientInformationInterface | null = null;
    softwareInformation: SoftwareInformation | null = null;
    ascending: JBoolean | null = null;
    ASCENDING: string | null = null;

    jfields_RemoteHighScores(): void {
    this.logUtil = LogUtil.getInstance();
    this.enumerationUtil = EnumerationUtil.getInstance();
    
    
    this.ascending = null;
    this.ASCENDING = "ASCENDING";
    }
    

    jinit_RemoteHighScores_7(abeClientInformation: AbeClientInformationInterface | null, softwareInformation: SoftwareInformation | null, gameInfo: GameInfo | null, heading: string | null, columnTwoHeading: string | null, ascending: JBoolean | null, preload: bool): RemoteHighScores {
        super.jinit_HighScores_3(JObject.jtoString(gameInfo), heading, columnTwoHeading);
        this.jfields_RemoteHighScores();
        this.abeClientInformation = abeClientInformation;
        this.softwareInformation = softwareInformation;
        this.setAscending(ascending); if (JThrowable.pending !== null) return this;
        if (preload) {
            RemoteHighScoresProcessorFactory.getInstance()!.process(this, this.abeClientInformation, gameInfo); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    static getInstance6(abeClientInformation: AbeClientInformationInterface | null, softwareInformation: SoftwareInformation | null, gameInfo: GameInfo | null, heading: string | null, columnTwoHeading: string | null, isAscending: JBoolean | null): HighScores | null {
        return RemoteHighScores.getInstancePreload(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, true);
    }
    

    static getInstancePreload(abeClientInformation: AbeClientInformationInterface | null, softwareInformation: SoftwareInformation | null, gameInfo: GameInfo | null, heading: string | null, columnTwoHeading: string | null, isAscending: JBoolean | null, preload: bool): HighScores | null {
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
        do {
            let highScores: HighScores | null = changetype<HighScores | null>(RemoteHighScores.hashTable!.get(gameInfo)); if (JThrowable.pending !== null) break;
            if (highScores == null) {
                highScores = new RemoteHighScores().jinit_RemoteHighScores_7(abeClientInformation, softwareInformation, gameInfo, heading, columnTwoHeading, isAscending, preload); if (JThrowable.pending !== null) break;
                RemoteHighScores.hashTable!.put(gameInfo, highScores); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return highScores;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            logUtil!.put(commonStrings!.EXCEPTION, RemoteErrorHighScoresSingletonFactory.getInstance(), commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            return RemoteErrorHighScoresSingletonFactory.getInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    addHighScore(newHighScore: HighScore | null): void {
        RemoteHighScoresSubmissionProcessorFactory.getInstance()!.process(this, this.abeClientInformation, newHighScore); if (JThrowable.pending !== null) return;
    }
    

    update(hashtable: ABHashtable | null): void {
        this.getList()!.clear(); if (JThrowable.pending !== null) return;
        let vector: BasicArrayList | null = changetype<BasicArrayList | null>(hashtable!.get(changetype<Object | null>(RemoteHighScoresData.getInstance()!.HIGH_SCORES))); if (JThrowable.pending !== null) return;
        if (vector != null) {
            let size: i32 = vector!.size(); if (JThrowable.pending !== null) return;
            for (let index: i32 = 0; index < size; index++) {
                let highScoreVector: BasicArrayList | null = changetype<BasicArrayList | null>(vector!.get(index)); if (JThrowable.pending !== null) return;
                let displayName: string | null = changetype<string | null>(highScoreVector!.get(0)); if (JThrowable.pending !== null) return;
                let score: string | null = changetype<string | null>(highScoreVector!.get(1)); if (JThrowable.pending !== null) return;
                let longScore: i64 = JLong.parseLong1(score); if (JThrowable.pending !== null) return;
                let highScore: HighScore | null = new HighScore().jinit_HighScore_4(-1, displayName, null, longScore); if (JThrowable.pending !== null) return;
                this.getList()!.add(highScore); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } else {
            let NEXT_ELEMENT: string | null = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.NEXT)!.append("Element: ")); if (JThrowable.pending !== null) return;
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            let enumeration: JEnumeration | null = hashtable!.elements(); if (JThrowable.pending !== null) return;
            let nextElement: Object | null = null;
            while (this.enumerationUtil!.hasMoreElements(enumeration)) {
                nextElement = this.enumerationUtil!.nextElement(enumeration); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(jstr(NEXT_ELEMENT) + jstr(nextElement), this, commonStrings!.PROCESS); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setAscending(ascending: JBoolean | null): void {
        this.ascending = ascending;
    }
    

    getAscending(): JBoolean | null {
        return this.ascending;
    }
    

    getSoftwareInformation(): SoftwareInformation | null {
        return this.softwareInformation;
    }
}

