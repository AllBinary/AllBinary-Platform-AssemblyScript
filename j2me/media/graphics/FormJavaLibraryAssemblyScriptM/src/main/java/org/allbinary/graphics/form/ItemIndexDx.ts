/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.graphics.form
// import org.allbinary.graphics.form.item.ABCustomItem

@global export class ItemIndexDx extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.ItemIndexDx";
    }
    @lazy static jv_instance: ItemIndexDx | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ItemIndexDx | null {
        if (!ItemIndexDx.js_instance) {
            ItemIndexDx.js_instance = true;
            ItemIndexDx.jv_instance = new ItemIndexDx().jinit_ItemIndexDx_0();
        }
        return ItemIndexDx.jv_instance;
    }
    static set instance(value: ItemIndexDx | null) {
        ItemIndexDx.js_instance = true;
        ItemIndexDx.jv_instance = value;
    }

    jinit_ItemIndexDx_0(): ItemIndexDx {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ItemIndexDx | null {
        return ItemIndexDx.instance;
    }
    

    getDx(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return 0;
    }
}

