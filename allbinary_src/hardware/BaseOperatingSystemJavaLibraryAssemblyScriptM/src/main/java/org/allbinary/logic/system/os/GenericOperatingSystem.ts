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
// package org.allbinary.logic.system.os
// import org.allbinary.logic.java.character.CharacterSet
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.string.CommonSeps

@global export class GenericOperatingSystem extends JObject implements OperatingSystemInterface {

    jclassName(): string {
        return "org.allbinary.logic.system.os.GenericOperatingSystem";
    }
    osName: string | null = null;
    osArch: string | null = null;
    osVersion: string | null = null;
    characterSet: CharacterSet | null = null;
    scalable: bool = false;

    jfields_GenericOperatingSystem(): void {
    this.osName = null;
    this.osArch = null;
    this.osVersion = null;
    this.characterSet = new CharacterSet().jinit_CharacterSet_0();
    this.scalable = false;
    }
    

    jinit_GenericOperatingSystem_0(): GenericOperatingSystem {
        super.jinit_JObject_0();
        this.jfields_GenericOperatingSystem();
        let systemProperties: SystemProperties | null = SystemProperties.getInstance(); if (JThrowable.pending !== null) return this;
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return this;
        let EMPTY_STRING: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return this;
        if (stringValidationUtil!.isEmpty(systemProperties!.getName())) {
            this.osName = EMPTY_STRING;
        } else {
            this.osName = systemProperties!.getName(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        if (stringValidationUtil!.isEmpty(systemProperties!.getArch())) {
            this.osArch = EMPTY_STRING;
        } else {
            this.osArch = systemProperties!.getArch(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        if (stringValidationUtil!.isEmpty(systemProperties!.getVersion())) {
            this.osVersion = EMPTY_STRING;
        } else {
            this.osVersion = systemProperties!.getVersion(); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getName(): string | null {
        return this.osName;
    }
    

    getVersion(): string | null {
        return this.osVersion;
    }
    

    getArch(): string | null {
        return this.osArch;
    }
    

    getCharacterSet(): CharacterSet | null {
        return this.characterSet;
    }
    

    isOverScan(): bool {
        return false;
    }
    

    getOverScanXPercent(): i32 {
        return 100;
    }
    

    getOverScanYPercent(): i32 {
        return 100;
    }
    

    isScalable(): bool {
        return this.scalable;
    }
    

    isAutoHide(): bool {
        return false;
    }
    

    toString(): string | null {
        let NEW_LINE: string | null = CommonSeps.getInstance()!.NEW_LINE; if (JThrowable.pending !== null) return null;
        let osBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        osBuffer!.append("Operating System Info: \n"); if (JThrowable.pending !== null) return null;
        osBuffer!.append(this.getName()); if (JThrowable.pending !== null) return null;
        osBuffer!.append(NEW_LINE); if (JThrowable.pending !== null) return null;
        osBuffer!.append(this.getArch()); if (JThrowable.pending !== null) return null;
        osBuffer!.append(NEW_LINE); if (JThrowable.pending !== null) return null;
        osBuffer!.append(this.getVersion()); if (JThrowable.pending !== null) return null;
        osBuffer!.append(NEW_LINE); if (JThrowable.pending !== null) return null;
        osBuffer!.append(StringUtil.getInstance()!.toString1(this.getCharacterSet())); if (JThrowable.pending !== null) return null;
        osBuffer!.append(NEW_LINE); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(osBuffer);
    }
}

