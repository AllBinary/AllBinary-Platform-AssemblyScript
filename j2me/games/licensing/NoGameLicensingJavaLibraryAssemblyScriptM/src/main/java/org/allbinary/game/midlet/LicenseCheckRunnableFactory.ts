/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import org.allbinary.thread.ABRunnable
// import org.allbinary.thread.NullABRunnable

@global export class LicenseCheckRunnableFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.midlet.LicenseCheckRunnableFactory";
    }

    jinit_LicenseCheckRunnableFactory_0(): LicenseCheckRunnableFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance1(specialDemoGameMidlet: SpecialDemoGameMidlet | null): ABRunnable | null {
        return NullABRunnable.getInstance();
    }
}

