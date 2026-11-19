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
// package org.allbinary.game.input
// import org.allbinary.game.configuration.persistance.GamePersistanceStrings
// import org.allbinary.game.input.mapping.PersistentInputMapping
// import org.allbinary.input.motion.button.BasicTouchInputFactory
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.input.motion.gesture.TrackballMotionGestureFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class PCGameInputMapping extends PersistentInputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.PCGameInputMapping";
    }
    

    jinit_PCGameInputMapping_0(): PCGameInputMapping {
        super.jinit_PersistentInputMapping_1(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID);
        return this;
    }
    

    init(abeClientInformation: AbeClientInformationInterface | null): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        PCKeyFactory.getInstance(); if (JThrowable.pending !== null) return;
        TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) return;
        TrackballMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) return;
        BasicTouchInputFactory.getInstance(); if (JThrowable.pending !== null) return;
        super.init(abeClientInformation); if (JThrowable.pending !== null) return;
        if (this.getTotalMapped() == 0 || this.isDefaultNew()) {
            this.getInputMapping()!.addMapping(this.getDefault()); if (JThrowable.pending !== null) return;
            this.save(abeClientInformation); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isDelete(input: Input | null): bool {
        if (input == PCKeyFactory.getInstance()!.DEL) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isSystemInput(input: Input | null): bool {
        return false;
    }
}

