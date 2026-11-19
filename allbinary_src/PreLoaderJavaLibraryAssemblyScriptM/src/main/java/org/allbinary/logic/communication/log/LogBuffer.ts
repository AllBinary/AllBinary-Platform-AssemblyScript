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
// package org.allbinary.logic.communication.log
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.StdUtil

@global export class LogBuffer extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.LogBuffer";
    }
    logUtil: LogUtil | null = null;
    logEntryVector: BasicArrayList | null = null;

    jfields_LogBuffer(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_LogBuffer_0(): LogBuffer {
        super.jinit_JObject_0();
        this.jfields_LogBuffer();
        this.logEntryVector = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    add(log: Log | null): void {
        this.logEntryVector!.add(log); if (JThrowable.pending !== null) return;
    }
    

    logAll(): void {
        let size: i32 = this.logEntryVector!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let log: Log | null = changetype<Log | null>(this.logEntryVector!.get(index)); if (JThrowable.pending !== null) return;
            this.logUtil!.putL(log); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

