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

@global export class FormType extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.FormType";
    }
    name: string | null = null;

    jfields_FormType(): void {
    
    }
    

    jinit_FormType_1(name: string | null): FormType {
        super.jinit_JObject_0();
        this.jfields_FormType();
        this.name = name;
        return this;
    }
    

    toString(): string | null {
        return this.name;
    }
}

