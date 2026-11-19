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
// package org.allbinary.game.input
// import java.io.ByteArrayInputStream
// import java.io.ByteArrayOutputStream
// import java.io.DataInputStream
// import java.io.DataOutputStream
// import javax.microedition.rms.RecordEnumeration
// import javax.microedition.rms.RecordStore
// import org.allbinary.TsUtil
// import org.allbinary.game.configuration.persistance.BasicPersitance
// import org.allbinary.game.configuration.persistance.NullRecordComparator
// import org.allbinary.game.configuration.persistance.NullRecordFilter
// import org.allbinary.game.configuration.persistance.NullRecordStore
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.HashtableUtil
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

//GameInputPersistanceLibrary
@global export class InputPersistance extends BasicPersitance {

    jclassName(): string {
        return "org.allbinary.game.input.InputPersistance";
    }
    tsUtil: TsUtil | null = null;
    hashtableUtil: HashtableUtil | null = null;

    jfields_InputPersistance(): void {
    this.tsUtil = TsUtil.getInstance();
    this.hashtableUtil = HashtableUtil.getInstance();
    }
    

    jinit_InputPersistance_1(name: string | null): InputPersistance {
        super.jinit_BasicPersitance_1(name);
        this.jfields_InputPersistance();
        return this;
    }
    

    loadAll(abeClientInformation: AbeClientInformationInterface | null): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
            let recordEnum: RecordEnumeration | null = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true); if (JThrowable.pending !== null) break;
            let gameActionInputId: i64 = 0;
            let inputId: i64 = 0;
            let gameActionInput: Input | null = null;
            let input: Input | null = null;
            let hashtable: ABHashtable | null = null;
            let gameKeyFactory: GameKeyMappingFactory | null = GameKeyMappingFactory.getInstance(); if (JThrowable.pending !== null) break;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            let inputFactory: InputFactory | null = InputFactory.getInstance(); if (JThrowable.pending !== null) break;
            let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) break;
            let stdUtil: StdUtil | null = StdUtil.getInstance(); if (JThrowable.pending !== null) break;
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
                    hashtable = stdUtil!.createHashtable(); if (JThrowable.pending !== null) break;
                    let value: i32 = 0;
                    while (inputStream!.available() > 0) {
                        let gameActionInputIdAsString: string | null = inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                        value = JInteger.parseInt1(gameActionInputIdAsString); if (JThrowable.pending !== null) break;
                        gameActionInputId = (<i64>(value));
                        inputStream!.readUTF(); if (JThrowable.pending !== null) break;
                        value = JInteger.parseInt1(inputStream!.readUTF()); if (JThrowable.pending !== null) break;
                        inputId = (<i64>(value));
                        gameActionInput = gameKeyFactory!.getGameKey((<i32>(gameActionInputId))); if (JThrowable.pending !== null) break;
                        input = inputFactory!.getInstanceById((<i32>(inputId))); if (JThrowable.pending !== null) break;
                        if (input == inputFactory!.NO_INPUT || gameActionInput == null) {
                            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) break;
                            if (input == inputFactory!.NO_INPUT) {
                                stringBuffer!.append(this.persistanceStrings!.ERROR_LOADING_ID); if (JThrowable.pending !== null) break;
                                stringBuffer!.appendlong(inputId); if (JThrowable.pending !== null) break;
                                stringBuffer!.append(this.persistanceStrings!.GAME_ACTION_INPUT); if (JThrowable.pending !== null) break;
                                stringBuffer!.appendlong(gameActionInputId); if (JThrowable.pending !== null) break;
                                PreLogUtil.put(JObject.jtoString(stringBuffer), this, this.persistanceStrings!.LOAD_ALL); if (JThrowable.pending !== null) break;
                            } if (JThrowable.pending !== null) break;
                            if (gameActionInput == null) {
                                stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) break;
                                stringBuffer!.append(this.persistanceStrings!.ERROR_LOADING); if (JThrowable.pending !== null) break;
                                stringBuffer!.appendlong(gameActionInputId); if (JThrowable.pending !== null) break;
                                stringBuffer!.append(this.persistanceStrings!.ID); if (JThrowable.pending !== null) break;
                                stringBuffer!.appendlong(inputId); if (JThrowable.pending !== null) break;
                                PreLogUtil.put(JObject.jtoString(stringBuffer), this, this.persistanceStrings!.LOAD_ALL); if (JThrowable.pending !== null) break;
                            } if (JThrowable.pending !== null) break;
                        } else {
                        } if (JThrowable.pending !== null) break;
                        hashtable!.put(input, gameActionInput); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    this.valueList!.add(hashtable); if (JThrowable.pending !== null) break;
                    this.idList!.add(smallIntegerSingletonFactory!.getAt(id)); if (JThrowable.pending !== null) break;
                } else {
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
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            PreLogUtil.put(JObject.jtoString(stringBuffer!.append(this.persistanceStrings!.SAVING)!.append(StringUtil.getInstance()!.toString1(hashtable))), this, this.commonStrings!.SAVE); if (JThrowable.pending !== null) break;
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
            let byteArrayOutputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            let outputStream: JDataOutputStream | null = new JDataOutputStream().jinit_JDataOutputStream_1(byteArrayOutputStream); if (JThrowable.pending !== null) break;
            let gameActionInput: Input | null = null;
            let list: BasicArrayList | null = null;
            let input: Input | null = null;
            let savedGameBytes: StaticArray<i8> | null = null;
            let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) break;
            let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) break;
            let inputObjectArray: StaticArray<Object | null> | null = this.hashtableUtil!.getKeysAsArray(hashtable); if (JThrowable.pending !== null) break;
            let size: i32 = inputObjectArray!.length;
            for (let index: i32 = 0; index < size; index++) {
                gameActionInput = changetype<Input | null>(inputObjectArray![index]);
                list = changetype<BasicArrayList | null>(hashtable!.get(changetype<Object | null>(inputObjectArray![index]))); if (JThrowable.pending !== null) break;
                for (let index2: i32 = 0; index2 < list!.size(); index2++) {
                    let gameActionInputIdAsString: string | null = JObject.jtoString(smallIntegerSingletonFactory!.getAt(gameActionInput!.getId())); if (JThrowable.pending !== null) break;
                    outputStream!.writeUTF(gameActionInputIdAsString); if (JThrowable.pending !== null) break;
                    outputStream!.writeUTF(commonSeps!.EQUALS); if (JThrowable.pending !== null) break;
                    input = changetype<Input | null>(list!.objectArray![index2]);
                    let inputIdAsString: string | null = JObject.jtoString(smallIntegerSingletonFactory!.getAt(input!.getId())); if (JThrowable.pending !== null) break;
                    outputStream!.writeUTF(inputIdAsString); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            savedGameBytes = byteArrayOutputStream!.toByteArray(); if (JThrowable.pending !== null) break;
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
}

