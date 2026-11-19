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
// package org.allbinary.midlet
// import javax.microedition.midlet.MIDlet

@global export class MidletFactoryInterface extends JObject {

    jclassName(): string {
        return "org.allbinary.midlet.MidletFactoryInterface";
    }

    jinit_MidletFactoryInterface_0(): MidletFactoryInterface {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): MIDlet | null {
        return AllBinaryMidlet.getNullInstance();
    }
}

