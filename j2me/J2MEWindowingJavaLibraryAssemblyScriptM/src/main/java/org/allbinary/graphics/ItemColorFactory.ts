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
// package org.allbinary.graphics

@global export class ItemColorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.ItemColorFactory";
    }
    @lazy static jv_instance: ItemColorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ItemColorFactory | null {
        if (!ItemColorFactory.js_instance) {
            ItemColorFactory.js_instance = true;
            ItemColorFactory.jv_instance = new ItemColorFactory().jinit_ItemColorFactory_0();
        }
        return ItemColorFactory.jv_instance;
    }
    static set instance(value: ItemColorFactory | null) {
        ItemColorFactory.js_instance = true;
        ItemColorFactory.jv_instance = value;
    }
    INVERT_PAINT: i32 = 0;
    PAINT: i32 = 0;
    TEXT_FIELD_NO_FOCUS: i32 = 0;

    jfields_ItemColorFactory(): void {
    this.INVERT_PAINT = (<i32><u32>0xFF000000);
    this.PAINT = (<i32><u32>0xFFe07718);
    this.TEXT_FIELD_NO_FOCUS = 0x7F7F7F;
    }

    jinit_ItemColorFactory_0(): ItemColorFactory {
        super.jinit_JObject_0();
        this.jfields_ItemColorFactory();
        return this;
    }
    

    static getInstance(): ItemColorFactory | null {
        return ItemColorFactory.instance;
    }
}

