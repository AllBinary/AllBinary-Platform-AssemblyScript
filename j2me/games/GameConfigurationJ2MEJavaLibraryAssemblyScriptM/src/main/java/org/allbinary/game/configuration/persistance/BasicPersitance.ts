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
// import javax.microedition.rms.RecordStore
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.persistance.PlatformRecordIdUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class BasicPersitance extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.BasicPersitance";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    persistanceStrings: PersistanceStrings | null = null;
    platformRecordIdUtil: PlatformRecordIdUtil | null = null;
    recordId: string | null = null;
    valueList: BasicArrayList | null = null;
    idList: BasicArrayList | null = null;

    jfields_BasicPersitance(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.persistanceStrings = PersistanceStrings.getInstance();
    this.platformRecordIdUtil = PlatformRecordIdUtil.getInstance();
    
    this.valueList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.idList = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_BasicPersitance_1(recordId: string | null): BasicPersitance {
        super.jinit_JObject_0();
        this.jfields_BasicPersitance();
        this.recordId = recordId;
        return this;
    }
    

    deleteRecoreStore(abeClientInformation: AbeClientInformationInterface | null): void {
        RecordStore.deleteRecordStore(this.getRecordId(abeClientInformation)); if (JThrowable.pending !== null) return;
    }
    

    deleteAll(abeClientInformation: AbeClientInformationInterface | null): void {
        let size: i32 = this.idList!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let integer: JInteger | null = changetype<JInteger | null>(this.idList!.objectArray![index]);
            this.delete_(abeClientInformation, integer!.intValue()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.clear(); if (JThrowable.pending !== null) return;
    }
    

    delete_(abeClientInformation: AbeClientInformationInterface | null, deleteId: i32): void {
        let recordStore: RecordStore | null = NullRecordStore.NULL_RECORD_STORE;
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.persistanceStrings!.DELETING_WITH_ID)!.appendint(deleteId)), this, this.commonStrings!.delete_); if (JThrowable.pending !== null) break;
            recordStore = RecordStore.openRecordStore(this.getRecordId(abeClientInformation), true); if (JThrowable.pending !== null) break;
            recordStore!.deleteRecord(deleteId); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        }
        {
            if (recordStore != null) {
                PreLogUtil.put(this.persistanceStrings!.CLOSING_RECORDSTORE, this, this.commonStrings!.delete_); if (JThrowable.pending !== null) return;
                recordStore!.closeRecordStore(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getRecordId(abeClientInformation: AbeClientInformationInterface | null): string | null {
        return this.platformRecordIdUtil!.getRecordId(abeClientInformation, this.recordId);
    }
    

    getList(): BasicArrayList | null {
        return this.valueList;
    }
    

    getIds(): BasicArrayList | null {
        return this.idList;
    }
    

    clear(): void {
        this.valueList!.clear(); if (JThrowable.pending !== null) return;
        this.idList!.clear(); if (JThrowable.pending !== null) return;
    }
}

