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
// package org.allbinary.logic.util.visitor
// import org.allbinary.logic.NullUtil

@global export class Visitor extends JObject implements VisitorInterface {

    jclassName(): string {
        return "org.allbinary.logic.util.visitor.Visitor";
    }
    @lazy static jv_instance: Visitor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Visitor | null {
        if (!Visitor.js_instance) {
            Visitor.js_instance = true;
            Visitor.jv_instance = new Visitor().jinit_Visitor_0();
        }
        return Visitor.jv_instance;
    }
    static set instance(value: Visitor | null) {
        Visitor.js_instance = true;
        Visitor.jv_instance = value;
    }
    nullUtil: NullUtil | null = null;

    jfields_Visitor(): void {
    this.nullUtil = NullUtil.getInstance();
    }

    jinit_Visitor_0(): Visitor {
        super.jinit_JObject_0();
        this.jfields_Visitor();
        return this;
    }
    

    visit_1_Object(anyType: Object | null): Object | null {
        return this.nullUtil!.NULL_OBJECT;
    }
    

    static getInstance(): Visitor | null {
        return Visitor.instance;
    }
}

