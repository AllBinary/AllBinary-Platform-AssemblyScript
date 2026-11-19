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
// import java.io.ByteArrayOutputStream
// import java.io.DataInputStream
// import java.io.DataOutputStream
// import javax.microedition.rms.RecordEnumeration
// import javax.microedition.rms.RecordStore
// import javax.microedition.rms.RecordStoreException
// import org.allbinary.TsUtil
// import org.allbinary.game.GameInfo
// import org.allbinary.game.configuration.persistance.NullRecordComparator
// import org.allbinary.game.configuration.persistance.NullRecordFilter
// import org.allbinary.game.configuration.persistance.NullRecordStore
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.java.exception.ExceptionUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.persistance.PlatformRecordIdUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class HighScoreNamePersistanceSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoreNamePersistanceSingleton";
    }
    @lazy static jv_SINGLETON: HighScoreNamePersistanceSingleton | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): HighScoreNamePersistanceSingleton | null {
        if (!HighScoreNamePersistanceSingleton.js_SINGLETON) {
            HighScoreNamePersistanceSingleton.js_SINGLETON = true;
            HighScoreNamePersistanceSingleton.jv_SINGLETON = new HighScoreNamePersistanceSingleton().jinit_HighScoreNamePersistanceSingleton_0();
        }
        return HighScoreNamePersistanceSingleton.jv_SINGLETON;
    }
    static set SINGLETON(value: HighScoreNamePersistanceSingleton | null) {
        HighScoreNamePersistanceSingleton.js_SINGLETON = true;
        HighScoreNamePersistanceSingleton.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    tsUtil: TsUtil | null = null;
    commonStrings: CommonStrings | null = null;
    platformRecordIdUtil: PlatformRecordIdUtil | null = null;
    RECORD_ID: string | null = null;
    name: string | null = null;
    nameBasicArrayList: BasicArrayList | null = null;

    jfields_HighScoreNamePersistanceSingleton(): void {
    this.logUtil = LogUtil.getInstance();
    this.tsUtil = TsUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.platformRecordIdUtil = PlatformRecordIdUtil.getInstance();
    this.RECORD_ID = "_SN";
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    this.nameBasicArrayList = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_HighScoreNamePersistanceSingleton_0(): HighScoreNamePersistanceSingleton {
        super.jinit_JObject_0();
        this.jfields_HighScoreNamePersistanceSingleton();
        return this;
    }
    

    static getInstance(): HighScoreNamePersistanceSingleton | null {
        return HighScoreNamePersistanceSingleton.SINGLETON;
    }
    

    clear(): void {
        this.name = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return;
    }
    

    deleteAll(abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null): void {
        let size: i32 = this.nameBasicArrayList!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let integer: JInteger | null = changetype<JInteger | null>(this.nameBasicArrayList!.objectArray![index]);
            this.delete_(abeClientInformation, gameInfo, integer!.intValue()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.clear(); if (JThrowable.pending !== null) return;
    }
    

    getRecordId(abeClientInformation: AbeClientInformationInterface | null): string | null {
        return this.platformRecordIdUtil!.getRecordId(abeClientInformation, this.RECORD_ID);
    }
    

    delete_(abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null, deleteId: i32): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Deleting: ")!.appendint(deleteId)), this, this.commonStrings!.delete_); if (JThrowable.pending !== null) break;
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
            recordStore!.deleteRecord(deleteId); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        }
        {
            if (recordStore != null) {
                PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.delete_); if (JThrowable.pending !== null) return;
                recordStore!.closeRecordStore(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getIds(): BasicArrayList | null {
        return this.nameBasicArrayList;
    }
    

    load(abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null): string | null {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            if (this.name == StringUtil.getInstance()!.EMPTY_STRING) {
                let LOADING_ID: string | null = "Loading id: ";
                recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
                let recordEnum: RecordEnumeration | null = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true); if (JThrowable.pending !== null) break;
                let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) break;
                let recordAsBytes: StaticArray<i8> | null = null;
                let byteArrayInputStream: JByteArrayInputStream | null = null;
                let inputStream: JDataInputStream | null = null;
                while (recordEnum!.hasNextElement()) {
                    let id: i32 = recordEnum!.nextRecordId(); if (JThrowable.pending !== null) break;
                    this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(LOADING_ID)!.appendint(id)), this, this.commonStrings!.LOAD); if (JThrowable.pending !== null) break;
                    recordAsBytes = this.tsUtil!.getRecord(recordStore, id); if (JThrowable.pending !== null) break;
                    byteArrayInputStream = new JByteArrayInputStream().jinit_JByteArrayInputStream_1(recordAsBytes); if (JThrowable.pending !== null) break;
                    inputStream = new JDataInputStream().jinit_JDataInputStream_1(byteArrayInputStream); if (JThrowable.pending !== null) break;
                    while (inputStream!.available() > 0) {
                        this.name = inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.nameBasicArrayList!.add(smallIntegerSingletonFactory!.getAt(id)); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.save(abeClientInformation, gameInfo, this.name); if (JThrowable.pending !== null) return null;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.EXCEPTION_LABEL)!.append(ExceptionUtil.getInstance()!.getStackTrace(e))), this, this.commonStrings!.LOAD); if (JThrowable.pending !== null) return null;
        }
        {
            do {
                if (recordStore != null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.LOAD); if (JThrowable.pending !== null) break;
                    recordStore!.closeRecordStore(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
                let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.LOAD, e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.name;
    }
    

    save(abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null, name: string | null): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Saving: ")!.append(name)), this, this.commonStrings!.SAVE); if (JThrowable.pending !== null) break;
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
            let byteArrayOutputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            let outputStream: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(byteArrayOutputStream); if (JThrowable.pending !== null) break;
            outputStream!.writeUTF(name); if (JThrowable.pending !== null) break;
            let savedGameBytes: StaticArray<i8> | null = byteArrayOutputStream!.toByteArray(); if (JThrowable.pending !== null) break;
            recordStore!.addRecord(savedGameBytes, 0, savedGameBytes!.length); if (JThrowable.pending !== null) break;
            this.name = name;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e); if (JThrowable.pending !== null) return;
        }
        {
            do {
                if (recordStore != null) {
                    PreLogUtil.put("Closing RecordStore", this, this.commonStrings!.SAVE); if (JThrowable.pending !== null) break;
                    recordStore!.closeRecordStore(); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof RecordStoreException) {
                let e: RecordStoreException | null = changetype<RecordStoreException | null>(JThrowable.take());
                this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.SAVE, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

