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
// package org.allbinary.graphics.color
// import org.allbinary.logic.string.StringUtil

@global export class SmallBasicColorCacheFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.SmallBasicColorCacheFactory";
    }
    @lazy static jv_instance: SmallBasicColorCacheFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SmallBasicColorCacheFactory | null {
        if (!SmallBasicColorCacheFactory.js_instance) {
            SmallBasicColorCacheFactory.js_instance = true;
            SmallBasicColorCacheFactory.jv_instance = new SmallBasicColorCacheFactory().jinit_SmallBasicColorCacheFactory_0();
        }
        return SmallBasicColorCacheFactory.jv_instance;
    }
    static set instance(value: SmallBasicColorCacheFactory | null) {
        SmallBasicColorCacheFactory.js_instance = true;
        SmallBasicColorCacheFactory.jv_instance = value;
    }
    SIZE: i32 = 0;
    INDEX_TO_COLOR: StaticArray<i32> | null = null;
    BASIC_COLOR_ARRAY: StaticArray<BasicColor | null> | null = null;
    colorIndex: i32 = 0;

    jfields_SmallBasicColorCacheFactory(): void {
    this.SIZE = 255;
    this.INDEX_TO_COLOR = new StaticArray<i32>(this.SIZE);
    this.BASIC_COLOR_ARRAY = new StaticArray<BasicColor | null>(this.SIZE);
    this.colorIndex = 0;
    }
    

    static getInstance(): SmallBasicColorCacheFactory | null {
        return SmallBasicColorCacheFactory.instance;
    }
    

    jinit_SmallBasicColorCacheFactory_0(): SmallBasicColorCacheFactory {
        super.jinit_JObject_0();
        this.jfields_SmallBasicColorCacheFactory();
        return this;
    }
    

    add(basicDefaultColor: BasicColor | null): void {
        this.BASIC_COLOR_ARRAY![this.colorIndex] = basicDefaultColor;
        this.INDEX_TO_COLOR![this.colorIndex] = basicDefaultColor!.intValue(); if (JThrowable.pending !== null) return;
        this.colorIndex++;
    }
    

    getAndOrCreate(colorAsInt: i32): BasicColor | null {
        let basicColor: BasicColor | null = null;
        for (let index: i32 = 0; index < this.SIZE; index++) {
            if (this.INDEX_TO_COLOR![index] == colorAsInt) {
                return this.BASIC_COLOR_ARRAY![index];
            }
        }
        let ALPHA_MASK: i32 = (<i32><u32>0xFF000000);
        basicColor = BasicColorFactory.getInstance()!.createInstanceAN(colorAsInt & ALPHA_MASK, colorAsInt & 0x00FFFFFF, StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) return null;
        this.add(basicColor); if (JThrowable.pending !== null) return null;
        return basicColor;
    }
}

