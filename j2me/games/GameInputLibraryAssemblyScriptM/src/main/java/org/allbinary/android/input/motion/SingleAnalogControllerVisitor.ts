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
// package org.allbinary.android.input.motion
// import org.allbinary.game.input.analog.AnalogLocationInput
// import org.allbinary.game.input.analog.AnalogLocationInputFactory
// import org.allbinary.layer.AllBinaryLayerManager

@global export class SingleAnalogControllerVisitor extends AnalogControllerVisitor {

    jclassName(): string {
        return "org.allbinary.android.input.motion.SingleAnalogControllerVisitor";
    }
    playerInputId: i32 = 0;

    jfields_SingleAnalogControllerVisitor(): void {
    
    }
    

    jinit_SingleAnalogControllerVisitor_1(playerInputId: i32): SingleAnalogControllerVisitor {
        super.jinit_AnalogControllerVisitor_0();
        this.jfields_SingleAnalogControllerVisitor();
        this.playerInputId = playerInputId;
        return this;
    }
    

    process(allbinaryLayerManager: AllBinaryLayerManager | null, analogLocationInputProcessor: AnalogLocationInputProcessor | null): void {
        let analogLocationInput: AnalogLocationInput | null = AnalogLocationInputFactory.getInstance()!.getInstanceForPlayer(this.playerInputId); if (JThrowable.pending !== null) return;
        analogLocationInputProcessor!.process(allbinaryLayerManager, analogLocationInput); if (JThrowable.pending !== null) return;
    }
}

