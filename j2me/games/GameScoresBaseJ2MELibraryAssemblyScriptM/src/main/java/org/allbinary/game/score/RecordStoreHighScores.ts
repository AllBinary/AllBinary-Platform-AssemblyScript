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
// import java.io.ByteArrayInputStream
// import java.io.DataInputStream
// import java.io.EOFException
// import java.io.IOException
// import javax.microedition.rms.RecordComparator
// import javax.microedition.rms.RecordEnumeration
// import javax.microedition.rms.RecordStore
// import javax.microedition.rms.RecordStoreException
// import javax.microedition.rms.RecordStoreNotFoundException
// import org.allbinary.TsUtil
// import org.allbinary.game.GameInfo
// import org.allbinary.game.configuration.persistance.NullRecordComparator
// import org.allbinary.game.configuration.persistance.NullRecordFilter
// import org.allbinary.game.configuration.persistance.NullRecordStore
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.persistance.PlatformRecordIdUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class RecordStoreHighScores extends HighScores {

    jclassName(): string {
        return "org.allbinary.game.score.RecordStoreHighScores";
    }
    @lazy static jv_hashTable: ABHashtable | null = null;
    @lazy static js_hashTable: bool = false;
    static get hashTable(): ABHashtable | null {
        if (!RecordStoreHighScores.js_hashTable) {
            RecordStoreHighScores.js_hashTable = true;
            RecordStoreHighScores.jv_hashTable = StdUtil.getInstance()!.createHashtable();
        }
        return RecordStoreHighScores.jv_hashTable;
    }
    static set hashTable(value: ABHashtable | null) {
        RecordStoreHighScores.js_hashTable = true;
        RecordStoreHighScores.jv_hashTable = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    platformRecordIdUtil: PlatformRecordIdUtil | null = null;
    tsUtil: TsUtil | null = null;
    RECORD_ID: string | null = null;
    MAXHIGHSCORES: i32 = 0;
    gameInfo: GameInfo | null = null;
    abeClientInformation: AbeClientInformationInterface | null = null;
    recordComparatorInterface: RecordComparator | null = null;

    jfields_RecordStoreHighScores(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.platformRecordIdUtil = PlatformRecordIdUtil.getInstance();
    this.tsUtil = TsUtil.getInstance();
    this.RECORD_ID = "_HS";
    this.MAXHIGHSCORES = 100;
    
    
    
    }
    

    jinit_RecordStoreHighScores_6(abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null, name: string | null, heading: string | null, columnTwoHeading: string | null, recordComparatorInterface: RecordComparator | null): RecordStoreHighScores {
        super.jinit_HighScores_3(name, heading, columnTwoHeading);
        this.jfields_RecordStoreHighScores();
        this.abeClientInformation = abeClientInformation;
        this.gameInfo = gameInfo;
        this.recordComparatorInterface = recordComparatorInterface;
        this.load(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    static getInstance6(abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null, highScoreName: string | null, heading: string | null, columnTwoHeading: string | null, recordComparatorInterface: RecordComparator | null): HighScores | null {
        let highScoresCanBeNull: Object | null = RecordStoreHighScores.hashTable!.get(changetype<Object | null>(highScoreName)); if (JThrowable.pending !== null) return null;
        if (highScoresCanBeNull == null) {
            let highScores: HighScores | null = new RecordStoreHighScores().jinit_RecordStoreHighScores_6(abeClientInformation, gameInfo, highScoreName, heading, columnTwoHeading, recordComparatorInterface); if (JThrowable.pending !== null) return null;
            RecordStoreHighScores.hashTable!.put(highScores!.getName(), highScores); if (JThrowable.pending !== null) return null;
            return highScores;
        } if (JThrowable.pending !== null) return null;
        return changetype<HighScores | null>(highScoresCanBeNull);
    }
    

    getRecordId(abeClientInformation: AbeClientInformationInterface | null): string | null {
        return this.platformRecordIdUtil!.getRecordId(abeClientInformation, JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(this.getName())!.append(this.RECORD_ID)));
    }
    

    addHighScore(newHighScore: HighScore | null): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Adding HighScore: ")!.appendlong(newHighScore!.getScore())), this, this.commonStrings!.ADD); if (JThrowable.pending !== null) break;
            if (this.isTooManyHighScores()) {
                this.logUtil!.putF("Removing Lowest Score", this, this.commonStrings!.ADD); if (JThrowable.pending !== null) break;
                this.removeLowestHighScore(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true); if (JThrowable.pending !== null) break;
            let highScoreBytes: StaticArray<i8> | null = newHighScore!.getAsBytes(); if (JThrowable.pending !== null) break;
            let recordId: i32 = recordStore!.addRecord(highScoreBytes, 0, highScoreBytes!.length); if (JThrowable.pending !== null) break;
            this.load(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
            let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e); if (JThrowable.pending !== null) return;
        } else if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let e: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e); if (JThrowable.pending !== null) return;
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e); if (JThrowable.pending !== null) return;
        }
        {
            do {
                if (recordStore != null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.ADD); if (JThrowable.pending !== null) break;
                    recordStore!.closeRecordStore(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
                let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeLowestHighScore(): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true); if (JThrowable.pending !== null) break;
            let recordEnum: RecordEnumeration | null = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true); if (JThrowable.pending !== null) break;
            let scoreComparator: ScoreComparator | null = (changetype<ScoreComparator | null>(this.recordComparatorInterface));
            let bestHighScore: HighScore | null = new HighScore().jinit_HighScore_4(-1, "none", GameInfo.NONE, scoreComparator!.getBestScore()); if (JThrowable.pending !== null) break;
            let recordAsBytes: StaticArray<i8> | null = null;
            let byteArrayInputStream: JByteArrayInputStream | null = null;
            let inputStream: JDataInputStream | null = null;
            while (recordEnum!.hasNextElement()) {
                let id: i32 = recordEnum!.nextRecordId(); if (JThrowable.pending !== null) break;
                recordAsBytes = this.tsUtil!.getRecord(recordStore, id); if (JThrowable.pending !== null) break;
                if (recordAsBytes != null) {
                    byteArrayInputStream = new JByteArrayInputStream().jinit_JByteArrayInputStream_1(recordAsBytes); if (JThrowable.pending !== null) break;
                    inputStream = new JDataInputStream().jinit_JDataInputStream_1(byteArrayInputStream); if (JThrowable.pending !== null) break;
                    let name: string | null = inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                    let nextScore: i64 = inputStream!.readLong(); if (JThrowable.pending !== null) break;
                    let nextCurrentHighScore: HighScore | null = new HighScore().jinit_HighScore_4(id, name, GameInfo.NONE, nextScore); if (JThrowable.pending !== null) break;
                    if (this.recordComparatorInterface!.compare(nextCurrentHighScore!.getAsBytes(), bestHighScore!.getAsBytes()) == RecordComparator_JStatics.FOLLOWS) {
                        bestHighScore = nextCurrentHighScore;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            if (bestHighScore!.getId() != -1) {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Removing Lowest HighScore: ")!.appendlong(bestHighScore!.getScore())), this, this.commonStrings!.LOAD); if (JThrowable.pending !== null) break;
                recordStore!.deleteRecord(bestHighScore!.getId()); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
            let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeLowestHighScore", e); if (JThrowable.pending !== null) return;
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeLowestHighScore", e); if (JThrowable.pending !== null) return;
        }
        {
            do {
                if (recordStore != null) {
                    PreLogUtil.put("Closing RecordStore", this, "removeLowestHighScore"); if (JThrowable.pending !== null) break;
                    recordStore!.closeRecordStore(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
                let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "removeLowestHighScore", e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    load(): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            recordStore = RecordStore.openRecordStore(this.getRecordId(this.abeClientInformation), true); if (JThrowable.pending !== null) break;
            this.setList(new BasicArrayListD().jinit_BasicArrayListD_0()); if (JThrowable.pending !== null) break;
            let recordEnum: RecordEnumeration | null = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true); if (JThrowable.pending !== null) break;
            let recordAsBytes: StaticArray<i8> | null = null;
            let byteArrayInputStream: JByteArrayInputStream | null = null;
            let inputStream: JDataInputStream | null = null;
            while (recordEnum!.hasNextElement()) {
                let id: i32 = recordEnum!.nextRecordId(); if (JThrowable.pending !== null) break;
                recordAsBytes = this.tsUtil!.getRecord(recordStore, id); if (JThrowable.pending !== null) break;
                if (recordAsBytes != null) {
                    byteArrayInputStream = new JByteArrayInputStream().jinit_JByteArrayInputStream_1(recordAsBytes); if (JThrowable.pending !== null) break;
                    inputStream = new JDataInputStream().jinit_JDataInputStream_1(byteArrayInputStream); if (JThrowable.pending !== null) break;
                    do {
                        let name: string | null = inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                        let score: i64 = inputStream!.readLong(); if (JThrowable.pending !== null) break;
                        let newHighScore: HighScore | null = new HighScore().jinit_HighScore_4(id, name, GameInfo.NONE, score); if (JThrowable.pending !== null) break;
                        let list: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) break;
                        let size: i32 = list!.size(); if (JThrowable.pending !== null) break;
                        let lastIndex: i32 = size;
                        for (let index: i32 = 0; index < size; index++) {
                            let highScore: HighScore | null = changetype<HighScore | null>(list!.objectArray![index]);
                            if (this.recordComparatorInterface!.compare(newHighScore!.getAsBytes(), highScore!.getAsBytes()) == RecordComparator_JStatics.PRECEDES) {
                                lastIndex = index;
                                break;
                            } if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                        list!.addAt(lastIndex, newHighScore); if (JThrowable.pending !== null) break;
                    } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JEOFException) {
                        let e: JEOFException | null = changetype<JEOFException | null>(JThrowable.take());
                        this.logUtil!.put("EOF", this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) break;
                        { JThrowable.raise(e); break; }
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreNotFoundException) {
            let e: RecordStoreNotFoundException | null = changetype<RecordStoreNotFoundException | null>(JThrowable.take());
            this.logUtil!.put("No High Scores", this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) return;
        } else if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
            let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) return;
        } else if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let e: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) return;
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.UNKNOWN, this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) return;
        }
        {
            do {
                if (recordStore != null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.LOAD); if (JThrowable.pending !== null) break;
                    recordStore!.closeRecordStore(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
                let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isTooManyHighScores(): bool {
        if (this.getList() != null && this.getList()!.size() < this.MAXHIGHSCORES) {
            return false;
        } else {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("HighScores RecordStore Max Reached: ")!.appendint(this.MAXHIGHSCORES)), this, "isTooManyHighScores"); if (JThrowable.pending !== null) return false;
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isBestScore(newHighScore: HighScore | null): bool {
        do {
            if (!this.isTooManyHighScores()) {
                this.logUtil!.putF("Slot Available for a High Score", this, "isBestScore"); if (JThrowable.pending !== null) break;
                return true;
            } else {
                let list: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) break;
                let size: i32 = list!.size(); if (JThrowable.pending !== null) break;
                for (let index: i32 = 0; index < size; index++) {
                    let highScore: HighScore | null = changetype<HighScore | null>(list!.objectArray![index]);
                    if (this.recordComparatorInterface!.compare(newHighScore!.getAsBytes(), highScore!.getAsBytes()) == RecordComparator_JStatics.FOLLOWS) {
                        this.logUtil!.putF("Obtained a High Score", this, "isBestScore"); if (JThrowable.pending !== null) break;
                        return true;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.logUtil!.putF("Not a High Score", this, "isBestScore"); if (JThrowable.pending !== null) break;
            return false;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.ADD, e); if (JThrowable.pending !== null) return false;
            { JThrowable.raise(e); return false; }
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(super.toString()); if (JThrowable.pending !== null) return null;
        let list: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) return null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let highScore: HighScore | null = changetype<HighScore | null>(list!.objectArray![index]);
            stringBuffer!.append(highScore!.getScoreString()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonSeps.getInstance()!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

