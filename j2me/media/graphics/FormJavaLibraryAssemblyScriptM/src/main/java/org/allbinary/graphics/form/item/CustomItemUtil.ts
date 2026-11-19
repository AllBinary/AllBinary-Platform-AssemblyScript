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
// package org.allbinary.graphics.form.item

@global export class CustomItemUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.CustomItemUtil";
    }
    @lazy static jv_instance: CustomItemUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CustomItemUtil | null {
        if (!CustomItemUtil.js_instance) {
            CustomItemUtil.js_instance = true;
            CustomItemUtil.jv_instance = new CustomItemUtil().jinit_CustomItemUtil_0();
        }
        return CustomItemUtil.jv_instance;
    }
    static set instance(value: CustomItemUtil | null) {
        CustomItemUtil.js_instance = true;
        CustomItemUtil.jv_instance = value;
    }
    CUSTOM_ITEM_ARRAY: StaticArray<ABCustomItem | null> | null = null;

    jfields_CustomItemUtil(): void {
    this.CUSTOM_ITEM_ARRAY = new StaticArray<ABCustomItem | null>(0);
    }

    jinit_CustomItemUtil_0(): CustomItemUtil {
        super.jinit_JObject_0();
        this.jfields_CustomItemUtil();
        return this;
    }
    

    static getInstance(): CustomItemUtil | null {
        return CustomItemUtil.instance;
    }
}

