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
// package org.allbinary.game.configuration.persistance
// import java.io.ByteArrayInputStream
// import java.io.ByteArrayOutputStream
// import java.io.DataInputStream
// import java.io.DataOutputStream
// import javax.microedition.rms.RecordEnumeration
// import javax.microedition.rms.RecordStore
// import org.allbinary.TsUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.HashtableUtil

@global export class KeyValuePersistance extends BasicPersitance {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.KeyValuePersistance";
    }
    tsUtil: TsUtil | null = null;

    jfields_KeyValuePersistance(): void {
    this.tsUtil = TsUtil.getInstance();
    }
    

    jinit_KeyValuePersistance_1(recordId: string | null): KeyValuePersistance {
        super.jinit_BasicPersitance_1(recordId);
        this.jfields_KeyValuePersistance();
        return this;
    }
    

    loadAll(abeClientInformation: AbeClientInformationInterface | null): void {
        this.loadAllSize(abeClientInformation, 1); if (JThrowable.pending !== null) return;
    }
    

    loadAllSize(abeClientInformation: AbeClientInformationInterface | null, size: i32): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
            let recordEnum: RecordEnumeration | null = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true); if (JThrowable.pending !== null) break;
            let hashtable: ABHashtable | null = null;
            let name: string | null = null;
            let value: string | null = null;
            let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) break;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            let recordAsBytes: StaticArray<i8> | null = null;
            let byteArrayInputStream: JByteArrayInputStream | null = null;
            let inputStream: JDataInputStream | null = null;
            while (recordEnum!.hasNextElement()) {
                let id: i32 = recordEnum!.nextRecordId(); if (JThrowable.pending !== null) break;
                stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) break;
                this.logUtil!.putF(JObject.jtoString(stringBuffer!.append(this.persistanceStrings!.LOADING_ID)!.appendint(id)), this, this.persistanceStrings!.LOAD_ALL); if (JThrowable.pending !== null) break;
                recordAsBytes = this.tsUtil!.getRecord(recordStore, id); if (JThrowable.pending !== null) break;
                if (recordAsBytes != null) {
                    byteArrayInputStream = new JByteArrayInputStream().jinit_JByteArrayInputStream_1(recordAsBytes); if (JThrowable.pending !== null) break;
                    inputStream = new JDataInputStream().jinit_JDataInputStream_1(byteArrayInputStream); if (JThrowable.pending !== null) break;
                    hashtable = new ABHashtable().jinit_ABHashtable_0(); if (JThrowable.pending !== null) break;
                    for (let index: i32 = 0; index < size; index++) {
                        name = inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                        inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                        value = inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                        hashtable!.put(name, value); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.valueList!.add(hashtable); if (JThrowable.pending !== null) break;
                    this.idList!.add(smallIntegerSingletonFactory!.getAt(id)); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        }
        {
            if (recordStore != null) {
                PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.persistanceStrings!.LOAD_ALL); if (JThrowable.pending !== null) return;
                recordStore!.closeRecordStore(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    save(abeClientInformation: AbeClientInformationInterface | null, hashtable: ABHashtable | null): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.persistanceStrings!.SAVING)!.append(StringUtil.getInstance()!.toString1(hashtable))), this, this.commonStrings!.SAVE); if (JThrowable.pending !== null) break;
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
            let byteArrayOutputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            let outputStream: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(byteArrayOutputStream); if (JThrowable.pending !== null) break;
            let value: string | null = null;
            let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) break;
            let objectArray: StaticArray<Object | null> | null = HashtableUtil.getInstance()!.getKeysAsArray(hashtable); if (JThrowable.pending !== null) break;
            let anyType: Object | null = null;
            let size: i32 = objectArray!.length;
            for (let index: i32 = 0; index < size; index++) {
                outputStream!.writeUTF(changetype<string | null>(objectArray![index])); if (JThrowable.pending !== null) break;
                outputStream!.writeUTF(commonSeps!.EQUALS); if (JThrowable.pending !== null) break;
                anyType = changetype<Object | null>(objectArray![index]);
                value = changetype<string | null>(hashtable!.get(anyType)); if (JThrowable.pending !== null) break;
                outputStream!.writeUTF(value); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let tsUtil: TsUtil | null = TsUtil.getInstance(); if (JThrowable.pending !== null) break;
            let savedGameBytes: StaticArray<i8> | null = tsUtil!.getByteArray(JObject.jtoString(byteArrayOutputStream)); if (JThrowable.pending !== null) break;
            recordStore!.addRecord(savedGameBytes, 0, savedGameBytes!.length); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        }
        {
            if (recordStore != null) {
                PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.commonStrings!.SAVE); if (JThrowable.pending !== null) return;
                recordStore!.closeRecordStore(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    get(index: i32): ABHashtable | null {
        let hashtable: ABHashtable | null = changetype<ABHashtable | null>(this.valueList!.objectArray![index]);
        return hashtable;
    }
}

