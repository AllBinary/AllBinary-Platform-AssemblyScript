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
// package org.allbinary.input.motion.button
// import org.allbinary.game.input.mapping.InputMappingInterface
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.paint.ProcessPaintable

@global export class TouchButtonsPaintableCompositeFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonsPaintableCompositeFactory";
    }

    jinit_TouchButtonsPaintableCompositeFactory_0(): TouchButtonsPaintableCompositeFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance2(inputMappingInterface: InputMappingInterface | null, basicColor: BasicColor | null): ProcessPaintable | null {
        return new ProcessPaintable().jinit_ProcessPaintable_0();
    }
}

