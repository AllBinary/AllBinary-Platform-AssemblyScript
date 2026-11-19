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
// package org.allbinary.game.terrain
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface

@global export class TerrainEventFactory extends JObject implements AllBinaryEventObjectFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.terrain.TerrainEventFactory";
    }
    

    jinit_TerrainEventFactory_0(): TerrainEventFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance(): AllBinaryEventObject | null {
        return new TerrainEvent().jinit_TerrainEvent_1(NullUtil.getInstance()!.NULL_OBJECT);
    }
}

