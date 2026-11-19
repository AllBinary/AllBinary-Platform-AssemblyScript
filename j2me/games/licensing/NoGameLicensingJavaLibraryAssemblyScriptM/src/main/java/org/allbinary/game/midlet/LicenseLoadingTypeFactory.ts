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
// package org.allbinary.game.midlet

@global export class LicenseLoadingTypeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.midlet.LicenseLoadingTypeFactory";
    }
    @lazy static jv_instance: LicenseLoadingTypeFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LicenseLoadingTypeFactory | null {
        if (!LicenseLoadingTypeFactory.js_instance) {
            LicenseLoadingTypeFactory.js_instance = true;
            LicenseLoadingTypeFactory.jv_instance = new LicenseLoadingTypeFactory().jinit_LicenseLoadingTypeFactory_0();
        }
        return LicenseLoadingTypeFactory.jv_instance;
    }
    static set instance(value: LicenseLoadingTypeFactory | null) {
        LicenseLoadingTypeFactory.js_instance = true;
        LicenseLoadingTypeFactory.jv_instance = value;
    }
    INITIAL_LOADING: LicenseLoadingType | null = null;
    GAME_START: LicenseLoadingType | null = null;
    LOGIN: LicenseLoadingType | null = null;
    OTHER: LicenseLoadingType | null = null;

    jfields_LicenseLoadingTypeFactory(): void {
    this.INITIAL_LOADING = new LicenseLoadingType().jinit_LicenseLoadingType_1("Initial Loading");
    this.GAME_START = new LicenseLoadingType().jinit_LicenseLoadingType_1("Game Start");
    this.LOGIN = new LicenseLoadingType().jinit_LicenseLoadingType_1("Login");
    this.OTHER = new LicenseLoadingType().jinit_LicenseLoadingType_1("Other/Usually The First Non Demo Level");
    }

    jinit_LicenseLoadingTypeFactory_0(): LicenseLoadingTypeFactory {
        super.jinit_JObject_0();
        this.jfields_LicenseLoadingTypeFactory();
        return this;
    }
    

    static getIntance(): LicenseLoadingTypeFactory | null {
        return LicenseLoadingTypeFactory.instance;
    }
}

