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

@global export class NextUnremoveableProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.NextUnremoveableProcessor";
    }
    updateMeasurementProcessor: PlayerGameNotificationHud | null = null;

    jfields_NextUnremoveableProcessor(): void {
    
    }
    

    jinit_NextUnremoveableProcessor_1(updateMeasurementProcessor: PlayerGameNotificationHud | null): NextUnremoveableProcessor {
        super.jinit_Processor_0();
        this.jfields_NextUnremoveableProcessor();
        this.updateMeasurementProcessor = updateMeasurementProcessor;
        return this;
    }
    

    process(): void {
        this.updateMeasurementProcessor!.setNextUnremoveableProcess(); if (JThrowable.pending !== null) return;
    }
}

