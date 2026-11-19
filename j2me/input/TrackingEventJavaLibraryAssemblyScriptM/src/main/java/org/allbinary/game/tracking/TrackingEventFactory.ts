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
// package org.allbinary.game.tracking
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface

@global export class TrackingEventFactory extends JObject implements AllBinaryEventObjectFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.tracking.TrackingEventFactory";
    }
    

    jinit_TrackingEventFactory_0(): TrackingEventFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): AllBinaryEventObject | null {
        return new TrackingEvent().jinit_TrackingEvent_1(TrackingEventHandler.getInstance());
    }
}

