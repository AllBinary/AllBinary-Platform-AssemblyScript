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
// package org.allbinary.game.input.mapping
// import org.allbinary.game.input.Input
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

@global export class InputMapping extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.mapping.InputMapping";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    hashtable: ABHashtable | null = null;
    mappedList: BasicArrayList | null = null;

    jfields_InputMapping(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.hashtable = StdUtil.getInstance()!.createHashtable();
    this.mappedList = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_InputMapping_0(): InputMapping {
        super.jinit_JObject_0();
        this.jfields_InputMapping();
        return this;
    }
    

    getTotalMapped(): i32 {
        return this.hashtable!.size();
    }
    

    isDefaultNew(): bool {
        return false;
    }
    

    getDefault(): InputToGameKeyMapping | null {
        return InputToGameKeyMapping.getNullInstance();
    }
    

    removeAll(): void {
        this.hashtable!.clear(); if (JThrowable.pending !== null) return;
        this.mappedList!.clear(); if (JThrowable.pending !== null) return;
    }
    

    remove(input: Input | null, mappedToInput: Input | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(CommonLabels.getInstance()!.START_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.append(stringUtil!.toString1(input)); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" == "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(stringUtil!.toString1(mappedToInput)); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "InputMapping::remove"); if (JThrowable.pending !== null) return;
        let list: BasicArrayList | null = this.getMappedInput(input); if (JThrowable.pending !== null) return;
        if (list!.contains(mappedToInput)) {
            list!.remove(mappedToInput); if (JThrowable.pending !== null) return;
            this.mappedList!.remove(mappedToInput); if (JThrowable.pending !== null) return;
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            stringBuffer!.append("Removed: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(stringUtil!.toString1(input)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(" == "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(stringUtil!.toString1(mappedToInput)); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "InputMapping::remove"); if (JThrowable.pending !== null) return;
        } else {
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            stringBuffer!.append("Not Deleted: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(stringUtil!.toString1(input)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(" == "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(stringUtil!.toString1(mappedToInput)); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "InputMapping::remove"); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addMapping(inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return; }
    }
    

    add(input: Input | null, mappedToInput: Input | null): void {
        let list: BasicArrayList | null = this.getMappedInput(input); if (JThrowable.pending !== null) return;
        if (!list!.contains(mappedToInput)) {
            list!.add(mappedToInput); if (JThrowable.pending !== null) return;
            this.mappedList!.add(mappedToInput); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isMapped(input: Input | null): bool {
        return this.mappedList!.contains(input);
    }
    

    getMappedInput(id: Input | null): BasicArrayList | null {
        let mappingInputCanBeNullList: Object | null = this.hashtable!.get(id); if (JThrowable.pending !== null) return null;
        if (mappingInputCanBeNullList == null) {
            let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
            this.hashtable!.put(id, list); if (JThrowable.pending !== null) return null;
            return list;
        } if (JThrowable.pending !== null) return null;
        return changetype<BasicArrayList | null>(mappingInputCanBeNullList);
    }
    

    getHashtable(): ABHashtable | null {
        return this.hashtable;
    }
}

