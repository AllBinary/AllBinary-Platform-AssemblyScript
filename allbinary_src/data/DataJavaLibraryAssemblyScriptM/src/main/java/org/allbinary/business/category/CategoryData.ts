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
// package org.allbinary.business.category
// import org.allbinary.logic.io.file.CommonDataFileStrings

@global export class CategoryData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.category.CategoryData";
    }
    @lazy static jv_instance: CategoryData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CategoryData | null {
        if (!CategoryData.js_instance) {
            CategoryData.js_instance = true;
            CategoryData.jv_instance = new CategoryData().jinit_CategoryData_0();
        }
        return CategoryData.jv_instance;
    }
    static set instance(value: CategoryData | null) {
        CategoryData.js_instance = true;
        CategoryData.jv_instance = value;
    }
    PARENT: string | null = null;
    NAME: string | null = null;
    PATH: string | null = null;
    LABEL: string | null = null;
    VIEW: string | null = null;
    LEVEL: string | null = null;
    REQUEST: string | null = null;
    ROOTCATEGORY: string | null = null;
    UNCRYPTED_EXTENSION: string | null = null;
    ENCRYPTED_EXTENSION: string | null = null;

    jfields_CategoryData(): void {
    this.PARENT = "CATEGORY_PARENT";
    this.NAME = "CATEGORY_NAME";
    this.PATH = "CATEGORY_PATH";
    this.LABEL = "CATEGORY_LABEL";
    this.VIEW = "CATEGORY_VIEW_CATEGORY";
    this.LEVEL = "CATEGORY_LEVEL";
    this.REQUEST = "request";
    this.ROOTCATEGORY = "Category";
    this.UNCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.UNCRYPTED_EXTENSION;
    this.ENCRYPTED_EXTENSION = CommonDataFileStrings.getInstance()!.ENCRYPTED_EXTENSION;
    }
    

    static getInstance(): CategoryData | null {
        return CategoryData.instance;
    }
    

    jinit_CategoryData_0(): CategoryData {
        super.jinit_JObject_0();
        this.jfields_CategoryData();
        return this;
    }
}

