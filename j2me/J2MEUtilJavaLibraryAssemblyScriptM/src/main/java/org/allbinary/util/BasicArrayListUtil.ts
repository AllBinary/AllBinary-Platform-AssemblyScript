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
// package org.allbinary.util
// import jsinterop.annotations.JsType
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonPhoneStrings
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsProperty

@global export class BasicArrayListUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.util.BasicArrayListUtil";
    }
    @lazy static jv_instance: BasicArrayListUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicArrayListUtil | null {
        if (!BasicArrayListUtil.js_instance) {
            BasicArrayListUtil.js_instance = true;
            BasicArrayListUtil.jv_instance = new BasicArrayListUtil().jinit_BasicArrayListUtil_0();
        }
        return BasicArrayListUtil.jv_instance;
    }
    static set instance(value: BasicArrayListUtil | null) {
        BasicArrayListUtil.js_instance = true;
        BasicArrayListUtil.jv_instance = value;
    }
    NULL_ARRAY_OF_ARRAY: StaticArray<StaticArray<BasicArrayList | null> | null> | null = null;
    myRandomFactory: MyRandomFactory | null = null;
    immutableInstance: BasicArrayList | null = null;

    jfields_BasicArrayListUtil(): void {
    this.NULL_ARRAY_OF_ARRAY = JArrays.new2<BasicArrayList | null>(0, 0);
    this.myRandomFactory = MyRandomFactory.getInstance();
    this.immutableInstance = new ImmutableBasicArrayList().jinit_ImmutableBasicArrayList_2("Immutable", 0);
    }

    jinit_BasicArrayListUtil_0(): BasicArrayListUtil {
        super.jinit_JObject_0();
        this.jfields_BasicArrayListUtil();
        return this;
    }
    

    static getInstance(): BasicArrayListUtil | null {
        return BasicArrayListUtil.instance;
    }
    

    getRandom(list: BasicArrayList | null): Object | null {
        let i_random: i32 = this.getRandomIndex(list); if (JThrowable.pending !== null) return null;
        return list!.objectArray![i_random];
    }
    

    getRandomIndex(list: BasicArrayList | null): i32 {
        return this.myRandomFactory!.getAbsoluteNextInt(list!.size());
    }
    

    reverse(list: BasicArrayList | null): void {
        let lastMinusOneIndex: i32 = list!.size() - 2; if (JThrowable.pending !== null) return;
        let temp: Object | null = null;
        let size: i32 = lastMinusOneIndex / 2;
        let secondSwapIndex: i32 = 0;
        for (let index: i32 = 0; index <= size; index++) {
            secondSwapIndex = lastMinusOneIndex - index;
            temp = list!.removeAt(index); if (JThrowable.pending !== null) return;
            list!.addAt(index, list!.removeAt(secondSwapIndex)); if (JThrowable.pending !== null) return;
            list!.addAt(secondSwapIndex + 1, temp); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    log(list: BasicArrayList | null): string | null {
        let S_LABEL: string | null = " s: ";
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonLabels.getInstance()!.TOTAL_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(size); if (JThrowable.pending !== null) return null;
        for (let index: i32 = size - 1; index >= 0; index--) {
            let usedList: BasicArrayList | null = changetype<BasicArrayList | null>(list!.objectArray![index]);
            stringBuffer!.append(S_LABEL); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(usedList!.size()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getImmutableInstance(): BasicArrayList | null {
        return this.immutableInstance;
    }
    

    static main(args: StaticArray<string | null> | null): void {
        let commonPhoneStrings: CommonPhoneStrings | null = CommonPhoneStrings.getInstance(); if (JThrowable.pending !== null) return;
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.ONE); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.TWO); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.THREE); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.FOUR); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.FIVE); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.SIX); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.SEVEN); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.EIGHT); if (JThrowable.pending !== null) return;
        list!.add(commonPhoneStrings!.NINE); if (JThrowable.pending !== null) return;
        BasicArrayListUtil.getInstance()!.reverse(list); if (JThrowable.pending !== null) return;
        JSystem.println(jstr(JObject.jtoString(list))); if (JThrowable.pending !== null) return;
    }
}

