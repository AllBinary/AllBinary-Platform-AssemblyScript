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
// package org.allbinary.data
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.string.StringValidationUtil
// import org.allbinary.logic.string.tokens.Tokenizer
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CamelCaseUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.data.CamelCaseUtil";
    }
    @lazy static jv_instance: CamelCaseUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CamelCaseUtil | null {
        if (!CamelCaseUtil.js_instance) {
            CamelCaseUtil.js_instance = true;
            CamelCaseUtil.jv_instance = new CamelCaseUtil().jinit_CamelCaseUtil_0();
        }
        return CamelCaseUtil.jv_instance;
    }
    static set instance(value: CamelCaseUtil | null) {
        CamelCaseUtil.js_instance = true;
        CamelCaseUtil.jv_instance = value;
    }
    commonSeps: CommonSeps | null = null;

    jfields_CamelCaseUtil(): void {
    this.commonSeps = CommonSeps.getInstance();
    }

    jinit_CamelCaseUtil_0(): CamelCaseUtil {
        super.jinit_JObject_0();
        this.jfields_CamelCaseUtil();
        return this;
    }
    

    static getInstance(): CamelCaseUtil | null {
        return CamelCaseUtil.instance;
    }
    

    getAsCamelCase(string: string | null, stringBuilder: StringMaker | null): string | null {
        let stringValidationUtil: StringValidationUtil | null = StringValidationUtil.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuilder!.delete_(0, stringBuilder!.length()); if (JThrowable.pending !== null) return null;
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let tokenizer: Tokenizer | null = new Tokenizer().jinit_Tokenizer_1(this.commonSeps!.UNDERSCORE); if (JThrowable.pending !== null) return null;
        tokenizer!.getTokensFromString(string, list); if (JThrowable.pending !== null) return null;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        let word: string | null = null;
        for (let i: i32 = 0; i < size; i++) {
            word = changetype<string | null>(list!.get(i)); if (JThrowable.pending !== null) return null;
            word = (stringValidationUtil!.isEmpty(word) ? word : JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.appendchar(JCharacter.toUpperCase(JString.charAt1(word, 0)))!.append(JString.toLowerCase0(JString.substring1(word, 1))))); if (JThrowable.pending !== null) return null;
            stringBuilder!.append(word); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuilder);
    }
}

