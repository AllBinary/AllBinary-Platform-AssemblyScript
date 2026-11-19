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
// package org.allbinary.logic.control.validate
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListUtil
// import org.allbinary.util.ABHashtable

@global export class ValidatorBase extends JObject implements ValidatorBaseInterface {

    jclassName(): string {
        return "org.allbinary.logic.control.validate.ValidatorBase";
    }
    @lazy static jv_instance: ValidatorBase | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ValidatorBase | null {
        if (!ValidatorBase.js_instance) {
            ValidatorBase.js_instance = true;
            ValidatorBase.jv_instance = new ValidatorBase().jinit_ValidatorBase_0();
        }
        return ValidatorBase.jv_instance;
    }
    static set instance(value: ValidatorBase | null) {
        ValidatorBase.js_instance = true;
        ValidatorBase.jv_instance = value;
    }
    

    static getInstance(): ValidatorBase | null {
        return ValidatorBase.instance;
    }
    

    jinit_ValidatorBase_0(): ValidatorBase {
        super.jinit_JObject_0();
        return this;
    }
    

    isValid(): JBoolean | null {
        return BooleanFactory.getInstance()!.TRUE;
    }
    

    validationInfo(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    toHashtable(): ABHashtable | null {
        return StdUtil.getInstance()!.NULL_TABLE;
    }
    

    toList(): BasicArrayList | null {
        return BasicArrayListUtil.getInstance()!.getImmutableInstance();
    }
}

