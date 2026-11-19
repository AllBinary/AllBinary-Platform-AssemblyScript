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
// package org.allbinary.game.physics.velocity

@global export class NoDragVelocityBehavior extends VelocityBehaviorBase {

    jclassName(): string {
        return "org.allbinary.game.physics.velocity.NoDragVelocityBehavior";
    }
    @lazy static jv_instance: NoDragVelocityBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoDragVelocityBehavior | null {
        if (!NoDragVelocityBehavior.js_instance) {
            NoDragVelocityBehavior.js_instance = true;
            NoDragVelocityBehavior.jv_instance = new NoDragVelocityBehavior().jinit_NoDragVelocityBehavior_0();
        }
        return NoDragVelocityBehavior.jv_instance;
    }
    static set instance(value: NoDragVelocityBehavior | null) {
        NoDragVelocityBehavior.js_instance = true;
        NoDragVelocityBehavior.jv_instance = value;
    }

    jinit_NoDragVelocityBehavior_0(): NoDragVelocityBehavior {
        super.jinit_VelocityBehaviorBase_0();
        return this;
    }
}

