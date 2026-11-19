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

@global export class LicensedDemoSetupFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.midlet.LicensedDemoSetupFactory";
    }

    jinit_LicensedDemoSetupFactory_0(): LicensedDemoSetupFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): DemoSetup | null {
        return new DemoSetup().jinit_DemoSetup_0();
    }
}

