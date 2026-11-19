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
// package org.allbinary.game.collision

@global export class CollidableBaseBehaviorFactory extends JObject implements CollidableBaseBehaviorFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.collision.CollidableBaseBehaviorFactory";
    }

    jinit_CollidableBaseBehaviorFactory_0(): CollidableBaseBehaviorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    createBehavior(): CollidableBaseBehavior | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
}

