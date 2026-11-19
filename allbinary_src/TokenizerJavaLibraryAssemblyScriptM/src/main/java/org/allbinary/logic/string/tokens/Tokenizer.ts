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
// package org.allbinary.logic.string.tokens
// import org.allbinary.TsUtil
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class Tokenizer extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.tokens.Tokenizer";
    }
    sep: string | null = null;
    endSep: string | null = null;

    jfields_Tokenizer(): void {
    
    this.endSep = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    jinit_Tokenizer_1(sep: string | null): Tokenizer {
        super.jinit_JObject_0();
        this.jfields_Tokenizer();
        if (TsUtil.getInstance()!.compareTo(sep, StringUtil.getInstance()!.EMPTY_STRING) == 0) {
            { JThrowable.raise(new JException().jinit_JException_1("Sep provided is not valid")); return this; }
        } if (JThrowable.pending !== null) return this;
        this.sep = sep;
        return this;
    }
    

    setSep(sep: string | null): void {
        this.sep = sep;
    }
    

    setEndSep(endSep: string | null): void {
        this.endSep = endSep;
    }
    

    getInsideSep(string: string | null): BasicArrayList | null {
        let tokenList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let index: i32 = 0;
        let size: i32 = JString.length0(string); if (JThrowable.pending !== null) return null;
        while (index < size) {
            index = JString.indexOf2(string, this.sep, index); if (JThrowable.pending !== null) return null;
            if (index != -1) {
                let end: i32 = JString.indexOf2(string, this.endSep, index + JString.length0(this.sep)); if (JThrowable.pending !== null) return null;
                if (end != -1) {
                    tokenList!.add(JString.substring2(string, index + JString.length0(this.sep), end - (JString.length0(this.endSep) - 1))); if (JThrowable.pending !== null) return null;
                    index = end + JString.length0(this.endSep); if (JThrowable.pending !== null) return null;
                } else {
                } if (JThrowable.pending !== null) return null;
            } else {
                break;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return tokenList;
    }
    

    getTokensFromString(string: string | null, tokenVector: BasicArrayList | null): BasicArrayList | null {
        let index: i32 = 0;
        let end: i32 = 0;
        while (index < JString.length0(string)) {
            end = JString.indexOf2(string, this.sep, index); if (JThrowable.pending !== null) return null;
            if (end != -1) {
                tokenVector!.add(JString.substring2(string, index, end)); if (JThrowable.pending !== null) return null;
                index = end + JString.length0(this.sep); if (JThrowable.pending !== null) return null;
            } else {
                tokenVector!.add(JString.substring2(string, index, JString.length0(string))); if (JThrowable.pending !== null) return null;
                break;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return tokenVector;
    }
    

    getTokens(stringVector: BasicArrayList | null): ABHashtable | null {
        let tokenHashtable: ABHashtable | null = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return null;
        let string: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return null;
        let end: i32 = 0;
        let size: i32 = stringVector!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            string = changetype<string | null>(stringVector!.objectArray![index]);
            end = JString.indexOf1(string, this.sep); if (JThrowable.pending !== null) return null;
            if (end >= 0) {
                tokenHashtable!.put(JString.substring2(string, 0, end), JString.substring2(string, end + 1, JString.length0(string))); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return tokenHashtable;
    }
}

