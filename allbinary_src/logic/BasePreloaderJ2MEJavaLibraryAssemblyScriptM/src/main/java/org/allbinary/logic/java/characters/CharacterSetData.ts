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
// package org.allbinary.logic.java.characters

@global export class CharacterSetData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.characters.CharacterSetData";
    }
    @lazy static jv_instance: CharacterSetData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CharacterSetData | null {
        if (!CharacterSetData.js_instance) {
            CharacterSetData.js_instance = true;
            CharacterSetData.jv_instance = new CharacterSetData().jinit_CharacterSetData_0();
        }
        return CharacterSetData.jv_instance;
    }
    static set instance(value: CharacterSetData | null) {
        CharacterSetData.js_instance = true;
        CharacterSetData.jv_instance = value;
    }
    US_ASCII: string | null = null;
    ISO_8859_1: string | null = null;
    UTF_8: string | null = null;
    UTF_16: string | null = null;
    UTF_16BE: string | null = null;
    UTF_16LE: string | null = null;

    jfields_CharacterSetData(): void {
    this.US_ASCII = "US-ASCII";
    this.ISO_8859_1 = "ISO-8859-1";
    this.UTF_8 = "UTF-8";
    this.UTF_16 = "UTF-16";
    this.UTF_16BE = "UTF-16BE";
    this.UTF_16LE = "UTF-16LE";
    }
    

    static getInstance(): CharacterSetData | null {
        return CharacterSetData.instance;
    }
    

    jinit_CharacterSetData_0(): CharacterSetData {
        super.jinit_JObject_0();
        this.jfields_CharacterSetData();
        return this;
    }
}

