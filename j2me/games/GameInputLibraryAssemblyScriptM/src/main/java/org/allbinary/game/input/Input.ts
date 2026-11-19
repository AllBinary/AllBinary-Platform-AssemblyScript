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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class Input extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.Input";
    }
    id: i32 = 0;
    name: string | null = null;

    jfields_Input(): void {
    this.id = 0;
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_Input_2(id: i32, name: string | null): Input {
        super.jinit_JObject_0();
        this.jfields_Input();
        this.setId(id); if (JThrowable.pending !== null) return this;
        this.setName(name); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getId(): i32 {
        return this.id;
    }
    

    setId(key: i32): void {
        this.id = key;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    setName(keyName: string | null): void {
        this.name = keyName;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Name: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Id: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.getId()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

