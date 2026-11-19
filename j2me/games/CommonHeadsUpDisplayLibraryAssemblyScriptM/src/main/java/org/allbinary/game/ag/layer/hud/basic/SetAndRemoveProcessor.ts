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
// package org.allbinary.game.ag.layer.hud.basic
// import org.allbinary.canvas.Processor

@global export class SetAndRemoveProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.SetAndRemoveProcessor";
    }
    updateMeasurementProcessor: PlayerGameNotificationHud | null = null;

    jfields_SetAndRemoveProcessor(): void {
    
    }
    

    jinit_SetAndRemoveProcessor_1(updateMeasurementProcessor: PlayerGameNotificationHud | null): SetAndRemoveProcessor {
        super.jinit_Processor_0();
        this.jfields_SetAndRemoveProcessor();
        this.updateMeasurementProcessor = updateMeasurementProcessor;
        return this;
    }
    

    process(): void {
        this.updateMeasurementProcessor!.setAndRemoveProcess(); if (JThrowable.pending !== null) return;
    }
}

