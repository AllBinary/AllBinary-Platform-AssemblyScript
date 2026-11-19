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
// package org.allbinary.init
// import org.allbinary.string.CommonStrings

@global export class Init extends JObject implements InitInterface {

    jclassName(): string {
        return "org.allbinary.init.Init";
    }
    commonStrings: CommonStrings | null = null;

    jfields_Init(): void {
    this.commonStrings = CommonStrings.getInstance();
    }

    jinit_Init_0(): Init {
        super.jinit_JObject_0();
        this.jfields_Init();
        return this;
    }
    

    init(): void {
    }
}

