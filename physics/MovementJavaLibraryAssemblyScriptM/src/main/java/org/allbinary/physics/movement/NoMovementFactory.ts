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
// package org.allbinary.physics.movement

@global export class NoMovementFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.physics.movement.NoMovementFactory";
    }
    @lazy static jv_instance: NoMovementFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoMovementFactory | null {
        if (!NoMovementFactory.js_instance) {
            NoMovementFactory.js_instance = true;
            NoMovementFactory.jv_instance = new NoMovementFactory().jinit_NoMovementFactory_0();
        }
        return NoMovementFactory.jv_instance;
    }
    static set instance(value: NoMovementFactory | null) {
        NoMovementFactory.js_instance = true;
        NoMovementFactory.jv_instance = value;
    }
    movement: Movement | null = null;

    jfields_NoMovementFactory(): void {
    this.movement = new Movement().jinit_Movement_0();
    }

    jinit_NoMovementFactory_0(): NoMovementFactory {
        super.jinit_JObject_0();
        this.jfields_NoMovementFactory();
        return this;
    }
    

    static getInstance(): NoMovementFactory | null {
        return NoMovementFactory.instance;
    }
    

    getMovmentInstance(): Movement | null {
        return this.movement;
    }
}

