/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.media.graphics.geography.pathfinding

@global export class MultipassState extends JObject {

    jclassName(): string {
        return "org.allbinary.media.graphics.geography.pathfinding.MultipassState";
    }
    step: i32 = 0;
    iteration: i32 = 0;
    iteration2: i32 = 0;

    jfields_MultipassState(): void {
    this.step = 0;
    this.iteration = 0;
    this.iteration2 = 0;
    }

    jinit_MultipassState_0(): MultipassState {
        super.jinit_JObject_0();
        this.jfields_MultipassState();
        return this;
    }
}

