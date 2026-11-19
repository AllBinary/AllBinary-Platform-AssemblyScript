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
// package org.allbinary.game.combat.destroy.event
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.AllBinaryEventObjectFactoryInterface

@global export class DestroyEventFactory extends JObject implements AllBinaryEventObjectFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.combat.destroy.event.DestroyEventFactory";
    }
    combatGameCanvas: AllBinaryGameCanvas | null = null;

    jfields_DestroyEventFactory(): void {
    
    }
    

    jinit_DestroyEventFactory_1(combatGameCanvas: AllBinaryGameCanvas | null): DestroyEventFactory {
        super.jinit_JObject_0();
        this.jfields_DestroyEventFactory();
        this.combatGameCanvas = combatGameCanvas;
        return this;
    }
    

    getInstance(): AllBinaryEventObject | null {
        return new DestroyedEvent().jinit_DestroyedEvent_1(this.combatGameCanvas);
    }
}

