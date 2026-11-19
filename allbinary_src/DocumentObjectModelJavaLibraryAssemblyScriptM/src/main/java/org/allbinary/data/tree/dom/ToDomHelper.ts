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
// package org.allbinary.data.tree.dom
// import org.allbinary.logic.string.StringUtil

@global export class ToDomHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.ToDomHelper";
    }
    

    jinit_ToDomHelper_0(): ToDomHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    static convertNull(value: string | null): string | null {
        if (value == null) {
            value = StringUtil.getInstance()!.NULL_STRING; if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return value;
    }
}

