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
// import org.allbinary.util.BasicArrayList

@global export class AllAnalogControllerVisitor extends AnalogControllerVisitor {

    jclassName(): string {
        return "org.allbinary.android.input.motion.AllAnalogControllerVisitor";
    }

    jinit_AllAnalogControllerVisitor_0(): AllAnalogControllerVisitor {
        super.jinit_AnalogControllerVisitor_0();
        return this;
    }
    

    process(allbinaryLayerManager: AllBinaryLayerManager | null, analogLocationInputProcessor: AnalogLocationInputProcessor | null): void {
        let analogLocationInputList: BasicArrayList | null = AnalogLocationInputFactory.getInstance()!.getList(); if (JThrowable.pending !== null) return;
        let analogLocationInput: AnalogLocationInput | null = null;
        for (let index: i32 = analogLocationInputList!.size() - 1; index >= 0; index--) {
            analogLocationInput = changetype<AnalogLocationInput | null>(analogLocationInputList!.get(index)); if (JThrowable.pending !== null) return;
            analogLocationInputProcessor!.process(allbinaryLayerManager, analogLocationInput); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

