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
// package org.allbinary.business.installer
// import java.util.HashMap

@global export class Portion extends JObject {

    jclassName(): string {
        return "org.allbinary.business.installer.Portion";
    }
    current: JInteger | null = null;
    total: JInteger | null = null;

    jfields_Portion(): void {
    
    
    }
    

    jinit_Portion_1(hashMap: JHashMap | null): Portion {
        super.jinit_JObject_0();
        this.jfields_Portion();
        this.current = changetype<JInteger | null>(hashMap!.get("current")); if (JThrowable.pending !== null) return this;
        this.total = changetype<JInteger | null>(hashMap!.get("total")); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getCurrent(): JInteger | null {
        return this.current;
    }
    

    getTotal(): JInteger | null {
        return this.total;
    }
}

