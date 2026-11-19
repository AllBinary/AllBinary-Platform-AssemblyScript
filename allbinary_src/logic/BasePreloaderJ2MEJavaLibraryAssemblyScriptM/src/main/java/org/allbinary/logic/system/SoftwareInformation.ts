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
// package org.allbinary.logic.system
// import org.allbinary.KotlinUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

@global export class SoftwareInformation extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.SoftwareInformation";
    }
    name: string | null = null;
    shortName: string | null = null;
    version: string | null = null;

    jfields_SoftwareInformation(): void {
    
    
    
    }
    

    jinit_SoftwareInformation_3(name: string | null, version: string | null, shortName: string | null): SoftwareInformation {
        super.jinit_JObject_0();
        this.jfields_SoftwareInformation();
        this.name = name;
        this.version = version;
        this.shortName = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(shortName)!.append(KotlinUtil.getShortName())); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    getVersion(): string | null {
        return this.version;
    }
    

    toShortString(): string | null {
        return this.shortName;
    }
    

    toString(): string | null {
        let NAME: string | null = "Name: ";
        let VERSION: string | null = "Version: ";
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(NAME); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(VERSION); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getVersion()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

