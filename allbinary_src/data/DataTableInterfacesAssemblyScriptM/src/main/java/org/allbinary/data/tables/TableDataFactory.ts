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
// package org.allbinary.data.tables
// import org.allbinary.string.CommonPhoneStrings

@global export class TableDataFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tables.TableDataFactory";
    }
    @lazy static jv_instance: TableDataFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TableDataFactory | null {
        if (!TableDataFactory.js_instance) {
            TableDataFactory.js_instance = true;
            TableDataFactory.jv_instance = new TableDataFactory().jinit_TableDataFactory_0();
        }
        return TableDataFactory.jv_instance;
    }
    static set instance(value: TableDataFactory | null) {
        TableDataFactory.js_instance = true;
        TableDataFactory.jv_instance = value;
    }
    INTEGER_MAX_VALUE_STRING: string | null = null;
    ZERO_STRING: string | null = null;

    jfields_TableDataFactory(): void {
    this.INTEGER_MAX_VALUE_STRING = JInteger.toString1(JInteger.MAX_VALUE);
    this.ZERO_STRING = CommonPhoneStrings.getInstance()!.ZERO;
    }

    jinit_TableDataFactory_0(): TableDataFactory {
        super.jinit_JObject_0();
        this.jfields_TableDataFactory();
        return this;
    }
    

    static getInstance(): TableDataFactory | null {
        return TableDataFactory.instance;
    }
}

