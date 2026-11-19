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
// package org.allbinary.business.page

@global export class PageData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.page.PageData";
    }
    @lazy static jv_instance: PageData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PageData | null {
        if (!PageData.js_instance) {
            PageData.js_instance = true;
            PageData.jv_instance = new PageData().jinit_PageData_0();
        }
        return PageData.jv_instance;
    }
    static set instance(value: PageData | null) {
        PageData.js_instance = true;
        PageData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_PageData(): void {
    this.NAME = "PAGE_NAME";
    }
    

    static getInstance(): PageData | null {
        return PageData.instance;
    }
    

    jinit_PageData_0(): PageData {
        super.jinit_JObject_0();
        this.jfields_PageData();
        return this;
    }
}

