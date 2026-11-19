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
// package org.allbinary.game.score
// import org.allbinary.game.score.displayable.HighScoresCanvas

@global export class HighScoresCanvasChangeLevelInputProcessorFactory extends JObject implements HighScoresCanvasInputProcessorFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresCanvasChangeLevelInputProcessorFactory";
    }

    jinit_HighScoresCanvasChangeLevelInputProcessorFactory_0(): HighScoresCanvasChangeLevelInputProcessorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance1(highScoresCanvas: HighScoresCanvas | null): HighScoresCanvasInputProcessor | null {
        return new HighScoresCanvasLevelChangeInputProcessor().jinit_HighScoresCanvasLevelChangeInputProcessor_1(highScoresCanvas);
    }
}

