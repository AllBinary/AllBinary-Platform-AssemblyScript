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
// import javax.microedition.rms.RecordEnumeration
// import javax.microedition.rms.RecordStore
// import org.allbinary.game.configuration.persistance.BasicPersitance
// import org.allbinary.game.configuration.persistance.NullRecordComparator
// import org.allbinary.game.configuration.persistance.NullRecordFilter
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.HashtableUtil
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

//GameInputNoPersistanceLibrary
@global export class InputPersistance extends BasicPersitance {

    jclassName(): string {
        return "org.allbinary.game.input.InputPersistance";
    }
    hashtableUtil: HashtableUtil | null = null;

    jfields_InputPersistance(): void {
    this.hashtableUtil = HashtableUtil.getInstance();
    }
    

    jinit_InputPersistance_1(name: string | null): InputPersistance {
        super.jinit_BasicPersitance_1(name);
        this.jfields_InputPersistance();
        return this;
    }
    

    loadAll(abeClientInformation: AbeClientInformationInterface | null): void {
        let recordStore: RecordStore | null = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) return;
        let recordEnum: RecordEnumeration | null = recordStore!.enumerateRecords(NullRecordFilter.NULL_RECORD_FILTER, NullRecordComparator.NULL_RECORD_COMPARATOR, true); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return;
        let id: i32 = 0;
        while (recordEnum!.hasNextElement()) {
            id = recordEnum!.nextRecordId(); if (JThrowable.pending !== null) return;
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer!.append(this.persistanceStrings!.LOADING_ID)!.appendint(id)), this, this.persistanceStrings!.LOAD_ALL); if (JThrowable.pending !== null) return;
            hashtable = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return;
            this.valueList!.add(hashtable); if (JThrowable.pending !== null) return;
            this.idList!.add(smallIntegerSingletonFactory!.getAt(id)); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        recordStore!.closeRecordStore(); if (JThrowable.pending !== null) return;
    }
    

    save(abeClientInformation: AbeClientInformationInterface | null, hashtable: ABHashtable | null): void {
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.persistanceStrings!.NOT_SAVING)!.append(StringUtil.getInstance()!.toString1(hashtable))), this, this.commonStrings!.SAVE); if (JThrowable.pending !== null) return;
        let recordStore: RecordStore | null = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) return;
        let gameActionInput: Input | null = null;
        let list: BasicArrayList | null = null;
        let input: Input | null = null;
        let inputObjectArray: StaticArray<Object | null> | null = this.hashtableUtil!.getKeysAsArray(hashtable); if (JThrowable.pending !== null) return;
        let size: i32 = inputObjectArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            gameActionInput = changetype<Input | null>(inputObjectArray![index]);
            list = changetype<BasicArrayList | null>(hashtable!.get(inputObjectArray![index])); if (JThrowable.pending !== null) return;
            for (let index2: i32 = 0; index2 < list!.size(); index2++) {
                input = changetype<Input | null>(list!.get(index2)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        recordStore!.closeRecordStore(); if (JThrowable.pending !== null) return;
    }
}

