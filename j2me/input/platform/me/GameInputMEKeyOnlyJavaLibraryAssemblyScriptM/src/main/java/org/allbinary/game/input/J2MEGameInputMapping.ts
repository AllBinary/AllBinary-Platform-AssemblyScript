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
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class J2MEGameInputMapping extends PersistentInputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.J2MEGameInputMapping";
    }
    

    jinit_J2MEGameInputMapping_0(): J2MEGameInputMapping {
        super.jinit_PersistentInputMapping_1(GamePersistanceStrings.getInstance()!.SAVED_INPUT_CONFIGURATION_RECORD_ID);
        return this;
    }
    

    init(abeClientInformation: AbeClientInformationInterface | null): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        J2MEKeyFactory.getInstance()!.init(); if (JThrowable.pending !== null) return;
        super.init(abeClientInformation); if (JThrowable.pending !== null) return;
        if (this.getTotalMapped() == 0 || this.isDefaultNew()) {
            this.getInputMapping()!.addMapping(this.getDefault()); if (JThrowable.pending !== null) return;
            this.save(abeClientInformation); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isDelete(input: Input | null): bool {
        if (input == GameKeyFactory.getInstance()!.GAME_D) {
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

