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
// package org.allbinary.graphics.form
// import org.allbinary.canvas.Processor
// import org.allbinary.game.input.PlayerGameInputCompositeInterface

@global export class FormPlayerGameInputProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.graphics.form.FormPlayerGameInputProcessor";
    }
    playerGameInputCompositeInterface: PlayerGameInputCompositeInterface | null = null;

    jfields_FormPlayerGameInputProcessor(): void {
    
    }
    

    jinit_FormPlayerGameInputProcessor_1(playerGameInputCompositeInterface: PlayerGameInputCompositeInterface | null): FormPlayerGameInputProcessor {
        super.jinit_Processor_0();
        this.jfields_FormPlayerGameInputProcessor();
        this.playerGameInputCompositeInterface = playerGameInputCompositeInterface;
        return this;
    }
    

    process(): void {
        this.playerGameInputCompositeInterface!.getPlayerGameInput()!.update(); if (JThrowable.pending !== null) return;
    }
}

