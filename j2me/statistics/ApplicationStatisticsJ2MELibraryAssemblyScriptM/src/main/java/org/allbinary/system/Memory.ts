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
// package org.allbinary.system
// import org.allbinary.logic.string.StringMaker

//ActualPlatform
@global export class Memory extends JObject {

    jclassName(): string {
        return "org.allbinary.system.Memory";
    }

    jinit_Memory_0(): Memory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInfo(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Memory: Free: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendlong(JRuntime.getRuntime()!.freeMemory()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Total: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendlong(JRuntime.getRuntime()!.totalMemory()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

