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
// import java.util.HashSet
// import org.allbinary.logic.io.path.AbPathData
// import org.allbinary.logic.string.regex.replace.Replace
// import org.allbinary.string.CommonPhoneStrings
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class UniqueTokens extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.tokens.UniqueTokens";
    }
    specialCharacters: BasicArrayList | null = null;

    jfields_UniqueTokens(): void {
    this.specialCharacters = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_UniqueTokens_0(): UniqueTokens {
        super.jinit_JObject_0();
        this.jfields_UniqueTokens();
        this.specialCharacters!.add("!"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("@"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add(CommonPhoneStrings.getInstance()!.POUND); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("$"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("%"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("^"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add(CommonSeps.getInstance()!.AMPERSAND); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add(CommonPhoneStrings.getInstance()!.STAR); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("("); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add(")"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("-"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("_"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("+"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("="); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("\\"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("|"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add(AbPathData.getInstance()!.EXTENSION_SEP); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add(","); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("<"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add(">"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("?"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("/"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("~"); if (JThrowable.pending !== null) return this;
        this.specialCharacters!.add("`"); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getWhithoutDashesAndSkipNumberOnlyTokens(stringVector: BasicArrayList | null): JHashSet | null {
        do {
            let hashSet: JHashSet | null = new JHashSet().jinit_JHashSet_0(); if (JThrowable.pending !== null) break;
            let index: i32 = 0;
            let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) break;
            while (index < stringVector!.size()) {
                let keywords: string | null = changetype<string | null>(stringVector!.get(index)); if (JThrowable.pending !== null) break;
                let tokenizer: Tokenizer | null = new Tokenizer().jinit_Tokenizer_1(commonSeps!.COMMA); if (JThrowable.pending !== null) break;
                let keywordVector: BasicArrayList | null = tokenizer!.getTokensFromString(keywords, new BasicArrayListD().jinit_BasicArrayListD_0()); if (JThrowable.pending !== null) break;
                for (let forIndex: i32 = 0; forIndex < keywordVector!.size(); forIndex++) {
                    let cleanString: string | null = changetype<string | null>(keywordVector!.get(forIndex)); if (JThrowable.pending !== null) break;
                    cleanString = JString.trim0(cleanString); if (JThrowable.pending !== null) break;
                    if (JString.indexOf1(cleanString, (<u16>0x2D)) != -1) {
                        cleanString = new Replace().jinit_Replace_2_StringString("-", commonSeps!.SPACE)!.all(cleanString); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                    hashSet!.add1(cleanString); if (JThrowable.pending !== null) break;
                    if (JString.indexOf1(cleanString, (<u16>0x20)) != -1) {
                        let spaceTokenizer: Tokenizer | null = new Tokenizer().jinit_Tokenizer_1(commonSeps!.SPACE); if (JThrowable.pending !== null) break;
                        let subKeywordVector: BasicArrayList | null = spaceTokenizer!.getTokensFromString(cleanString, new BasicArrayListD().jinit_BasicArrayListD_0()); if (JThrowable.pending !== null) break;
                        for (let spaceIndex: i32 = 0; spaceIndex < subKeywordVector!.size(); spaceIndex++) {
                            let subCleanString: string | null = changetype<string | null>(subKeywordVector!.get(spaceIndex)); if (JThrowable.pending !== null) break;
                            if (!this.isSpecialCharacter(subCleanString) && !this.numberOnly(subCleanString)) {
                                hashSet!.add1(subCleanString); if (JThrowable.pending !== null) break;
                            } if (JThrowable.pending !== null) break;
                        } if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                index++;
            } if (JThrowable.pending !== null) break;
            return hashSet;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    numberOnly(subCleaningString: string | null): bool {
        do {
            JInteger.parseInt1(subCleaningString); if (JThrowable.pending !== null) break;
            return true;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JNumberFormatException) {
            let e: JNumberFormatException | null = changetype<JNumberFormatException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isSpecialCharacter(subCleaningString: string | null): bool {
        for (let index: i32 = 0; index < this.specialCharacters!.size(); index++) {
            if (JString.compareTo1(subCleaningString, changetype<string | null>(this.specialCharacters!.get(index))) == 0) {
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

