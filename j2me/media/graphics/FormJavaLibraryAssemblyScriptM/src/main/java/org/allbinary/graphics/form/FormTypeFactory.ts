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
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.logic.string.StringUtil

@global export class FormTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.form.FormTypeFactory";
    }
    @lazy static jv_instance: FormTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FormTypeFactory | null {
        if (!FormTypeFactory.js_instance) {
            FormTypeFactory.js_instance = true;
            FormTypeFactory.jv_instance = new FormTypeFactory().jinit_FormTypeFactory_0();
        }
        return FormTypeFactory.jv_instance;
    }
    static set instance(value: FormTypeFactory | null) {
        FormTypeFactory.js_instance = true;
        FormTypeFactory.jv_instance = value;
    }
    UNK: string | null = null;
    NULL_FORM_TYPE: FormType | null = null;
    TEMP_HORIZONTAL_FORM: FormType | null = null;
    HORIZONTAL_FORM: FormType | null = null;
    VERTICAL_CENTER_FORM: FormType | null = null;

    jfields_FormTypeFactory(): void {
    this.UNK = "Unknown FormType";
    this.NULL_FORM_TYPE = new FormType().jinit_FormType_1(StringUtil.getInstance()!.NULL_STRING);
    this.TEMP_HORIZONTAL_FORM = new FormType().jinit_FormType_1("TempHorizontal");
    this.HORIZONTAL_FORM = new FormType().jinit_FormType_1("Horizontal");
    this.VERTICAL_CENTER_FORM = new FormType().jinit_FormType_1("Vertical");
    }

    jinit_FormTypeFactory_0(): FormTypeFactory {
        super.jinit_JObject_0();
        this.jfields_FormTypeFactory();
        return this;
    }
    

    static getInstance(): FormTypeFactory | null {
        return FormTypeFactory.instance;
    }
    

    getFormType(): FormType | null {
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return null;
        let formType: FormType | null = null;
        if (displayInfo!.isPortrait()) {
            formType = this.VERTICAL_CENTER_FORM;
        } else {
            formType = this.HORIZONTAL_FORM;
        } if (JThrowable.pending !== null) return null;
        return formType;
    }
}

