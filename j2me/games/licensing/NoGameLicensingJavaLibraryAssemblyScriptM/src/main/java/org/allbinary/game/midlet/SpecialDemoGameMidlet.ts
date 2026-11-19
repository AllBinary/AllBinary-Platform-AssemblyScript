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
// import org.allbinary.logic.system.security.licensing.ClientInformationFactory
// import org.allbinary.logic.system.security.licensing.LicenseServerInitFileUtil

@global export class SpecialDemoGameMidlet extends DemoGameMidlet {

    jclassName(): string {
        return "org.allbinary.game.midlet.SpecialDemoGameMidlet";
    }
    

    jinit_SpecialDemoGameMidlet_4(clientInformationFactory: ClientInformationFactory | null, licenseLoadingType: LicenseLoadingType | null, demoSetupFactory: LicensedDemoSetupFactory | null, licenseCheckRunnableFactory: LicenseCheckRunnableFactory | null): SpecialDemoGameMidlet {
        super.jinit_DemoGameMidlet_1(clientInformationFactory);
        return this;
    }
    

    initView(): void {
    }
    

    preInit(): void {
        new LicenseServerInitFileUtil().jinit_LicenseServerInitFileUtil_0()!.init(); if (JThrowable.pending !== null) return;
    }
}

