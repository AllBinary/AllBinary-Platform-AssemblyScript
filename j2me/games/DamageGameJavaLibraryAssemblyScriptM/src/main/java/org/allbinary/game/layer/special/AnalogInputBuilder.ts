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
// package org.allbinary.game.layer.special
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.input.GameInputProcessor

@global export class AnalogInputBuilder extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.special.AnalogInputBuilder";
    }
    @lazy static jv_instance: AnalogInputBuilder | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AnalogInputBuilder | null {
        if (!AnalogInputBuilder.js_instance) {
            AnalogInputBuilder.js_instance = true;
            AnalogInputBuilder.jv_instance = new AnalogInputBuilder().jinit_AnalogInputBuilder_0();
        }
        return AnalogInputBuilder.jv_instance;
    }
    static set instance(value: AnalogInputBuilder | null) {
        AnalogInputBuilder.js_instance = true;
        AnalogInputBuilder.jv_instance = value;
    }

    jinit_AnalogInputBuilder_0(): AnalogInputBuilder {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AnalogInputBuilder | null {
        return AnalogInputBuilder.instance;
    }
    

    disable(inputProcessorArray: StaticArray<GameInputProcessor | null> | null, collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null): void {
        inputProcessorArray![Canvas.UP] = new SpecialUpGameInputProcessor().jinit_SpecialUpGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.DOWN] = new SpecialDownGameInputProcessor().jinit_SpecialDownGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.RIGHT] = new SpecialRightGameInputProcessor().jinit_SpecialRightGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.LEFT] = new SpecialLeftGameInputProcessor().jinit_SpecialLeftGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.KEY_NUM0] = new Special1GameInputProcessor().jinit_Special1GameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.KEY_NUM5] = new Special3GameInputProcessor().jinit_Special3GameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
    }
    

    enable(inputProcessorArray: StaticArray<GameInputProcessor | null> | null, collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null): void {
        inputProcessorArray![Canvas.UP] = new SpecialAnalogUpGameInputProcessor().jinit_SpecialAnalogUpGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.DOWN] = new SpecialAnalogDownGameInputProcessor().jinit_SpecialAnalogDownGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.RIGHT] = new SpecialAnalogRightGameInputProcessor().jinit_SpecialAnalogRightGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.LEFT] = new SpecialAnalogLeftGameInputProcessor().jinit_SpecialAnalogLeftGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.KEY_NUM0] = new SpecialAnalogLeftTriggerGameInputProcessor().jinit_SpecialAnalogLeftTriggerGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
        inputProcessorArray![Canvas.KEY_NUM5] = new SpecialAnalogRightTriggerGameInputProcessor().jinit_SpecialAnalogRightTriggerGameInputProcessor_1(collidableDestroyableDamageableLayer); if (JThrowable.pending !== null) return;
    }
}

