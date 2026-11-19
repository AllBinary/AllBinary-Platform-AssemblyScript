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
// package org.allbinary.game.physics.acceleration

@global export class BasicAccelerationProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.game.physics.acceleration.BasicAccelerationProperties";
    }
    forward: i32 = 0;
    reverse: i32 = 0;

    jfields_BasicAccelerationProperties(): void {
    this.forward = 0;
    this.reverse = 0;
    }
    

    jinit_BasicAccelerationProperties_2(forward: i32, reverse: i32): BasicAccelerationProperties {
        super.jinit_JObject_0();
        this.jfields_BasicAccelerationProperties();
        this.setForward(forward); if (JThrowable.pending !== null) return this;
        this.setReverse(reverse); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setReverse(reverse: i32): void {
        this.reverse = reverse;
    }
    

    getReverse(): i32 {
        return this.reverse;
    }
    

    setForward(forward: i32): void {
        this.forward = forward;
    }
    

    getForward(): i32 {
        return this.forward;
    }
}

