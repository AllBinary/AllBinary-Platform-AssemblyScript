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
// package org.allbinary.graphics.form.item.validation
// import org.allbinary.graphics.form.item.ABTextFieldItem

@global export class UsernameValidator extends TextFieldItemValidator {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.validation.UsernameValidator";
    }
    

    jinit_UsernameValidator_4(textFieldItem: ABTextFieldItem | null, min: i32, max: i32, allowOnEmpty: bool): UsernameValidator {
        super.jinit_TextFieldItemValidator_4(textFieldItem, min, max, allowOnEmpty);
        return this;
    }
}

