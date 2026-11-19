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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.form.item.ABCustomItem

@global export class ItemIndexPaintable extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.ItemIndexPaintable";
    }
    @lazy static jv_instance: ItemIndexPaintable | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ItemIndexPaintable | null {
        if (!ItemIndexPaintable.js_instance) {
            ItemIndexPaintable.js_instance = true;
            ItemIndexPaintable.jv_instance = new ItemIndexPaintable().jinit_ItemIndexPaintable_0();
        }
        return ItemIndexPaintable.jv_instance;
    }
    static set instance(value: ItemIndexPaintable | null) {
        ItemIndexPaintable.js_instance = true;
        ItemIndexPaintable.jv_instance = value;
    }

    jinit_ItemIndexPaintable_0(): ItemIndexPaintable {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ItemIndexPaintable | null {
        return ItemIndexPaintable.instance;
    }
    

    paint(graphics: Graphics | null, index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return 0;
    }
}

