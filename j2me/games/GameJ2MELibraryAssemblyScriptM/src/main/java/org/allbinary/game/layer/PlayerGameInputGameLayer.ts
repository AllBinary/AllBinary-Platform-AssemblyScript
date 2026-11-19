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
// package org.allbinary.game.layer
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.input.PlayerGameInput
// import org.allbinary.game.input.PlayerGameInputCompositeInterface
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.view.StaticViewPosition

@global export class PlayerGameInputGameLayer extends AllBinaryGameLayer implements PlayerGameInputCompositeInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.PlayerGameInputGameLayer";
    }
    playerGameInput: PlayerGameInput | null = null;

    jfields_PlayerGameInputGameLayer(): void {
    
    }
    

    jinit_PlayerGameInputGameLayer_1(playerInputId: i32): PlayerGameInputGameLayer {
        super.jinit_AllBinaryGameLayer_3(StringUtil.getInstance()!.EMPTY_STRING, new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, 0, 0), new StaticViewPosition().jinit_StaticViewPosition_3(0, 0, 0));
        this.jfields_PlayerGameInputGameLayer();
        this.playerGameInput = new PlayerGameInput().jinit_PlayerGameInput_3(this.getGameKeyEventList(), new BasicArrayListD().jinit_BasicArrayListD_0(), playerInputId); if (JThrowable.pending !== null) return this;
        let canvasStrings: CanvasStrings | null = CanvasStrings.getInstance(); if (JThrowable.pending !== null) return this;
        this.logUtil!.putF("Danger Danger Danger: Should Not Be Called Except For Testing Input", this, canvasStrings!.PAINT); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getPlayerGameInput(): PlayerGameInput | null {
        return this.playerGameInput;
    }
    

    initInputProcessors(): void {
    }
    

    processInput(myManager: AllBinaryLayerManager | null): void {
    }
    

    paint(graphics: Graphics | null): void {
    }
}

