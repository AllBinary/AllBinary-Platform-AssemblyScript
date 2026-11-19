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
// package org.allbinary.graphics.form

@global export class ItemPaintableFactory extends ItemPaintable {

    jclassName(): string {
        return "org.allbinary.graphics.form.ItemPaintableFactory";
    }
    @lazy static jv_instance: ItemPaintableFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ItemPaintableFactory | null {
        if (!ItemPaintableFactory.js_instance) {
            ItemPaintableFactory.js_instance = true;
            ItemPaintableFactory.jv_instance = new ItemPaintableFactory().jinit_ItemPaintableFactory_0();
        }
        return ItemPaintableFactory.jv_instance;
    }
    static set instance(value: ItemPaintableFactory | null) {
        ItemPaintableFactory.js_instance = true;
        ItemPaintableFactory.jv_instance = value;
    }

    jinit_ItemPaintableFactory_0(): ItemPaintableFactory {
        super.jinit_ItemPaintable_0();
        return this;
    }
    

    static getInstance(): ItemPaintableFactory | null {
        return ItemPaintableFactory.instance;
    }
    

    getInstanceItemPaintable(paintableForm: PaintableForm | null): ItemPaintable | null {
        return ItemPaintableFactory.instance;
    }
}

