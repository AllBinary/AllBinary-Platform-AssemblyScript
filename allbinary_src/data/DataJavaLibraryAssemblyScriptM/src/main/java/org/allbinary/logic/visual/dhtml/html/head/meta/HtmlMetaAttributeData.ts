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
// package org.allbinary.logic.visual.dhtml.html.head.meta

@global export class HtmlMetaAttributeData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.dhtml.html.head.meta.HtmlMetaAttributeData";
    }
    id: i32 = 0;
    name: string | null = null;

    jfields_HtmlMetaAttributeData(): void {
    
    
    }
    

    jinit_HtmlMetaAttributeData_2(id: i32, value: string | null): HtmlMetaAttributeData {
        super.jinit_JObject_0();
        this.jfields_HtmlMetaAttributeData();
        this.name = value;
        this.id = id;
        return this;
    }
    

    equals(htmlMetaAttributeData_object: Object | null): bool {
        if (htmlMetaAttributeData_object !== null && !(htmlMetaAttributeData_object instanceof HtmlMetaAttributeData)) return false;
        let htmlMetaAttributeData: HtmlMetaAttributeData | null = changetype<HtmlMetaAttributeData | null>(htmlMetaAttributeData_object);
        if (htmlMetaAttributeData!.id == this.id) {
            return true;
        } else {
            return false;
        }
        return false;
    }
    

    toString(): string | null {
        return this.name;
    }
}

