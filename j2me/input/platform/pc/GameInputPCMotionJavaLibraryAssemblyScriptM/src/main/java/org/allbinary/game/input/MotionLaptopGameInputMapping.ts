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
// import org.allbinary.game.input.mapping.InputToGameKeyMapping

@global export class MotionLaptopGameInputMapping extends PCGameInputMapping {

    jclassName(): string {
        return "org.allbinary.game.input.MotionLaptopGameInputMapping";
    }

    jinit_MotionLaptopGameInputMapping_0(): MotionLaptopGameInputMapping {
        super.jinit_PCGameInputMapping_0();
        return this;
    }
    

    getDefault(): InputToGameKeyMapping | null {
        return new MotionLaptopDefaultGameInputMapping().jinit_MotionLaptopDefaultGameInputMapping_0()!.getInputMapping();
    }
}

